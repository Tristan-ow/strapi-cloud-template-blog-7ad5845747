// src/api/landingpage/controllers/landingpage.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landingpage.landingpage', ({ strapi }) => ({
    async find(ctx) {
        const landingpages = await strapi.entityService.findMany('api::landingpage.landingpage', {
            populate: {
                Hero: { populate: '*' },
                FAQSection: { populate: '*' },
                Seo: { populate: '*' },
            },
            filters: ctx.query.filters || {}, // Filter übernehmen
        });

        const enhancedData = await Promise.all(
            landingpages.map(async (entry) => {
                const content = entry.Content || [];
                return {
                    ...entry,
                    Content: content,
                };
            })
        );

        return { data: enhancedData };
    },
}));
