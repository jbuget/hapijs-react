/*
 * ----------
 * Configuration inspired by http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
 * ----------
 */

var Webpack = require('webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public/build');
var mainPath = path.resolve(__dirname, 'public/js/main.js');


var config = {

    // Makes sure errors in console map to the correct file and line number
    devtool: 'eval',
    entry: {
        app: mainPath,
        vendor: ['jquery', 'bootstrap-loader']
    },
    output: {

        // We need to give Webpack a path. It does not actually need it,
        // because files are kept in memory in webpack-dev-server, but an
        // error will occur if nothing is specified. We use the buildPath
        // as that points to where the files will eventually be bundled
        // in production
        path: buildPath,
        filename: 'app.bundle.js',

        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/build/'
    },
    module: {

        loaders: [
            // Babel transpilation for JS and JSX files
            { test: /\.js?$/, loader: 'babel', exclude: [nodeModulesPath] },

            // For managing CSS and small images resources
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },

            // Fonts
             { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url" },
             { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file' }

        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),

        // jQuery is required by Bootstrap, see https://webpack.github.io/docs/list-of-plugins.html
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

module.exports = config;