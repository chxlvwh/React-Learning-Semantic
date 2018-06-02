const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/app.js'
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/assets'),
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /.\js$/,
				use: ['bable-loader'],
				include: [
					path.resolve(__dirname, './src')
				]
			},
			{
				test: /.\(css|less)$/,
				use: ['style-loader','css-loader','less-loader']
			},
			{
				test: /.\(jpg|png|svg|jpeg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			templete: './src/index.html'
		})
	],
	resolve: [
		'node_modules',
		path.resolve(__dirname, './src/common'),
		path.resolve(__dirname,'./src/components')
	]

	devtool: 'cheap-module-eval-source-map'
}
