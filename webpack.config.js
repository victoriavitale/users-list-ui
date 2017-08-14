const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '/bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({title: 'Example', template: './index.html'}), new UglifyJSPlugin()]
}
