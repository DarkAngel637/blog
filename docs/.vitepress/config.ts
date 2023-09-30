/*
 * @Author: Dark Angel
 * @Date: 2023-09-29 23:34:35
 * @LastEditTime: 2023-09-30 21:42:19
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\.vitepress\config.ts
 */
/*
 * @Author: Dark Angel
 * @Date: 2023-09-02 02:31:38
 * @LastEditTime: 2023-09-30 17:58:13
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\.vitepress\config.ts
 */
import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
// 站点配置
export default defineConfig({
  lang: 'zh-CN',
  title: '前端笔记',
  head:[["link",{rel:"icon",href:"/1000.webp"}]],
  base: "/blog",
  description: '神威难藏泪,满眼皆是琳 --- 致敬土哥',
  outDir:"../dist",
  themeConfig: {
    logo:"/fav.jpg",
    // 头部导航
    // nav: [
    //   { text: '技术', link: '/example' },// link 前面是从 docs 开始算起路径
    //   // { text: 'Example2', link: '/example2' },
    //   {
    //     text: '技术',
    //     items: [
    //       { text: '面试', link: '/example' },
    //       // { text: 'Example2', link: '/example2' },
    //       // ...
    //     ],
    //   },
    //   // {
    //   //   text: 'Dropdown Menu',
    //   //   items: [
    //   //     { text: 'Item A', link: '/item-1' },
    //   //     { text: 'Item B', link: '/item-2' },
    //   //     { text: 'Item C', link: '/item-3' },
    //   //   ],
    //   // },

    //   // ...
    // ],
// 侧边导航
    sidebar: [
      {
        text: 'html',
        collapsed:true,
        base:"/html",
        items: [
          { text: 'html', link: '/page.md' },
          { text: 'h5', link: '/h5.md' },
        ],
      },
      {
        text: 'css',
        collapsed:true,
        base:"/css",
        items: [
          { text: 'css', link: '/page.md' },
        ],
      },
      {
        text: 'javascript',
        collapsed:true,
        base:"/javascript",
        items: [
          { text: 'javascript', link: '/page.md' },
          { text: 'es6 语法', link: '/es6.md' },
        ],
      },
      
      {
        text: '前端框架',
        base:"/frame",
        collapsed:true,
        items: [
          { text: 'vue', link: '/vue/page.md' },
          { text: 'react', link: '/react/page.md' },
          { text: 'webpack', link: '/webpack/page.md' },
        ],
      },
      {
        text: 'typescript',
        base:"/typescript",
        collapsed:true,
        items: [
          { text: 'typescript', link: '/page.md' },
        ],
      },
      {
        text: 'http',
        base:"/abouthttp",
        collapsed:true,
        items: [
          { text: 'http', link: '/page.md' },
        ],
      },
      {
        text: 'git',
        collapsed:true,
        base:"/git",
        items: [
          { text: 'git 命令(不全)', link: '/page'},
        ],
      },
      {
        text: 'nodejs',
        collapsed:true,
        base:"/node",
        items: [
          { text: 'nodejs 基础', link: '/base'},
          { text: 'npm', link: '/npm'},
          { text: 'koa', link: '/koa'},
          { text: 'egg 基础', link: '/egg'},
        ],
      },
    ],
    // 头部搜索框
    search: {
      provider: 'local',
      // options: {
        // appId: '8J64VVRP8K',
        // apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        // indexName: 'vitepress'
      // }
    },
    aside: true,
    outline: "deep",
    outlineTitle: "大纲",
    docFooter: {
      prev: "⬅",
      next: "➡",
    },
  },
});
