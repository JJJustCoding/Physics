const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack/hot/dev-server',
    path.join(root, 'src/main.js')
  ],
  devServer: {
    historyApiFallback: true, //404页面会跳转到/页面
    inline: true,  // 采取inline模式，而不是iframe模式
    port: 3000 // 3000端口
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'),
      inject: 'body' //script标签注入到body的底部
    })
  ]
})