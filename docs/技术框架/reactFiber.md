---
updateTime: "2024-07-31 17:28:09"
desc: "reactFiber"
tags: "reactFiber/学习"
---

# reactFiber

官方推荐的一篇文章

<LinkCard link="https://github.com/acdlite/react-fiber-architecture" desc="What is “React Fiber”?"></LinkCard>

## react Fiber 在 react 中的角色

react 核心理念分为三个部分：

1.React Core：处理最核心的 APIs，与终端平台解耦

2.React Render：渲染器定义了一个 React Tree，来处理如何接轨不同的平台
比如， react-dom 渲染为浏览器 DOM；React Native 渲染为原生视图；

3.Reconciler: 负责 diff 算法，进行 patch 行为。
可以被各种 render 公用，提供基础的计算能力。目前主要有两类 reconciler：
（1） stack reconciler，15 以及更早期的版本使用
（2） Fiber reconciler，新一代的架构；
Fiber 就是为了解决之前 react 的问题，进行组件渲染时，从 setState 开始到渲染完成整个过程是同步的。如果需要渲染的组件比较庞大，js 执行会阻塞主线程，会导致页面响应度变差，使得 react 在动画、手势等应用中效果比较差。

核心思想~~1.让渲染有优先级；2.可中断

<LinkCard link="https://blog.csdn.net/m0_46486849/article/details/128631509" desc="React16、17、18优化点大汇总"></LinkCard>

详细介绍了 fiber 架构的改进历史。
