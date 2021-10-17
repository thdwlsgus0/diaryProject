const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index'],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		inline: false,
		port: 3000,
		hot: true,
	},

	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?/,
				use: {
					loader: 'ts-loader',
				},
				exclude: /node_moudles/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],
};
