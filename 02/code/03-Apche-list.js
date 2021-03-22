// 结合 fs 发送文件中的数据
// 2. Content-Type 
const fs = require('fs');
const http = require('http');
const template = require('art-template');

const server = http.createServer();
const wwwDir = 'E:/work/node';

server.on('request', function (req, res) {
  const url = req.url;
  var filePath = '/index.html';
  if (url !== '/') {
    filePath = url;
  }

  fs.readFile('06-art-template.html', function (err, data) {
    if (err) {
      console.log(err);
      return res.end('404 Not Found.')
    }
    const tplStr = template.render(data.toString(), {
      name: '小明',
      age: 18,
      city: '上海'
    })
    res.end(tplStr);
  })
})

server.listen(8080, function () {
  console.log('服务启动成功：http://127.0.0.1:8080')
})