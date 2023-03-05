### 如何用 Webpack 初构建 Vue 3 项目？

#### Webpack 和 Vite 有什么区别？

对比这两种技术工具的定位:<br/>
Vite 定位是 Web“开发工具链”，其内置了一些打包构建工具，让开发者开箱即用，例如预设了 Web 开发模式直接使用 ESM 能力，开发过程中可以通过浏览器的 ESM 能力按需加载当前开发页面的相关资源。
Webpack 定位是构建“打包工具”，面向的是前端代码的编译打包过程。Webpack 能力很单一，就是提供一个打包构建的能力，如果有特定的构建需要，必须让开发者来选择合适的 Loader 和 Plugin 进行组合配置，达到最终的想要的打包效果。

相似与区别：
<br/>
基本就是对前端代码进行打包构建处理。区别是 Vite 内置了很多工具，可以减少很多配置工作量；而 Webpack 只是简单的打包工具架子，需要开发者一开始准备很多配置处理，不像 Vite 那样能开箱即用，需要花些功夫进行选择 Webpack 的 Loader 和 Plugin 进行配置。

#### 如何用 Webpack 搭建 Vue.js 3 项目?

用 Webpack 来搭建 Vue.js 3 项目，我们可以将最初始的项目搭建分成这几个步骤：

1. 项目目录和源码准备；
2. 安装依赖；
3. 配置 Webpack 的 Vue.js 3 编译配置；
4. 执行 Vue.js 3 编译。

第一步就是要先准备好项目目录，如下所示：
```
.
├── dist/*
├── package.json
├── src
│   ├── app.vue
│   └── index.js
└── webpack.config.js
```
- dist， 是一个文件夹，为 Vue.js 3 代码的编译结果目录，最后的编译结果都是前端静态资源文件，例如 JavaScript、CSS 和 HTML 等文件；
- package.json，是一个 JSON 文件，为 Node.js 项目的声明文件，声明了模块依赖、脚本定义和版本名称等内容；
- src，是一个文件夹，为 Vue.js3 项目的源码目录，主要开发的代码内容都放在这个文件夹里；
- webpack.config.js，是一个 JavaScript 文件，是本次 Vue.js 3 项目核心内容，主要是 Webpack 配置代码。

code...

第二步，安装依赖的 npm 模块了，也就是安装项目所需要的 npm 模块。

步骤三的 Webpack 配置。

- mode: 这是声明了 Webpack 的打包模式是生产的编译模式。这里一般有两种选项，生产（production）和开发（development）模式
- entry: 是声明了 Webpack 要执行打包构建编译时候从哪个文件开始编译的“入口文件”。
- output: 是声明 Webpack 编译的出口文件，也就是编译结果要放在哪个目录下的哪个文件里，这里我就对应地配置出口目录配置在 dist 文件夹里。
- module: 这是 Webpack 打包构建的核心所在，你可以根据自己项目的打包需要，选择对应的打包加载器（Loader）来处理指定的打包文件。
- plugins: 这个是 Webpack 的插件配置，主要是贯穿 Webpack 的整个打包的生命周期。
- externals: 这个是声明在 Webpack 打包编译过程中，有哪些源码依赖的 npm 模块需要“排除打包”处理，也就是不做打包整合处理。

接下来就进入最终步骤了，也就是编译脚本配置。<br/>
这个编译脚本可以让你在当前目录的命令行工具里，直接执行 npm run build.

#### Webpack 开发模式和生产模式

Node.js 在执行命令脚本时候，如果带上参数 NODE_ENV=production，完整的脚本命令是 NODE_ENV=production webpack -c ./webpack.config.js 。
那么 webpack.config.js 文件在执行的时候，可以在  process.env 拿到环境变量 NODE_ENV，也就是可以拿到 process.env.NODE_ENV = production。

#### 开发模式处理
#### 生产模式处理

> 此文章为3月Day3学习笔记，内容来源于极客时间《Vue 3 企业级项目实战课》，学习使我快乐，每天进步一点点💪💪
