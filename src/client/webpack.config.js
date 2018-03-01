const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const config = {
  entry: `${__dirname}/index.jsx`,
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin(
      {
        template: './index.html',
        inlineSource: '.(js)$'
      }
    ),
    // new HtmlWebpackInlineSourcePlugin()
  ],
  devServer: {
    port: 3000
  }
};

module.exports = config;