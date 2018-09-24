const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            layouts: path.resolve(__dirname, 'src', 'layouts'),
            data: path.resolve(__dirname, 'src', 'data'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ]
}