const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
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
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({filename: 'css/style.css'}),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src','index.html'),
            filename: 'index.html'
        }),
        new CleanPlugin(['dist'])
    ]  
}