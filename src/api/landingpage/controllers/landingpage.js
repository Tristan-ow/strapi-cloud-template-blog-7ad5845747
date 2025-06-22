// src/api/landingpage/controllers/landingpage.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landingpage.landingpage', ({ strapi }) => ({
    async find(ctx) {
        const landingpages = await strapi.entityService.findMany('api::landingpage.landingpage', {
            populate: {
                Content: { populate: '*' },
                Hero: { populate: '*' },
                Seo: { populate: '*' },
            },
            filters: ctx.query.filters || {}, // Filter übernehmen
        });

        const enhancedData = await Promise.all(
            landingpages.map(async (entry) => {
                const content = entry.Content || [];

                const updatedContent = await Promise.all(
                    content.map(async (component) => {
                        if (
                            component.__component === 'shared.faq' &&
                            component.partial_faq?.id
                        ) {
                            const relatedFaq = await strapi.entityService.findOne(
                                'api::partial-faq.partial-faq', // ggf. anpassen
                                component.partial_faq.id,
                                { populate: '*' }
                            );

                            return {
                                ...component,
                                partial_faq: relatedFaq,
                            };
                        }

                        return component;
                    })
                );

                return {
                    ...entry,
                    Content: updatedContent,
                };
            })
        );

        return { data: enhancedData };
    },
}));
