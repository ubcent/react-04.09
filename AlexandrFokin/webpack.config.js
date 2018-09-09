// Работа с файловой системой
const path = require('path');
// Плагин для извлечения css в отдельные файлы
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Плагин для использования html-шаблонов
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Плагин для хеширования
const WebpackMd5Hash = require('webpack-md5-hash');
// Плагин для чистки папки dist
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Плагин автообновления страницы
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// Доступ к плагинам webpack
const webpack = require('webpack');

module.exports = {
    // точки входа
    entry: {
        // путь к точке входа - исходнику
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        // папка для выгрузки результатов сборки
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[chunkhash].js'
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {} ),
        new MiniCssExtractPlugin({
            filename: 'app.[hash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            // путь к шаблону html файла index.html
            template: path.resolve(__dirname, 'src', 'index.html'),
            // имя файла в конечной сборке
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        }),
        // создаем карты исходников
        new webpack.SourceMapDevToolPlugin()
],
    module: {
        rules: [
            // настраиваем обработку js-файлов
            {
                // шаблон для обрабатываемых файлов
                test: /\.js$/,
                // файлы, исключенные из обработки
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // настраиваем обработку scss-файлов
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // оптимизируем css
                    'clean-css-loader',
                    // добавляем префиксы
                    'postcss-loader',
                    // преобразуем из scss в css
                    'sass-loader'
                ]
            }
        ]
    }
};
