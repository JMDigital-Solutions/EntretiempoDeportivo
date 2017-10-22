'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {

    //var isProd = env.NODE_ENV === 'production';

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
                Popper: ['popper.js', 'default'],
                'mdc': 'material-components-web'
            }),
            new ExtractTextPlugin('../css/[name].css')
        ],

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        }
    };

    return config;
};