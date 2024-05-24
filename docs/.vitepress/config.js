import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";
export default defineConfig({
  title: "lrx's Blog",
  base: "/myblog/",
  description: "Just playing around.",
  themeConfig: {
    logo: "/1.png",
    search: {
      provider: "local",
    },
    lastUpdated: true,
    nav: [
      {
        text: "作品集",
        link: "/artworks/index",
      },
      {
        text: "基础知识",
        items: [
          { text: "html", link: "/base/html/" },
          { text: "css", link: "/base/css/" },
          { text: "js", link: "/base/js/" },
          { text: "ts", link: "/base/ts/" },
          { text: "前端监控", link: "/base/jiankongimg/" },
        ],
      },
      {
        text: "vue3",
        link: "/vue3/",
      },

      {
        text: "每周总结",
        link: "/weeks/",
      },
      {
        text: "好文收藏",
        link: "/article/",
      },
      {
        text: "归档",
        link: "/归档/",
      },
    ],
    // sideber以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
    sidebar: {
      collapsable: false,
      //是否折叠
      "/artworks/": [
        {
          text: "我的博客",
          items: [{ text: "建站记录", link: "/artworks/vitepressblog" }],
        },
        {
          text: "我的个人项目",
          items: [
            { text: "组件库封装", link: "/artworks/components" },
            { text: "简历自制", link: "/artworks/resume" },
            { text: "前端监控实践", link: "/artworks/femonitor" },
          ],
        },
      ],
      "/base/": [
        {
          text: "html",
          items: [
            {
              text: "html",
              link: "/base/html/",
            },
          ],
        },
        {
          text: "CSS学习🖊",
          items: [
            {
              text: "tailwindcss学习🖊",
              link: "/base/css/tailwindcss",
            },
          ],
        },
        {
          text: "JS学习",
          items: [
            {
              text: "改善代码风格",
              link: "/base/js/badCode",
            },
            {
              text: "prefer-const",
              link: "/base/js/whyPreferConst",
            },
          ],
        },
        {
          text: "TS学习🖊",
          items: [
            {
              text: "日常开发遇到的问题",
              link: "/base/ts/problems",
            },
          ],
        },
        {
          text: "前端监控",
          items: [
            {
              text: "前端监控平台",
              link: "/base/jiankongimg/index",
            },
          ],
        },
      ],
      "weeks/": [
        {
          text: "周报📅",
          items: [{ text: "每周总结", link: "/weeks/index" }],
        },
        {
          text: "入职以来几个月的一些工作上的总结",
          items: [
            { text: "api方案", link: "/weeks/api管理方案" },
            { text: "拒绝代码屎山", link: "/weeks/拒绝代码屎山" },
          ],
        },
      ],
      article: [
        {
          text: "好文收藏",
          items: [
            { text: "前言", link: "/article/index" },
            { text: "技术", link: "/article/tech" },
            { text: "玩具", link: "/article/player" },
          ],
        },
      ],
      vue3: [
        {
          text: "Vue3",
          items: [
            { text: "前言", link: "/vue3/index" },
            { text: "props", link: "/vue3/props" },
            { text: "pinia", link: "/vue3/pinia" },
            { text: "reactive", link: "/vue3/reactive" },
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright © 2023-present lrx",
      message: "inspired by easy-vitepress-blog",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/liruixiang321" }],
  },
  vite: {
    plugins: [Unocss()],
  },
});
