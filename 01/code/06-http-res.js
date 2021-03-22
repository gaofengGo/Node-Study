const http = require('http');

const server = http.createServer();

// Request 请求对象
// Response 响应对象
server.on('request', function (request, response) {
  console.log('收到请求,请求路径是：' + request.url);

  if(request.url === '/') {
    response.write(' node.js');
    response.end('hello');
    return;
  }

  if(request.url === '/login') {
    response.end('登录');
    return;
  }

  if(request.url === '/link') {
    response.end('注册');
    return;
  }
  // 响应类容只能是二进制数据或者字符串
  if(request.url === '/products') {
    const products = [
      {
        name: '苹果',
        picr: 8888
      },
      {
        name: '苹果',
        picr: 8888
      },
    ]
    response.end(JSON.stringify(products));
  }

  // response 对象有一个方法：write 用来给客户端发送响应数据
  // write 可以使用多次，但是最后一定要用 end 来结束响应， 否则客户端将一直等待
})

server.listen(3000, function() {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问')
})