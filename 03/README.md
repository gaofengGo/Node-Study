## 上午总结
- 301 和 302 状态码的区别
  + 301 是永久重定向，浏览器会有缓存页面重定向
  + 302 是临时的，每次访问 A 页面，都要重新请求一遍，然后再重定向到 B 页面
- exports 和module.exports 的区别
  + exports 是 module.exports 的引用 `var exports = module.exports`，为了使用者简便运用
  + 每个 node 文件都会有一个 module 对象, module 里面有一个 exports 对象
  + 每个 node 文件在文件末尾会默认 `return module.exports`