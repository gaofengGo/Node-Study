// 如果是非路径的模块标识
// ./
// ../
// /xx 几乎不用
// 首位的 / 在这里标识的是当前文件模块所属磁盘根路径 （C:/）
// require('foo.js')

// 核心模块本质也是文件
// 核心模块已经被编译成二进制文件中，我们只需要按照名字来加载就可以了
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过 npm 来下载
// 使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字一样的
//既不是核心模块，也不是路径形式的模块
//    先找到当前文件所处目录中的 node_modules 目录
//    node_modules/art-template
//    node_modules/art-template/package.json 文件
//    node_modules/art-template/package.json 文件中的 main 属性
//    main 记录了 art-template 的入口模块
//    然后加载使用了这个第三方包
//    实际上最终加载的还是这个文件
//
//    如果 package.json 文件不存在或者 main 指定的入口模块是没有的
//    则 Node 会自动找该目录下的 index.js
//    也就是说 index.js 会作为一个默认备选项
//
//    如果以上任何一个条件都不成立，则会进入上一级目录中的 node_modles 目录中查找
//    。。。
//    如果直到磁盘目录还没找到，最后报错
//      can not find module xxx
// 
//  注意：我们的一个项目只有一个 node_modules, 放在项目根目录中，这样的话项目中所有的子目录都每访问到
//  不会出现多个 node_modules
//  模块查找机制：
//      优先从缓存加载
//      核心模块
//      路径形式的文件模块
//      第三方模块
//          node_modules art-template
//          node_modules art-template package.json
//          node_modules art-template package.json main
//          index.js 是备选项
//          进入上一层目录查找 node_modules
//          按照这个规则依次查找,直到磁盘根目录还没找到,最后报错: can not find module xxx
//      一个项目有且仅有一个 node_modules 在项目的根目录下
var template = require('art-template');
var a = require('gf');
a();

