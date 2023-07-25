module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};

/**
 * style-loader: 将css代码注入到html页面中 以应用样式 它会在运行时将 css以<style>标签形式插入到页面的<head>标签中。这样就可以在js中导入css文件或模块并让样式生效
 * css-loader: 处理css中的@import 和 url()引用，并将其解析为模块之间的依赖关系。
 */