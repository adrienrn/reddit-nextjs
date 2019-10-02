const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant for HMR.
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 150,
    };

    return config;
  },
});
