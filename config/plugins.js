module.exports = ({ env }) => ({
 transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        post: {
          field: 'slug',
          references: 'title',
        },
        category: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});
