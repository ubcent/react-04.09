const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
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
      actions: path.resolve(__dirname, 'src', 'actions'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
    }
  },
  module: {
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
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ]
}