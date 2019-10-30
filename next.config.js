const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/technology': { page: '/technology' },
    '/company': { page: '/company' },
    '/token': { page: '/token' },
    '/community': { page: '/community' },
    '/demo': { page: '/demo' },
    '/privacy': { page: '/privacy' },
    '/preview': { page: '/preview', query: { q: '' } },
    '/tron-dapp': { page: '/tron-dapp' },
    '/edge': { page: '/edge', query: { sn: '' } },
  }),
  webpack(config) {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        GRAPHQL_URI: process.env.GRAPHQL_URI || 'http://localhost:4000/graphql',
        FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '',
        CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS | '',
      }),
    );
    return config;
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  },
});
