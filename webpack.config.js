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
				test: /\.js$/,
				use: ['babel-loader'],
				include: [
					path.resolve(__dirname, './src')
				]
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader','css-loader','less-loader']
			},
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
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
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, './src/common'),
			path.resolve(__dirname,'./src/components')
		]
	},

	devtool: 'cheap-module-eval-source-map'
}
