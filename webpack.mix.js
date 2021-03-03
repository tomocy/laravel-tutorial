const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/,
        },
      ],
    },
  });
}

mix
  .js('resources/js/app.js', 'public/js')
  .vue()
  .extract(['vue', 'vuex', 'axios', 'lodash'])
  .postCss('resources/css/app.css', 'public/css', ['tailwindcss']);
