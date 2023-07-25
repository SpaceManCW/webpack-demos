var load = require('bundle-loader!./a.js');

load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});

/**
 * bundle-loader: 异步加载模块 将模块打包成一个单独的块
 * load(): 模块加载完的回调函数
 */