/*
 * @Author: Dark Angel
 * @Date: 2023-09-02 02:31:38
 * @LastEditTime: 2023-09-29 23:19:56
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
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
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
          { text: 'html', link: '/index' },
          { text: 'h5', link: '/h5' },
        ],
      },
      {
        text: 'css',
        collapsed:true,
        base:"/css",
        items: [
          { text: 'css', link: '/index' },
        ],
      },
      {
        text: 'javascript',
        collapsed:true,
        base:"/javascript",
        items: [
          { text: 'javascript', link: '/index' },
          { text: 'es6 语法', link: '/es6' },
        ],
      },
      
      {
        text: '前端框架',
        base:"/frame",
        collapsed:true,
        items: [
          { text: 'vue', link: '/vue/index' },
          { text: 'react', link: '/react/index' },
          // ...
        ],
      },
      {
        text: 'git',
        collapsed:true,
        items: [
          { text: 'git 命令(不全)', link: '/git/index'},
        ],
      },
      
     
    ],
    // 头部搜索框
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     // appId: '8J64VVRP8K',
    //     // apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     // indexName: 'vitepress'
    //   }
    // },
  },
});
