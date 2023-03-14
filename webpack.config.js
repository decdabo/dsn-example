const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const devEnviroment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    employment: './frontend/src/employment.js',
    portfolio: './frontend/src/portfolio.js',
    comments: './frontend/src/comments.js'
  },
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devEnviroment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      chunks: ['employment', 'portfolio', 'comments']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './frontend/assets', to: './assets' }
      ]
    })
  ],
  devtool: 'source-map',
  mode: devEnviroment ? 'development' : 'production'
}