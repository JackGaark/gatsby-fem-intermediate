const withDefaults = require('./utils/default-options');

module.exports = options => {
  const { contentPath, useExternalMDX } = withDefaults(options);

  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'gatsby-theme-docs',
          path: contentPath,
        },
      },
      !useExternalMDX && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
<<<<<<< HEAD
            default: require.resolve('./src/components/layout.js'),
=======
            default: require.resolve('./src/components/layout.js')
>>>>>>> ae614b9f5fd39d703cd27c09f613b7d833429722
          },
        },
      },
      'gatsby-plugin-theme-ui',
    ].filter(Boolean),
  };
};
