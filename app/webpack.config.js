const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
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
            Shared: path.resolve(__dirname, 'src/js/components/shared')
        }
    },
    plugins: [new HtmlWebPackPlugin({template: './src/index.html', filename: './index.html'})]
};