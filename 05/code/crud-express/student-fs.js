/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */
var fs = require('fs');
var dbPath = './db.json';

/**
 * 获取所有学生列表
 * callback 中的参数
 *  第一个参数是 err
 *    成功是 null
 *    错误是 错误对象
 *  第二个参数是 结果
 *    成功是 数组
 *    错误是 null
 */
exports.find = (callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    callback(null, JSON.parse(data).students);
  })
}

/**
 * 根据 id 获取学生信息对象
 * id 学生 id
 * callback 回调函数
 */
exports.findById = (id, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    var students = JSON.parse(data).students;
    var ret = students.find(item => item.id === parseInt(id));
    callback(null, ret);
  })
}

// findById(id: 1, err => console.log(err))

/**
 * 添加保存学生
 */
exports.save = (student, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    var students = JSON.parse(data).students;

    // 处理 id 唯一不重复
    student.id = students[students.length - 1].id + 1;

    students.push(student);
    var fileData = JSON.stringify({
      students
    })
    fs.writeFile(dbPath, fileData, err => {
      if (err) {
        return callback(err);
      }
      // 成功就没错，所以错误对象是 null
      callback(null);
    })
  })
}

// save({
//   name: 'xx',
//   age: 17,
// }, err => {
//   if (err) {
//     return console.log('保存失败')
//   }
//   console.log('保存成功')
// })

/**
 * 更新学生
 */
exports.updateById = (student, callback) => {
  exports.find((err, students) => {
    if (err) {
      return callback(err);
    }
    student.id = parseInt(student.id)
    student.gender = parseInt(student.gender)
    const editStudents = students.map(item => {
      if (item.id === student.id) {
        return student;
      }
      return item;
    })
    var fileData = JSON.stringify({
      students: editStudents
    })
    fs.writeFile(dbPath, fileData, err => {
      if (err) {
        return callback(err);
      }
      // 成功就没错，所以错误对象是 null
      callback(null);
    })
  })
}

// updateById({
//   id: 1,
//   name: 'xx',
//   age: 15
// }, err => console.log(err))

/**
 * 删除学生
 */
exports.delete = (id, callback) => {
    exports.find((err, students) => {
      if (err) {
        return callback(err);
      }
      // filter 会遍历整个数组，而 findIndex 找到就停止了
      // const newStudents = students.filter(item => item.id !== parseInt(id))
      var deleteId = students.findIndex(item => item.id === parseInt(id))
      students.splice(deleteId, 1);
      var fileData = JSON.stringify({
        students,
      })
      fs.writeFile(dbPath, fileData, err => {
        if (err) {
          return callback(err);
        }
        // 成功就没错，所以错误对象是 null
        callback(null);
      })
    })
}
// delete(id, err=>{})