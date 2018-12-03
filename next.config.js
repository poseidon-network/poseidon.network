const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/demo': { page: '/demo' },
  }),
});
