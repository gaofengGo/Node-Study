var express = require('express');

var app = express();

// 当以 /public/ 开头的时候，去 ./public/ 目录中寻找对应的资源
// 这种方式更容易变时，推荐这种方式
// app.use('/public/', express.static('./public/'));

// 当以 /a 开头的时候，去 ./public 目录中寻找对应的资源
// 第一个参数只是一个别名
app.use('/a', express.static('./public'));

// 当省略第一个参数的时候，则可以通过省略 /public 的方式来访问
// 可以省略
// app.use(express.static('./public/'));

app.get('/', function (req, res) {
  res.send('hello world');
})

app.listen(3000, function () {
  console.log('express run http://127.0.0.1:3000')
})