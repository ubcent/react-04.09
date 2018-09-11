const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        stats: 'errors-only',  
        compress: true,      
        open: true,
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css'
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ]
}


