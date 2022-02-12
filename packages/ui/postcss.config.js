const postcssAtImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssMediaHover = require('postcss-hover-media-feature');

module.exports = {
  plugins: [
    postcssAtImport(),
    postcssNested(),
    postcssMediaHover,
    postcssPresetEnv({
      importFrom: './src/styles/custom-medias.css',
      features: {
        'custom-media-queries': true,
        'focus-visible-pseudo-class': true
      }
    })
  ]
};
