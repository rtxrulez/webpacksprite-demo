var SvgStore = require('webpack-svgstore-plugin');
var path = require('path');
var sourcePath = path.join('App');
var distPath = path.join('wwwroot');

module.exports = {
    entry: {
        app: './App/app.js'
    },

    output: {
        path: './wwwroot/',
        filename: '/js/bundle.js'
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.(png|jpg|svg|ttf|eot|otf|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    plugins: [new SvgStore({
            // svgo options
            svgoOptions: {
                plugins: [
                    {
                        removeTitle: true
                    }
                ]
            },
            prefix: 'icon-'
        })],
    stats: {
        colors: true
    },
    devtool: 'source-map',

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    }
};
