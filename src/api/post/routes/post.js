'use strict';

/**
 * post router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// Modify these to match your Content-type
const uid = 'api::post.post';
const field = 'user';
// Only modify these if the middleware or policy name is different
const SetOwner = {
    name: 'global::SetOwner',
    config: {
        field,
        uid,
    },
};
const IsOwner = {
    name: 'global::IsOwner',
    config: {
        field,
        uid,
    },
};

module.exports = createCoreRouter(uid, {
  config: {
    create: {
      middlewares: [SetOwner],
    },
    find: {
      policies: [IsOwner],
    },
    findOne: {
      policies: [IsOwner],
    },
    delete: {
      policies: [IsOwner],
    },
    update: {
      policies: [IsOwner],
      middlewares: [SetOwner],
    },
  },
});
