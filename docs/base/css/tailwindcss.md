# tailwindcss学习笔记

## 基于父组件状态的样式（group-{modifirer}）

需要根据父元素的状态设置元素的样式时，可以使用类标记父元素`group`,之后再使用`group-*`修饰符例如`group-hover`来设置目标元素的样式。

```html
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
```

<h2 class="text-blue-500">标题2</h2>