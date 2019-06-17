'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  entry: [
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMaps: false,
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new Visualizer(),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production') // hacky af
    }),
    
    webpackIsomorphicToolsPlugin.development()

  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"]
      }
    }, 
    {
      test: /\.json?$/,
      loader: 'json'
    }, 
    {
      test: /(bootstrap-overrides.css|react-datepicker\/dist\/react-datepicker.css)/,
      loader: 'style!css'
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
      test: /\.css$/,
      exclude: /(bootstrap-overrides.css|react-datepicker\/dist\/react-datepicker.css)/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }, 
    {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'), 
      loader: 'url-loader?limit=10240' 

    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
