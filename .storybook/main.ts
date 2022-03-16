const path = require('path');
const svgLoader = require('vite-svg-loader');
const getPackageAliases = require('../scripts/getPackageAliases');

module.exports = {
  stories: ['../packages/**/src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false
      }
    }
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal(config, { configType }) {
    config.plugins.push(svgLoader());
    Object.assign(config.resolve.alias, getPackageAliases());
    return config;
  }
};
