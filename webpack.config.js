const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
mode: 'development',
entry: {
  main: './src/index.js',
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
},
plugins : [

  new HtmlWebpackPlugin({
 template: './src/index.html'
  }),

  new miniCss({
    filename: 'style.css'
  })
],

module: {
  // правило для импортирования css файлы в js код
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
 
  //sass -> css
   {
    test: /\.scss$/,
    use: [
       miniCss.loader,
       'css-loader',
       'sass-loader',
    ]
 },
 {
 test: /\.(eot|ttf|woff|woff2)$/,
 use: [
   {
     loader: 'file-loader?name=./fonts/[name].[ext]'
   }
 ]
},
{
  test: /\.(svg|png|jpg|jpeg|webp)$/,
  use: [
    {
      loader: 'file-loader?name=./img/[name].[ext]'
    }
  ]
}
]}
}