// 结合 fs 发送文件中的数据
// 2. Content-Type 
const fs = require('fs');

const http = require('http');

const server = http.createServer();
const wwwDir = 'F:\\壁纸\\动漫';

server.on('request', function (req, res) {
  const url = req.url;
  var filePath = 'index.html';
  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }
    res.end(data);
  })
  console.log(filePath);

})

server.listen(8080, function () {
  console.log('服务启动成功：http://127.0.0.1:8080')
})