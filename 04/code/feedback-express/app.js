var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/public/',express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数，标识当渲染以 .art 结尾的文件时，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));

// Express 为 Response 响应对象提供了一个方法：render
// render 方法默认不可使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径， 默认回去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定，开发人员会把所有的试图文件都放到 views目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)

// 配置 body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var comments = [
  {
    name: '张三',
    message: '今天天气不错',
    dateTime: '2015-10-16',
  },
  {
    name: '张三2',
    message: '今天天气不错',
    dateTime: '2015-10-16',
  },
  {
    name: '张三3',
    message: '今天天气不错',
    dateTime: '2015-10-16',
  },
]
app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments
  });
})

app.get('/post', function (req, res) {
  res.render('post.html');
})

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 这样我们就可以利用不同的请求方法让一个请求路劲使用多次
app.post('/post', function(req,res) {
  // 1.获取表单 POST 请求体数据
  // 2.处理
  // 3. 发送响应

  // req.query 只能拿到 get 请求参数
  // console.log(req.query);

  var comment = req.body;
  comment.dateTime = new Date()
  comments.unshift(comment);
  // res.send
  // res.redirect
  // 这些方法 Express 会自动帮你 res.end()
  res.redirect('/');
})

// app.get('/pinglun', function(req,res) {
//   console.log(req.query);
//   var comment = req.query;
//   comment.dateTime = new Date()
//   comments.unshift(comment);
//   res.redirect('/');
//   // res.statusCode = 302;
//   // res.setHeader('Location', '/')
// })

app.listen(3000, function () {
  console.log('running....')
})