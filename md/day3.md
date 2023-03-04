### 如何用Vite构建你的Vue 3项目？

<b>Vite：Vue.js 3 的官方标配</b>

#### 为什么 Vite 能在开发模式中快速编译代码呢？
因为 Vite 用了 esbuild。而 esbuild 是用 Go 语言编写的构建器，和普通 JavaScript 实现的构建器相比，它的打包速度能快 10~100 倍。<br/>
不过，截止到 2022 年，在 Vue.js 官方发布的 Vite 最新版 3.x 中，只有开发模式是用 esbuild 进行代码编译，而生产模式依旧是用 Rollup 进行打包和编译。

#### Rollup 如何配置 Vue.js 3 项目？
用 Rollup 来搭建 Vue.js 3 项目，可以分成以下几个步骤：<br/>
1. 项目目录和源码准备；
2. 安装依赖；Vue.js 3 的 Rollup 编译脚本配置；
3. 执行开发模式和生产模式的 Vue.js 3 编译。
第一步就是要先准备好项目目录，如下所示：
```
.
├── dist/*
├── index.html
├── package.json
├── rollup.config.js
└── src
    ├── app.vue
    └── index.js
```
- dist,是一个文件夹，为 Vue.js 3 代码的编译结果目录，最后的编译结果都是前端静态资源文件，例如 JavaScript、CSS 和 HTML 等文件；
- index.html，是项目的 HTML 页面文件；
- package.json，是一个 JSON 文件，为 Node.js 项目的声明文件，声明了模块依赖、脚本定义和版本名称等内容；
- rollup.config.js，是一个 JavaScript 文件，是本次 Vue.js 3 项目核心内容，主要是 Webpack 配置代码。
- src，是一个文件夹，为 Vue.js 3 项目的源码目录，主要开发的代码内容都放在这个文件夹里。

第二步安装 Rollup 项目依赖的 npm 模块了，也就是安装项目所需要的 npm 模块。<br />
- @babel/core，Babel 官方模块，用来编译 JavaScript 代码；
- @babel/preset-env，Babel 官方预设模块，用来辅助 @babel/core 编译最新的 ES 特性；
- @rollup/plugin-babel，Rollup 的 Babel 插件，必须配合 @bable/core 和 @babel/preset-env 一起使用；
- @rollup/plugin-commonjs，是 Rollup 官方插件，用来处理打包编译过程中 CommonJS 模块类型的源码；
- @rollup/plugin-html，是 Rollup 官方插件，用来管理项目的 HTML 页面文件；
- @rollup/plugin-node-resolve，是 Rollup 官方插件，用来打包处理项目源码在 node_modules 里的使用第三方 npm 模块源码；
- @rollup/plugin-replace，是 Rollup 官方插件，用来替换源码内容，例如 JavaScript 源码的全局变量 process.env.NODE_ENV；
- rollup，Rollup 的核心模块，用来执行 Rollup 项目的编译操作；
- rollup-plugin-postcss，第三方模块，用于将 Vue.js 项目源码的 CSS 内容分离出独立 CSS 文件；
- rollup-plugin-serve，第三方模块，用于 Rollup 项目开发模式的 HTTP 服务；
- rollup-plugin-vue，Vue.js 官方提供的 Rollup 插件模块。

步骤三的 Rollup 配置。
-input，是声明了 Rollup 要执行打包构建编译时候从哪个文件开始编译的“入口文件”；
-output，是声明 Rollup 编译的出口文件，也就是编译结果要放在哪个目录下的哪个文件里，这里我就对应地把出口目录配置在 dist 文件夹里；
-plugins，这个是 Rollup 的插件配置，主要是贯穿 Rollup 的整个打包的生命周期。
<b>Rollup的配置相比Webpack简单很多</b>

### 改成 Vite 项目后会怎样？
第一步，项目目录和源码准备，如下所示：
```
.
├── dist
├── index.html
├── package.json
├── src
│   ├── app.vue
│   └── index.js
└── vite.config.js
```
第二步，安装依赖。
```
npm i --save-dev vite @vitejs/plugin-vue
```
项目开发的模块依赖比 Rollup 少了很多？只有简单的两个依赖。<br />
第三步，配置 Vite 的 Vue.js 3 编译配置，也就是在 vite.config.js 配置 Vite 的编译配置。<br/>
第四步，执行开发模式和生产模式的 Vue.js 3 编译，在 package.json 配置开发模式和生产模式的脚本命令。<br/>

#### 那么，是不是 Rollup 和 VIte 之间的差别仅仅只有配置的难易呢？
答案是否定的。除了配置的难易差别外，两者之间还有不同开发编译模式的差异，但是这些差异都是对使用者无感知的，因为 Vite 底层已经做了很多优化工作，让开发者只关注简单的配置就能开箱即用。

<b>我们先来看一下 Rollup 开发模式的执行过程：</b>

1. 启动 Rollup 开发模式命令，Rollup 识别配置里的编译入口（input），从入口文件解析出所有依赖代码，进行编译；
2. 编译完后启动 HTTP 开发服务，同时也继续监听源码变化；
3. 开发者用浏览器访问页面；
4. 再次修改代码，Rollup 监听到源码变化，再整体重新编译代码。

![](https://static001.geekbang.org/resource/image/6f/3f/6f219bf8b0e839cd3c9c05e6e44aa93f.png?wh=1920x1293)
Rollup 是直接把所有代码打包成 Bundle 文件格式，也就是最后只生成一个 JavaScript 文件和 CSS 文件。这种打包成一个文件的过程是最费时间的，所以 Vite 在开发模式下的理念就不用这套方式，只保留在 Vite 的生产模式中使用。
<br/>
<b>而 Vite 的开发模式执行过程又是另一番场景，具体执行过程如下：</b>

1. Vite 开发模式命令，VIte 启动 HTTP 服务和监听源码的变化；
2. 开发者用浏览器访问页面；
3. Vite 根据访问页面引用的 ESM 类型的 JavaScript 文件进行查找依赖，并将依赖通过 esbuild 编译成 ESM 模块的代码，保存在 node_modules/.vite/ 目录下；
4. 浏览器的 ESM 加载特性会根据页面依赖到 ESM 模块自动进行按需加载。
    1. 再次修改代码，再次访问页面，会自动执行 ESM 按需加载，同时触发依赖到的变更文件重新单独编译；
    2. 修改代码只会触发刷新页面，不会直接触发代码编译，而且源码编译是浏览器通过 ESM 模块加载访问到对应文件才进行编译的；
    3. 开发模式下因为项目源码是通过 esbuild 编译，所以速度比 Rollup 快，同时由于是按页面里请求依赖进行按需编译，所以整体打包编译速度理论上是比 Rollup 快一些。

你也可以看下 Vite 在开发模式下浏览器访问的效果图片：
![](https://static001.geekbang.org/resource/image/fa/f2/fa1b9179346b8d8a7c2c294194125af2.png?wh=1920x1266)
你可以看到，所有加载的 JavaScript 文件都是 ESM 模块文件。这些项目源码文件和 npm 依赖模块都是经过 esbuild 快速单独编译封装的 ESM 模块文件，不需要像 Rollup 那样经过重新分析语法和文件打包编译一个 Bundle 文件，省去了很多编译时间，这就是 Vite 为什么在开发模式下能快速编译的原因。

### ‌年轻的 Vite 能用于企业级项目吗？
这个答案是可以的。我们前面说过企业项目最重要的是稳定，Vite 目前在生产模式下是通过 Rollup 进行打包编译项目源码的，基于 Rollup 丰富的技术生态，也能解决大部分企业级项目遇到的问题。<br/>
需要注意的是，vite 开发环境和生产环境的打包编译源码的机制不一样，可能存在两个环境打包结果不一致的情况。

> 此文章为3月Day4学习笔记，内容来源于极客时间《Vue 3 企业级项目实战课》，学习使我快乐，每天进步一点点💪💪
