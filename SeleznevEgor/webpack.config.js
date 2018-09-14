const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLplugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
				test:/\.scss$/,
				use :ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								url: false
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
			}

		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias:{
			components: path.resolve(__dirname, 'src', 'Components'),
			bootstrap: path.resolve(__dirname, 'node_modules', 'bootstrap', 'scss'),
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
		 		{from: './src/fonts', to: './fonts'}
		 	])
	]
		
	
}