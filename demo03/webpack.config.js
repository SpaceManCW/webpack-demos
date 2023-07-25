module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
/**
 * 通过使用 module.rules 可以定义一个模块处理规则 对不同类型的模块进行自定义处理
 * test: 正则表达式 用于匹配需要处理的文件 在这里它匹配扩展名为 js 和 jsx的文件
 * exclude: 正则表达式 用于排除某些文件或目录 不进行处理 
 * use: 用于指定使用哪个 loader 来进行文件的转换处理
 * loader: 指定要使用的 loader
 * options: 用于传递给 loader 的选项 
 * preaets: 告诉加载器 使用两个预设来进行转译
 * es2015: 用于将 es6 语法转换为 es5 语法
 * react: 用于将jsx语法转换为普通的js代码
 */
