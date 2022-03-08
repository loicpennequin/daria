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
      features: {
        'focus-visible-pseudo-class': true
      }
    })
  ]
};
