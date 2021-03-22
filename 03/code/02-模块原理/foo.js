// var module = {
//   exports: {
// 
//   }
// }

// var exports = module.exports;

// 当一个模块需要导出单个成员时
// 直接给 exports 赋值是不管用的

// exports.a = 132;

// exports = {};

// exports.foo = 'bar';

// module.exports.b = 466;

// 最终导出 {
//   a: 132,
//   b: 466
// }

// 给 exports 赋值，会断开与 module.exports 的引用
// 同理，给 module.exports 赋值，也会断开与 exports 的引用
// module.exports = 'hello';

// exports.foo = 'world';

// 导出 hello

exports.foo = 'bar';
module.exports.a = 123;

exports = {
  a: 456
}

module.exports.foo = 'haha';

exports.c = 456;

exports = module.exports;

exports.a = 789;
