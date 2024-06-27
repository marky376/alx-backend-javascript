module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    airbnb-base,
    plugin:jest/recommended
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: module
  },
  rules: {}
} > .eslintrc

