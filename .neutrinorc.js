
module.exports = {
  use: [
    ['@neutrinojs/react', {
      html: {
        title: 'Startup'
      }
    }],
    ['@neutrinojs/style-loader', {
      style: {},
      css: {},
      test: /\.(css|sass|scss)$/,
      moduleTest: /\.module\.(css|sass|scss)$/,
      loaders: [
        // Note: loaders must be specified in reverse order.
        // input -> sass-loader -> css-loader -> style-loader -> style-loader/mini-css-extract-plugin
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        },
        {
          loader: 'sass-loader',
          useId: 'sass',
        }
      ],
      // Override the default file extension of `.css` if needed
      ruleId: 'style',
      styleUseId: 'style',
      cssUseId: 'css',
      hotUseId: 'hot',
      hot: true,
      modules: true,
      modulesSuffix: '-modules',
      modulesTest: /\.module.css$/,
      extractId: 'extract',
      extract: {
        plugin: {},
        loader: []
      }
    }],
    ['@neutrinojs/airbnb-base', {
      eslint: {
        extends: ['airbnb', 'standard'],
        parser: 'babel-eslint',
        rules: {
          'arrow-body-style': 0,
          'babel/new-cap': false,
          'class-methods-use-this': 0,
          'id-length': 0,
          'indent': [1, 2],
          'linebreak-style': 0,
          'max-len': 0,
          'no-console': 0,
          'no-undef': 0,
          'no-unused-vars': [0, { 'vars': 'local', 'args': 'none' }],
          'object-curly-newline': 0,
          'object-shorthand': 0,
          'space-before-function-paren': 0,
        }
      }
    }],
    // custom config here (undefined)
    (neutrino) => {}
  ]
};