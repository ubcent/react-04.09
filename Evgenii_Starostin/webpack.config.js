const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PUBLIC_PATH = require('path').join(__dirname, 'build');

let config = {
    entry: './app/index.js',
    output: { 
        path: PUBLIC_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.module.rules.push(
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        );
    }

    if (argv.mode === 'production') {
        config.module.rules.push(
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            }
        );
    }

    return config;
};