"use strict";

// Import helper functions
const { handleSlugUpdatesBeforeSave, handleSlugUpdatesAfterSave, handleBeforePublish, buildFullUrl,  } = require("../../helpers/urlHelper");

module.exports = {
    /**
     * Lifecycle Hook: beforeCreate
     * - Ensures `fullUrl` is set correctly before saving.
     */
    async beforeCreate(event) {
        const { data } = event.params;
        if (!data.slug) return;

        data.fullUrl = await buildFullUrl(data, strapi);
    },

    /**
     * Lifecycle Hook: beforeUpdate
     * - Ensures `fullUrl` is recalculated if the entity or its parent changes.
     */
    async beforeUpdate(event) {
        await handleSlugUpdatesBeforeSave(event, strapi);
    },

    /**
     * Lifecycle Hook: afterCreate
     * - Detects if an entity is published (publishedAt is set).
     * - If published, copies `slug` from the last draft version.
     */
    async afterCreate(event) {
        const { result } = event;
        if (!result?.id || !result.publishedAt) return; // Only handle publishing

        console.log(`🚀 [afterCreate] Entity ${result.id} was published, searching for the last draft version...`);

        // Find the last draft version (same `documentId` but `publishedAt` is NULL)
        const lastDraft = await strapi.entityService.findMany("api::global.global", {
            filters: {
                documentId: result.documentId,
                publishedAt: { $null: true }, // Ensure it's a draft
            },
            sort: { updatedAt: "desc" }, // Get the latest draft
            limit: 1,
        });

        if (lastDraft.length === 0) {
            console.log(`❌ [afterCreate] No draft found for documentId: ${result.documentId}`);
            return;
        }

        const draftEntity = lastDraft[0];

        console.log(`✅ [afterCreate] Found draft (ID: ${draftEntity.id}), copying slug: ${draftEntity.slug}`);

        // Update the newly published entity with the draft's slug
        await strapi.db.query("api::global.global").update({
            where: { id: result.id },
            data: { slug: draftEntity.slug },
        });

        console.log(`🔗 [afterCreate] Slug copied successfully, updating fullUrl...`);

        // Update the full URL with the correct slug
        const latestEntity = await strapi.entityService.findOne(
            "api::global.global",
            result.id,
            { populate: { parent: true } }
        );

        if (latestEntity) {
            const newUrl = await buildFullUrl(latestEntity, strapi);

            await strapi.db.query("api::global.global").update({
                where: { id: result.id },
                data: { fullUrl: newUrl },
            });

            console.log(`✅ [afterCreate] Full URL updated: ${newUrl}`);
        }
    },




};
