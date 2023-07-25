module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};

/**
 * url-loader: 将 image文件转为<img>标签
 * limit: 告诉 url-loader 对于小于8kb的图片，将其转换为 Data URL 以减少http请求。大于 8kb 的将使用file-loader进行加载，生成独立文件并返回url地址
 */
