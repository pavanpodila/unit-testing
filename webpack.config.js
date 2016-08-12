var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        stats: 'minimal'
    },

    entry: {
        main: path.resolve('src', 'main.js')
    },
    output: {
        path: path.resolve('build'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html'),
            inject: 'body'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-1'
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-runtime'
                    ]
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'url?limit=25000'
            }
        ]
    },


};
