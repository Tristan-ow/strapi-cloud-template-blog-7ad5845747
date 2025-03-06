'use strict';

/**
 * link-replacement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::link-replacement.link-replacement');
