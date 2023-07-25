var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};

/**
 * plugins: 用于配置和使用插件
 * UglifyJsPlugin: 这是一个用于压缩和混淆js代码的插件 通过使用该插件可以进一步优化代码 减小文件体积提升加载速度
 * 代码会经过UglifyJS工具的处理使其尽量减小体积并难以被理解和修改
 */