module.exports = {
  title: "lrx's Blog",
  base: "/myblog/",
  description: "Just playing around.",
  themeConfig: {
    logo: "/1.png",
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "作品集",
        link: "/artworks/",
      },
      {
        text: "基础知识",
        items: [
          { text: "html", link: "/base/html/" },
          { text: "css", link: "/base/css/" },
          { text: "js", link: "/base/js/" },
          { text: "ts", link: "/base/ts/" },
          { text: "前端监控", link: "/artworks/jiankong" },
        ],
      },
      {
        text: "vue3",
        items: [
          { text: "前言", link: "/vue3/" },
          { text: "props", link: "/vue3/props" },
          { text: "pinia", link: "/vue3/pinia" },
          { text: "reactive", link: "/vue3/reactive" },
        ],
      },
      {
        text: "需求杂症",
        link: "/xuqiuzazhen/",
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
        text: "Leetcode",
        link: "/leetcode/",
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
      "/base/ts": [
        {
          text: "TS学习🖊",
          items: [
            { text: "日常学习", link: "/base/ts/index" },
            {
              text: "日常开发遇到的问题",
              link: "/base/ts/problems",
            },
          ],
        },
      ],
      "/base/css": [
        {
          text: "CSS学习🖊",
          items: [
            { text: "前言", link: "/base/css/index" },
            {
              text: "tailwindcss学习🖊",
              link: "/base/css/tailwindcss",
            },
          ],
        },
      ],
      "base/js": [
        {
          text: "JS学习",
          items: [
            { text: "前言", link: "/base/js/index" },
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
    },
    socialLinks: [{ icon: "github", link: "https://github.com/liruixiang321" }],
  },
};
