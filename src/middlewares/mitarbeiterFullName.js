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
    if (!entity) return;

    if (Array.isArray(entity)) {
        // If it's an array, process each item
        entity.forEach(item => addFullNameRecursively(item));
    } else if (typeof entity === "object") {
        // If it's an object, check if it's a mitarbeiter and add `fullName`
        if (entity.Vorname && entity.Nachname) {
            entity.fullName = `${entity.Vorname} ${entity.Nachname}`;
        }

        // Process any nested relations recursively
        for (const key in entity) {
            if (typeof entity[key] === "object" && entity[key] !== null) {
                addFullNameRecursively(entity[key]);
            }
        }
    }
}
