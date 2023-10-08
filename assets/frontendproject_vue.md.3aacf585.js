import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.7204edfa.js";const u=JSON.parse('{"title":"从 0 搭建 Vite 3 + Vue 3 前端工程化项目","description":"","frontmatter":{},"headers":[],"relativePath":"frontendproject/vue.md","filePath":"frontendproject/vue.md"}'),p={name:"frontendproject/vue.md"},o=l(`<h1 id="从-0-搭建-vite-3-vue-3-前端工程化项目" tabindex="-1">从 0 搭建 Vite 3 + Vue 3 前端工程化项目 <a class="header-anchor" href="#从-0-搭建-vite-3-vue-3-前端工程化项目" aria-label="Permalink to &quot;从 0 搭建 Vite 3 + Vue 3 前端工程化项目&quot;">​</a></h1><p>前言 Vue 3 正式版已经发布有一段时间了，随着 Vite 脚手架注定成为下一代前端工具链，许多用户都想基于 Vite 来构建 Vue 项目，如果想基于 Vite 构建 Vue 3 项目，社区模板完全满足您的需求，如果想构建 Vite 3 + Vue 3 + JavaScript 项目，那社区模板不太能满足您的需求，因为社区模板提供 Vue 3 项目几乎是基于 Vite 2 + TypeScript 构建，对于不熟悉 TypeScript 语言的用户不是很友好，因此接下来从 0 开始手把手带大家搭建一套规范的 Vite 3 + Vue 3 + JavaScript 前端工程化项目环境。</p><p>本文章篇幅较长，从以下几个方面展开：</p><ul><li>基础搭建</li><li>代码规范</li><li>提交规范</li><li>自动部署</li></ul><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>⚡️ Vite 3[2] - 构建工具（就是快！） 🖖 Vue 3[3] - 渐进式 JavaScript 框架 🚦 Vue Router[4] - 官方路由管理器 📦 Pinia[5] - 值得你喜欢的 Vue Store 💻 TDesign[6] - TDesign 适配桌面端的组件库 🎨 Less[7] - CSS 预处理器 🔗 Axios[8] - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js 🧰 Husky[9] + Lint-Staged[10] - Git Hook 工具 🛡️ EditorConfig[11] + ESLint[12] + Prettier[13] + Stylelint[14] - 代码规范 🔨 Commitizen[15] + Commitlint[16] - 提交规范 💡 GitHub Actions[17] - 自动部署</p><h2 id="基础搭建" tabindex="-1">基础搭建 <a class="header-anchor" href="#基础搭建" aria-label="Permalink to &quot;基础搭建&quot;">​</a></h2><blockquote><p>构建项目雏形 确保你安装了最新版本的 Node.js[18]，然后在命令行中运行以下命令：</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># npm 6.x</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-vue-js-template</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-vue-js-template</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-vue-js-template</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-vue-js-template</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># npm 6.x</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-vue-js-template</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-vue-js-template</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-vue-js-template</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-vue-js-template</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span></code></pre></div><p>这一指令将会安装并执行 create-vite[19]，它是一个基本模板快速启动项目工具。</p><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><p>在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 打开项目</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">your-project-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 打开项目</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">your-project-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h2><blockquote><p>Vite 基础配置 Vite 配置文件 vite.config.js 位于项目根目录下，项目启动时会自动读取。</p></blockquote><p>本项目针对公共基础路径、自定义路径别名、服务器选项、构建选项等做了如下基础配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&#39;./&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src&#39;</span><span style="color:#E1E4E8;">) ,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#E1E4E8;">      https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 监听所有地址</span></span>
<span class="line"><span style="color:#E1E4E8;">      host: </span><span style="color:#9ECBFF;">&#39;0.0.0.0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 服务启动时是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">      open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 允许跨域</span></span>
<span class="line"><span style="color:#E1E4E8;">      cors: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 自定义代理规则</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 设置最终构建的浏览器兼容目标</span></span>
<span class="line"><span style="color:#E1E4E8;">      target: </span><span style="color:#9ECBFF;">&#39;es2015&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 构建后是否生成 source map 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourcemap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//  chunk 大小警告的限制（以 kbs 为单位）</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 启用/禁用 gzip 压缩大小报告</span></span>
<span class="line"><span style="color:#E1E4E8;">      reportCompressedSize: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&#39;./&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    resolve: {</span></span>
<span class="line"><span style="color:#24292E;">      alias: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src&#39;</span><span style="color:#24292E;">) ,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    server: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#24292E;">      https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 监听所有地址</span></span>
<span class="line"><span style="color:#24292E;">      host: </span><span style="color:#032F62;">&#39;0.0.0.0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 服务启动时是否自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">      open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 允许跨域</span></span>
<span class="line"><span style="color:#24292E;">      cors: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 自定义代理规则</span></span>
<span class="line"><span style="color:#24292E;">      proxy: {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 设置最终构建的浏览器兼容目标</span></span>
<span class="line"><span style="color:#24292E;">      target: </span><span style="color:#032F62;">&#39;es2015&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 构建后是否生成 source map 文件</span></span>
<span class="line"><span style="color:#24292E;">      sourcemap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//  chunk 大小警告的限制（以 kbs 为单位）</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 启用/禁用 gzip 压缩大小报告</span></span>
<span class="line"><span style="color:#24292E;">      reportCompressedSize: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>关于 Vite 更多配置项及用法，请查看 Vite 官网 vitejs.dev/config/[20] 。</p><h2 id="规范目录结构" tabindex="-1">规范目录结构 <a class="header-anchor" href="#规范目录结构" aria-label="Permalink to &quot;规范目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├── dist/</span></span>
<span class="line"><span style="color:#e1e4e8;">└── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── api/                       // 接口请求目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── assets/                    // 静态资源目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── common/                    // 通用类库目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── components/                // 公共组件目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── router/                    // 路由配置目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── store/                     // 状态管理目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── style/                     // 通用样式目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── utils/                     // 工具函数目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── views/                     // 页面组件目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── App.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── main.js</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tests/                         // 单元测试目录</span></span>
<span class="line"><span style="color:#e1e4e8;">├── index.html</span></span>
<span class="line"><span style="color:#e1e4e8;">├── jsconfig.json                  // JavaScript 配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├── vite.config.js                 // Vite 配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">└── package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├── dist/</span></span>
<span class="line"><span style="color:#24292e;">└── src/</span></span>
<span class="line"><span style="color:#24292e;">    ├── api/                       // 接口请求目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── assets/                    // 静态资源目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── common/                    // 通用类库目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── components/                // 公共组件目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── router/                    // 路由配置目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── store/                     // 状态管理目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── style/                     // 通用样式目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── utils/                     // 工具函数目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── views/                     // 页面组件目录</span></span>
<span class="line"><span style="color:#24292e;">    ├── App.vue</span></span>
<span class="line"><span style="color:#24292e;">    ├── main.js</span></span>
<span class="line"><span style="color:#24292e;">├── tests/                         // 单元测试目录</span></span>
<span class="line"><span style="color:#24292e;">├── index.html</span></span>
<span class="line"><span style="color:#24292e;">├── jsconfig.json                  // JavaScript 配置文件</span></span>
<span class="line"><span style="color:#24292e;">├── vite.config.js                 // Vite 配置文件</span></span>
<span class="line"><span style="color:#24292e;">└── package.json</span></span></code></pre></div><h2 id="集成-vue-router-路由工具" tabindex="-1">集成 Vue Router 路由工具 <a class="header-anchor" href="#集成-vue-router-路由工具" aria-label="Permalink to &quot;集成 Vue Router 路由工具&quot;">​</a></h2><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue-router@4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue-router@4</span></span></code></pre></div><blockquote><p>创建路由配置文件 在 src/router 目录下新建 index.js 文件与 modules 文件夹</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">└── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── router/</span></span>
<span class="line"><span style="color:#e1e4e8;">    	├── modules/  // 路由模块</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── index.js  // 路由配置文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">└── src/</span></span>
<span class="line"><span style="color:#24292e;">    ├── router/</span></span>
<span class="line"><span style="color:#24292e;">    	├── modules/  // 路由模块</span></span>
<span class="line"><span style="color:#24292e;">        ├── index.js  // 路由配置文件</span></span></code></pre></div><p>关于路由表，建议根据功能的不同来拆分到 modules 文件夹中，好处是：</p><p>方便后期维护</p><p>减少 Git 合并代码冲突可能性</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/HomeView.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/AboutView.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRouter, createWebHistory } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> baseRouters </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./modules/base&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">baseRouters];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHistory</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">BASE_URL</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">scrollBehavior</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      behavior: </span><span style="color:#9ECBFF;">&#39;smooth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/HomeView.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/AboutView.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRouter, createWebHistory } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> baseRouters </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./modules/base&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">baseRouters];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHistory</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">BASE_URL</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  routes,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">scrollBehavior</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      behavior: </span><span style="color:#032F62;">&#39;smooth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router;</span></span></code></pre></div><p>根据路由配置的实际情况，需要在 src 下创建 views 目录，用来存储页面组件。</p><blockquote><p>挂载路由配置 在 main.js 文件中挂载路由配置</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App).</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App).</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="集成-pinia-全局状态管理工具" tabindex="-1">集成 Pinia 全局状态管理工具 <a class="header-anchor" href="#集成-pinia-全局状态管理工具" aria-label="Permalink to &quot;集成 Pinia 全局状态管理工具&quot;">​</a></h2><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pinia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span></span></code></pre></div><blockquote><p>创建仓库配置文件 在 src/store 目录下新建 index.js 文件与 modules 文件夹</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">└── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── store/</span></span>
<span class="line"><span style="color:#e1e4e8;">    	├── modules/  // 仓库模块</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── index.js  // 仓库配置文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">└── src/</span></span>
<span class="line"><span style="color:#24292e;">    ├── store/</span></span>
<span class="line"><span style="color:#24292e;">    	├── modules/  // 仓库模块</span></span>
<span class="line"><span style="color:#24292e;">        ├── index.js  // 仓库配置文件</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useCounterStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;counter&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">accumulate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useCounterStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;counter&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">    count: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">  actions: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">accumulate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPinia } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPinia</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> store;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./modules/counter&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> store;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./modules/counter&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>开发中需要将不同功能所对应的状态，拆分到不同的 modules，好处如同路由模块一样。</p><blockquote><p>挂载 Pinia 配置 在 main.js 文件中挂载 Vuex 配置</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./store&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App).</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router).</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(store).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> store </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./store&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App).</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router).</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(store).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="集成-tdesign-vue-next-组件库" tabindex="-1">集成 TDesign Vue Next 组件库 <a class="header-anchor" href="#集成-tdesign-vue-next-组件库" aria-label="Permalink to &quot;集成 TDesign Vue Next 组件库&quot;">​</a></h2><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tdesign-vue-next</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tdesign-vue-next</span></span></code></pre></div><blockquote><p>基础使用</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TDesign </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tdesign-vue-next&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引入组件库全局样式资源</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tdesign-vue-next/es/style/index.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(TDesign);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> TDesign </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tdesign-vue-next&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引入组件库全局样式资源</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tdesign-vue-next/es/style/index.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(TDesign);</span></span></code></pre></div><blockquote><p>按需引入 使用 unplugin-vue-components 和 unplugin-auto-import 来实现自动导入：</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-auto-import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-auto-import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><p>在 Vite 对应的配置文件 vite.config.js 添加上述插件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AutoImport </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-auto-import/vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { TDesignResolver } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/resolvers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">AutoImport</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span><span style="color:#B392F0;">TDesignResolver</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        library: </span><span style="color:#9ECBFF;">&#39;vue-next&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Components</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span><span style="color:#B392F0;">TDesignResolver</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        library: </span><span style="color:#9ECBFF;">&#39;vue-next&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AutoImport </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-auto-import/vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { TDesignResolver } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/resolvers&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">AutoImport</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span><span style="color:#6F42C1;">TDesignResolver</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        library: </span><span style="color:#032F62;">&#39;vue-next&#39;</span></span>
<span class="line"><span style="color:#24292E;">      })],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Components</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span><span style="color:#6F42C1;">TDesignResolver</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        library: </span><span style="color:#032F62;">&#39;vue-next&#39;</span></span>
<span class="line"><span style="color:#24292E;">      })],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="集成-axios-http-工具" tabindex="-1">集成 Axios HTTP 工具 <a class="header-anchor" href="#集成-axios-http-工具" aria-label="Permalink to &quot;集成 Axios HTTP 工具&quot;">​</a></h2><blockquote><blockquote><p>安装依赖</p></blockquote></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span></code></pre></div><blockquote><p>请求配置 在 utils 目录下创建 request.js 文件，配置好适合自己业务的请求拦截和响应拦截：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">└── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">	├── api  // 接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── utils/</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── request.js  // axios 请求库二次封装</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">└── src/</span></span>
<span class="line"><span style="color:#24292e;">	├── api  // 接口</span></span>
<span class="line"><span style="color:#24292e;">    ├── utils/</span></span>
<span class="line"><span style="color:#24292e;">        ├── request.js  // axios 请求库二次封装</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建请求实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">instance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 指定请求超时的毫秒数</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表示跨域请求时是否需要使用凭证</span></span>
<span class="line"><span style="color:#E1E4E8;">  withCredentials: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前置拦截器（发起请求之前的拦截）</span></span>
<span class="line"><span style="color:#E1E4E8;">instance.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：</span></span>
<span class="line"><span style="color:#6A737D;">     * const token = getToken()</span></span>
<span class="line"><span style="color:#6A737D;">     * if (token) {</span></span>
<span class="line"><span style="color:#6A737D;">     *  config.headers.token = token</span></span>
<span class="line"><span style="color:#6A737D;">     * }</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 后置拦截器（获取到响应时的拦截）</span></span>
<span class="line"><span style="color:#E1E4E8;">instance.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 根据你的项目实际情况来对 response 和 error 做处理</span></span>
<span class="line"><span style="color:#6A737D;">     * 这里对 response 和 error 不做任何处理，直接返回</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (response </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> response.data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">message</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出常用函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">data</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">data</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;put&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_delete</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;delete&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> instance;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建请求实例</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">instance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  baseURL: </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 指定请求超时的毫秒数</span></span>
<span class="line"><span style="color:#24292E;">  timeout: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表示跨域请求时是否需要使用凭证</span></span>
<span class="line"><span style="color:#24292E;">  withCredentials: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前置拦截器（发起请求之前的拦截）</span></span>
<span class="line"><span style="color:#24292E;">instance.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：</span></span>
<span class="line"><span style="color:#6A737D;">     * const token = getToken()</span></span>
<span class="line"><span style="color:#6A737D;">     * if (token) {</span></span>
<span class="line"><span style="color:#6A737D;">     *  config.headers.token = token</span></span>
<span class="line"><span style="color:#6A737D;">     * }</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 后置拦截器（获取到响应时的拦截）</span></span>
<span class="line"><span style="color:#24292E;">instance.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 根据你的项目实际情况来对 response 和 error 做处理</span></span>
<span class="line"><span style="color:#6A737D;">     * 这里对 response 和 error 不做任何处理，直接返回</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> error;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (response </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> response.data) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">message</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> error;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(message);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出常用函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">data</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url,</span></span>
<span class="line"><span style="color:#24292E;">    data,</span></span>
<span class="line"><span style="color:#24292E;">    params,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url,</span></span>
<span class="line"><span style="color:#24292E;">    params,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">data</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;put&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url,</span></span>
<span class="line"><span style="color:#24292E;">    params,</span></span>
<span class="line"><span style="color:#24292E;">    data,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">url</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{object}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">params</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_delete</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;delete&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url,</span></span>
<span class="line"><span style="color:#24292E;">    params,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> instance;</span></span></code></pre></div><p>之后在 api 文件夹中以业务模型对接口进行拆分，举个例子，将所有跟用户相关接口封装在 User 类中，此类称作用户模型。</p><p>在 User 类中比如有登录、注册、获取用户信息等方法，如果有业务逻辑变动，只需要修改相关方法即可。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { post } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/request&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 登录</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{String}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">username</span><span style="color:#6A737D;"> 用户名</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{String}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">password</span><span style="color:#6A737D;"> 密码</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@returns</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">username</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/login&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      username,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { post } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/request&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 登录</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{String}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">username</span><span style="color:#6A737D;"> 用户名</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{String}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">password</span><span style="color:#6A737D;"> 密码</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@returns</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">(</span><span style="color:#E36209;">username</span><span style="color:#24292E;">, </span><span style="color:#E36209;">password</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      username,</span></span>
<span class="line"><span style="color:#24292E;">      password,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>把每个业务模型独立成一个 js 文件，声明一个类通过其属性和方法来实现这个模型相关的数据获取，这样可以大大提升代码的可读性与可维护性。</p><blockquote><p>模拟演示 在需要使用接口的地方，引入对应的业务模型文件，参考如下：</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> User </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/api/user&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      username: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> User.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.username, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.password);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> User </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/api/user&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      username: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      password: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> User.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.username, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.password);</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="集成-css-预处理器-less" tabindex="-1">集成 CSS 预处理器 Less <a class="header-anchor" href="#集成-css-预处理器-less" aria-label="Permalink to &quot;集成 CSS 预处理器 Less&quot;">​</a></h2><p>本项目使用 CSS 预处理器 Less，直接安装为开发依赖即可。</p><p>Vite 内部已帮我们集成了相关的 loader，不需要额外配置。</p><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">less</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">less</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><blockquote><p>如何使用</p></blockquote><p>在 &lt;style&gt;&lt;/style&gt; 样式标签中引用 lang=&quot;less&quot; 即可。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>CSS 命名规范推荐 BEM 命名规范</p><p>参考链接：CSS BEM 书写规范[21]</p><blockquote><p>全局样式 在 src/style 目录下创建 variables.less 全局样式文件：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">└── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── style/</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── variables.less  // 全局样式文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">└── src/</span></span>
<span class="line"><span style="color:#24292e;">    ├── style/</span></span>
<span class="line"><span style="color:#24292e;">        ├── variables.less  // 全局样式文件</span></span></code></pre></div><p>在 vite.config.js 配置文件中新增CSS 预处理器相关配置即可实现 less 全局样式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      preprocessorOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        less: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          modifyVars: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hack: </span><span style="color:#9ECBFF;">\`true; @import (reference) &quot;\${</span><span style="color:#B392F0;">resolve</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;src/style/variables.less&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}&quot;;\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          math: </span><span style="color:#9ECBFF;">&#39;strict&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          javascriptEnabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    css: {</span></span>
<span class="line"><span style="color:#24292E;">      preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        less: {</span></span>
<span class="line"><span style="color:#24292E;">          modifyVars: {</span></span>
<span class="line"><span style="color:#24292E;">            hack: </span><span style="color:#032F62;">\`true; @import (reference) &quot;\${</span><span style="color:#6F42C1;">resolve</span><span style="color:#032F62;">(</span><span style="color:#032F62;">&#39;src/style/variables.less&#39;</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}&quot;;\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          math: </span><span style="color:#032F62;">&#39;strict&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          javascriptEnabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><blockquote><p>样式穿透 官方文档[22]</p></blockquote><p>在 Vue3 中，改变了以往样式穿透的语法，如果继续使用 ::v-deep、/deep/、&gt;&gt;&gt; 等语法的话，会出现一个警告，下面是新的语法：</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 深度选择器 */</span></span>
<span class="line"><span style="color:#E1E4E8;">:deep(selector) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 插槽选择器 */</span></span>
<span class="line"><span style="color:#E1E4E8;">:slotted(selector) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 全局选择器 */</span></span>
<span class="line"><span style="color:#E1E4E8;">:global(selector) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 深度选择器 */</span></span>
<span class="line"><span style="color:#24292E;">:deep(selector) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 插槽选择器 */</span></span>
<span class="line"><span style="color:#24292E;">:slotted(selector) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 全局选择器 */</span></span>
<span class="line"><span style="color:#24292E;">:global(selector) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>至此，一个基于 JavaScript + Vite3 + Vue3 + Vue Router + Pinia + Axios + Less 的前端项目开发环境搭建完毕。</p><p>项目托管在 GitHub 仓库[23]，需要的同学可以去下载下来，参考学习。</p><p>接下来增加代码规范约束、提交规范约束、单元测试、自动部署等，让其更完善、更健壮。</p><p>代码规范 随着前端应用逐渐变得大型化和复杂化，在同一个项目中有多个人员参与时，每个人的前端能力程度不等，他们往往会用不同的编码风格和习惯在项目中写代码，长此下去，势必会让项目的健壮性越来越差。解决这些问题，理论上讲，口头约定和代码审查都可以，但是这种方式无法实时反馈，而且沟通成本过高，不够灵活，更关键的是无法把控。不以规矩，不能成方圆，我们不得不在项目使用一些工具来约束代码规范。</p><p>本文讲解如何使用 EditorConfig + ESLint + Prettier + Stylelint 组合来实现代码规范化。</p><p>这样做带来好处：</p><ul><li>解决团队之间代码不规范导致的可读性差和可维护性差的问题。</li><li>解决团队成员不同编辑器导致的编码规范不统一问题。</li><li>提前发现代码风格问题，给出对应规范提示，及时修复。</li><li>减少代码审查过程中反反复复的修改过程，节约时间。</li><li>自动格式化，统一编码风格，从此和脏乱差的代码说再见。</li><li>集成 EditorConfig 配置</li><li>EditorConfig[24] 主要用于统一不同 IDE 编辑器的编码风格。</li></ul><p>在项目根目录下添加 .editorconfig 文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 表示是最顶层的 EditorConfig 配置文件</span></span>
<span class="line"><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示所有文件适用</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 缩进风格（tab | space）</span></span>
<span class="line"><span style="color:#B392F0;">indent_style</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">space</span></span>
<span class="line"><span style="color:#6A737D;"># 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span style="color:#B392F0;">end_of_line</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lf</span></span>
<span class="line"><span style="color:#6A737D;"># 设置文件字符集为 utf-8</span></span>
<span class="line"><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">utf-8</span></span>
<span class="line"><span style="color:#6A737D;"># 去除行首的任意空白字符</span></span>
<span class="line"><span style="color:#B392F0;">trim_trailing_whitespace</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 始终在文件末尾插入一个新行</span></span>
<span class="line"><span style="color:#B392F0;">insert_final_newline</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.md]</span></span>
<span class="line"><span style="color:#B392F0;">max_line_length</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span></span>
<span class="line"><span style="color:#B392F0;">trim_trailing_whitespace</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 ts、js、vue、css 文件适用以下规则</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.{ts,js,vue,css}]</span></span>
<span class="line"><span style="color:#B392F0;">indent_size</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 表示是最顶层的 EditorConfig 配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示所有文件适用</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 缩进风格（tab | space）</span></span>
<span class="line"><span style="color:#6F42C1;">indent_style</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">space</span></span>
<span class="line"><span style="color:#6A737D;"># 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span style="color:#6F42C1;">end_of_line</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lf</span></span>
<span class="line"><span style="color:#6A737D;"># 设置文件字符集为 utf-8</span></span>
<span class="line"><span style="color:#6F42C1;">charset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">utf-8</span></span>
<span class="line"><span style="color:#6A737D;"># 去除行首的任意空白字符</span></span>
<span class="line"><span style="color:#6F42C1;">trim_trailing_whitespace</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 始终在文件末尾插入一个新行</span></span>
<span class="line"><span style="color:#6F42C1;">insert_final_newline</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.md]</span></span>
<span class="line"><span style="color:#6F42C1;">max_line_length</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span></span>
<span class="line"><span style="color:#6F42C1;">trim_trailing_whitespace</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示仅 ts、js、vue、css 文件适用以下规则</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.{ts,js,vue,css}]</span></span>
<span class="line"><span style="color:#6F42C1;">indent_size</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span></code></pre></div><p>很多 IDE 中会默认支持此配置，但是也有些不支持，如：VSCode、Atom、Sublime Text 等。</p><p>具体列表可以参考官网，如果在 VSCode 中使用需要安装 EditorConfig for VS Code 插件。</p><h2 id="editorconfig-for-vs-code" tabindex="-1">EditorConfig for VS Code <a class="header-anchor" href="#editorconfig-for-vs-code" aria-label="Permalink to &quot;EditorConfig for VS Code&quot;">​</a></h2><blockquote><p>集成 ESLint 配置 ESLint[25] 是针对 EScript 的一款代码检测工具，它可以检测项目中编写不规范的代码，如果写出不符合规范的代码会被警告。</p></blockquote><p>由此我们就可以借助于 ESLint 强大的功能来统一团队的编码规范。</p><p>安装依赖 <code>ESLint</code>[26] - ESLint 本体 <code>eslint-define-config</code>[27] - 改善 ESLint 规范编写体验 <code>eslint-plugin-vue</code>[28] - 适用于 Vue 文件的 ESLint 插件 <code>eslint-config-airbnb-base</code>[29] - Airbnb JavaScript 风格指南 <code>eslint-plugin-import</code>[30] - 使用 eslint-config-airbnb-base 时必须安装的前置插件 <code>vue-eslint-parser</code>[31] - 使用 eslint-plugin-vue 时必须安装的 ESLint 解析器</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-define-config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-config-airbnb-base</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue-eslint-parser</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-define-config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-config-airbnb-base</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue-eslint-parser</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><blockquote><p>安装插件 Visual Studio Code 编辑器使用 ESLint 配置需要下载插件 ESLint 。</p></blockquote><blockquote><p>ESLint JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件。</p></blockquote><blockquote><p>创建 ESLint 配置文件 在项目根目录创建 .eslintrc.js 文件，并填入以下内容：</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">defineConfig</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;eslint-define-config&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  root: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    browser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    jest: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    es6: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  parser: </span><span style="color:#9ECBFF;">&#39;vue-eslint-parser&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaVersion: </span><span style="color:#9ECBFF;">&#39;latest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    allowImportExportEverywhere: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      jsx: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;airbnb-base&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:prettier/recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止使用多余的包</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;import/no-extraneous-dependencies&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确保在导入路径内一致使用文件扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;import/extensions&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确保导入指向可以解析的文件/模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;import/no-unresolved&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首选默认导出导入/首选默认导出</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;import/prefer-default-export&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止使用 new 以避免产生副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-new&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止变量声明与外层作用域的变量同名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-shadow&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁用 console</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-console&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止标识符中有悬空下划线</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-underscore-dangle&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止在可能与比较操作符相混淆的地方使用箭头函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-confusing-arrow&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁用一元操作符 ++ 和 --</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-plusplus&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止对 function 的参数进行重新赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-param-reassign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁用特定的语法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-restricted-syntax&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止在变量定义之前使用它们</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-use-before-define&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止直接调用 Object.prototypes 的内置属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-prototype-builtins&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止可以在有更简单的可替代的表达式时使用三元操作符</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-unneeded-ternary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止重复模块导入</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-duplicate-imports&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止在对象中使用不必要的计算属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-useless-computed-key&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制使用一致的缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">    indent: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制使用骆驼拼写法命名约定</span></span>
<span class="line"><span style="color:#E1E4E8;">    camelcase: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制类方法使用 this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;class-methods-use-this&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 要求构造函数首字母大写</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;new-cap&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制一致地使用 function 声明或表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;func-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制一行的最大长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;max-len&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 要求 return 语句要么总是指定返回的值，要么不指定</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;consistent-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制switch要有default分支</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;default-case&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制剩余和扩展运算符及其表达式之间有空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;rest-spread-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 要求使用 const 声明那些声明后不再被修改的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prefer-const&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 强制箭头函数的箭头前后使用一致的空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;arrow-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">    overrides: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&#39;*.vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 要求组件名称总是多个单词</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">defineConfig</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;eslint-define-config&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  root: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  env: {</span></span>
<span class="line"><span style="color:#24292E;">    browser: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    node: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    jest: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    es6: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  parser: </span><span style="color:#032F62;">&#39;vue-eslint-parser&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">    ecmaVersion: </span><span style="color:#032F62;">&#39;latest&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    allowImportExportEverywhere: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#24292E;">      jsx: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;airbnb-base&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;eslint:recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:prettier/recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止使用多余的包</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;import/no-extraneous-dependencies&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确保在导入路径内一致使用文件扩展名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;import/extensions&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确保导入指向可以解析的文件/模块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;import/no-unresolved&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首选默认导出导入/首选默认导出</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;import/prefer-default-export&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止使用 new 以避免产生副作用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-new&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止变量声明与外层作用域的变量同名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-shadow&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁用 console</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-console&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止标识符中有悬空下划线</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-underscore-dangle&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止在可能与比较操作符相混淆的地方使用箭头函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-confusing-arrow&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁用一元操作符 ++ 和 --</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-plusplus&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止对 function 的参数进行重新赋值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-param-reassign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁用特定的语法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-restricted-syntax&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止在变量定义之前使用它们</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-use-before-define&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止直接调用 Object.prototypes 的内置属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-prototype-builtins&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止可以在有更简单的可替代的表达式时使用三元操作符</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-unneeded-ternary&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止重复模块导入</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-duplicate-imports&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止在对象中使用不必要的计算属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-useless-computed-key&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制使用一致的缩进</span></span>
<span class="line"><span style="color:#24292E;">    indent: [</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制使用骆驼拼写法命名约定</span></span>
<span class="line"><span style="color:#24292E;">    camelcase: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制类方法使用 this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;class-methods-use-this&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 要求构造函数首字母大写</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;new-cap&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制一致地使用 function 声明或表达式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;func-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制一行的最大长度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;max-len&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 要求 return 语句要么总是指定返回的值，要么不指定</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;consistent-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制switch要有default分支</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;default-case&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制剩余和扩展运算符及其表达式之间有空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;rest-spread-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 要求使用 const 声明那些声明后不再被修改的变量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;prefer-const&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 强制箭头函数的箭头前后使用一致的空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;arrow-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">    overrides: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&#39;*.vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      rules: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 要求组件名称总是多个单词</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>关于更多配置项信息，请前往 ESLint 官网查看 ESLint-Configuring[32]</p><blockquote><p>创建 ESLint 过滤规则 在项目根目录添加一个 .eslintignore 文件，内容如下：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dist</span></span>
<span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">!.prettierrc.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dist</span></span>
<span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">!.prettierrc.js</span></span></code></pre></div><blockquote><p>集成 Prettier 配置 Prettier[33] 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。</p></blockquote><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prettier</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><blockquote><p>安装插件 Visual Studio Code 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter 。</p></blockquote><p>Prettier - Code formatter JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 Prettier 配置。</p><blockquote><p>创建 Prettier 配置文件 Prettier 支持多种格式的配置文件[34]，比如 .json、.yml、.yaml、.js等。</p></blockquote><p>在项目根目录创建 .prettierrc.js 文件，并填入以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 一行最多 120 字符</span></span>
<span class="line"><span style="color:#E1E4E8;">  printWidth: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用 2 个空格缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">  tabWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不使用缩进符，而使用空格</span></span>
<span class="line"><span style="color:#E1E4E8;">  useTabs: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 行尾需要有分号</span></span>
<span class="line"><span style="color:#E1E4E8;">  semi: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleQuote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  quoteProps: </span><span style="color:#9ECBFF;">&#39;as-needed&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxSingleQuote: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 末尾需要有逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">  trailingComma: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 大括号内的首尾需要空格</span></span>
<span class="line"><span style="color:#E1E4E8;">  bracketSpacing: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// jsx 标签的反尖括号需要换行</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxBracketSameLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 箭头函数，只有一个参数的时候，也需要括号</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrowParens: </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span style="color:#E1E4E8;">  rangeStart: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  rangeEnd: </span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不需要写文件开头的 @prettier</span></span>
<span class="line"><span style="color:#E1E4E8;">  requirePragma: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不需要自动在文件开头插入 @prettier</span></span>
<span class="line"><span style="color:#E1E4E8;">  insertPragma: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用默认的折行标准</span></span>
<span class="line"><span style="color:#E1E4E8;">  proseWrap: </span><span style="color:#9ECBFF;">&#39;preserve&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span style="color:#E1E4E8;">  htmlWhitespaceSensitivity: </span><span style="color:#9ECBFF;">&#39;css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// vue 文件中的 script 和 style 内不用缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">  vueIndentScriptAndStyle: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 换行符使用 lf</span></span>
<span class="line"><span style="color:#E1E4E8;">  endOfLine: </span><span style="color:#9ECBFF;">&#39;lf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 格式化嵌入的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">  embeddedLanguageFormatting: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// html, vue, jsx 中每个属性占一行</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleAttributePerLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 一行最多 120 字符</span></span>
<span class="line"><span style="color:#24292E;">  printWidth: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用 2 个空格缩进</span></span>
<span class="line"><span style="color:#24292E;">  tabWidth: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不使用缩进符，而使用空格</span></span>
<span class="line"><span style="color:#24292E;">  useTabs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 行尾需要有分号</span></span>
<span class="line"><span style="color:#24292E;">  semi: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#24292E;">  singleQuote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span style="color:#24292E;">  quoteProps: </span><span style="color:#032F62;">&#39;as-needed&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span style="color:#24292E;">  jsxSingleQuote: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 末尾需要有逗号</span></span>
<span class="line"><span style="color:#24292E;">  trailingComma: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 大括号内的首尾需要空格</span></span>
<span class="line"><span style="color:#24292E;">  bracketSpacing: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// jsx 标签的反尖括号需要换行</span></span>
<span class="line"><span style="color:#24292E;">  jsxBracketSameLine: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 箭头函数，只有一个参数的时候，也需要括号</span></span>
<span class="line"><span style="color:#24292E;">  arrowParens: </span><span style="color:#032F62;">&#39;always&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span style="color:#24292E;">  rangeStart: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  rangeEnd: </span><span style="color:#005CC5;">Infinity</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不需要写文件开头的 @prettier</span></span>
<span class="line"><span style="color:#24292E;">  requirePragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不需要自动在文件开头插入 @prettier</span></span>
<span class="line"><span style="color:#24292E;">  insertPragma: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用默认的折行标准</span></span>
<span class="line"><span style="color:#24292E;">  proseWrap: </span><span style="color:#032F62;">&#39;preserve&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span style="color:#24292E;">  htmlWhitespaceSensitivity: </span><span style="color:#032F62;">&#39;css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// vue 文件中的 script 和 style 内不用缩进</span></span>
<span class="line"><span style="color:#24292E;">  vueIndentScriptAndStyle: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 换行符使用 lf</span></span>
<span class="line"><span style="color:#24292E;">  endOfLine: </span><span style="color:#032F62;">&#39;lf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 格式化嵌入的内容</span></span>
<span class="line"><span style="color:#24292E;">  embeddedLanguageFormatting: </span><span style="color:#032F62;">&#39;auto&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// html, vue, jsx 中每个属性占一行</span></span>
<span class="line"><span style="color:#24292E;">  singleAttributePerLine: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>关于更多配置项信息，请前往 Prettier 官网查看 Prettier-Options[35]</p><blockquote><p>创建 Prettier 过滤规则 在项目根目录添加一个 .prettierignore 文件，内容如下：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">## OS</span></span>
<span class="line"><span style="color:#e1e4e8;">.DS_Store</span></span>
<span class="line"><span style="color:#e1e4e8;">.idea</span></span>
<span class="line"><span style="color:#e1e4e8;">.editorconfig</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">.npmrc</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Ignored suffix</span></span>
<span class="line"><span style="color:#e1e4e8;">*.log</span></span>
<span class="line"><span style="color:#e1e4e8;">*.md</span></span>
<span class="line"><span style="color:#e1e4e8;">*.svg</span></span>
<span class="line"><span style="color:#e1e4e8;">*.png</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ico</span></span>
<span class="line"><span style="color:#e1e4e8;">*ignore</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## Local</span></span>
<span class="line"><span style="color:#e1e4e8;">.husky</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## Built-files</span></span>
<span class="line"><span style="color:#e1e4e8;">.cache</span></span>
<span class="line"><span style="color:#e1e4e8;">dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## OS</span></span>
<span class="line"><span style="color:#24292e;">.DS_Store</span></span>
<span class="line"><span style="color:#24292e;">.idea</span></span>
<span class="line"><span style="color:#24292e;">.editorconfig</span></span>
<span class="line"><span style="color:#24292e;">pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#24292e;">.npmrc</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Ignored suffix</span></span>
<span class="line"><span style="color:#24292e;">*.log</span></span>
<span class="line"><span style="color:#24292e;">*.md</span></span>
<span class="line"><span style="color:#24292e;">*.svg</span></span>
<span class="line"><span style="color:#24292e;">*.png</span></span>
<span class="line"><span style="color:#24292e;">*.ico</span></span>
<span class="line"><span style="color:#24292e;">*ignore</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## Local</span></span>
<span class="line"><span style="color:#24292e;">.husky</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## Built-files</span></span>
<span class="line"><span style="color:#24292e;">.cache</span></span>
<span class="line"><span style="color:#24292e;">dist</span></span></code></pre></div><blockquote><p>解决 Prettier 和 ESLint 冲突 本项目中的 ESLint 配置使用了 Airbnb JavaScript 风格指南校验，其规则之一是_代码结束后面要加分号_，而在 Prettier 配置文件中加了_代码结束后面不加分号_配置项，从而冲突了。</p></blockquote><p>解决两者冲突问题，需要用到 eslint-plugin-prettier 和 eslint-config-prettier。</p><p>eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中 eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则 最后形成优先级：Prettier 配置规则 &gt; ESLint 配置规则</p><blockquote><p>安装依赖</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-plugin-prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint-config-prettier</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-plugin-prettier</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint-config-prettier</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><blockquote><p>修改 ESLint 配置文件 修改 .eslintrc.js 文件，在 extends 中添加 plugin:prettier/recommended 规则（此规则一定要加在最后）。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;airbnb-base&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;plugin:prettier/recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;airbnb-base&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;eslint:recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;plugin:prettier/recommended&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>自动格式化代码 Visual Studio Code 在 settings.json 设置文件中，增加以下代码：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;source.fixAll&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;source.fixAll.eslint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;source.fixAll&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;source.fixAll.eslint&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>WebStorm 打开设置窗口，按如下操作，最后点击 Apply -&gt; OK：</p><p>WebStorm 集成 Stylelint 配置 Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。</p><p>安装依赖 <code>Stylelint</code>[36] - Stylelint 本体 <code>stylelint-config-prettier</code>[37] - 关闭 Stylelint 中与 Prettier 中会发生冲突的规则 <code>stylelint-config-standard</code>[38] - Stylelint 官方推荐规则 <code>stylelint-config-recommended-vue</code>[39] - 检验 vue 文件中的样式 <code>stylelint-order</code>[40] - CSS 属性顺序规则插件 npm i stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-recommended-vue stylelint-order -D</p><p>安装插件 Visual Studio Code 编辑器使用 Stylelint 配置需要下载插件 Stylelint 。</p><p>Stylelint JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件。</p><p>创建 Stylelint 配置文件 在项目根目录创建 .stylelintrc.js 文件，并填入以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  root: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  defaultSeverity: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;stylelint-config-standard&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;stylelint-config-prettier&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;stylelint-order&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 不允许未知函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;function-no-unknown&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定类选择器的模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;selector-class-pattern&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止空源码</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-empty-source&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定字符串使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;string-quotes&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;single&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止未知的@规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;at-rule-no-unknown&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ignoreAtRules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;tailwind&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;apply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;variants&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;responsive&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;screen&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;if&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;each&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;include&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;mixin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定@规则名的大小写</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;at-rule-name-case&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;lower&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">    indentation: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        severity: </span><span style="color:#9ECBFF;">&#39;warning&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止未知的伪类选择器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;selector-pseudo-class-no-unknown&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ignorePseudoClasses: [</span><span style="color:#9ECBFF;">&#39;global&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁止未知的伪元素选择器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;selector-pseudo-element-no-unknown&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ignorePseudoElements: [</span><span style="color:#9ECBFF;">&#39;v-deep&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;order/properties-order&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;position&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;top&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;bottom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;z-index&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;display&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;justify-content&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;align-items&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;float&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;clear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;overflow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;overflow-x&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;overflow-y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;margin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;margin-top&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;margin-right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;margin-bottom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;margin-left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;padding&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;padding-top&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;padding-right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;padding-bottom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;padding-left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;min-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;max-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;height&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;min-height&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;max-height&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;font-size&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;font-family&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;font-weight&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-top&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-top-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-top-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-top-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-right-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-right-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-right-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-bottom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-bottom-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-bottom-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-bottom-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-left-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-left-width&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-left-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;border-radius&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-align&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-justify&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-indent&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-overflow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-decoration&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;white-space&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background-position&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background-repeat&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background-size&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background-color&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;background-clip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;opacity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;filter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;list-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;outline&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;visibility&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;box-shadow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-shadow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;transition&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  root: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  defaultSeverity: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;stylelint-config-standard&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;stylelint-config-prettier&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#032F62;">&#39;stylelint-order&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 不允许未知函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;function-no-unknown&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定类选择器的模式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;selector-class-pattern&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止空源码</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-empty-source&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定字符串使用单引号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;string-quotes&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;single&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止未知的@规则</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;at-rule-no-unknown&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        ignoreAtRules: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;tailwind&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;apply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;variants&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;responsive&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;screen&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;if&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;each&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;include&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;mixin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定@规则名的大小写</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;at-rule-name-case&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;lower&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 指定缩进</span></span>
<span class="line"><span style="color:#24292E;">    indentation: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        severity: </span><span style="color:#032F62;">&#39;warning&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止未知的伪类选择器</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;selector-pseudo-class-no-unknown&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        ignorePseudoClasses: [</span><span style="color:#032F62;">&#39;global&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 禁止未知的伪元素选择器</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;selector-pseudo-element-no-unknown&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        ignorePseudoElements: [</span><span style="color:#032F62;">&#39;v-deep&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;order/properties-order&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;position&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;right&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;z-index&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;display&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;justify-content&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;align-items&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;float&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;clear&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;overflow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;overflow-x&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;overflow-y&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;margin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;margin-top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;margin-right&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;margin-bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;margin-left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;padding&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;padding-top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;padding-right&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;padding-bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;padding-left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;min-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;max-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;height&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;min-height&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;max-height&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;font-size&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;font-family&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;font-weight&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-top-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-top-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-top-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-right&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-right-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-right-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-right-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-bottom-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-bottom-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-bottom-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-left-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-left-width&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-left-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;border-radius&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-align&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-justify&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-indent&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-overflow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-decoration&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;white-space&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background-position&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background-repeat&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background-size&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background-color&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;background-clip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;opacity&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;filter&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;list-style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;outline&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;visibility&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;box-shadow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-shadow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;transition&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>创建 Stylelint 过滤规则 在项目根目录添加一个 .stylelintignore 文件，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># .stylelintignore</span></span>
<span class="line"><span style="color:#e1e4e8;"># 旧的不需打包的样式库</span></span>
<span class="line"><span style="color:#e1e4e8;">*.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 其他类型文件</span></span>
<span class="line"><span style="color:#e1e4e8;">*.js</span></span>
<span class="line"><span style="color:#e1e4e8;">*.jpg</span></span>
<span class="line"><span style="color:#e1e4e8;">*.woff</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 测试和打包目录</span></span>
<span class="line"><span style="color:#e1e4e8;">/test/</span></span>
<span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span>
<span class="line"><span style="color:#e1e4e8;">public/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/node_modules/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># .stylelintignore</span></span>
<span class="line"><span style="color:#24292e;"># 旧的不需打包的样式库</span></span>
<span class="line"><span style="color:#24292e;">*.min.css</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 其他类型文件</span></span>
<span class="line"><span style="color:#24292e;">*.js</span></span>
<span class="line"><span style="color:#24292e;">*.jpg</span></span>
<span class="line"><span style="color:#24292e;">*.woff</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 测试和打包目录</span></span>
<span class="line"><span style="color:#24292e;">/test/</span></span>
<span class="line"><span style="color:#24292e;">/dist/*</span></span>
<span class="line"><span style="color:#24292e;">/public/*</span></span>
<span class="line"><span style="color:#24292e;">public/*</span></span>
<span class="line"><span style="color:#24292e;">/node_modules/</span></span></code></pre></div><p>启用 Vue 文件支持 Stylelint v14 版本默认不支持 vue 文件中的 style 代码自动检测，详情查看官方迁移指南[41]</p><p>安装依赖 <code>stylelint-config-html</code>[42] - 解析 vue 文件 <code>postcss-html</code>[43] - 使用 stylelint-config-html 依赖的模块 <code>postcss-less</code>[44] - 对 less 文件进行解析</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stylelint-config-html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss-html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss-less</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stylelint-config-html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss-html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss-less</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><p>修改 Stylelint 配置文件 修改 .stylelintrc.js 文件，添加如下配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  overrides: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&#39;*.vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;**/*.vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;*.html&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;**/*.html&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      extends: [</span><span style="color:#9ECBFF;">&#39;stylelint-config-html&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 指定关键帧名称的模式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;keyframes-name-pattern&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止未知的伪类选择器</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;selector-pseudo-class-no-unknown&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            ignorePseudoClasses: [</span><span style="color:#9ECBFF;">&#39;deep&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;global&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止未知的伪元素选择器</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;selector-pseudo-element-no-unknown&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            ignorePseudoElements: [</span><span style="color:#9ECBFF;">&#39;v-deep&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;v-global&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;v-slotted&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&#39;*.less&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;**/*.less&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      customSyntax: </span><span style="color:#9ECBFF;">&#39;postcss-less&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      extends: [</span><span style="color:#9ECBFF;">&#39;stylelint-config-standard&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;stylelint-config-recommended-vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  overrides: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&#39;*.vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;**/*.vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;*.html&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;**/*.html&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      extends: [</span><span style="color:#032F62;">&#39;stylelint-config-html&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      rules: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 指定关键帧名称的模式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;keyframes-name-pattern&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止未知的伪类选择器</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;selector-pseudo-class-no-unknown&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            ignorePseudoClasses: [</span><span style="color:#032F62;">&#39;deep&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;global&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止未知的伪元素选择器</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;selector-pseudo-element-no-unknown&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            ignorePseudoElements: [</span><span style="color:#032F62;">&#39;v-deep&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;v-global&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;v-slotted&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      files: [</span><span style="color:#032F62;">&#39;*.less&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;**/*.less&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      customSyntax: </span><span style="color:#032F62;">&#39;postcss-less&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      extends: [</span><span style="color:#032F62;">&#39;stylelint-config-standard&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;stylelint-config-recommended-vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>修改 Visual Studio Code 工作区配置 Visual Studio Code 在 settings.json 设置文件中，增加以下代码：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;stylelint.validate&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;css&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;postcss&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sass&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;stylelint.validate&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;css&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;postcss&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;sass&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>集成 husky 和 lint-staged 在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对代码进行实时校验，在一定程度上能有效规范所写代码，但有些人可能觉得这些限制很麻烦，从而选择视“提示”而不见，依旧按自己编程风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。</p><p>所以，还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。</p><p>为了解决这个问题，需要用到 Git Hook，在本地执行 git commit 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 eslint --fix），如果这些代码没通过 ESLint 规则校验，则禁止提交。</p><p>实现这一功能，需要借助 husky[45] + lint-staged[46] 。</p><p>配置 husky 注意：本项目使用 husky 6.x 版本，6.x 版本配置方式跟之前版本有较大差异，当发现配置方法不一致时，一切以 husky 官网[47]为准。</p><p>使用 husky-init 命令快速在项目初始化 husky 配置：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 初始化仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky-init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 初始化仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky-init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><p>husky 包含很多 hook（钩子），常用有：pre-commit、commit-msg。</p><p>使用 pre-commit 来触发 ESLint 命令，修改 .husky/pre-commit 文件触发命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">eslint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./src</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--ext</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.vue,.js,.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">eslint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./src</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--ext</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.vue,.js,.ts</span></span></code></pre></div><p>pre-commit hook 文件作用是：当执行 git commit -m &quot;xxx&quot; 时，会先对 src 目录下所有的 .vue、.js、.ts 文件执行 eslint --fix 命令，如果 ESLint 通过，成功 commit，否则终止 commit。</p><p>但是又存在一个问题：有时候明明只改动了一两个文件，却要对所有的文件执行 eslint --fix。</p><p>假如这是一个历史项目，在中途配置了 ESLint 规则，那么在提交代码时，也会对其他未修改的“历史”文件都进行检查，可能会造成大量文件出现 ESLint 错误，显然这不是我们想要的结果。</p><p>所以只需要用 ESLint 修复此次写的代码，而不去影响其他的代码，此时需要借助 lint-staged 工具。</p><p>配置 lint-staged lint-staged 一般结合 husky 来使用，它可以让 husky 的 hook 触发的命令只作用于 git 暂存区的文件，而不会影响到其他文件。</p><p>安装依赖</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint-staged</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint-staged</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><p>新增配置 在 package.json 里增加 lint-staged 配置项：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;lint-staged&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;*.{js,jsx,ts,tsx}&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;prettier --write&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;eslint --fix&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;*.vue&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;prettier --write&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;eslint --fix&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;*.{html,vue,vss,sass,less}&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;prettier --write&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;package.json&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;*.md&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;lint-staged&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;*.{js,jsx,ts,tsx}&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;prettier --write&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;eslint --fix&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;*.vue&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;prettier --write&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;eslint --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;*.{html,vue,vss,sass,less}&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;prettier --write&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;package.json&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;*.md&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>修改触发命令 修改 .husky/pre-commit 文件触发命令为：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint-staged</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint-staged</span></span></code></pre></div><p>pre-commit 经过以上配置之后，就可以在每次提交之前对所有代码进行格式化，保证线上代码的规范性。</p><p>提交规范 多人协作项目中，在提交代码环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。</p><p>如果 git commit 的描述信息精准，在后期维护和 Bug 处理时会变得有据可查，项目开发周期内还可以根据规范的提交信息快速生成开发日志，从而方便我们追踪项目和把控进度。</p><p>社区最流行、最知名、最受认可的 Angular[48] 团队提交规范：</p><p>Angular 团队提交规范 参考链接： Angular Style Commit Message Conventions[49]</p><p>Commit Message 格式规范 commit message 由 Header、Body、Footer 组成。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Footer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Footer</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Header Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">type</span><span style="color:#E1E4E8;">&gt;(&lt;</span><span style="color:#FDAEB7;font-style:italic;">scope</span><span style="color:#E1E4E8;">&gt;): &lt;</span><span style="color:#FDAEB7;font-style:italic;">subject</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">type</span><span style="color:#24292E;">&gt;(&lt;</span><span style="color:#B31D28;font-style:italic;">scope</span><span style="color:#24292E;">&gt;): &lt;</span><span style="color:#B31D28;font-style:italic;">subject</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>type</p><p>type 用于说明 commit 的提交类型（必须是以下几种之一）。</p><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">feat</td><td style="text-align:center;">新增功能</td></tr><tr><td style="text-align:center;">fix</td><td style="text-align:center;">修复问题</td></tr><tr><td style="text-align:center;">docs</td><td style="text-align:center;">文档变更</td></tr><tr><td style="text-align:center;">style</td><td style="text-align:center;">代码格式（不影响功能，例如空格、分号等格式修正）</td></tr><tr><td style="text-align:center;">refactor</td><td style="text-align:center;">代码重构</td></tr><tr><td style="text-align:center;">perf</td><td style="text-align:center;">改善性能</td></tr><tr><td style="text-align:center;">test</td><td style="text-align:center;">测试</td></tr><tr><td style="text-align:center;">build</td><td style="text-align:center;">变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td></tr><tr><td style="text-align:center;">ci</td><td style="text-align:center;">更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td></tr><tr><td style="text-align:center;">chore</td><td style="text-align:center;">变更构建流程或辅助工具</td></tr><tr><td style="text-align:center;">revert</td><td style="text-align:center;">代码回退</td></tr><tr><td style="text-align:center;">scope</td><td style="text-align:center;"></td></tr></tbody></table><p>scope 用于指定本次 commit 影响的范围。</p><p>scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。</p><p>subject</p><p>subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：</p><p>用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes 第一个字母小写 结尾不加句号（.） Body body 是对本次 commit 的详细描述，可以分成多行。</p><p>跟 subject 类似，用动词开头，body 应该说明修改的原因和更改前后的行为对比。</p><p>Footer 如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略。</p><p>突破性的变更</p><p>当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。</p><p>关闭缺陷</p><p>如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。</p><p>参考例子</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">feat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">feat(browser</span><span style="color:#E1E4E8;">): onUrlChange event (</span><span style="color:#B392F0;">popstate/hashchange/polling</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">event</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">browser:</span></span>
<span class="line"><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">forward</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popstate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">event</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span></span>
<span class="line"><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">forward</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hashchange</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">event</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popstate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span></span>
<span class="line"><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">do</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">polling</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">when</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">neither</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popstate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hashchange</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Breaks</span><span style="color:#E1E4E8;"> $browser</span><span style="color:#9ECBFF;">.onHashChange,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">which</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">was</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">removed</span><span style="color:#E1E4E8;"> (use </span><span style="color:#9ECBFF;">onUrlChange</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">instead</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fix</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fix(compile</span><span style="color:#E1E4E8;">): couple of unit tests </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> IE9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Older</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">IEs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serialize</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uppercased,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">but</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">IE9</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">does</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not...</span></span>
<span class="line"><span style="color:#B392F0;">Would</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">better</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">insensitive,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unfortunately</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jasmine</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">does</span></span>
<span class="line"><span style="color:#B392F0;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">regexps</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expectations.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Closes</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#392</span></span>
<span class="line"><span style="color:#B392F0;">Breaks</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo.bar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">api,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo.baz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">should</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">used</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">instead</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">style</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">style(location</span><span style="color:#E1E4E8;">): add couple of missing semi colons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">chore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">chore(release</span><span style="color:#E1E4E8;">): v3.4.2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">feat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">feat(browser</span><span style="color:#24292E;">): onUrlChange event (</span><span style="color:#6F42C1;">popstate/hashchange/polling</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new</span><span style="color:#24292E;"> </span><span style="color:#032F62;">event</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">browser:</span></span>
<span class="line"><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popstate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">event</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span></span>
<span class="line"><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hashchange</span><span style="color:#24292E;"> </span><span style="color:#032F62;">event</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popstate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span></span>
<span class="line"><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">do</span><span style="color:#24292E;"> </span><span style="color:#032F62;">polling</span><span style="color:#24292E;"> </span><span style="color:#032F62;">when</span><span style="color:#24292E;"> </span><span style="color:#032F62;">neither</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popstate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hashchange</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Breaks</span><span style="color:#24292E;"> $browser</span><span style="color:#032F62;">.onHashChange,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">which</span><span style="color:#24292E;"> </span><span style="color:#032F62;">was</span><span style="color:#24292E;"> </span><span style="color:#032F62;">removed</span><span style="color:#24292E;"> (use </span><span style="color:#032F62;">onUrlChange</span><span style="color:#24292E;"> </span><span style="color:#032F62;">instead</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fix</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fix(compile</span><span style="color:#24292E;">): couple of unit tests </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> IE9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Older</span><span style="color:#24292E;"> </span><span style="color:#032F62;">IEs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serialize</span><span style="color:#24292E;"> </span><span style="color:#032F62;">html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uppercased,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">but</span><span style="color:#24292E;"> </span><span style="color:#032F62;">IE9</span><span style="color:#24292E;"> </span><span style="color:#032F62;">does</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not...</span></span>
<span class="line"><span style="color:#6F42C1;">Would</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">better</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">insensitive,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unfortunately</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jasmine</span><span style="color:#24292E;"> </span><span style="color:#032F62;">does</span></span>
<span class="line"><span style="color:#6F42C1;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">regexps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">throw</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expectations.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Closes</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#392</span></span>
<span class="line"><span style="color:#6F42C1;">Breaks</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo.bar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">api,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo.baz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">should</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">used</span><span style="color:#24292E;"> </span><span style="color:#032F62;">instead</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">style</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">style(location</span><span style="color:#24292E;">): add couple of missing semi colons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">chore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">chore(release</span><span style="color:#24292E;">): v3.4.2</span></span></code></pre></div><p>集成 cz-git 实现规范提交 一款工程性更强，轻量级，高度自定义，标准输出格式的 commitizen[50] 适配器</p><p>官方网站：cz-git[51]</p><p>cz-git 安装依赖</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cz-git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-git</span></span></code></pre></div><p>指定适配器 修改 package.json 文件，添加 config 指定使用的适配器</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;config&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;commitizen&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;config&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;commitizen&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>自定义配置（可选） cz-git 与 commitlint[52] 进行联动给予校验信息，所以可以编写于 commitlint[53] 配置文件之中。</p><p>例如：(⇒ 配置模板[54])</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/** @type {import(&#39;cz-git&#39;).UserConfig} */</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {},</span></span>
<span class="line"><span style="color:#e1e4e8;">  prompt: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    useEmoji: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">    emojiAlign: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    allowCustomIssuePrefixs: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">    allowEmptyIssuePrefixs: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/** @type {import(&#39;cz-git&#39;).UserConfig} */</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  rules: {},</span></span>
<span class="line"><span style="color:#24292e;">  prompt: {</span></span>
<span class="line"><span style="color:#24292e;">    useEmoji: false,</span></span>
<span class="line"><span style="color:#24292e;">    emojiAlign: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    allowCustomIssuePrefixs: false,</span></span>
<span class="line"><span style="color:#24292e;">    allowEmptyIssuePrefixs: false,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>本项目配置文件可参考：commitlint.config.js[55]</p><p>全局使用 全局安装的好处在于：在任何项目下都可以利用 cz 或 git cz 命令启动命令行工具，生成标准化 commit message</p><p>安装全局依赖</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cz-git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitizen</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span></span></code></pre></div><p>全局配置适配器类型</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.czrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.czrc</span></span></code></pre></div><p>自定义配置（可选） 方式一： 编辑 ~/.czrc 文件以 json 形式添加配置，例如：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cz-git&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;useEmoji&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cz-git&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;useEmoji&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>方式二：与 commitlint[56] 配合，在 $HOME 路径下创建配置文件 (↓ 配置模板[57])</p><p>集成 commitlint 验证规范提交 在“代码规范”章节中提到，尽管制定了规范，但在多人协作的项目中，总有些人依旧我行我素。</p><p>因此提交代码这个环节，也增加一个限制：只让符合 Angular 规范的 commit message 通过。</p><p>此功能需借助 @commitlint/config-conventional 和 @commitlint/cli 工具来实现。</p><p>安装 <code>@commitlint/cli</code>[58] - Commitlint 本体 <code>@commitlint/config-conventional</code>[59] - 通用提交规范</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@commitlint/cli</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@commitlint/config-conventional</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/cli</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/config-conventional</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><p>配置 在项目根目录创建 commitlint.config.js 文件，并填入以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&#39;@commitlint/config-conventional&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>使用 husky 命令在 .husky 目录下创建 commit-msg 文件，并在此执行验证命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">husky</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.husky/commit-msg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;npx --no-install commitlint --edit </span><span style="color:#79B8FF;">$1</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/commit-msg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;npx --no-install commitlint --edit </span><span style="color:#005CC5;">$1</span><span style="color:#032F62;">&quot;</span></span></code></pre></div><p>commit-msg 本项目完整代码托管在 GitHub 仓库[60]，欢迎点亮小星星 🌟🌟</p><p>自动部署 本章节将介绍如何使用 CI（Continuous Integration 持续集成）服务来完成项目部署工作。</p><p>常见的 CI 工具有 GitHub Actions、GitLab CI、Travis CI、Circle CI 等。</p><p>本项目使用 GitHub Actions 来完成这一操作。</p><p>🔗 参考链接：GitHub Actions 入门教程[61]</p><p>创建 GitHub 仓库 因为 GitHub Actions 只对 GitHub 仓库有效，所以创建 GitHub 仓库[62]来托管项目代码。</p><p>创建 GitHub 仓库 master 分支存储项目源代码 gh-pages 分支存储打包后的静态文件 创建 GitHub Token 创建一个有 repo 和 workflow 权限的 GitHub Token[63]</p><p>创建 GitHub Token 注意：新生成的 Token 只会显示一次。</p><p>Token 添加 Actions secret 将上述创建的 Token 添加到 GitHub 仓库中的 Secrets 里，并将这个新增的 secret 命名为 VITE_VUE_DEPLOY 。</p><p>步骤：仓库 -&gt; Settings -&gt; Secrets -&gt; Actions -&gt; New repository secret。</p><p>New secret 注意：新创建的 secret VITE_VUE_DEPLOY 在 Actions 配置文件中要用到，两个地方需保持一致！</p><p>修改 package.json 打开 package.json 文件，新增 homepage 字段，表示该应用发布后的根目录（参见官方文档[64]）。</p><p>&quot;homepage&quot;: &quot;https://[username].github.io/github-actions-demo&quot;,</p><p>上面代码中，将 [username] 替换成你的 GitHub 用户名，参见范例[65]。</p><p>创建 Actions 配置文件 （1）在项目根目录下创建 .github 目录。</p><p>（2）在 .github 目录下创建 workflows 目录。</p><p>（3）在 workflows 目录下创建 deploy.yml 文件。</p><p>.github/workflows/deploy.yml</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Vite Vue Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># master 分支有 push 时触发</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 指定虚拟机环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">matrix</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">14.x</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">16.x</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 拉取 GitHub 仓库代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Use Node.js \${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 设定 Node.js 环境</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.node-version }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 打包</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 部署打包目录</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">folder</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dist</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 密钥名</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.VITE_VUE_DEPLOY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 分支</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gh-pages</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Vite Vue Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># master 分支有 push 时触发</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">master</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 指定虚拟机环境</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">matrix</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">14.x</span><span style="color:#24292E;">, </span><span style="color:#032F62;">16.x</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 拉取 GitHub 仓库代码</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Use Node.js \${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 设定 Node.js 环境</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ matrix.node-version }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 打包</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 部署打包目录</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">folder</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dist</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 密钥名</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.VITE_VUE_DEPLOY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 分支</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span></span></code></pre></div>`,231),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
