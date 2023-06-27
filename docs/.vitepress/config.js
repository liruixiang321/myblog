module.exports = {
  title: "lrx's Blog",
  base: '/myblog/',
  description: 'Just playing around.',
  themeConfig: {
      logo:'/1.png',
      nav: [
          {
              text: '作品集',
              link:'/artworks/'
          },
          {
              text:'基础知识',
              items:[
               { text:'html',link:'/base/html/'},
               { text:'css',link:'/base/css/'},
               { text:'js',link:'/base/js/'},
               { text:'ts',link:'/base/ts/'}
              ]
          },
          {
              text:'vue3',
              link:'/vue3/'
          },
          {
              text:'需求杂症',
              link:'/xuqiuzazhen/'
          },
          {
            text:'每周总结',
            link:'/weeks/'
          },
          {
            text:'Leetcode',
            link:'/leetcode/'
          }
      ],
      // sideber以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
      sidebar: {
          collapsable: false,
            //是否折叠
          '/artworks/': [
              {
                  text: '我的博客',
                  items: [
                      { text: '建站记录', link: '/artworks/vitepressblog' }
                  ]
              },
              {
                text:'我的开源项目',
                items:[
                  {text:'...1', link:'/work/opensource'},
                ]
              }
          ]
      }
  }
}