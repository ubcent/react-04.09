const path = require('path');
const ExptacrTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new ExptacrTextPlugin({filename: 'style.css'}),
        new HTMLPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}