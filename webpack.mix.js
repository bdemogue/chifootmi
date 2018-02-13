const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const packageFile = require('./package.json');
const isFront = process.env.FRONT;
const publicPath = './assets/';

const destination = {
    fonts: `${publicPath}styles/fonts`,
    images: `${publicPath}styles/images`,
    js: `${publicPath}scripts`,
    css: `${publicPath}styles`,
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.webpackConfig({
    devtool: 'source-map',
    plugins: [
        new LiveReloadPlugin(),
        // new BundleAnalyzerPlugin()
    ]
})
    .setPublicPath(publicPath)    
    .js('_src/scripts/app.js', destination.js)
    .sass('_src/sass/styles.scss', destination.css)
    .options({processCssUrls: false, purifyCss: false})
    .version()
    .sourceMaps()

