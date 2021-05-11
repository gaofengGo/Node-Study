const mongoose = require('mongoose');
// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的，非常灵活，只需要在diamond中设计你的数据库就可以了
// mongoose 这个包可以让你的设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个 Cat

// 持久化保存 kitty 实例
for(let i = 0; i < 100; i++) {
  var kitty = new Cat({ name: '喵喵' + i });
  kitty.save().then(() => console.log('meow'));
}