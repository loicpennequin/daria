const path = require('path');
const svgLoader = require('vite-svg-loader');

module.exports = {
  stories: ['../packages/**/src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal(config, { configType }) {
    config.plugins.push(svgLoader());
    return config;
  }
};
