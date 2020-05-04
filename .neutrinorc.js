const airbnb = require('@neutrinojs/airbnb');
const compileLoader = require('@neutrinojs/compile-loader');
const htmlTemplate = require('@neutrinojs/html-template');
const react = require('@neutrinojs/react');

const path = require('path');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          env: {
            'es6': true,
            'browser': true,
          },
          extends: [
            'eslint:recommended',
            'plugin:react/recommended',
          ],
          parser: 'babel-eslint',
          parserOptions: {
            ecmaFeatures: {
              legacyDecorators: true
            }
          },
          rules: {
            'arrow-body-style': 0,
            'arrow-parens': 0,
            'babel/new-cap': 0,
            'babel/semi': 0,
            'class-methods-use-this': 0,
            'dot-notation': 0,
            'id-length': 0,
            'import/no-named-as-default-member': 0,
            'import/no-useless-path-segments': 0,
            'import/prefer-default-export': 0,
            'indent': [1, 2],
            'jsx-a11y/anchor-is-valid': 0,
            'jsx-a11y/mouse-events-have-key-events': 0,
            'linebreak-style': 0,
            'max-len': 0,
            'no-console': 0,
            'no-mixed-operators': 0,
            'no-multi-assign': 0,
            'no-nested-ternary': 0,
            'no-restricted-globals': 0,
            'no-restricted-syntax': 0,
            'no-undef': 0,
            'no-underscore-dangle': 0,
            'object-curly-newline': 0,
            'object-shorthand': 0,
            'operator-linebreak': 0,
            'prefer-destructuring': 0,
            'quote-props': 0,
            'react/destructuring-assignment': 0,
            'react/display-name': 0,
            'react/jsx-closing-bracket-location': 0,
            'react/jsx-curly-newline': 0,
            'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
            'react/jsx-fragments': 0,
            'react/jsx-no-undef': 1,
            'react/jsx-one-expression-per-line': 0,
            'react/jsx-props-no-spreading': 0,
            'react/jsx-uses-react': 1,
            'react/jsx-wrap-multilines': 0,
            'react/no-find-dom-node': 0,
            'react/prop-types': 0,
            'react/react-in-jsx-scope': 0,
            'react/sort-comp': 0,
            'react/state-in-constructor': 0,
            'react/static-property-placement': 0,
            'sort-keys': 0,
            'space-before-function-paren': 0,
          },
        },
      },
    }),
    react({
      // Target specific browsers with @babel/preset-env
      targets: {
        browsers: ['last 1 Chrome versions', 'last 1 Firefox versions'],
      },

      // Example: disable Hot Module Replacement
      hot: false,

      // Example: disable image-loader, style-loader, font-loader
      image: true,

      // Disable javascript minification entirely
      minify: {
        source: true,
      },

      // Disable cleaning the output build directory
      clean: false,
    }),
    compileLoader({
      ruleId: 'babel-loader',
      babel: {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        presets: [
          [
            "@babel/preset-env", {
              "useBuiltIns" : "entry"
            },
          ],
          ["@babel/preset-flow"],
          ["@babel/preset-react"]
        ],
        plugins: [
          "@babel/proposal-class-properties",
          "@babel/proposal-object-rest-spread",
          "@babel/plugin-transform-runtime",
        ],
      },
    }),
    htmlTemplate({
      title: 'Clinica Aqua..',
    }),
  ],
};
