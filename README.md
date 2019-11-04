> git init
> npm init
> npm install webpack webpack-cli webpack-dev-server --save-dev
> npm install style-loader css-loader --save-dev
> npm install html-webpack-plugin --save-dev

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  // production | development
  mode: 'development'
}