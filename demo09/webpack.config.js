var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
};

/**
 * DefinePlugin: webpack自带的插件 在这里用该插件定义了一个全局变量 默认是false
 * cross-env: 不同的操作系统设置环境变量的方法有异 cross-env是一个跨平台的环境变量设置工具 作用就是确保在不同的操作系统都能正确的设置成功环境变量
 * npx: npx是一个在node.js环境中执行可执行文件或者安装包的命令行工具  当只想在项目中临时使用一个特定版本的工具或包时 使用npx
 * 可执行文件一般在 node_modules/.bin 目录中
 */