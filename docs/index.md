---
layout: home

hero:
  name: 黑暗天使的前端笔记
  text: 你的孤独,虽败犹荣
  tagline: 再艰难,也不要轻易放弃
  actions:
#   第一个按钮
    - theme: brand
      text: 点击进入
      link: /html/html
    #   第二个按钮
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
    #   首页添加图片 (可以写路径,也可以写 html标签)
  image:
    src: /838ba61ea8d3fd1f693c5e58cf65e61495ca5f56.webp
features:
  - icon: <img src="./public/icons/html.svg">
    title: html
    link: /html/html
    details: 点击查看 html 部分
  - icon: <img src="./public/icons/css.svg">
    title: css
    link: /css/css
    details: 点击查看 css 部分
  - icon: <img src="./public/icons/javascript.svg">
    title: javascript
    link: /javascript/javascript
    details: 点击查看 javascript 部分
  - icon: <img src="./public/icons/vue.svg">
    title: vue
    link: /vue/vue
    details: 点击查看 vue 部分
  - icon: <img src="./public/icons/react.svg">
    title: react
    link: /react/react
    details: 点击查看 react 部分
  - icon: <img src="./public/icons/typescript.svg">
    title: typescript
    link: /typescript/typescript
    details: 点击查看 ts 部分
  - icon: <img src="./public/icons/git.svg">
    title: git
    link: /git/git
    details: 点击查看 git 相关
---
<!-- 首行不能有其他东西 -->
<!-- /* :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
} */ -->
<style>

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

  .box{
  align-items:center;
}
</style>