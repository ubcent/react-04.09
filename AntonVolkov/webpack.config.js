const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            actions: path.resolve(__dirname, 'src', 'actions'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            models: path.resolve(__dirname, 'src', 'models'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            middleware: path.resolve(__dirname, 'src', 'middleware'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: ['babel-loader'],

            },
            {
                test: /\.s?css/,
                use: ['style-loader', 
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({filename:'style.css'}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ]
};