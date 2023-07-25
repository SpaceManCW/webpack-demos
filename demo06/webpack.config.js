module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               modules: true
             }
          }
        ]
      }
    ]
  }
};

/**
 * modules: true : 启用css模块化 启用之后 css-loader 会自动对每个css文件进行转换 并将其作为一个模块对待
 * 每个选择器的类名或标识符会被自动转换为一个唯一的类名 确保仅在当前模块有效
 * 这么做的好处是：避免样式冲突 更清晰的命名空间 更好的可维护性
 */
