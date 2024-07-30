---
updateTime: "2024-07-29 11:29:10"
desc: "reactHooks"
tags: "reactHooks/学习"
---

# reactHooks

Hook 就是 JavaScript 函数，这个函数可以帮助你 钩入(hook into)
React State 以及生命周期等特性;

优势:

- 它可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性;
- 但是我们可以由此延伸出非常多的用法，来让我们前可所提到的问题得到解决;

Hook 的使用场景

- Hook 的出现基本可以代替我们之前所有使用 class 组件的地方(除了一些非常不常用的场景);
- 但是如果是一个旧的项目，你并不需要直接将所有的代码重构为 Hooks，因为它完全向下兼容，你可以渐进式的来使用它
- Hook 只能在函数组件中使用，不能在类组件，或者函数组件之外的地方使用;

## useEffectHooks
