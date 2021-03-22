// 结合 fs 发送文件中的数据
// 2. Content-Type 
const fs = require('fs');

const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('你好 Node.js');
  } else if (url === '/baby') {
    // url：统一资源定位
    // 一个 url 最终其实是对应到一个资源
    fs.readFile('./resource/ab2.jpg', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('读取文件失败');
      } else {
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    })
  } else if (url === '/login') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>登录</h1>')
  } else {
    res.end('404 Found')
  }
})

server.listen(8080, function () {
  console.log('服务启动成功：http://127.0.0.1:8080')
})