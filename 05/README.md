# Node.js 第五天课堂比较

## 知识点

- Express
- MongoDB
- 项目
  + 一天半的时间

## 上午总结

- 回调函数
  - 异步编程
  - 如果需要得到一个函数内部异步操作的结果，这时必须通过回调函数来获取
  - 在调用的位置传递一个函数进来
  - 在封装的函数内部调用传递进来的函数
- Array 的方法 : 可以通过 `Array.prototype` 查看
  - every 都满足条件返回 true
  - some 有一个满足条件返回 true
  - includes 
  - map
  - reduce 归并方法
- package-lock.json(yarn.lock) 文件的作用
  - 下载速度变快了
  - 锁定版本
- JavaScript 模块化
  - Node 中的 CommonJS
  - 浏览器中的
    - AMD require.js
    - CMD sea.js
  - EcmaScript 官方在 ES6 中增加了官方支持
  - ES6
  - 编译工具可以将 高版本的 ES6、7 等转成浏览器认识的版本