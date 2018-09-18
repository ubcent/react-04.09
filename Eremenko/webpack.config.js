const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  //точка входа
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  //папка куда собирается
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  //пути к папкам компонентов
  resolve: {
    //что бы не указывать расширение файла
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  //сама сборка
  module: {
    //правила для сборки
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ]
}