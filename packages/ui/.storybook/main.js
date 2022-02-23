const path = require('path');
const svgLoader = require('vite-svg-loader');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.resolve.alias['@'] = path.join(__dirname, '../src');
    config.plugins.push(svgLoader());
    // return the customized config
    return config;
  }
};
