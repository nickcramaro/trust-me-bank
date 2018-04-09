const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({
    path: '../.env'
});

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, { 
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: { 
            Page: path.resolve(__dirname, 'src/js/components/page'),
            Shared: path.resolve(__dirname, 'src/js/components/shared'),
            Src: path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({template: './src/index.html', filename: './index.html'}),
        new webpack.DefinePlugin({NODE_URL: JSON.stringify(process.env.NODE_URL || 'http://localhost:8081/')})
    ]
};