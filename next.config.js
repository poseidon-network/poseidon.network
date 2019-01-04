const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/demo': { page: '/demo' },
    '/preview': { page: '/preview', query: { q: '' } },
    '/torn-dapp': { page: '/tron-dapp' },
  }),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({
      GRAPHQL_URI: process.env.GRAPHQL_URI || 'http://localhost:4000/graphql',
    }));
    return config;
  },
});
