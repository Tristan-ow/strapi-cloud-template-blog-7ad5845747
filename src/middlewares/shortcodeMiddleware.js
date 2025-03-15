"use strict";


module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        await next(); // Wait for Strapi to process the request

        const shortcodeService = require("../services/shortcodeService");

        if (ctx.body) {
            ctx.body = await shortcodeService(ctx.body); // Modify the response
        }
    };
};
