const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const autoprefixer = require('autoprefixer')


let isProd = process.env.NODE_ENV == 'production'
let isDev = process.env.NODE_ENV == 'development'
let cssDev = ['style-loader', 'css-loader?importLoaders=2', 'sass-loader']

let cssProd = ExtractTextPlugin.extract({
    allChunks: true,
    fallback: "style-loader",
    use: [
            {
                loader: 'css-loader',
                options: {
                    minimize: false,
                    importLoaders: 2
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
});

let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        'js/app': './src/app.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
            {
                test: /\.sass$/,
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 8090,
        open: true,
        hot: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Main Page',
            favicon: false,
            hash: true,
            excludeChunks: ['js/contact'],
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
