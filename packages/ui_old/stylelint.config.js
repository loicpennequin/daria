module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [
      'always',
      {
        ignoreAtRules: ['custom']
      }
    ]
  }
};
