var fs = require('fs');

// 第一个参数： 文件路径
// 第二个参数： 文件类容
// 第三个参数： 回调函数
fs.writeFile('./data/你好.md', '搭建好，我是Node.js', function(err) {
  console.log('文件写入成功');
})