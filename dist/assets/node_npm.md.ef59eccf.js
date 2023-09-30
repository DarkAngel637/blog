import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01edc906.js";const m=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"node/npm.md","filePath":"node/npm.md"}'),p={name:"node/npm.md"},o=l(`<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 本地安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 下载包到生产依赖中 (-s &lt;==&gt; --save  s 不区分大小写)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 下载包到开发依赖中 (-D &lt;==&gt; --save -dev  -d 不区分大小写 --save -dev 中间有没有空格都可以)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 不更新lock 安装</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ci</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地卸载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 下载包到生产依赖中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 下载包到开发依赖中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看 本地 npm 包安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看 全局 npm 包安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 其他操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 升级npm 包版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将包发布到 npmjs 官网</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;镜像地址&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 设置镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;缓存路径&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 设置全局缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;全局安装路径&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 设置缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 意见初始化 package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 自定义初始化 package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verify</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 命令介绍</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">help</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看 npm view 的介绍</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 升级 npm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm@latest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">##################### nvm 的命令 #########################</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 开启node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 关闭node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 显示所有可以下载的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">14.17</span><span style="color:#9ECBFF;">.0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 安装指定版本的nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node版本号</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 卸载到对应版本的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看已安装的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls-remote</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 查看远程所有的 Node.js 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">14.17</span><span style="color:#9ECBFF;">.0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 切换指定版本的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17.0</span><span style="color:#9ECBFF;">.0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 设置指定版本的别名，如将 17.0.0 版本别名设置为 dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17.0</span><span style="color:#9ECBFF;">.0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 设置默认 Node.js 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 显示命令行帮助信息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 本地安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 下载包到生产依赖中 (-s &lt;==&gt; --save  s 不区分大小写)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 下载包到开发依赖中 (-D &lt;==&gt; --save -dev  -d 不区分大小写 --save -dev 中间有没有空格都可以)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 不更新lock 安装</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ci</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地卸载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 下载包到生产依赖中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 下载包到开发依赖中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看 本地 npm 包安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看 全局 npm 包安装路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 其他操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 升级npm 包版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将包发布到 npmjs 官网</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;镜像地址&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 设置镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;缓存路径&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 设置全局缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;全局安装路径&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 设置缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看缓存路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 意见初始化 package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 自定义初始化 package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verify</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 命令介绍</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">help</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看 npm view 的介绍</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 升级 npm </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm@latest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">##################### nvm 的命令 #########################</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 开启node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 关闭node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 显示所有可以下载的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">14.17</span><span style="color:#032F62;">.0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 安装指定版本的nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node版本号</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 卸载到对应版本的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看已安装的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls-remote</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 查看远程所有的 Node.js 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">14.17</span><span style="color:#032F62;">.0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 切换指定版本的node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17.0</span><span style="color:#032F62;">.0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 设置指定版本的别名，如将 17.0.0 版本别名设置为 dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17.0</span><span style="color:#032F62;">.0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 设置默认 Node.js 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 显示命令行帮助信息</span></span></code></pre></div><h3 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h3><h4 id="光配置-node" tabindex="-1">光配置 node <a class="header-anchor" href="#光配置-node" aria-label="Permalink to &quot;光配置 node&quot;">​</a></h4><ol><li>安装好 node 之后,在 node 目录下新建两个文件夹 node_global 和 node_cache</li><li>打开 cmd 运行以下两个命令</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;D:\\NVM\\node_global&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 顺带把 该路径配置到 path 环境变量里</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;D:\\NVM\\node_cache&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;D:\\NVM\\node_global&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 顺带把 该路径配置到 path 环境变量里</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;D:\\NVM\\node_cache&quot;</span></span></code></pre></div><p>Path (用户,系统) \\AppData\\Roaming\\npm =&gt; D:\\nodejs\\node_global(非 C 盘下node_global 的路径) node_path ( 系统 ) node_global/mode_modules 文件夹的路径</p><h4 id="安装nvm-之后配置环境变量" tabindex="-1">安装nvm 之后配置环境变量 <a class="header-anchor" href="#安装nvm-之后配置环境变量" aria-label="Permalink to &quot;安装nvm 之后配置环境变量&quot;">​</a></h4><p>nvm 官网链接 : <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows/releases</a> 2. 点击下一步安装到 D:\\NVM 下</p><ol start="3"><li>先在D:\\NVM 下创建nodejs文件夹，然后将路径设置如下：D:\\NVM\\nodejs 4、点击next 一直点击 完成安装；</li></ol><p>5、找到指定nvm打开 settings.txt ,添加以下两行文本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">node_mirror:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm_mirror:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npm.taobao.org/mirrors/npm/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">node_mirror:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm_mirror:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div><p>环境变量配置：</p><ol><li>点击计算机</li><li>右击点击属性</li><li>选择高级系统设置</li><li>点击环境变量</li><li>查看环境变量是否配置（默认nvm安装成功后，自动生成）：</li></ol><p>与如下配置（保持一致）: 用户变量:</p><table><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">NVM_HOME</td><td style="text-align:left;">D:\\NVM</td></tr><tr><td style="text-align:left;">NVM_SYMLINK</td><td style="text-align:left;">D:\\NVM\\nodejs</td></tr><tr><td style="text-align:left;">系统变量:</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">变量</td><td style="text-align:left;">值</td></tr><tr><td style="text-align:left;">:---</td><td style="text-align:left;">:---</td></tr><tr><td style="text-align:left;">NVM_HOME</td><td style="text-align:left;">D:\\NVM</td></tr><tr><td style="text-align:left;">NVM_SYMLINK</td><td style="text-align:left;">D:\\NVM\\nodejs</td></tr><tr><td style="text-align:left;">验证nvm安装：</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">打开cmd，输入nvm -v</td><td style="text-align:left;"></td></tr></tbody></table><p>不返回版本就是是因为权限不够 可以使用 管理员身份的nvm 或者 windows powershell 执行</p><p>nvm 下配置 node环境变量 1.首先在NVM的安装目录新建两个文件夹node_global和node_cache 2. 创建完两个文件夹后，在cmd窗口中输入以下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;D:\\NVM\\node_global&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 顺带把 该路径配置到 path 环境变量里</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;D:\\NVM\\node_cache&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;D:\\NVM\\node_global&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 顺带把 该路径配置到 path 环境变量里</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;D:\\NVM\\node_cache&quot;</span></span></code></pre></div><p>Path (用户,系统) \\AppData\\Roaming\\npm =&gt; D:\\nodejs\\node_global(非 C 盘下node_global 的路径) node_path ( 系统 ) node_global 文件夹的路径</p><h3 id="nvm-yarn" tabindex="-1">nvm + yarn <a class="header-anchor" href="#nvm-yarn" aria-label="Permalink to &quot;nvm + yarn&quot;">​</a></h3><p>需要做全局配置，才能使用，在【用户变量,系统变量】配置 yarn 里的 bin 的路径</p>`,22),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{m as __pageData,C as default};
