'use strict';

/**
 * wiki-artikel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wiki-artikel.wiki-artikel');
