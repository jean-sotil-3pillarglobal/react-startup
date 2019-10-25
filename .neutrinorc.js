module.exports = {
  use: [
    [
      '@neutrinojs/react',
      {
        minify: {
          babel: true,
        },
        // Add additional Babel plugins, presets, or env options
        babel: {
          // Override options for babel-preset-env:
          presets: [
            ['babel-preset-env', {
              modules: false,
              useBuiltIns: true,
              exclude: ['transform-regenerator', 'transform-async-to-generator'],
            }]
          ]
        }
      }
    ],
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          env: {
            'es6': true,
            'browser': true,
          },
          extends: [
            'eslint:recommended',
            'plugin:react/recommended',
          ],
          parser: 'babel-eslint',
          "parserOptions": {
              "ecmaFeatures": {
                  "experimentalObjectRestSpread": true,
                  "jsx": true
              },
              "sourceType": "module"
          },
          plugins: ['react'],
          rules: {
            'arrow-body-style': 0,
            'babel/new-cap': false,
            'class-methods-use-this': 0,
            'dot-notation': 0,
            'id-length': 0,
            'import/no-named-as-default-member': 0,
            'import/prefer-default-export': 0,
            'indent': [1, 2],
            'jsx-a11y/mouse-events-have-key-events': 0,
            'linebreak-style': 0,
            'max-len': 0,
            'no-console': 0,
            'no-multi-assign': 0,
            'no-nested-ternary': 0,
            'no-restricted-syntax': 0,
            'no-undef': 0,
            'object-curly-newline': 0,
            'object-shorthand': 0,
            'quote-props': 0,
            'react/jsx-closing-bracket-location': 0,
            'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
            'react/jsx-no-undef': 1,
            'react/jsx-uses-react': 1,
            'react/prop-types': [1, {'ignore': ['children']} ],
            'sort-keys': 1,
            'space-before-function-paren': 0,
          }
        }
      }
    ],
    [
      '@neutrinojs/html-template',
      {
        title: 'Clinica Aqua',
        inject: false,
        appMountId: 'root',
        xhtml: true,
        mobile: true,
        minify: {
          useShortDoctype: true,
          keepClosingSlash: true,
          collapseWhitespace: true,
          preserveLineBreaks: true,
        },
        pluginId: 'html',
        headHtmlSnippet: `
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        `,
      }
    ],
    [
      '@neutrinojs/image-minify',
      {
        imagemin: {},
        plugin: {
          name: '[path][name].[ext]',
          test: /\.(png|jpg|jpeg|gif|webp)$/
        },
        rules: ['svg', 'img'],
        pluginId: 'imagemin'
      }
    ],
    // custom config here (undefined)
    (neutrino) => {
      neutrino.config
        // entry points
        .entry('index')
          .add('./src/index.jsx')
          .end()

        // output settings
        .output
          .publicPath('/');
    }
  ]
};
