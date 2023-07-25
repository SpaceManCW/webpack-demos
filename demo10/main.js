require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});

/**
 * require.ensure() 是一种旧版本的模块加载方式，在这里的意思就是异步加载模块 ./a 加载完执行回调函数
 * 而 webpack在遇到require.ensure时则认为这是一个代码分割点 相当于告诉webpack ./a需要从 bundle.js中分离出来作为一个单独的块文件 然后在 bundle.js中按需加载
 */