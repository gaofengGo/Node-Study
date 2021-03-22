var http = require("http");

http.createServer(function (request, response) {
  
  // 发送 HTTP 头部
  // HTTP 状态值： 200
  // 类容类型： text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据
  response.end('Hello world/n我是')
}).listen('8888')

console.log('Server running at http://127.0.0.1:8888/');