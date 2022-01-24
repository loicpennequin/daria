const postcssAtImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postCssApply = require('postcss-apply');

module.exports = {
  plugins: [
    postcssAtImport(),
    postcssNested(),
    postcssPresetEnv({
      importFrom: './src/styles/custom-medias.css',
      features: {
        'custom-media-queries': true,
        'focus-visible-pseudo-class': true
      }
    })
  ]
};
