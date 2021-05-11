/**
 * router.js 路由模块
 * 职责：
 *  处理路由
 *  根据不同的请求方法 + 请求路径设置具体的处理函数
 * 模块职责要单一，不要乱写
 * 划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
var fs = require('fs');
var Student = require('./student');

// Express 提供了一个更好的方式
// 专门用来包装路由的
var express = require('express');

// 1.创建一个路由容器
var router = express.Router();

// 2.把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
  // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码
  // 除了这样来转换以外，野可以通过 data.toString() 的方式
  // fs.readFile('./db.json', 'utf8', function (err, data) {
  //   if (err) {
  //     return res.status(500).send('Server error.')
  //   }
  //   console.log(typeof data)
  //   // 从文件中读取到的数据一定是字符串
  //   // 所以这里一定要手动的转成对象
  //   var students = JSON.parse(data).students
  //   res.render('index.html', {
  //     fruits: ['苹果', '西瓜', '橘子'],
  //     students,
  //   });
  // })

  Student.find((err, students) => {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('index.html', {
      fruits: ['苹果', '西瓜', '橘子'],
      students,
    });
  })
});

router.get('/students/new', function (req, res) {
  res.render('new.html')
});

router.post('/students/new', function (req, res) {
  // 1.获取表单数据
  // 2.处理
  //   将数据保存到 db.json 文件中用以持久化
  // 3.发送响应
  // 先读取处理，转成对象
  // 然后网对象中 push 数据
  // 把对象转为 字符串
  // 最后把字符串写入文件
  new Student(req.body).save(err => {
    if (err) {
      return res.status(500).send('save error.')
    }
    console.log('保存成功')
    res.redirect('/students')
  })
});

router.get('/students/edit', function (req, res) {
  // 1.在客户端的列表也中处理链接问题（需要有 id 参数）
  // 2.获取要编辑的学生 id
  // 3.渲染编辑页面
  //     根据 id 把学生信息查出来
  //     使用模板引擎渲染页面

  // replace
  //    字符串模式
  //      简单，但是不支持全局和忽略大小写问题
  //     正则表达式模式
  //        强大，支持全局和忽略大小写
  Student.findOne({ _id: req.query.id.replace(/"/g, '') }, (err, student) => {
    if (err) {
      return res.status(500).send('findById error.')
    }
    console.log('student', student)
    res.render('edit.html', {
      student,
    })
  })
});

router.post('/students/edit', function (req, res) {
  var id = req.body.id.replace(/"/g, '')
  Student.updateOne({ _id: id }, req.body, err => {
    if (err) {
      return res.status(500).send('updateById error.')
    }
    res.redirect('/students')
  })
});

router.get('/students/delete', function (req, res) {
  var id = req.query.id.replace(/"/g, '')
  Student.deleteOne({ _id: id }, err => {
    if (err) {
      return res.status(500).send('delete error.')
    }
    res.redirect('/students')
  })
});

// 3. 把 router 导出
module.exports = router;

// 这样也不方遍
// module.exports = function (app) {
//   app.get('/students', function (req, res) {
//     // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码
//     // 除了这样来转换以外，野可以通过 data.toString() 的方式
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//       if (err) {
//         return res.status(500).send('Server error.')
//       }
//       console.log(typeof data)
//       // 从文件中读取到的数据一定是字符串
//       // 所以这里一定要手动的转成对象
//       var students = JSON.parse(data).students
//       res.render('index.html', {
//         fruits: ['苹果', '西瓜', '橘子'],
//         students,
//       });
//     })
//   });

//   app.get('/students/new', function (req, res) {

//   });

//   app.post('/students/new', function (req, res) {

//   });

//   app.get('/students', function (req, res) {

//   });

//   app.post('/students', function (req, res) {

//   });
// }