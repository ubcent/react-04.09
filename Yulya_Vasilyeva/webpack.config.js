//путь проекта
const path = require('path');

//объединяет css файлы в один
const MiniCssExtract = require('mini-css-extract-plugin');
//добавляем в HTML файл необходимые пути для css и js
const HtmlPlugin = require('html-webpack-plugin');
//чистим папку dist
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        entry: path.resolve(__dirname, 'src', 'js/_index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'js/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtract.loader,
                        options: {
                            publicPath: 'css/'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }

            },
            {
                test: /\.(svg|gif|jpe?g|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtract({ filename: 'css/style.css' }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new CleanPlugin(['dist']),
    ]
}