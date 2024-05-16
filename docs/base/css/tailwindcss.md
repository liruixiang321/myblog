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


## 自定义颜色

可以通过`-[]`来进行自定义颜色，举个例子假如入背景色是`#323241`，这种情况我们设置`bg-[#323241]`就可以。

## 自定义像素大小

与上诉类似，假如`margin-top:-12px`，我们使用tailwindCss实现是：`mt-[-12px]`。