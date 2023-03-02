### 编译和非编译模式

#### Vue.js‌ 3 代码编译结果是什么样子的？
Vue.js 经过编译后产出是 JavaScript 和 CSS 代码，也就是浏览可以直接支持运行的代码。

![](https://static001.geekbang.org/resource/image/cb/c3/cbb0f82bc37a784d0e5d8yy94fb341c3.png?wh=1858x1032)
 Vue.js 代码的编译过程中，主要进行了以下的操作流程：
 1. 把 Vue.js 代码里的模板编译成基于 JavaScript 代码描述的 VNode（虚拟节点）；
 2. 把 Vue.js 代码里 JavaScript 逻辑代码，编译成运行时对应生命周期的逻辑代码；
 3. 最后是把内置的 CSS 样式代码抽离出来。

总结一下，Vue.js 经过编译后产出是 JavaScript 和 CSS 代码，也就是浏览可以直接支持运行的代码。
 ![](https://static001.geekbang.org/resource/image/77/48/77fb709d95e5e14c0133ed8538a8bc48.png?wh=1858x1014)

 #### Vue.js 非编译模式是如何运行的？
![](https://static001.geekbang.org/resource/image/e3/89/e3821a0bb89f29563cd78d794e59f089.png?wh=1860x1024)
Vue.js 3 组件的非编译代码也能直接跟 Vue.js 3 原生语法一一对应上，包括：
* 模板”的对应关系；
* “生命周期逻辑代码”的对应关系。

也可以把 setup 的模板代码，抽出来放到独立的 render 方法里
![](https://static001.geekbang.org/resource/image/2f/7f/2f8496a6069184e5d426131fe018aa7f.png?wh=1876x902)

#### 更简单的非编译模式写法
我们前面讲了，用 createElementVNode 等 API 描述 VNode，会带来很多书写模板代码的成本。
Vue.js.h: Vue.js3 本身提供了一种更加简便的 API 来统一描述 VNode，而且不需要关心不同类型 VNode 的不同 API的方法。
![](https://static001.geekbang.org/resource/image/c5/0b/c5a09f3867946ed95b3a23676fa11b0b.png?wh=1824x984)

Vue.js.h 的写法跟原始 VNode API 写法相比，模板内容更加简短清晰。
![](https://static001.geekbang.org/resource/image/f3/f4/f379871143e55b6e26267713491a2bf4.png?wh=1852x980)
Vue.js.h 与 Vue.js 3 原生写法相比，你会发现其实它也会多写一些 API 代码来描述模板。

还有更加简单的非编译模式就是 Template 写法的非编译模式，如下图所示：
![](https://static001.geekbang.org/resource/image/59/fb/59yye4ecd88c2bd3a1665f7df6e677fb.png?wh=1852x870)
非编译的 Template 写法跟原生 Vue.js 3 写法最为接近，可以直接用字符串写模板，达到模板代码和 JavaScript 逻辑代码的分离的效果。而且，不需要通过 Webpack、Vite 等构建器编译，就可以直接在浏览器上运行。

这里的“非编译”指的只是不需要在开发过程中编译，最终它还是需要编译成 VNode 才能在浏览器里运行，那么这个编译过程会在哪进行呢？
答案就是<b>在浏览器里进行编译</b>。