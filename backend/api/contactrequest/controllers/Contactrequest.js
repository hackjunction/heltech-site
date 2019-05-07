'use strict';

/**
 * Contactrequest.js controller
 *
 * @description: A set of functions called "actions" for managing `Contactrequest`.
 */

module.exports = {

  /**
   * Retrieve contactrequest records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.contactrequest.search(ctx.query);
    } else {
      return strapi.services.contactrequest.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a contactrequest record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contactrequest.fetch(ctx.params);
  },

  /**
   * Count contactrequest records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contactrequest.count(ctx.query);
  },

  /**
   * Create a/an contactrequest record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contactrequest.add(ctx.request.body);
  },

  /**
   * Update a/an contactrequest record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contactrequest.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contactrequest record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contactrequest.remove(ctx.params);
  }
};
