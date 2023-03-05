### 模版语法和JSX语法：你知道Vue可以用JSX写吗？

#### 什么是模板语法？
我们可以把 Vue.js 的模板语法，直接理解为 HTML 语法的一种扩展，它所有的模板节点声明、属性设置和事件注册等都是按照 HTML 的语法来进行扩展设计的。
按照官方的说法就是“所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析”。

code...

#### Vue.js 3 的 JSX 语法是怎样的？
JSX 语法，是 JavaScript 语法的一种语法扩展，支持在 JavaScript 直接写类似 HTML 的模板代码，你可以直接理解为“HTML in JavaScript”。<br/>

JSX 语法其实可以直接看做是纯 JavaScript 文件代码，在 JavaScript 文件代码里定义 Vue.js 3 组件可以通过 API defineComponent 来进行声明定义：
```
import { defineComponent } from 'vue';
const Counter = defineComponent({
  // ...
})
```
而模板语法有组件视图层相关的代码，类比 JSX 语法里定义组件中的 render 方法，如下述代码所示：
```
const Counter = defineComponent({
  // ...
  render(ctx) {
    const { state, onClick } = ctx;
    return (
      <div class="counter">
        <div class="text">Count: {state.count}</div>
        <button class="btn" onClick={onClick}>Add</button>
      </div>
    )
  }
  // ...
});
```
需要注意的是，所有 JSX 写法中都是用单大括号“{state.count}”来作为内部变量处理，而 Vue.js 3 模板语法是通过双大括号来表示“{{state.count}}”，单大括号描述变量这个是 JSX 通用写法，Vue.js 的 JSX 语法也是遵循了这个通用写法。

#### 模板语法和 JSX 语法有什么区别？
首先，最大的区别就是模板语法能通过设置标签 &lt;style&gt; 属性 scoped，让 CSS 和对应的 DOM 在编译后能加上随机的 CSS 属性选择器，避免干扰其它同名 class 名称的样式
“动态组件”场景下，相比模板语法，JSX 有更加灵活的功能实现和后续代码维护。<b>但是这个代码的开发和维护的难度并不是绝对的，而是相对的。</b>

<b>其实两种语法不是互斥的，而是可以共存互相使用的</b>，所以在基于 Vue.js 3 开发的项目里，我们可以这么选择开发语法：

* 普通功能开发以模板语法为主，方便照顾到团队里不同技术能力程度的组员，让项目技术实现沟通起来方便些；
* 模板语法比较难实现的功能就换成 JSX 语法实现，例如一些对话框等动态组件场景，主要为了功能灵活实现和后续代码维护。