## Command 

> git init

> npm init
 
> npm install webpack webpack-cli webpack-dev-server --save-dev

> npm install style-loader css-loader --save-dev

> npm install html-webpack-plugin --save-dev

> npm install raw-loader --save-dev

> npm install file-loader --save-dev

> npm install html-withimg-loader --save-dev

> npm install html-loader --save-dev

---------
## Reference

https://www.bilibili.com/video/av46015080?from=search&seid=3016787851422292625

https://webpack.docschina.org/guides/


------------
## Config

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
