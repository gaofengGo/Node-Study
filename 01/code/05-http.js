// Node 中专门提供了一个核心模块：http
// http 模块的职责是帮你创建编写服务器的

// 1. 加载 http 模块

const http = require('http');

// 2. 使用http.createServer() 方法创建一个 Web 服务器
//     返回一个 Server 实例
const server = http.createServer();

// 3.服务器要干嘛？
//   提供服务： 对数据的服务
//   发请求
//   接收请求
//   处理请求
//   给予反馈（发送响应）
//   当客户端请求过来，就会制动触发服务器的 request 请求事件， 然后执行回调函数

server.on('request', function () {
  console.log('收到请求')
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问')
})