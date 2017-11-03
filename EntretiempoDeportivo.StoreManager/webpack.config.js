'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

module.exports = function (env) {

    //var isProd = env.NODE_ENV === 'production';
    const CSS_LOADER_CONFIG = [
        {
            loader: 'css-loader'
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            },
        }
    ];

    var config = {
        entry: {
            'site': [
                './Scripts/site.js',
                './Content/site.scss'
            ],
            'vendor': [
                './Scripts/vendor.js',
                './Content/vendor.scss'
            ],
            'jquery.validation': './Scripts/jquery.validation.js'
        },

        resolve: {
            extensions: ['.js']
        },

        devtool: 'inline-source-map',

        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'wwwroot/js')
        },

        plugins: [
            new CleanWebpackPlugin([path.resolve(__dirname, 'wwwroot/*')]),
            new webpack.optimize.CommonsChunkPlugin({
                names: ["site", "vendor"],
                minChunks: Infinity
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
            new ExtractTextPlugin('../css/[name].css')
        ],

        module: {
            rules: [
                {
                    test: /(\.css|\.scss|\.sass)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: CSS_LOADER_CONFIG,
                    })
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../assets/'
                        }
                    }]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../assets/'
                        }
                    }]
                }
            ]
        }
    };

    return config;
};