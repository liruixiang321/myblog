---
updateTime: "2024-07-19 09:47:34"
desc: "react中的css流行方案"
tags: "css/react"
---

# react 中的 css 流行方案

## module css

- css modules 并不是 React 特有的解决方案，而是所有使用了 wepack 配置的环境下都可以使用。
  - 但是，如果在其他项目中使用，那么我们需要自己来进行配置，比如配置 webpack.config,js 中的 modules: true 等。
- React 的脚手架已经内置了 css modules 的配置:
  - .less/.scss/.css 等样式文件都修改成.module.css/.module.less/.module.scss 之后就可以引用并且进行使用了。
- css modules 确实解决了局部作用域的问题， 也是很多人喜欢在 React 中使用的一种方案。
- 但是这种方案也有自己的缺陷：
  - 引用的类名，不能使用连接符(.home-title)，在 JavScript 中是不识别的;
  - 所有的 className 都必须使用{style.className}的形式来编写；
  - 不方便动态来修改某些样式，依然需要使用内联样式的方式;

## css-in-js
