const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const conf = {
	entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'src'),
        overlay: true,
        port: 3000,
        stats: 'errors-only',  
        compress: true, 
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
               },                
            },               
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', {loader: 'postcss-loader'}, 'sass-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ]
}
module.exports = (env, options) => {
    const production = options.mode !== 'production';
    conf.devtool = production ? 'eval-source-map' : false ;
    conf.module = {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
               },                
            },               
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 
                {
                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      plugins: (loader) => [                     
                        production ? require('autoprefixer')() : require('cssnano')(), 
                        require('autoprefixer')()                                          
                      ]
                    }
                  }, 'sass-loader']
            },
        ]
    }
    return conf;
};


