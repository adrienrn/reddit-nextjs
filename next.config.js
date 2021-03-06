const path = require('path');
const withCSS = require('@zeit/next-css');
const dotenv = require('dotenv').config();

module.exports = withCSS({
  cssModules: true,
  publicRuntimeConfig: {
    redditApiUrl: process.env.REDDIT_API_URL,
  },
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['providers']  = path.join(__dirname, 'providers');
    config.resolve.alias['state']      = path.join(__dirname, 'state');

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
