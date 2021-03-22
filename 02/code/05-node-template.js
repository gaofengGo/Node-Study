var template = require('art-template');
var fs = require('fs');

fs.readFile('./06-art-template.html', function (err, data) {
  if (err) {
    return console.log('读取文件失败');
  }

  var ret = template.render(data.toString(), {
    name: 'Jack',
    age: 18,
  })
  console.log(ret);
})