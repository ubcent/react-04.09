const path = require('path');
const ExptacrTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/js', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ExptacrTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            }
        ]
    },
    plugins: [
        new ExptacrTextPlugin({filename: 'style.css'}),
        new HTMLPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}