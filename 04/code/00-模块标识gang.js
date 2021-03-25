var fs = require('fs');

// 所有文件操作的 API 都是异步操作的
// 文件操作中可以省略 ./
// fs.readFile('data/a.txt', function(err,data) {
//   if(err) {
//     return console.log('读取失败');
//   }
//   console.log(data.toString());
// })

// 在模块加载中，相对路径的 ./ 不能省略
// require('./data/foo')('package')

// / 表示磁盘根目录
fs.readFile('/data/a.txt', function(err,data) {
  if(err) {
    return console.log(err);
  }
  console.log(data.toString());
})

