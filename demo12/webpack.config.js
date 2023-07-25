var webpack = require('webpack');

module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // (the commons chunk name)

      filename: "commons.js",
      // (the filename of the commons chunk)
    })
  ]
}

/**
 * CommonsChunkPlugin: CommonsChunkPlugin用于处理公共模块的打包和分离
 * name: 公共模块的名称
 * filename: 公共模块的文件名 当多个入口文件共享相同模块时，这些公共模块会被提取到一个单独的文件中 减小每个入口文件的体积 提高代码加载和运行的效率
 */
