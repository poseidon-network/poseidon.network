const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/demo': { page: '/demo' },
  }),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({
      IPFS_HOST: process.env.IPFS_HOST,
    }));
    return config;
  },
});
