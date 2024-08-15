---
update: "2024-05-22 15:35:42"
desc: "对tailwindcss的学习笔记，原子化css真是太好用拉😊，对于自适应又很简单的方法，后面要学习一下unocss"
tags: "css/tailwindcss"
---

# tailwindcss 学习笔记

## 基于父组件状态的样式（group-{modifirer}）

需要根据父元素的状态设置元素的样式时，可以使用类标记父元素`group`,之后再使用`group-*`修饰符例如`group-hover`来设置目标元素的样式。

```html
<a
  href="#"
  class="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
>
  <div class="flex items-center space-x-3">
    <svg
      class="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
      fill="none"
      viewBox="0 0 24 24"
    >
      <!-- ... -->
    </svg>
    <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">
      New project
    </h3>
  </div>
  <p class="text-sm text-slate-500 group-hover:text-white">
    Create a new project from a variety of starting templates.
  </p>
</a>
```

## 自定义颜色

可以通过`-[]`来进行自定义颜色，举个例子假如入背景色是`#323241`，这种情况我们设置`bg-[#323241]`就可以。

## 自定义像素大小

与上诉类似，假如`margin-top:-12px`，我们使用 tailwindCss 实现是：`mt-[-12px]`。

## 社区资源

- <LinkCard link="https://tailspark.co/" desc="350+ TailwindCSS Components to build your site in minutes"></LinkCard>
- <LinkCard link="https://flowbite.com/" desc="Build websites even faster with components on top of Tailwind CSS"></LinkCard>
