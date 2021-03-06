const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(htm|html)$/,
      use: [
        'html-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ]
    }]
  },
  // production | development
  mode: 'development'
}