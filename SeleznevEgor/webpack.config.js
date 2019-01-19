const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLplugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry:{
		main: path.resolve(__dirname, 'src', 'index.jsx'),
	}, 
	output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'bundle.js'
	},
	module:{
		rules :[
			{
				test:/\.jsx?$/,
				exclude: /node_modules/,
				use:{
					loader:'babel-loader'
				}	
			},
			{
				test:/\.s?css$/,
				use :ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
            	test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            	use: {
            		loader: 'file-loader',
            		options: {
            			name: 'fonts/[name].[ext]',
            		}
            	}
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias:{
			components: path.resolve(__dirname, 'src', 'Components'),

			containers: path.resolve(__dirname, 'src', 'Containers'),

			bootstrap: path.resolve(__dirname, 'node_modules', 'bootstrap', 'js','src'),
		}
	},
	plugins :[
		new ExtractTextPlugin({filename: 'style.css'}),
		new HTMLplugin({
			template: path.resolve(__dirname, 'src', 'index.html'), 
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
				{from: './src/image',to: './image'},
				{from: './src/content', to: './content'}
			]),
	],
	devServer:{
		historyApiFallback: true,
	}
};
