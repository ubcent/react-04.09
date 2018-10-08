// Работа с файловой системой
const path = require('path');
// Плагин для проверки SASS
const SassLintPlugin = require('sass-lint-webpack');
// Плагин для извлечения css в отдельные файлы
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
// History Api Fallback (поддержка перехода по прямой ссылке)
const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  // точки входа
  entry: {
    // путь к точке входа - исходнику с добавлением необходимых полифиллов
    main: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
  },
  output: {
    // папка для выгрузки результатов сборки
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[chunkhash].js',
  },
  resolve: {
    // очередность выбора расширения файла, если расширение файла не указано
    extensions: ['.js', '.jsx'],
    alias: {
      // адрес папки components
      components: path.resolve(__dirname, 'src', 'components'),
      // адрес папки containers
      containers: path.resolve(__dirname, 'src', 'containers'),
      // адрес папки img
      img: path.resolve(__dirname, 'src', 'img'),
      // адрес папки actions
      actions: path.resolve(__dirname, 'src', 'actions'),
      // адрес папки reducers
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      // адрес папки pages
      pages: path.resolve(__dirname, 'src', 'pages'),
    }
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {} ),
    new MiniCssExtractPlugin({
      filename: 'app.[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      // путь к шаблону html файла index.html
      template: path.resolve(__dirname, 'src', 'index.html'),
      // имя файла в конечной сборке
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
    new BrowserSyncPlugin({
      // локальный сервер находится по адресу http://localhost:3000/
      host: 'localhost',
      port: 3000,
      // отключаем синхронизацию действий во всех окнах браузера
      ghostMode: false,
      // папка со сборкой, используемая в качестве корневой для сервера
      server: {
        baseDir: ['dist'],
        // поддержка перехода по прямой ссылке
        middleware: [ historyApiFallback() ],
      },
    }),
    // создаем карты исходников
    new webpack.SourceMapDevToolPlugin(),
    // проверяем SASS
    new SassLintPlugin(),
],
  module: {
    rules: [
      // настраиваем обработку jsx-файлов
      {
        // шаблон для обрабатываемых файлов
        test: /\.jsx?$/,
        // файлы, исключенные из обработки
        exclude: /node_modules/,
        use: [
          // компиляция в babel
          'babel-loader',
          // проверка в eslint
          'eslint-loader',
          ]
      },
      // настраиваем обработку (s)css-файлов
      {
        test: /\.s?css$/,
        use: [
          // Добавляем экспорт модуля в качестве стиля в DOM
          'style-loader',
          // Разбираем файлы CSS
          MiniCssExtractPlugin.loader,
          // Загружаем файл CSS с разрешенным импортом и возвращает код CSS
          'css-loader',
          // оптимизируем css
          'clean-css-loader',
          // добавляем префиксы
          'postcss-loader',
          // загружает и преобразует scss-файлы в css
          'sass-loader',
        ]
      },
      // настраиваем обработку изображений
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[ext]',
            }
          }
        ]
      }
    ]
  }
};
