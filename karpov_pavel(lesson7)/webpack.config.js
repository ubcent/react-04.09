const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const development = options.mode === 'development';
  return {    
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: development ? 'bundle.js' : 'bundle.min.js',
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
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    overlay: true,
    port: 9000,
    stats: 'errors-only',  
    compress: true, 
    historyApiFallback: true,
  },
  devtool: development ? 'eval-source-map' : false,
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.(sa|sc|c)ss$/,
        use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',            
              plugins: (loader) => [                     
                development ? (require('autoprefixer')(), require('postcss-preset-env'))  : require('cssnano')(), 
                require('autoprefixer')(),
                require('postcss-preset-env')                                          
              ]                                             
            }
          }, 'sass-loader']
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
            {
              loader: 'file-loader',
              options: {
                  name: 'img/[name].[ext]',
              },
            },
          ]
      }     
    ]
  },
  plugins: [    
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: development ? 'bundle.css' : 'bundle.min.css'
    }),
    new CleanWebpackPlugin('dist', {})  
  ]
  }
};