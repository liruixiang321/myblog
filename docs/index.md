---
layout: home

hero:
  name: Lrx's的前端旅途
  text:
  tagline: 努力努力再努力💪！
  image: /1.png
  actions:
    - theme: brand
      text: 让我康康
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

features:
  - icon: 🙋‍
    title: 前端基础知识
    details: Typescript 前端工程化...
  - icon: 📚
    title: 前端工作日常
    details: 开发工具使用 踩坑记录...
  - icon: 🛠️
    title: 学习总结
    details: Vue3 leetcode...
---

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f55a3e, #7c9eb7);
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #f55a3e 50%, #7c9eb7 50% );
  --vp-home-hero-image-filter: blur(40px);
}
</style>
