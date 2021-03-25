// 0: 安装
// 1: 引包
var  express = require('express');

// 2. 创建服务
//   也就是原来的 http.createServer
var app = express()

// 在 Exprees 中开发资源就是一个 API 的事
// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 来进行访问 /public 中的资源
app.use('/public', express.static('./public/'))

// 模板引擎，在 Express 中也是一个 API 的事
// 当服务器收到 get 请求 / 的时候，执行回调函数
app.get('/', function (req, res) {
  res.send('hello express')
})

app.get('/boot', function (req, res) {
  res.send('hello 3000')
})

// 相当于 server.listen
app.listen(3000, function() {
  console.log('app is running at prot 3000.')
})