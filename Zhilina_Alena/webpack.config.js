const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            images: path.resolve(__dirname, 'src', 'img'),
        }
    },
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test:/\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ]
};