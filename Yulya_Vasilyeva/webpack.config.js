//путь проекта
const path = require('path');

//объединяет css файлы в один
const MiniCssExtract = require('mini-css-extract-plugin');
//автоматически ставит префикты в css
const AutoPrefixer = require('autoprefixer');
//добавляем в HTML файл необходимые пути для css и js
const HtmlPlugin = require('html-webpack-plugin');
//чистим папку dist
const CleanPlugin = require('clean-webpack-plugin');
//копируем изображения
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        entry: path.resolve(__dirname, 'src', './_index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', './components'),
            containers: path.resolve(__dirname, 'src', './containers'),
            actions: path.resolve(__dirname, 'src', './actions'),
            reducers: path.resolve(__dirname, 'src', './reducers'),
        },
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
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: MiniCssExtract.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                AutoPrefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                        }
                    },
                    { loader: 'clean-css-loader' },
                    { loader: 'sass-loader' },
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
                test: /\.(svg|gif|jpe?g|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ]
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtract({ filename: 'css/min.style.css' }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/**/*',
                to: 'img/[name].[ext]',
                ignore: [ '*.jsx','*.scss', '*.js', '*.html', '*.ttf' ],
            }
        ]),
        new CleanPlugin(['dist']),
    ]
}