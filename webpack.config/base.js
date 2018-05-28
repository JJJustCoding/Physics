const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: path.join(root, 'src/main.js'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    // 设置别名方便引用
    alias: {
      components: path.join(root, 'src/components'),
      views: path.join(root, 'src/views'),
      styles: path.join(root, 'src/styles'),
      store: path.join(root, 'src/store')
    },
    extensions: ['.js', '.vue'] // 在引入js或者vue文件时，可以省略后缀
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}