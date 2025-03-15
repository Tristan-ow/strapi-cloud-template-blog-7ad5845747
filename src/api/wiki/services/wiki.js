'use strict';

/**
 * wiki service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wiki.wiki');
