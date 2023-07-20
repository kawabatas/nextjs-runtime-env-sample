/**
 * @type {import('next').NextConfig}
 */
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');
configureRuntimeEnv();

module.exports = {
  env: {
    BAR: process.env.BAR,
  },
  serverRuntimeConfig: {
    BAR: process.env.BAR,
  },
  publicRuntimeConfig: {
    BAR: process.env.BAR,
  },
};
