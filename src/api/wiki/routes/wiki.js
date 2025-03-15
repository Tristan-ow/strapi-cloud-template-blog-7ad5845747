'use strict';

/**
 * wiki router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wiki.wiki');
