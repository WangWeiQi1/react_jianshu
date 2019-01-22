const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'js/index.js'
	},
	resolve: {
		alias: {
			'common': path.resolve(__dirname, 'src/common'),
			'components': path.resolve(__dirname, 'src/components'),
			'statics': path.resolve(__dirname, 'src/statics'),
			'mock': path.resolve(__dirname, 'src/mock')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					"plugins": [
						["import", {
							"libraryName": "antd",
							"libraryDirectory": "es",
							"style": "css" // `style: true` 会加载 less 文件
						}]
					]
				}
			}
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'resource/[name].[ext]'
				}
			}]
		}, {
			test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'resource/[name].[ext]'
				}
			}]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/statics/logo.png'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		})
	],
	devServer: {
		port: '8888',
		historyApiFallback: {
			index: '/dist/index.html'
		}
	}
};