const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'extension/build'),
    publicPath: '/static/'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: [
            require('babel-plugin-transform-object-rest-spread'),
            require('babel-plugin-transform-class-properties')
          ]
        }
      }],
      include: path.join(__dirname, 'src')
    }]
  }
}
