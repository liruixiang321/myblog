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
        text: "📚作品集",
        link: "/artworks/index",
      },
      {
        text: "🎨基础知识",
        items: [
          { text: "html", link: "/base/html/" },
          { text: "工程化⚙️", link: "/base/工程化/webpack" },
          { text: "css", link: "/base/css/" },
          { text: "js", link: "/base/js/" },
          { text: "ts", link: "/base/ts/" },
          { text: "前端监控", link: "/base/jiankongimg/" },
        ],
      },
      {
        text: "⚡技术框架",
        link: "/技术框架/",
      },

      {
        text: "✈️技术总结",
        link: "/weeks/",
      },
      {
        text: "🌟好文收藏",
        link: "/article/",
      },
      {
        text: "🔖归档",
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
        // {
        //   text: "我的个人项目",
        //   items: [
        //     { text: "组件库封装", link: "/artworks/components" },
        //     { text: "简历自制", link: "/artworks/resume" },
        //     { text: "前端监控实践", link: "/artworks/femonitor" },
        //   ],
        // },
      ],
      "/base/": [
        {
          text: "html🙌",
          items: [
            {
              text: "html",
              link: "/base/html/",
            },
          ],
        },
        {
          text: "CSS🌈",
          items: [
            {
              text: "tailwindcss上手🍃",
              link: "/base/css/tailwindcss",
            },
            {
              text: "object-fit",
              link: "/base/css/object-fit",
            },
            {
              text: "shadcnUI",
              link: "/base/css/shadcnUI",
            },
          ],
        },
        {
          text: "JS⛪",
          items: [
            {
              text: "改善代码风格",
              link: "/base/js/badCode",
            },
            {
              text: "prefer-const",
              link: "/base/js/whyPreferConst",
            },
            {
              text: "空值合并符??=",
              link: "/base/js/空值合并符",
            },
          ],
        },
        {
          text: "TS🎈",
          items: [
            {
              text: "重学ts",
              link: "/base/ts/index",
            },
            {
              text: "日常开发遇到的问题",
              link: "/base/ts/problems",
            },
          ],
        },
        {
          text: "前端监控🕵️",
          items: [
            {
              text: "前端监控平台",
              link: "/base/jiankongimg/index",
            },
          ],
        },
        {
          text: "工程化",
          items: [
            {
              text: "webpack",
              link: "/base/工程化/webpack",
            },
          ],
        },
      ],
      "weeks/": [
        {
          text: "一些技术上的总结",
          items: [
            {
              text: "前端监控中设计模式",
              link: "/weeks/前端监控系统中的设计模式",
            },
            { text: "大屏展示技术", link: "/weeks/大屏展示数据技术" },
            {
              text: "echarts开发记录",
              link: "/weeks/echarts开发记录",
            },
            { text: "api方案", link: "/weeks/api管理方案" },
            { text: "拒绝代码屎山", link: "/weeks/拒绝代码屎山" },
            { text: "入职第一周工作计划", link: "/weeks/本周工作计划" },
            { text: "换炉算法", link: "/weeks/换炉算法" },
            { text: "死锁问题", link: "/weeks/死锁问题" },
            { text: "Iconify上手体验", link: "/weeks/Iconify上手体验" },
            { text: "github与git的使用", link: "/weeks/git与github的使用" },
            {
              text: "watchEffect的执行时机",
              link: "/weeks/watchEffect执行时机",
            },
            {
              text: "react中的css方案",
              link: "/weeks/react中的css方案",
            },
            {
              text: "diolog组件封装",
              link: "/weeks/diolog组件封装",
            },
            {
              text: "Monorepo和turbo",
              link: "/weeks/Monorepo和turbo",
            },
            {
              text: "npm link",
              link: "/weeks/npmLink",
            },
            {
              text: "单点登录",
              link: "/weeks/单点登录",
            },
            {
              text: "业务组件库实践",
              link: "/weeks/业务组件库实践",
            },
            {
              text: "echarts开发记录",
              link: "/weeks/echarts开发记录",
            },
            {
              text: "实现一个emoji背景墙",
              link: "/weeks/实现一个emoji背景墙",
            },
            {
              text: "elMessage二次封装",
              link: "/weeks/elMessage二次封装",
            },
            {
              text: "Vue动态路由实现",
              link: "/weeks/Vue动态路由实现",
            },
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
      技术框架: [
        {
          text: "Vue3",
          items: [
            { text: "props", link: "/技术框架/props" },
            { text: "pinia", link: "/技术框架/pinia" },
            { text: "reactive", link: "/技术框架/reactive" },
          ],
        },
        {
          text: "react",
          items: [
            { text: "react", link: "/技术框架/react" },
            { text: "reactRouter", link: "/技术框架/reactRouter" },
            { text: "reactHooks", link: "/技术框架/reactHooks" },
            { text: "UmiJS", link: "/技术框架/UmiJS" },
            { text: "reactFiber", link: "/技术框架/reactFiber" },
            { text: "antdPro使用", link: "/技术框架/antdPro使用" },
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
