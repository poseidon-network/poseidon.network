const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/demo': { page: '/demo' },
    '/preview': { page: '/preview', query: { q: '' } },
    '/tron-dapp': { page: '/tron-dapp' },
  }),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({
      GRAPHQL_URI: process.env.GRAPHQL_URI || 'http://localhost:4000/graphql',
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    }));
    return config;
  },
});
