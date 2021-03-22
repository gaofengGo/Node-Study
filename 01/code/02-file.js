// Node 中的 JavaScript 具有文件操作的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个模块中，就提供了所有的文件操作的 API
// 例如： fs.readFile 就是用来读取文件的

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2. 读取文件
//   第一个参数是要读取文件路径，第二个参数是回调函数
fs.readFile('./data/a.txt', function(err, data) {
  // <Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 67 61 6f 66 65 6e 67>
  // 文件中存储的都是二进制，然后展示出来是转化为十六进制
  // 需用用 toString 方法转换
  // console.log(data)
  if(err) {
    console.log('读取文件失败');
    return;
  }
  console.log(data.toString());
})
