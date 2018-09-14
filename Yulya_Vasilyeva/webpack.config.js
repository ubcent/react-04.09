const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        entry: path.resolve(__dirname, 'src', 'js/_index.jsx')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/index.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'js/components')
        }
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
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
    plugins:[
        new ExtractCSS({filename: 'css/style.css'}),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src','index.html'),
            filename: 'index.html'
        }),
        new CleanPlugin(['dist']),
    ]  
}