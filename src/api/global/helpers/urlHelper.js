"use strict";

const BASE_URL = ""; // Change this to your production domain

/**
 * Builds the full URL for a given entity by traversing its parent hierarchy.
 */
const buildFullUrl = async (entity, strapi) => {
    if (!entity) return null;

    let slugPath = entity.slug;
    let parent = entity.parent;

    // Recursively fetch parent slugs to construct the full path
    while (parent && parent.id) {
        const parentEntity = await strapi.entityService.findOne(
            "api::global.global",
            parent.id,
            { fields: ["slug"], populate: { parent: true } }
        );

        if (!parentEntity) break;

        slugPath = `${parentEntity.slug}/${slugPath}`;
        parent = parentEntity.parent || null;

        // Prevent self-referencing loop
        if (parent && parent.id === parentEntity.id) break;
    }

    return `${BASE_URL}/${slugPath}/`; // Ensure trailing slash
};

/**
 * Updates full URLs for all direct children, ensuring the latest parent slug is used.
 */
const updateChildrenUrls = async (parentId, strapi) => {
    if (!parentId) return;

    // Fetch all direct children
    const children = await strapi.entityService.findMany(
        "api::global.global",
        { filters: { parent: parentId }, populate: { parent: true } }
    );

    if (!children || children.length === 0) return;

    for (const child of children) {
        const latestChild = await strapi.entityService.findOne(
            "api::global.global",
            child.id,
            { populate: { parent: true } }
        );

        const updatedUrl = await buildFullUrl(latestChild, strapi);

        // Prevent unnecessary updates to avoid infinite loops
        if (updatedUrl && updatedUrl !== child.fullUrl) {
            await strapi.db.query("api::global.global").update({
                where: { id: child.id },
                data: { fullUrl: updatedUrl },
            });

            // Recursively update deeper children
            await updateChildrenUrls(child.id, strapi);
        } else {
            console.log(`🚫 Skipping update for child ${child.id}, no change in fullUrl.`);
        }
    }
};

/**
 * Handles updating the full URL before saving an entity.
 */
const handleBeforeSave = async (event, strapi) => {
    const { where, data } = event.params;
    if (!where?.id) return;

    // Fetch the latest entity before applying updates
    const existingEntity = await strapi.entityService.findOne(
        "api::global.global",
        where.id,
        { populate: { parent: { fields: ["slug"], populate: { parent: { fields: ["slug"] } } } } }
    );

    if (!existingEntity) return;

    // Merge old and new data to ensure latest values are used
    const mergedEntity = { ...existingEntity, ...data };

    // Compute and assign the new full URL
    data.fullUrl = await buildFullUrl(mergedEntity, strapi);
};

/**
 * Handles updating child full URLs after an entity update.
 */
const handleAfterUpdate = async (event, strapi) => {
    const { result } = event;
    if (!result?.id) return;

    // Step 1: Update all children of this entity
    await updateChildrenUrls(result.id, strapi);

    // Step 2: Ensure the entity itself has the correct `fullUrl` in case its slug changed
    const latestEntity = await strapi.entityService.findOne(
        "api::global.global",
        result.id,
        { populate: { parent: true } }
    );

    if (latestEntity) {
        const newUrl = await buildFullUrl(latestEntity, strapi);

        // Prevent unnecessary updates
        if (newUrl !== result.fullUrl) {
            await strapi.db.query("api::global.global").update({
                where: { id: result.id },
                data: { fullUrl: newUrl },
            });
        }
    }
};


// Export the helper functions to be used in lifecycle hooks
module.exports = {
    buildFullUrl,
    updateChildrenUrls,
    handleSlugUpdatesBeforeSave: handleBeforeSave,
    handleSlugUpdatesAfterSave: handleAfterUpdate,
};
