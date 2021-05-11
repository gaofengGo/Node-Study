# mongoose
- 官网
- 官方指南
- 官方 API 文档

## MongoDB 数据库的基本概念
- 可以有多个数据库
- 一个数据库中可以有多个集合（表）
- 一个集合中可以有多个文档（表记录）
- 文档结构很灵活，没有任何限制
- MongoDB 非常灵活，不需要像 MySQL 一样先创建数据库、表、设计表结构
  - 在这里只需要：当你需要插入数据的时候，只需要指定往那个数据库的哪个集合操作就可以了
  - 一切都由 MongoDB 来帮你自动完成建库建表这件事
```javascript
{
  qq: {
    user: [
      {name: '张三', age: 15},
      {name: '李四', age: 15},
      {name: '王五', age: 15},
      {name: '张三1', age: 15},
      {name: '张三2', age: 15},
      ...
    ],
    products: [

    ]
    ...
  },
  taobao: {
    
  },
  baidu: {

  }
}
```

## 起步
安装：
```shell
npm i mongoose
```
hello world
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

## 官方指南
### 设计 Schame 发布 model
```javascript
var mongoose = require('mongoose');

// 架构
var Schema = mongoose.Schema;

// 1.连接数据库
//  指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2.设计集合结构（表结构）
//  约束的母的是为了保证数据的完整性，不要由脏数据
var userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 3.将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 model
//    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//         mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//         例如这里的 User 最终会变为 users 集合名称
//    第二个参数： 架构 Schema
// 
//    返回值：模型构造函数
var User = mongoose.model('User', userSchema);

// 4.当外卖有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了

```

### 增加数据
```js
var admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@admn.com'
})

admin.save((err, ret) => {
  if (err) {
    console.log('保存失败');
    return;
  }
  console.log('保存成功');
  console.log(ret);
})
```

### 查询
查询所有
```js
User.find((err, ret) => {
  if (err) {
    console.log('保存失败', err);
    return;
  }
  console.log(ret);
})
```

按条件查询
```js
User.find({ username: 'admin' }, (err, ret) => {
  if (err) {
    console.log('保存失败', err);
    return;
  }
  console.log(ret);
})
```

按条件查询单个
```js
User.findOne({ username: 'admin' }, (err, ret) => {
  if (err) {
    console.log('保存失败', err);
    return;
  }
  console.log(ret);
})
```

### 删除数据
```js
User.deleteOne({ username: '张三' }, (err, ret) => {
  if (err) {
    console.log('删除失败', err);
    return;
  }
  console.log('删除成功');
  console.log(ret);
})
```

### 更新数据
```js
User.updateOne({ password: '123' }, {
  password: '456'
}, (err, ret) => {
  if (err) {
    console.log('更新失败', err);
    return;
  }
  console.log(ret);
})
```