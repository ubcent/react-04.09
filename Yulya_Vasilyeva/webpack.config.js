const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        app: path.resolve(__dirname, 'src', 'js/_index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].index.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }  
            }
        ],
    },
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new ExtractCSS({filename: 'css/style.css'}),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src','index.html'),
            filename: 'index.html'
        }),
        new CleanPlugin(['dist']),
    ]  
}