'use strict';

/**
 * giro service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::giro.giro');
