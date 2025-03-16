module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        await next(); // Proceed with the request

        if (ctx.body) {
            addFullNameRecursively(ctx.body);
        }
    };
};

/**
 * Recursively adds `fullName` wherever `mitarbeiter` appears.
 */
function addFullNameRecursively(entity) {
    if (!entity || typeof entity !== "object") return; // Prevent null, undefined, and non-objects

    if (Array.isArray(entity)) {
        // If entity is an array, process each item
        entity.forEach(item => addFullNameRecursively(item));
    } else {
        // If it's an object, check if it has 'Vorname' and 'Nachname'
        if (entity.Vorname && entity.Nachname) {
            entity.fullName = `${entity.Vorname} ${entity.Nachname}`;
        }

        // Iterate over each key in the object
        /*Object.keys(entity).forEach(key => {
            const value = entity[key];

            // Ensure value is an object or array before recursion
            if (value && typeof value === "object") {
                addFullNameRecursively(value);
            }
        });*/
    }
}
