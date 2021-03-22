var foo = 'foo';

function add(x,y) {
  return x + y
}

// exports.add = add;

// exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现

// exports.str = 'hello';

// 我希望加载得到之间就是一个：
// 方法
// 字符串
// 数字
// 数字

// 如果一个模块需要直接导出某个成员，而非赋值
// 这个时候需要使用 modules 来进行导出

module.exports = add;