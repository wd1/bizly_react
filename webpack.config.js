// 'use strict';
require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    // path.join(__dirname, 'client/App/App.js')
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new Visualizer(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('development')
    }),
    webpackIsomorphicToolsPlugin.development()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, 
    {
      test: /\.json?$/,
      loader: 'json'
    },    
    { 
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/font-woff" 
    },
    { 
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/font-woff" 
    },
    { 
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/octet-stream" 
    },
    { 
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "file" 
    },
    { 
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=image/svg+xml" 
    },
    {
      test: /(bootstrap-overrides.css|react-datepicker\/dist\/react-datepicker.css)/,
      loader: 'style!css'
    }, 
    {
      test: /\.css$/,
      exclude: /(bootstrap-overrides.css|react-datepicker\/dist\/react-datepicker.css)/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }, 
    {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'), 
      loader: 'url-loader?limit=10240' 
    }]
  }
};
