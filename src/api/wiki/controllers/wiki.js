'use strict';

/**
 * wiki controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wiki.wiki');
