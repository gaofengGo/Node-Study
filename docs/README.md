## Node.js 介绍

### 为什么要学习 Node.js

- 企业需求
  + 具有服务端开发经验更好
  + front-end
  + back-end 
  + 全栈工程师
    * 全干
  + 基本的网页开发能力
    * 服务端
    * 前端
    * 运维部署
  + 多人社区

### Node.js 是什么

- Node.js 是 JavaScript 的运行环境
  + Node.js 不是一门语言
  + Node.js不是库、不是框架
  + Node.js是一个 JavaScript 运行时环境
  + 简单点来讲
- 浏览器中的 JavaScript
  + EcmaScript
    * 基本的语法
    * if
    * var 
    * function
    * Object
    * Array
  + BOM
  + DOM
- Node.js 中的 Javascript
  + 没有 BOM、DOM
  + EcmaScript
  + 在 Node 这个JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作API
    * 列入文件读写
    * 网络服务的构建
    * 网络通信
    * http 服务器
    * 等处理。。。
  + Node.js 的特性
    - 事件驱动
    - 非阻塞IO模型（异步）
    - 轻量和高效
- 构建于 Chrome 的 V8 引擎之上
  + 代码只是具有特定格式的字符串而已
  + 引擎可以认识代码，帮你去解析和执行
  + Node.js 的作者把 Goole Chrome 中的 V8 引擎移植了出来，开发了一个独立的 JavaScript 的运行时环境
  
### Node.js 能做什么

  - Web 服务器后台
  - 命令行工具
    + npm（node）
    + git（c 语言）
    + hexo（node）
    + 。。。
  - 对于前端工程师来讲，接触 node 最多的是它的命令行工具

### 预备知识

  - HTML
  - CSS
  - Javascript
  - 简单的命令行操作
    + cd
    + dir
    + ls
    + mkdir
    + rm
  - 具有服务端开发经验更加

### 这门课能学到啥
  - B/S 编程模型
    + Browser - Server
    + back-end
    + 任何服务端技术这种 BS 编程模型都是一样的，和语言无关
    + Node 只是作为外面学习 BS 编程模型的一个工具而已
  - 模块化编程
    + `@import('文件路径')`
    + 以前认知的 JavaScript 只能通过 `script` 标签来加载
    + 在 Node 中可以通过`@import()`一样来引用和加载 JavaScript 脚本文件
  - Node 常用API
  - 异步编程
    + 回调函数
    + Promise
    + async
    + generator
  - Express Web 开发框架
  - ES6

## Node 中的 JavaScript

- EcmaScript
- 核心模块
- 第三方模块
- 用户自定义模块

### 核心模块

Node 为 JavaScript 提供了很多服务器级别的 API，这些 API 绝大多数都被包装到一个个具名的核心模块中。
例如文件操作的`fs`, http服务的`http`, 操作系统的`os`,操作路径的`path`

## Node 中的模块系统
  - ecs
  - 核心模块
    + fs 文件操作
    + http http服务
    + url 路径处理
    + path 路径出来
    + os 操作系统信息
  - 第三方模块
    + art-template
    + 必须通过 npm 来下载使用
    + 自己写的模块

### 什么是模块化
- 文件作用域
- 通信规则
  + 加载
  + 导出

### CommonJs 模块规范
在 Node 中的 JavaScript 有一个很重要的概率：模块系统
- 模块作用域
- 用 require 来加载模块
- 用 exports 接口对象来来导出模块中的成员

#### 加载 `require`
语法：
```js
  var 自定义变量 = require('模块') 
```
两个作用:
- 执行被加载模块中的代码
- 得到加载模块中 exports 导出接口对象

#### 导出 `exports`
- Node 中是模块作用域，默认文件中所有成员只在当前文件模块有效
- 对于希望可以被其他模块访问的成员，需要把这些公开的成员挂载到 `exports` 接口对象中
- 导出多个成员（必须在对象中）
```js
exports.a = 123;
exports.b = 'hello';
exporst.c = function () {
  console.log('ccc');
};
// 或者
module.exports = {
  a: 123,
  b: 235,
  c: function () {
    console.log('ccc');
  }
}
```
- 导出单个成员（方法，字符串）
```js
module.exports = 'hello';
```
- 以下情况会覆盖：
```js
module.exports = 'hello';

module.exports = function( ) {
  console.log('s')
};
```

#### require 方法加载规则
  - 优先从缓存加载
  - 判断模块标识
    + 核心模块
    + 第三方模块
    + 自己写的模块
  - 模块查找机制
    + 优先从缓存加载
    + 核心模块
    + 路径形式的文件模块
    + 第三方模块
      - node_modules art-template
      - node_modules art-template package.json
      - node_modules art-template package.json main
      - index.js 是备选项
      - 进入上一层目录查找 node_modules
      - 按照这个规则依次查找,直到磁盘根目录还没找到,最后报错: can not find module xxx
    + 一个项目有且仅有一个 node_modules 在项目的根目录下

### npm 

#### npm 常用命令
- npm init
  + npm init -y 可以跳过想到，快速生成
- npm install
  + 一次性把 dependencies 选项中的依赖像全部安装
  + npm i 
- npm install <包名>
  + npm i <包名>
- npm uninstall <包名>
- npm -help
  + 查看帮助
- npm <命令> -help
  + 查看指定命令的帮助
  + 例如： npm uninstall -help ,可查看 uninstall 的缩写

#### 解决 npm 被墙问题
npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题。
http://npm.taobao.org/ 淘宝的团队把 npm 在国内做了一个备份

安装淘宝的 cnpm:
```shell
  npm install --global cnpm
```
接下来你安装包的时候把之前的`npm`替换成`cnpm`
举个例子：
```shell
# 走的还是国外的 npm 服务器，速度比较慢
npm install jquery
# 使用 cnpm 就会通过淘宝的镜像服务器来下载 jquery
cnpm install jquery
```
如果不想安装`cnpm`又想使用淘宝的服务器来下载
```shell
npm install jquery --registry=http://registry.npm.tapbao.org
```
但是每一次都手动加参数很麻烦，所以我们可以把这个选项加入配置文件中：
```shell
npm config set registry http://registry.npm.tapbao.org
# 查看 npm 配置信息
npm config list
```

### package.json
每个项目最好都有一个 package.json 文件（包说明文件）
可以执行命令 `npm init` 自动生成  