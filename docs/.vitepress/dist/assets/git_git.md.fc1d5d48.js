import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const p="/assets/合并代码流程.c907866e.png",h=JSON.parse('{"title":"git - 简明指南","description":"","frontmatter":{},"headers":[],"relativePath":"git/git.md","filePath":"git/git.md"}'),o={name:"git/git.md"},e=l(`<h1 id="git-简明指南" tabindex="-1">git - 简明指南 <a class="header-anchor" href="#git-简明指南" aria-label="Permalink to &quot;git - 简明指南&quot;">​</a></h1><p>(vscode编辑器有个分叉的符号,这个界面可以review自己的代码,保证代码改动代码改动的文件都是在预期范围内)</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><hr><p><a href="http://git-scm.com/download/mac" target="_blank" rel="noreferrer">git OSX 版</a> || <a href="https://gitforwindows.org/" target="_blank" rel="noreferrer">git Windows 版</a> || <a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git" target="_blank" rel="noreferrer">git Linux 版</a></p><h3 id="创建新仓库" tabindex="-1">创建新仓库 <a class="header-anchor" href="#创建新仓库" aria-label="Permalink to &quot;创建新仓库&quot;">​</a></h3><hr><p>创建新文件夹，打开，然后执行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>以创建新的 git 仓库。</p><h3 id="检出仓库" tabindex="-1">检出仓库 <a class="header-anchor" href="#检出仓库" aria-label="Permalink to &quot;检出仓库&quot;">​</a></h3><hr><p>执行如下命令以创建一个本地仓库的克隆版本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/path/to/repository</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/path/to/repository</span></span></code></pre></div><p>如果是远端服务器上的仓库，你的命令会是这个样子：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">username@host:/path/to/repository</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">username@host:/path/to/repository</span></span></code></pre></div><p>克隆指定分支上的代码</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">指定分支</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">仓库地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">指定分支</span><span style="color:#24292E;"> </span><span style="color:#032F62;">仓库地址</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bare</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/path/to/repository</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bare</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/path/to/repository</span></span></code></pre></div><p>从 <a href="https://github.com/vueComponent/ant-design-vue-pro.git" target="_blank" rel="noreferrer">https://github.com/vueComponent/ant-design-vue-pro.git</a> 上克隆一个提交(--depth=1) 到my-project 文件夹里</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--depth=1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/vueComponent/ant-design-vue-pro.git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 不知道干嘛的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">safe.directory</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;D:/others-----F(app_is_E)/学习文档/实训一/实训/react-router-dom v6/aaa/sourcecode&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--depth=1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/vueComponent/ant-design-vue-pro.git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 不知道干嘛的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">safe.directory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;D:/others-----F(app_is_E)/学习文档/实训一/实训/react-router-dom v6/aaa/sourcecode&#39;</span></span></code></pre></div><h3 id="git-仓库一些概念的解释" tabindex="-1">git 仓库一些概念的解释 <a class="header-anchor" href="#git-仓库一些概念的解释" aria-label="Permalink to &quot;git 仓库一些概念的解释&quot;">​</a></h3><ul><li>remote 远程仓库</li></ul><blockquote><p>本地仓库两个部分</p></blockquote><ul><li><p>disk 实际源文件</p></li><li><p>local 信息表</p></li></ul><blockquote><p>四者的关系</p></blockquote><ul><li>信息表更新本地源文件，本地源文件push到远端</li></ul><h3 id="工作流" tabindex="-1">工作流 <a class="header-anchor" href="#工作流" aria-label="Permalink to &quot;工作流&quot;">​</a></h3><hr><p>你的本地仓库由 git 维护的三棵“树”组成。第一个是你的 工作目录，它持有实际文件；第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；最后是 HEAD，它指向你最后一次提交的结果。</p><p><img src="http://rogerdudler.github.io/git-guide/img/trees.png" alt="working ---add---&gt;Index---commit---&gt;head---push---&gt;remote"></p><h3 id="添加和提交" tabindex="-1">添加和提交 <a class="header-anchor" href="#添加和提交" aria-label="Permalink to &quot;添加和提交&quot;">​</a></h3><hr><p>你可以提出更改（把它们添加到暂存区），使用如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filenam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比如:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git add &quot;git 的简单使用.md&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># git add . 的反操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filenam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比如:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git add &quot;git 的简单使用.md&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># git add . 的反操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span></span></code></pre></div><p>这是 git 基本工作流程的第一步；使用如下命令以实际提交改动：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;代码提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> [file1] [file2] ... -m </span><span style="color:#9ECBFF;">&quot;代码提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--only</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;新的提交信息&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 原来的提交信息写错了,修改一下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> [file1] [file2]... --amend </span><span style="color:#6A737D;"># 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上) 这个是补充指定文件提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--author</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;New Authorname &lt;authoremail@mydomain.com&gt;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 单个提交(commit)里的用户名和邮箱不对</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-am</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; 提交信息 &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将以跟踪文件的修改提交缓存区 (省略了 git add .)</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n( </span><span style="color:#B392F0;">git</span><span style="color:#79B8FF;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#79B8FF;"> --no-verify )</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#  跳过 commit-msg 或 pre-commit githooks</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [message]</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看那些文件将要被提交 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================================================</span></span>
<span class="line"><span style="color:#B392F0;">每一步</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">操作前都要</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看文件改动是不是自己要改的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看提交记录是不是自己需要的那一条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================================================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;代码提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> [file1] [file2] ... -m </span><span style="color:#032F62;">&quot;代码提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--only</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;新的提交信息&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 原来的提交信息写错了,修改一下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> [file1] [file2]... --amend </span><span style="color:#6A737D;"># 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上) 这个是补充指定文件提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--author</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;New Authorname &lt;authoremail@mydomain.com&gt;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 单个提交(commit)里的用户名和邮箱不对</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-am</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; 提交信息 &quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将以跟踪文件的修改提交缓存区 (省略了 git add .)</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n( </span><span style="color:#6F42C1;">git</span><span style="color:#005CC5;"> </span><span style="color:#032F62;">commit</span><span style="color:#005CC5;"> --no-verify )</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#  跳过 commit-msg 或 pre-commit githooks</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [message]</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看那些文件将要被提交 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;">  </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================================================</span></span>
<span class="line"><span style="color:#6F42C1;">每一步</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">操作前都要</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看文件改动是不是自己要改的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看提交记录是不是自己需要的那一条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================================================</span></span></code></pre></div><p>现在，你的改动已经提交到了 HEAD，但是还没到你的远端仓库。</p><ul><li>有关于 git commit --amend : git commit --amend 会给<code>最后一条提交信息</code>补充提交内容,要先看看最后一条提交信息<code>是不是自己写</code>的,否则会出问题</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">########## 之后会出现这样一个页面 ##################</span></span>
<span class="line"><span style="color:#6A737D;"># -------------- 说明 : 这里修改提交信息 --------------</span></span>
<span class="line"><span style="color:#B392F0;">docs(jest</span><span style="color:#E1E4E8;">): 修改了点东西     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span style="color:#6A737D;"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Date:      Mon May 16 00:47:30 2022 +0800</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># On branch master</span></span>
<span class="line"><span style="color:#6A737D;"># Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># You are currently rebasing.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#6A737D;">#	modified:   jest----unit_test/readme.md</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes not staged for commit:</span></span>
<span class="line"><span style="color:#6A737D;">#	modified:   &quot;git/git \\347\\232\\204\\347\\256\\200\\345\\215\\225\\344\\275\\277\\347\\224\\250.md&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;">########## 之后会出现这样一个页面 ##################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">简单介绍一下可能用到的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">insert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">插入</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">编辑完提交信息之后,将光标移到最下面</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">不能出现可能损坏提交信息和提交文件路径的事情!!!!!!</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">输入</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:wq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">就可以退出编辑页面</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 之后就可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要提交的分支</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 添加到分支 (否则会添加 commit 信息)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">########## 之后会出现这样一个页面 ##################</span></span>
<span class="line"><span style="color:#6A737D;"># -------------- 说明 : 这里修改提交信息 --------------</span></span>
<span class="line"><span style="color:#6F42C1;">docs(jest</span><span style="color:#24292E;">): 修改了点东西     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span style="color:#6A737D;"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Date:      Mon May 16 00:47:30 2022 +0800</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># On branch master</span></span>
<span class="line"><span style="color:#6A737D;"># Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># You are currently rebasing.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#6A737D;">#	modified:   jest----unit_test/readme.md</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes not staged for commit:</span></span>
<span class="line"><span style="color:#6A737D;">#	modified:   &quot;git/git \\347\\232\\204\\347\\256\\200\\345\\215\\225\\344\\275\\277\\347\\224\\250.md&quot;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;">########## 之后会出现这样一个页面 ##################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">简单介绍一下可能用到的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">insert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">插入</span><span style="color:#24292E;"> </span><span style="color:#032F62;">编辑完提交信息之后,将光标移到最下面</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">不能出现可能损坏提交信息和提交文件路径的事情!!!!!!</span><span style="color:#24292E;">) </span><span style="color:#032F62;">输入</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:wq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">就可以退出编辑页面</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 之后就可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要提交的分支</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 添加到分支 (否则会添加 commit 信息)</span></span></code></pre></div><h3 id="推送改动" tabindex="-1">推送改动 <a class="header-anchor" href="#推送改动" aria-label="Permalink to &quot;推送改动&quot;">​</a></h3><hr><p>你的改动现在已经在本地仓库的 HEAD 中了。执行如下命令以将这些改动提交到远端仓库：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">将更改推送到远程存储库（并记住分支）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> [branch </span><span style="color:#9ECBFF;">name]</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 设置默认分支并推送,之后就可以直接 git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ==============================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要删除的分支名</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dr</span><span style="color:#E1E4E8;"> [remote/branch]</span></span>
<span class="line"><span style="color:#6A737D;">#  或者</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:要删除的分支名</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">将更改推送到远程存储库（记住的分支）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个本地分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要删除的分支名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 强制删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要删除的分支名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 非强制删除 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 加上-a参数，可以查看远程分支，远程分支会用红色表示出来（开了颜色支持的前提下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [old </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name]</span><span style="color:#E1E4E8;"> [new </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name]</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 重命名本地分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 预览本地存储库中的所有分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [branch </span><span style="color:#9ECBFF;">name]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/[branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name]</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 克隆一个远程分支并切换到它</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">—</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">track</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 该命令用于切换分支。这特别适用于第一次访问分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch-name]</span></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支,并与远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--track</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;分支名&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;远程分支名&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在现有分支与指定的远程分支之间 建立追踪关系，</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--set-upstream</span><span style="color:#E1E4E8;"> [branch] [remote-branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">将更改推送到远程存储库（并记住分支）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> [branch </span><span style="color:#032F62;">name]</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 设置默认分支并推送,之后就可以直接 git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ==============================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要删除的分支名</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dr</span><span style="color:#24292E;"> [remote/branch]</span></span>
<span class="line"><span style="color:#6A737D;">#  或者</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:要删除的分支名</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">将更改推送到远程存储库（记住的分支）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除一个本地分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要删除的分支名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 强制删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要删除的分支名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 非强制删除 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 加上-a参数，可以查看远程分支，远程分支会用红色表示出来（开了颜色支持的前提下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [old </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name]</span><span style="color:#24292E;"> [new </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name]</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 重命名本地分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 预览本地存储库中的所有分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [branch </span><span style="color:#032F62;">name]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/[branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name]</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 克隆一个远程分支并切换到它</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">—</span><span style="color:#24292E;"> </span><span style="color:#032F62;">track</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 该命令用于切换分支。这特别适用于第一次访问分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch-name]</span></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支,并与远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--track</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;分支名&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;远程分支名&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在现有分支与指定的远程分支之间 建立追踪关系，</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--set-upstream</span><span style="color:#24292E;"> [branch] [remote-branch]</span></span></code></pre></div><p>切换到上次签出的分支</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><p>放弃对文件的更改</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> [file-name.txt]</span></span>
<span class="line"><span style="color:#6A737D;"># 放弃对全部文件的修改</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> [file-name.txt]</span></span>
<span class="line"><span style="color:#6A737D;"># 放弃对全部文件的修改</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><p>可以把 master 换成你想要推送的任何分支。 如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">serve</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">serve</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>如此你就能够将你的改动推送到所添加的服务器上去了。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 自己试过的:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要删除的分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">之后依赖于公共开发分支再开一个分支,分支名跟之前的一样,之后提交到远程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 自己试过的:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要删除的分支名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">之后依赖于公共开发分支再开一个分支,分支名跟之前的一样,之后提交到远程</span></span></code></pre></div><h3 id="远程仓库重命名" tabindex="-1">远程仓库重命名 <a class="header-anchor" href="#远程仓库重命名" aria-label="Permalink to &quot;远程仓库重命名&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rename</span><span style="color:#E1E4E8;"> [oldRemoteName] [newRemoteName]   </span><span style="color:#6A737D;"># 将名为 oldRemoteName 的远程仓库重命名为 newRemoteName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rename</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 将名称为 origin 的远程仓库重命名为 demo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rename</span><span style="color:#24292E;"> [oldRemoteName] [newRemoteName]   </span><span style="color:#6A737D;"># 将名为 oldRemoteName 的远程仓库重命名为 newRemoteName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rename</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 将名称为 origin 的远程仓库重命名为 demo</span></span></code></pre></div><h3 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h3><hr><p>分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”分支。在其他分支上进行开发，完成后再将它们合并到主分支上。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*      </span></span>
<span class="line"><span style="color:#6A737D;">            --------自己建的分支--------</span></span>
<span class="line"><span style="color:#6A737D;">           |                           \\</span></span>
<span class="line"><span style="color:#6A737D;">-----------*-------------master---------*------------------&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        branch                        merge</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*      </span></span>
<span class="line"><span style="color:#6A737D;">            --------自己建的分支--------</span></span>
<span class="line"><span style="color:#6A737D;">           |                           \\</span></span>
<span class="line"><span style="color:#6A737D;">-----------*-------------master---------*------------------&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        branch                        merge</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>创建一个叫做“feature_x”的分支，并切换过去：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature_x</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature_x</span></span></code></pre></div><p>切换回主分支：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span></code></pre></div><p>再把新建的分支删掉：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature_x</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature_x</span></span></code></pre></div><p>除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="更新与合并" tabindex="-1">更新与合并 <a class="header-anchor" href="#更新与合并" aria-label="Permalink to &quot;更新与合并&quot;">​</a></h3><hr><p>要更新你的本地仓库至最新改动，执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">仓库地址别名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">拉取仓库的哪一个分支</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 此时此刻如果是拉取新分支到本地的话 git branch 是获取不到拉取下来的新分支的 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解决冲突的几点说明</span></span>
<span class="line"><span style="color:#B392F0;">incomming</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">change</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">本地编辑器里的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">current</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">change</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">从远程拉取下来的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">对于同一个文件，如果有多个分支需要合并时，容易出现冲突。(多个分支的同一行代码不同</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">因为开发者A和开发者B修改了同一个文件，那么在「merge」代码时就可能存在冲突问题需要解决。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">关键词:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">conflict</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">存在冲突</span></span>
<span class="line"><span style="color:#B392F0;">关键词:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">both</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">已解决冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git pull --rebase 解决冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#情景描述：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git pull --rebase 的作用就不多说了，A，B同时修改了一个文件，当git要提交，执行了git commit -a -m ，再执行git pull --rebase的时候，有冲突产生。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#解决方案</span></span>
<span class="line"><span style="color:#6A737D;"># -------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># 定位到冲突文件</span></span>
<span class="line"><span style="color:#6A737D;"># 手动解决冲突</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git add .</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git rebase --continue</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--continue</span></span>
<span class="line"><span style="color:#6A737D;"># 此时执行git status 看下当前在那个分支上，如果在临时分支上，则需要执行git branch</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git push即可完成</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">仓库地址别名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">拉取仓库的哪一个分支</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 此时此刻如果是拉取新分支到本地的话 git branch 是获取不到拉取下来的新分支的 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解决冲突的几点说明</span></span>
<span class="line"><span style="color:#6F42C1;">incomming</span><span style="color:#24292E;"> </span><span style="color:#032F62;">change</span><span style="color:#24292E;"> </span><span style="color:#032F62;">本地编辑器里的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">current</span><span style="color:#24292E;"> </span><span style="color:#032F62;">change</span><span style="color:#24292E;"> </span><span style="color:#032F62;">从远程拉取下来的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">对于同一个文件，如果有多个分支需要合并时，容易出现冲突。(多个分支的同一行代码不同</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">因为开发者A和开发者B修改了同一个文件，那么在「merge」代码时就可能存在冲突问题需要解决。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">关键词:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">conflict</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">存在冲突</span></span>
<span class="line"><span style="color:#6F42C1;">关键词:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">both</span><span style="color:#24292E;"> </span><span style="color:#032F62;">added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">已解决冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git pull --rebase 解决冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#情景描述：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git pull --rebase 的作用就不多说了，A，B同时修改了一个文件，当git要提交，执行了git commit -a -m ，再执行git pull --rebase的时候，有冲突产生。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#解决方案</span></span>
<span class="line"><span style="color:#6A737D;"># -------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># 定位到冲突文件</span></span>
<span class="line"><span style="color:#6A737D;"># 手动解决冲突</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git add .</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git rebase --continue</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--continue</span></span>
<span class="line"><span style="color:#6A737D;"># 此时执行git status 看下当前在那个分支上，如果在临时分支上，则需要执行git branch</span></span>
<span class="line"><span style="color:#6A737D;"># 执行git push即可完成</span></span></code></pre></div><h3 id="git-pull-rebase-origin-branchname" tabindex="-1">git pull --rebase origin [branchName] <a class="header-anchor" href="#git-pull-rebase-origin-branchname" aria-label="Permalink to &quot;git pull --rebase origin [branchName]&quot;">​</a></h3><p>git pull --rebase origin [branchName] = git fetch + git rebase</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 假设当前分支dev, commit 为 a b c d e</span></span>
<span class="line"><span style="color:#6A737D;">// 假设master分支, commit 为 a b f g h</span></span>
<span class="line"><span style="color:#E1E4E8;">git pull </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">rebase origin master</span></span>
<span class="line"><span style="color:#6A737D;">// 当前分支dev commit 变为 a b c d e f g h</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 假设当前分支dev, commit 为 a b c d e</span></span>
<span class="line"><span style="color:#6A737D;">// 假设master分支, commit 为 a b f g h</span></span>
<span class="line"><span style="color:#24292E;">git pull </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">rebase origin master</span></span>
<span class="line"><span style="color:#6A737D;">// 当前分支dev commit 变为 a b c d e f g h</span></span></code></pre></div><h3 id="git-rebase-master-以当前分支-第二个参数不写默认为当前分支-最新一次提交作为基底-把「master」分支公共父节点之后的版本追加到新基底之后-变基" tabindex="-1">git rebase master 以当前分支(-----第二个参数不写默认为当前分支-----)最新一次提交作为基底,把「master」分支公共父节点之后的版本追加到新基底之后(变基) <a class="header-anchor" href="#git-rebase-master-以当前分支-第二个参数不写默认为当前分支-最新一次提交作为基底-把「master」分支公共父节点之后的版本追加到新基底之后-变基" aria-label="Permalink to &quot;git rebase master 以当前分支(-----第二个参数不写默认为当前分支-----)最新一次提交作为基底,把「master」分支公共父节点之后的版本追加到新基底之后(变基)&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 假设当前分支dev, commit 为 a b c d e</span></span>
<span class="line"><span style="color:#6A737D;"># 假设master分支, commit 为 a b f g h</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/master</span></span>
<span class="line"><span style="color:#6A737D;"># 当前分支dev commit 变为 a b f g h c d e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># 这两条命令等价于git rebase master feature</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">array-algorithm</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 假设当前分支dev, commit 为 a b c d e</span></span>
<span class="line"><span style="color:#6A737D;"># 假设master分支, commit 为 a b f g h</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/master</span></span>
<span class="line"><span style="color:#6A737D;"># 当前分支dev commit 变为 a b f g h c d e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"># 这两条命令等价于git rebase master feature</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">array-algorithm</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span></code></pre></div><h3 id="一个完整的更新代码流程-提交代码之前应该-pull-一下更新一下与主分支的差异-并且review代码" tabindex="-1">一个完整的更新代码流程 (提交代码之前应该 pull 一下更新一下与主分支的差异,并且review代码) <a class="header-anchor" href="#一个完整的更新代码流程-提交代码之前应该-pull-一下更新一下与主分支的差异-并且review代码" aria-label="Permalink to &quot;一个完整的更新代码流程 (提交代码之前应该 pull 一下更新一下与主分支的差异,并且review代码)&quot;">​</a></h3><p>review 代码可以利用 VScode的源代码管理,也就是长得像树杈子的那个东西 review 代码</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 从远程仓库拉取代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解决冲突,冲突见上面的几点说明</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 冲突解决完之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可以先将本地改动 commit 到 本地代码库之后再 拉代码 推到远程代码库</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 从远程仓库拉取代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解决冲突,冲突见上面的几点说明</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 冲突解决完之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;提交信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可以先将本地改动 commit 到 本地代码库之后再 拉代码 推到远程代码库</span></span></code></pre></div><p>以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。 要<strong>合并其他分支到</strong>你的<strong>当前分支</strong>（例如 master），执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将一个分支合并到一个目标分支(也就是将 branch 合并到当前分支)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> [source </span><span style="color:#9ECBFF;">branch]</span><span style="color:#E1E4E8;"> [target </span><span style="color:#9ECBFF;">branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优点：每个节点都是严格按照时间排列。当合并发生冲突时，只需要解决两个分支所指向的节点的冲突即可</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缺点：合并两个分支时大概率会生成新的节点并分叉，久而久之提交历史会变成一团乱麻</span></span>
<span class="line"><span style="color:#6A737D;"># 例如现在有两个分支 master 和 feature, 你在 feature 分支上进行了实验，这时候有个另外的人在 master 分支上进行了新的提交。那么你需要将 master上别人的修改应用到 feature 分支上。切换到其他分支A上再将其他分支 merge到 A 上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--abort</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 取消合并</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ===============================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取 同仓库下指定的远程分支: 在本地先建立远程同名的分支,切换到这个分支上在拉取远程的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如说 ,本地现在没有 a 分支,要从远程仓库下拉取a 分支到本地:</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 就可以了</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将一个分支合并到一个目标分支(也就是将 branch 合并到当前分支)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> [source </span><span style="color:#032F62;">branch]</span><span style="color:#24292E;"> [target </span><span style="color:#032F62;">branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优点：每个节点都是严格按照时间排列。当合并发生冲突时，只需要解决两个分支所指向的节点的冲突即可</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缺点：合并两个分支时大概率会生成新的节点并分叉，久而久之提交历史会变成一团乱麻</span></span>
<span class="line"><span style="color:#6A737D;"># 例如现在有两个分支 master 和 feature, 你在 feature 分支上进行了实验，这时候有个另外的人在 master 分支上进行了新的提交。那么你需要将 master上别人的修改应用到 feature 分支上。切换到其他分支A上再将其他分支 merge到 A 上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--abort</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 取消合并</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ===============================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取 同仓库下指定的远程分支: 在本地先建立远程同名的分支,切换到这个分支上在拉取远程的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如说 ,本地现在没有 a 分支,要从远程仓库下拉取a 分支到本地:</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 就可以了</span></span></code></pre></div><p>在这两种情况下，git 都会尝试去自动合并改动。遗憾的是，这可能并非每次都成功，并可能出现冲突（conflicts）。 这时候就需要你修改这些文件来手动合并这些冲突（conflicts）。改完之后，你需要执行如下命令以将它们标记为合并成功：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filenam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filenam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 针对某个文件的改动存入暂存区</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filenam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filenam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 针对某个文件的改动存入暂存区</span></span></code></pre></div><p>在合并改动之前，你可以使用如下命令预览差异：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">source_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">target_branc</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">file_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">#</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">查看文件改动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 光一个 git diff 即比较 本地代码和远程代码库里的不同</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">source_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">target_branc</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">file_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">#</span><span style="color:#24292E;"> </span><span style="color:#032F62;">查看文件改动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 光一个 git diff 即比较 本地代码和远程代码库里的不同</span></span></code></pre></div><h3 id="删除一个远程分支" tabindex="-1">删除一个远程分支: <a class="header-anchor" href="#删除一个远程分支" aria-label="Permalink to &quot;删除一个远程分支:&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">)$ git push origin --delete my-branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">)$ git push origin :my-branch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">)$ git push origin --delete my-branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">)$ git push origin :my-branch</span></span></code></pre></div><h3 id="删除一个本地分支" tabindex="-1">删除一个本地分支: <a class="header-anchor" href="#删除一个本地分支" aria-label="Permalink to &quot;删除一个本地分支:&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">)$ git branch -D my-branch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">)$ git branch -D my-branch</span></span></code></pre></div><h3 id="关于-incoming-change-和-current-change" tabindex="-1">关于 incoming change 和 current change <a class="header-anchor" href="#关于-incoming-change-和-current-change" aria-label="Permalink to &quot;关于 incoming change 和 current change&quot;">​</a></h3><p>incoming change 是vscode 编辑器里暂存起来的代码改动 current change 是远程仓库里拉取下来的代码改动</p><h3 id="你解决完所有冲突和测试过后-git-add-变化了的-changed-文件-然后用git-rebase-continue-继续rebase。" tabindex="-1">你解决完所有冲突和测试过后, git add 变化了的(changed)文件, 然后用git rebase --continue 继续rebase。 <a class="header-anchor" href="#你解决完所有冲突和测试过后-git-add-变化了的-changed-文件-然后用git-rebase-continue-继续rebase。" aria-label="Permalink to &quot;你解决完所有冲突和测试过后, git add 变化了的(changed)文件, 然后用git rebase --continue 继续rebase。&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">my-branch</span><span style="color:#E1E4E8;">)$ git add README.md</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">my-branch</span><span style="color:#E1E4E8;">)$ git rebase --continue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">my-branch</span><span style="color:#24292E;">)$ git add README.md</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">my-branch</span><span style="color:#24292E;">)$ git rebase --continue</span></span></code></pre></div><p>在解决完所有的冲突过后，得到了与提交前一样的结果, 可以执行git rebase --skip</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">my-branch</span><span style="color:#E1E4E8;">)$ git rebase --abort</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">my-branch</span><span style="color:#24292E;">)$ git rebase --abort</span></span></code></pre></div><h3 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h3><hr><p>为软件发布创建标签是推荐的。这个概念早已存在，在 SVN 中也有。你可以执行如下命令创建一个叫做 1.0.0 的标签：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出所有tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;提交hashId&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看tag信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] 版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [branch] 版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [branch] [tag]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出所有tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;提交hashId&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看tag信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] 版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [branch] 版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [branch] [tag]</span></span></code></pre></div><p>1b2e1d63ff 是你想要标记的提交 ID 的前 10 位字符。可以使用下列命令获取提交 ID：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span></code></pre></div><p>你也可以使用少一点的提交 ID 前几位，只要它的指向具有唯一性。</p><p>log 如果你想了解本地仓库的历史记录，最简单的命令就是使用:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果是看上一次提交的信息(下面这俩)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 一行显示提交信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果是看上一次提交的信息(下面这俩)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 一行显示提交信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--summary</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看更改（详细）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--summary</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看更改（详细）</span></span></code></pre></div><p>你可以添加一些参数来修改他的输出，从而得到自己想要的结果。 只看某一个人的提交记录:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--author=bob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据提交信息模糊搜索提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--grep=bob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出 2022-01-01 之后,2022-01-31 之前的提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--after=</span><span style="color:#9ECBFF;">&quot;2022-01-01&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--before=</span><span style="color:#9ECBFF;">&quot;2022-01-31&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--until=</span><span style="color:#9ECBFF;">&quot;2022-01-01&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--since=</span><span style="color:#9ECBFF;">&quot;2022-01-31&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git log --format</span><span style="color:#E1E4E8;">=</span><span style="color:#B392F0;">&quot;%h %as %s %an&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># %h 是缩写的 commit hash，%as 是日期的一种格式，%s 是 commit 的主题，%an 是 commit 的作者。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看某人在所有分支的过去一周的 commit </span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--author=</span><span style="color:#9ECBFF;">&quot;guang&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--after=</span><span style="color:#9ECBFF;">&quot;2022-01-01&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--before=</span><span style="color:#9ECBFF;">&quot;2022-01-07&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span>
<span class="line"><span style="color:#6A737D;"># 除了合并的提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-merges</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只有合并的提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--merges</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--author=bob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据提交信息模糊搜索提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--grep=bob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出 2022-01-01 之后,2022-01-31 之前的提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--after=</span><span style="color:#032F62;">&quot;2022-01-01&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--before=</span><span style="color:#032F62;">&quot;2022-01-31&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--until=</span><span style="color:#032F62;">&quot;2022-01-01&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--since=</span><span style="color:#032F62;">&quot;2022-01-31&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git log --format</span><span style="color:#24292E;">=</span><span style="color:#6F42C1;">&quot;%h %as %s %an&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># %h 是缩写的 commit hash，%as 是日期的一种格式，%s 是 commit 的主题，%an 是 commit 的作者。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看某人在所有分支的过去一周的 commit </span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--author=</span><span style="color:#032F62;">&quot;guang&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--after=</span><span style="color:#032F62;">&quot;2022-01-01&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--before=</span><span style="color:#032F62;">&quot;2022-01-07&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span>
<span class="line"><span style="color:#6A737D;"># 除了合并的提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-merges</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只有合并的提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--merges</span></span></code></pre></div><p>一个压缩后的每一条提交记录只占一行的输出:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty=oneline</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty=oneline</span></span></code></pre></div><p>或者你想通过 ASCII 艺术的树形结构来展示所有的分支, 每个分支都标示了他的名字和标签:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--graph</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--decorate</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--graph</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--decorate</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span></code></pre></div><p>看看哪些文件改变了:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name-status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name-status</span></span></code></pre></div><p>这些只是你可以使用的参数中很小的一部分。更多的信息，参考：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--merge</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将此次合并中造成冲突的来自于两个分支中的具体提交列出来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> [tag] HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--follow</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whatchanged</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示一个漂亮的、整齐的提交图以及 ref pointers</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--graph</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--decorate</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-5</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按照 commit 数来倒序排列</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shortlog</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shortlog</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按照人来分组统计</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shortlog</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blame</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比较暂存区与指定commit-id的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [&lt;commit-id&gt;] [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">path</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比较工作区与最新本地版本库。如果HEAD指向的是master分支，那么HEAD还可以换成master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span><span style="color:#E1E4E8;"> [&lt;path&gt;...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较两个分支中同一个文件的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> [first-branch]...[second-branch]  文件的相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--shortstat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 一个礼拜的</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD@{</span><span style="color:#79B8FF;">7</span><span style="color:#9ECBFF;">.day.agree}</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD@{</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 比较两个提交指定文件的改动</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commithash1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commithash2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filepath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看两个提交版本id修改了那些文件.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit-id1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit-id2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比较工作区与指定commit-id的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit-id</span><span style="color:#E1E4E8;"> [&lt;path&gt;...]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比较两个commit-id之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> [&lt;commit-id&gt;] [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">commit-id</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 比较两个版本的src 文件夹的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号码1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">版本号码2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 把指定的提交拉到你的当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commit-has</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name-only</span><span style="color:#E1E4E8;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [commit]:[filename]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的最近几次提交 ()</span></span>
<span class="line"><span style="color:#6A737D;"># git log 是查看 commit 历史的，而 git shortlog 是查看分组的统计结果, git reflog 是记录 ref 的修改历史的。.git 的 logs/refs 里</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--merge</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将此次合并中造成冲突的来自于两个分支中的具体提交列出来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> [tag] HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--follow</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whatchanged</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示一个漂亮的、整齐的提交图以及 ref pointers</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--graph</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--decorate</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按照 commit 数来倒序排列</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shortlog</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shortlog</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 按照人来分组统计</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shortlog</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blame</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比较暂存区与指定commit-id的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [&lt;commit-id&gt;] [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">path</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比较工作区与最新本地版本库。如果HEAD指向的是master分支，那么HEAD还可以换成master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span><span style="color:#24292E;"> [&lt;path&gt;...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较两个分支中同一个文件的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> [first-branch]...[second-branch]  文件的相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--shortstat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 一个礼拜的</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD@{</span><span style="color:#005CC5;">7</span><span style="color:#032F62;">.day.agree}</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD@{</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 比较两个提交指定文件的改动</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commithash1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commithash2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filepath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看两个提交版本id修改了那些文件.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit-id1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit-id2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比较工作区与指定commit-id的差异</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit-id</span><span style="color:#24292E;"> [&lt;path&gt;...]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比较两个commit-id之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> [&lt;commit-id&gt;] [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">commit-id</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 比较两个版本的src 文件夹的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号码1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">版本号码2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 把指定的提交拉到你的当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit-has</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name-only</span><span style="color:#24292E;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [commit]:[filename]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的最近几次提交 ()</span></span>
<span class="line"><span style="color:#6A737D;"># git log 是查看 commit 历史的，而 git shortlog 是查看分组的统计结果, git reflog 是记录 ref 的修改历史的。.git 的 logs/refs 里</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span></span></code></pre></div><h3 id="替换本地改动" tabindex="-1">替换本地改动 <a class="header-anchor" href="#替换本地改动" aria-label="Permalink to &quot;替换本地改动&quot;">​</a></h3><hr><p>假如你操作失误（当然，这最好永远不要发生），你可以使用如下命令替换掉本地改动：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filenam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filenam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。</p><p>假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =========从远程上拉取所有分支====================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =========从远程上拉取所有分支====================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span></code></pre></div><p>git reset --hard origin/master</p><h3 id="删除最后一次提交" tabindex="-1">删除最后一次提交 <a class="header-anchor" href="#删除最后一次提交" aria-label="Permalink to &quot;删除最后一次提交&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> [remote] [branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> [remote] [branch]</span></span></code></pre></div><h3 id="实用小贴士" tabindex="-1">实用小贴士 <a class="header-anchor" href="#实用小贴士" aria-label="Permalink to &quot;实用小贴士&quot;">​</a></h3><hr><p>内建的图形化 git：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gitk</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gitk</span></span></code></pre></div><p>彩色的 git 输出：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">color.ui</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">color.ui</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span></code></pre></div><p>显示历史记录时，每个提交的信息只显示一行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">format.pretty</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oneline</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">format.pretty</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oneline</span></span></code></pre></div><p>交互式添加文件到暂存区：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span></span></code></pre></div><h3 id="查看git-设置的用户-邮箱" tabindex="-1">查看git 设置的用户 邮箱 <a class="header-anchor" href="#查看git-设置的用户-邮箱" aria-label="Permalink to &quot;查看git 设置的用户 邮箱&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑Git配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;">                     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;邮箱地址&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;用户名&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;">                     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[name]&quot;</span><span style="color:#E1E4E8;">                    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;[email address]&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑Git配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;">                     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;邮箱地址&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;用户名&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;">                     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[name]&quot;</span><span style="color:#24292E;">                    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;[email address]&quot;</span></span></code></pre></div><h3 id="代码回滚版本" tabindex="-1">代码回滚版本 <a class="header-anchor" href="#代码回滚版本" aria-label="Permalink to &quot;代码回滚版本&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看要回滚的commit id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitHashValue</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 重置代码版本为指定版本  ①</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">分支名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 提交重置后的版本           ②</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**</span><span style="color:#9ECBFF;">--hard</span><span style="color:#79B8FF;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitHashValue</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 强制reset      ①</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**</span><span style="color:#9ECBFF;">-f</span><span style="color:#79B8FF;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">分支名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 强制提交重置后的版本    ②</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 撤销前一次 git add . ,stash 之后出现代码冲突可以撤销冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 硬重置之后找回内容(只有几天的时间) 也就是get reset --hard commitHashValue 之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看硬重置之前的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SHAa6d398f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看要回滚的commit id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitHashValue</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 重置代码版本为指定版本  ①</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 提交重置后的版本           ②</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**</span><span style="color:#032F62;">--hard</span><span style="color:#005CC5;">**</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitHashValue</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 强制reset      ①</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**</span><span style="color:#032F62;">-f</span><span style="color:#005CC5;">**</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 强制提交重置后的版本    ②</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 撤销前一次 git add . ,stash 之后出现代码冲突可以撤销冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 硬重置之后找回内容(只有几天的时间) 也就是get reset --hard commitHashValue 之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看硬重置之前的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SHAa6d398f</span></span></code></pre></div><ul><li>但 <em>git reset</em> 有个致命缺点 : 回退到某一版本之后,这个版本之后的所有版本都将不复存在</li></ul><ul><li><strong>git rebase</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branchname/commithash</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 先把自己修改扔到一边,先把main 最新修改拿过来,之后再最新修改的基础上添加自己的commit(也就是 变基 ) 相当于是在最新的commit 上做了修改  \\*\\*\\*\\*\\*但是 git rebase main  之后在提交代码的时候要加上 -f (所以不能对多人协作的分支进行 git push -f branch)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">起点commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">终点</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">详见</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Pro</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6.4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">重写历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD~10</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">调整最近10次提交的日志、或合并多次提交为1次，让log更好看更清晰</span></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pick：简写p，启用该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># reword：简写r，使用该commit，但是修改提交信息，修改后可以继续编辑后面的提交信息；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># edit：简写e，使用commit，停止合并该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># squash：简写s，使用该commit，并将该commit并入前一commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># drop：简写d，移除该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># fixup:简写f,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># exec:简写e,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># break:简写b,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># label:简写l,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># reset:简写r,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># merge:简写m,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优点：会使提交历史看起来更加线性、干净</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缺点：虽然提交看起来像是线性的，但并不是真正的按时间排序，比如图3-3中，不管C4早于或者晚于C3提交它最终都会放在C3后面。并且当合并发生冲突时，理论上来讲有几个节点rebase到目标分支就可能处理几次冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git rebase 的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># % git rebase -i HEAD~受到影响的提交信息数量 %</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 查看提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD~2</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 两个提交节点的commit 会消失,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">按</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">进入编辑模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">编辑要修改,要合并的commit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">esc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">再输入:wq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">调到下一个命令行页面</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">填写提交信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">修改完信息之后esc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">和输入</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:wq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">结束变基</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">最后</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">提交代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rebase 之后commitid 将会丢失</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ======================== git rebase -i 起点commit id 重点 commit id =========================================</span></span>
<span class="line"><span style="color:#B392F0;">pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fe0a0d9</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">准备第一个文件</span></span>
<span class="line"><span style="color:#B392F0;">pick</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0760449</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">这是第二个文件</span></span>
<span class="line"><span style="color:#B392F0;">pick</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#9ECBFF;">eb3e64</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">有一个文件修改了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Rebase 9092d2c..7eb3e64 onto 9092d2c (3 commands)</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Commands:</span></span>
<span class="line"><span style="color:#6A737D;"># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span style="color:#6A737D;"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span></span>
<span class="line"><span style="color:#6A737D;"># e, edit &lt;commit&gt; = use commit, but stop for amending</span></span>
<span class="line"><span style="color:#6A737D;"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span></span>
<span class="line"><span style="color:#6A737D;"># f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous</span></span>
<span class="line"><span style="color:#6A737D;">#                    commit&#39;s log message, unless -C is used, in which case</span></span>
<span class="line"><span style="color:#6A737D;">#                    keep only this commit&#39;s message; -c is same as -C but</span></span>
<span class="line"><span style="color:#6A737D;">#                    opens the editor</span></span>
<span class="line"><span style="color:#6A737D;"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span></span>
<span class="line"><span style="color:#6A737D;"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span></span>
<span class="line"><span style="color:#6A737D;"># d, drop &lt;commit&gt; = remove commit</span></span>
<span class="line"><span style="color:#6A737D;"># l, label &lt;label&gt; = label current HEAD with a name</span></span>
<span class="line"><span style="color:#6A737D;"># t, reset &lt;label&gt; = reset HEAD to a label</span></span>
<span class="line"><span style="color:#6A737D;"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span></span>
<span class="line"><span style="color:#6A737D;"># .       create a merge commit using the original merge commit&#39;s</span></span>
<span class="line"><span style="color:#6A737D;"># .       message (or the oneline, if no original merge commit was</span></span>
<span class="line"><span style="color:#6A737D;"># .       specified); use -c &lt;commit&gt; to reword the commit message</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># These lines can be re-ordered; they are executed from top to bottom.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># If you remove a line here THAT COMMIT WILL BE LOST.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># However, if you remove everything, the rebase will be aborted.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id =========================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">修改完提交信息后会进入下一个页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is a combination of 3 commits.</span></span>
<span class="line"><span style="color:#6A737D;"># This is the 1st commit message:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">准备第一个文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is the commit message #2:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">这是第二个文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is the commit message #3:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">有一个文件修改了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span style="color:#6A737D;"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Date:      Mon May 16 17:47:00 2022 +0800</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># interactive rebase in progress; onto 9092d2c</span></span>
<span class="line"><span style="color:#6A737D;"># Last commands done (3 commands done):</span></span>
<span class="line"><span style="color:#6A737D;">#    squash 0760449 这是第二个文件</span></span>
<span class="line"><span style="color:#6A737D;">#    squash 7eb3e64 有一个文件修改了</span></span>
<span class="line"><span style="color:#6A737D;"># No commands remaining.</span></span>
<span class="line"><span style="color:#6A737D;"># You are currently rebasing.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#6A737D;">#	new file:   one.ts</span></span>
<span class="line"><span style="color:#6A737D;">#	new file:   two.ts</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branchname/commithash</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 先把自己修改扔到一边,先把main 最新修改拿过来,之后再最新修改的基础上添加自己的commit(也就是 变基 ) 相当于是在最新的commit 上做了修改  \\*\\*\\*\\*\\*但是 git rebase main  之后在提交代码的时候要加上 -f (所以不能对多人协作的分支进行 git push -f branch)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">起点commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">id</span><span style="color:#24292E;"> </span><span style="color:#032F62;">终点</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">id</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">详见</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Pro</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6.4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">重写历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD~10</span><span style="color:#24292E;"> </span><span style="color:#032F62;">调整最近10次提交的日志、或合并多次提交为1次，让log更好看更清晰</span></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pick：简写p，启用该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># reword：简写r，使用该commit，但是修改提交信息，修改后可以继续编辑后面的提交信息；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># edit：简写e，使用commit，停止合并该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># squash：简写s，使用该commit，并将该commit并入前一commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># drop：简写d，移除该commit；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># fixup:简写f,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># exec:简写e,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># break:简写b,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># label:简写l,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># reset:简写r,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># merge:简写m,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优点：会使提交历史看起来更加线性、干净</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 缺点：虽然提交看起来像是线性的，但并不是真正的按时间排序，比如图3-3中，不管C4早于或者晚于C3提交它最终都会放在C3后面。并且当合并发生冲突时，理论上来讲有几个节点rebase到目标分支就可能处理几次冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git rebase 的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># % git rebase -i HEAD~受到影响的提交信息数量 %</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 查看提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD~2</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 两个提交节点的commit 会消失,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">按</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">进入编辑模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">编辑要修改,要合并的commit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">esc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">再输入:wq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">调到下一个命令行页面</span><span style="color:#24292E;">  </span><span style="color:#032F62;">填写提交信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">修改完信息之后esc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">和输入</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:wq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">结束变基</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">最后</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;">  </span><span style="color:#032F62;">提交代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rebase 之后commitid 将会丢失</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ======================== git rebase -i 起点commit id 重点 commit id =========================================</span></span>
<span class="line"><span style="color:#6F42C1;">pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fe0a0d9</span><span style="color:#24292E;"> </span><span style="color:#032F62;">准备第一个文件</span></span>
<span class="line"><span style="color:#6F42C1;">pick</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0760449</span><span style="color:#24292E;"> </span><span style="color:#032F62;">这是第二个文件</span></span>
<span class="line"><span style="color:#6F42C1;">pick</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#032F62;">eb3e64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">有一个文件修改了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Rebase 9092d2c..7eb3e64 onto 9092d2c (3 commands)</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Commands:</span></span>
<span class="line"><span style="color:#6A737D;"># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span style="color:#6A737D;"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span></span>
<span class="line"><span style="color:#6A737D;"># e, edit &lt;commit&gt; = use commit, but stop for amending</span></span>
<span class="line"><span style="color:#6A737D;"># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span></span>
<span class="line"><span style="color:#6A737D;"># f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous</span></span>
<span class="line"><span style="color:#6A737D;">#                    commit&#39;s log message, unless -C is used, in which case</span></span>
<span class="line"><span style="color:#6A737D;">#                    keep only this commit&#39;s message; -c is same as -C but</span></span>
<span class="line"><span style="color:#6A737D;">#                    opens the editor</span></span>
<span class="line"><span style="color:#6A737D;"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span></span>
<span class="line"><span style="color:#6A737D;"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span></span>
<span class="line"><span style="color:#6A737D;"># d, drop &lt;commit&gt; = remove commit</span></span>
<span class="line"><span style="color:#6A737D;"># l, label &lt;label&gt; = label current HEAD with a name</span></span>
<span class="line"><span style="color:#6A737D;"># t, reset &lt;label&gt; = reset HEAD to a label</span></span>
<span class="line"><span style="color:#6A737D;"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span></span>
<span class="line"><span style="color:#6A737D;"># .       create a merge commit using the original merge commit&#39;s</span></span>
<span class="line"><span style="color:#6A737D;"># .       message (or the oneline, if no original merge commit was</span></span>
<span class="line"><span style="color:#6A737D;"># .       specified); use -c &lt;commit&gt; to reword the commit message</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># These lines can be re-ordered; they are executed from top to bottom.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># If you remove a line here THAT COMMIT WILL BE LOST.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># However, if you remove everything, the rebase will be aborted.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id =========================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">修改完提交信息后会进入下一个页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is a combination of 3 commits.</span></span>
<span class="line"><span style="color:#6A737D;"># This is the 1st commit message:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">准备第一个文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is the commit message #2:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">这是第二个文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># This is the commit message #3:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">有一个文件修改了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span style="color:#6A737D;"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Date:      Mon May 16 17:47:00 2022 +0800</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># interactive rebase in progress; onto 9092d2c</span></span>
<span class="line"><span style="color:#6A737D;"># Last commands done (3 commands done):</span></span>
<span class="line"><span style="color:#6A737D;">#    squash 0760449 这是第二个文件</span></span>
<span class="line"><span style="color:#6A737D;">#    squash 7eb3e64 有一个文件修改了</span></span>
<span class="line"><span style="color:#6A737D;"># No commands remaining.</span></span>
<span class="line"><span style="color:#6A737D;"># You are currently rebasing.</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#6A737D;">#	new file:   one.ts</span></span>
<span class="line"><span style="color:#6A737D;">#	new file:   two.ts</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================</span></span></code></pre></div><h3 id="删除任意提交-commit" tabindex="-1">删除任意提交(commit) <a class="header-anchor" href="#删除任意提交-commit" aria-label="Permalink to &quot;删除任意提交(commit)&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--onto</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SHA1_OF_BAD_COMMIT^</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SHA1_OF_BAD_COMMIT</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> [remote] [branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--onto</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SHA1_OF_BAD_COMMIT^</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SHA1_OF_BAD_COMMIT</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> [remote] [branch]</span></span></code></pre></div><ul><li><strong>git revert</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># git revert 的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#              撤销前一次 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#             撤销前前一次 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitId</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#           撤销至指定版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 完整的回滚流程(拿第三个来举例子)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitId</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 回滚到指定版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;提交信息&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 提交回滚的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">这个是git地址的别名</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">这个是分支名</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;"># 提交到远端 </span></span>
<span class="line"><span style="color:#6A737D;"># ==========================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 此命令用于删除本地存储库中未跟踪的文件。</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 此命令用于删除本地存储库中未跟踪的目录。你也可以将其组合到 git clean -fd 中以同时执行这两项操作。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># git revert 的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">#              撤销前一次 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#             撤销前前一次 commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitId</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#           撤销至指定版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 完整的回滚流程(拿第三个来举例子)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitId</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 回滚到指定版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;提交信息&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 提交回滚的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">这个是git地址的别名</span><span style="color:#24292E;">) </span><span style="color:#032F62;">master</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">这个是分支名</span><span style="color:#24292E;">) </span><span style="color:#6A737D;"># 提交到远端 </span></span>
<span class="line"><span style="color:#6A737D;"># ==========================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 此命令用于删除本地存储库中未跟踪的文件。</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 此命令用于删除本地存储库中未跟踪的目录。你也可以将其组合到 git clean -fd 中以同时执行这两项操作。</span></span></code></pre></div><h3 id="git-reset-的使用" tabindex="-1">git reset 的使用 <a class="header-anchor" href="#git-reset-的使用" aria-label="Permalink to &quot;git reset 的使用&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 硬重置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># HEAD^ : 有一个 ^ 表示向前推一步 如果要退两步，那就是HEAD^^；退三步就是HEAD^^^；如果推10步呢？可以使用HEAD~10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 关于 --hard,--soft ,--mix 三个参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - soft：将HEAD回滚到指定的commit处，对索引和工作区没有影响。主要用于对最后一次提交的修改。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如：你commit了修改后发现这个commit里漏掉了一个文件，你可以再提交一次。也可以回滚此次提交，然后将漏掉的文件添加到索引后再次提交。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - mixed：默认reset操作。以目前HEAD所指向的commit为基准，重置索引区，不重置工作区。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，而a.txt文件的修改还保留。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - hard：以目前HEAD所指向的commit为基准，重置索引区和工作区。—hard表示目录中的存档也需要变化。如果你不添加—hard，你会发现player.txt文件的内容并没有变化。你还需要再执行一下git restore player.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，同时a.txt也被回滚到修改前的状态。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--soft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 撤销 刚刚提交过的本地 commit 提交</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 硬重置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># HEAD^ : 有一个 ^ 表示向前推一步 如果要退两步，那就是HEAD^^；退三步就是HEAD^^^；如果推10步呢？可以使用HEAD~10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 关于 --hard,--soft ,--mix 三个参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - soft：将HEAD回滚到指定的commit处，对索引和工作区没有影响。主要用于对最后一次提交的修改。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比如：你commit了修改后发现这个commit里漏掉了一个文件，你可以再提交一次。也可以回滚此次提交，然后将漏掉的文件添加到索引后再次提交。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - mixed：默认reset操作。以目前HEAD所指向的commit为基准，重置索引区，不重置工作区。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，而a.txt文件的修改还保留。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># - hard：以目前HEAD所指向的commit为基准，重置索引区和工作区。—hard表示目录中的存档也需要变化。如果你不添加—hard，你会发现player.txt文件的内容并没有变化。你还需要再执行一下git restore player.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，同时a.txt也被回滚到修改前的状态。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 撤销 刚刚提交过的本地 commit 提交</span></span></code></pre></div><ul><li>git restore 的使用</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restore</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 使得在工作空间但是不在暂存区的文件撤销更改(\`内容恢复到没修改之前的状态\`)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--staged</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将暂存区的文件从暂存区撤出，但\`不会更改文件的内容\` 也就是 撤销 git add</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restore</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 使得在工作空间但是不在暂存区的文件撤销更改(\`内容恢复到没修改之前的状态\`)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--staged</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将暂存区的文件从暂存区撤出，但\`不会更改文件的内容\` 也就是 撤销 git add</span></span></code></pre></div><ul><li>git stash 的使用</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># =================================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将当前所有暂存和非暂存修改存入缓存区 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;备注的内容&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 保存当前未commit的代码并添加备注,类似于git commit -m &quot;commitMessage&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 列出stash的所有记录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 应用第二条stash 1 是 要应用的改动在stash 中的位置,可以理解成数组中的下标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 删除缓存堆栈中的第一个stash，并将对应修改应用到当前的工作目录下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除最近的一次stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">drop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;"> 文件夹路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件路径</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;缓存信息&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将指定文件,指定文件夹 按缓存信息 缓存进 stash 中</span></span>
<span class="line"><span style="color:#6A737D;"># =============================================================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># =================================================================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将当前所有暂存和非暂存修改存入缓存区 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;备注的内容&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 保存当前未commit的代码并添加备注,类似于git commit -m &quot;commitMessage&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 列出stash的所有记录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 应用第二条stash 1 是 要应用的改动在stash 中的位置,可以理解成数组中的下标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 删除缓存堆栈中的第一个stash，并将对应修改应用到当前的工作目录下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除最近的一次stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">drop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;"> 文件夹路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件路径</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;缓存信息&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将指定文件,指定文件夹 按缓存信息 缓存进 stash 中</span></span>
<span class="line"><span style="color:#6A737D;"># =============================================================</span></span></code></pre></div><p>我只想改变一个文件名字的大小写，而不修改内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">)$ git mv --force myfile MyFile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">)$ git mv --force myfile MyFile</span></span></code></pre></div><p>我想从Git删除一个文件，但保留该文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">)$ git rm --cached log.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">)$ git rm --cached log.txt</span></span></code></pre></div><h3 id="删除远程-git仓库里的文件" tabindex="-1">删除远程 git仓库里的文件 <a class="header-anchor" href="#删除远程-git仓库里的文件" aria-label="Permalink to &quot;删除远程 git仓库里的文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;delete&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;delete&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支</span></span></code></pre></div><ul><li>git rm 一些其他的参数</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> [file-original] [file-renamed]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> [file-original] [file-renamed]</span></span></code></pre></div><p>git bisect 的使用</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bisect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 启用二分法定位</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bisect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bad</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 最近的一次出现问题的提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bisect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">good</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commithas</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 较早的没有问题的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bisect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 回到初始状态</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bisect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 启用二分法定位</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bisect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bad</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 最近的一次出现问题的提交</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bisect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">good</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commithas</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 较早的没有问题的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bisect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 回到初始状态</span></span></code></pre></div><p>git cherry-pick : 将其他分支上已经提交的commit 应用到当前分支上</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">已经提交的commit</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将其他分支上已经提交的commit 应用到当前分支上</span></span>
<span class="line"><span style="color:#6A737D;"># =======================================</span></span>
<span class="line"><span style="color:#B392F0;">首先把</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitHash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">复制下来，然后切到</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">分支。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">在使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitHash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">就能将提交复制到</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">分之上了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">pro</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> =</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">衍合与挑拣（cherry-pick）的流程</span></span>
<span class="line"><span style="color:#B392F0;">如果你希望拉取e43a6到你的主干分支，可以这样：</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">e43a6fd3e94888d76779ad79fb568ed180e5fcdf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================</span></span>
<span class="line"><span style="color:#6A737D;"># 假设现在在 dev 分支上,要把 commitIdA 从其他分支拿到 dev 分支上 (其他分支要在本地,这个是重点) : git cherry-pick commitIdA 就可以了,另见 git pull 和 git clone 部分( 拉取代码的两种方式 )</span></span>
<span class="line"><span style="color:#6A737D;"># ---------------------------------------</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">f</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">Master</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Feature</span></span>
<span class="line"><span style="color:#6A737D;"># ---------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">#  从左到右是时间顺序即版本顺序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">分支名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将分支名上最新的提交转移到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 将分支名上最新的提交转移到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">a..b</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 转移从 a 到 b 的所有提交(但不包含提交a)。它们必须按照正确的顺序放置：提交 a 必须早于提交 b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">a^..b</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 转移从 a 到 b 的所有提交(包含提交a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#B392F0;">如果操作过程中发生代码冲突，Cherry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">会停下来，让用户决定如何继续操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">（1）--continue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">用户解决代码冲突后，第一步将修改的文件重新加入暂存区（git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.），第二步使用下面的命令，让</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Cherry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">过程继续执行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git cherry-pick 分支名产生冲突,解决冲突之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加完改动之后继续 cherry-pick</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--continue</span></span>
<span class="line"><span style="color:#6A737D;"># ==============================</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--quit</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 退出cherry-pick</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;">  </span><span style="color:#032F62;">已经提交的commit</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将其他分支上已经提交的commit 应用到当前分支上</span></span>
<span class="line"><span style="color:#6A737D;"># =======================================</span></span>
<span class="line"><span style="color:#6F42C1;">首先把</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitHash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">复制下来，然后切到</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">在使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitHash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">就能将提交复制到</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分之上了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">pro</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:</span><span style="color:#24292E;"> =</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">衍合与挑拣（cherry-pick）的流程</span></span>
<span class="line"><span style="color:#6F42C1;">如果你希望拉取e43a6到你的主干分支，可以这样：</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">e43a6fd3e94888d76779ad79fb568ed180e5fcdf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># =======================================</span></span>
<span class="line"><span style="color:#6A737D;"># 假设现在在 dev 分支上,要把 commitIdA 从其他分支拿到 dev 分支上 (其他分支要在本地,这个是重点) : git cherry-pick commitIdA 就可以了,另见 git pull 和 git clone 部分( 拉取代码的两种方式 )</span></span>
<span class="line"><span style="color:#6A737D;"># ---------------------------------------</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">f</span><span style="color:#24292E;">   </span><span style="color:#032F62;">Master</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Feature</span></span>
<span class="line"><span style="color:#6A737D;"># ---------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">#  从左到右是时间顺序即版本顺序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;">  </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将分支名上最新的提交转移到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;">  </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 将分支名上最新的提交转移到当前分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;">  </span><span style="color:#032F62;">a..b</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 转移从 a 到 b 的所有提交(但不包含提交a)。它们必须按照正确的顺序放置：提交 a 必须早于提交 b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;">  </span><span style="color:#032F62;">a^..b</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 转移从 a 到 b 的所有提交(包含提交a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># --------------------------------------------</span></span>
<span class="line"><span style="color:#6F42C1;">如果操作过程中发生代码冲突，Cherry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">会停下来，让用户决定如何继续操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">（1）--continue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">用户解决代码冲突后，第一步将修改的文件重新加入暂存区（git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.），第二步使用下面的命令，让</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Cherry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">过程继续执行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git cherry-pick 分支名产生冲突,解决冲突之后</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加完改动之后继续 cherry-pick</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--continue</span></span>
<span class="line"><span style="color:#6A737D;"># ==============================</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--quit</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 退出cherry-pick</span></span></code></pre></div><h3 id="合并冲突" tabindex="-1">合并冲突 <a class="header-anchor" href="#合并冲突" aria-label="Permalink to &quot;合并冲突&quot;">​</a></h3><p>git pull origin acm_dev # 将别的分支代码拉到自己分支上</p><p>出现冲突解决冲突</p><p>解决完冲突之后 git add .</p><p>git commit</p><p>最后再 git push 到自己远程的分支上</p><p>没有冲突直接 git push , 但是会产生一个废提交</p><h3 id="分支命名规范" tabindex="-1">分支命名规范 <a class="header-anchor" href="#分支命名规范" aria-label="Permalink to &quot;分支命名规范&quot;">​</a></h3><ul><li>feature-*:新功能开发</li><li>bugfix-*:修复缺陷</li><li>optimize-*:性能优化</li><li>infra-*:工程化相关，例如：构建脚本、配置文件的修改</li><li>release-.*:发布分支</li><li>chore-*:你也不知道如何归类，就用chore吧</li></ul><h3 id="commit-信息编写规范" tabindex="-1">commit 信息编写规范 <a class="header-anchor" href="#commit-信息编写规范" aria-label="Permalink to &quot;commit 信息编写规范&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">feat</td><td style="text-align:center;">用户功能的新特性（项目自身构建方式的更新，不算新特性）</td></tr><tr><td style="text-align:center;">fix</td><td style="text-align:center;">用户功能修复（项目自己的构建错误修复，不算功能修复）</td></tr><tr><td style="text-align:center;">docs</td><td style="text-align:center;">更新文档</td></tr><tr><td style="text-align:center;">style</td><td style="text-align:center;">代码格式化或风格变化</td></tr><tr><td style="text-align:center;">refactor</td><td style="text-align:center;">重构（修改变量名、文件目录结构等不影响功能的变动）</td></tr><tr><td style="text-align:center;">test</td><td style="text-align:center;">增加、修改测试代码，不涉及生产运行代码变化</td></tr><tr><td style="text-align:center;">chore</td><td style="text-align:center;">日常维护，不涉及生产运行代码变化（写错个字、变更个版本号啥的）</td></tr></tbody></table><h3 id="链接与资源" tabindex="-1">链接与资源 <a class="header-anchor" href="#链接与资源" aria-label="Permalink to &quot;链接与资源&quot;">​</a></h3><hr><ul><li>图形化客户端</li></ul><ul><li>[GitX (L) (OSX, 开源软件)]</li><li>[Tower (OSX)]</li><li>[Source Tree (OSX, 免费)]</li><li>[GitHub for desktop (OSX, 免费)]</li><li>[GitBox (OSX, App Store)]</li></ul><ul><li>指南和手册</li></ul><ul><li><a href="http://book.git-scm.com/" target="_blank" rel="noreferrer">Git 社区参考书</a></li><li><a href="http://book.git-scm.com/book/zh/v2" target="_blank" rel="noreferrer">专业 Git</a></li><li><a href="http://think-like-a-git.net/" target="_blank" rel="noreferrer">像 git 那样思考</a></li><li><a href="https://docs.github.com/cn" target="_blank" rel="noreferrer">GitHub 帮助</a></li><li><a href="http://marklodato.github.io/visual-git-guide/index-zh-cn.html" target="_blank" rel="noreferrer">图解 Git</a></li></ul><h3 id="评论" tabindex="-1">评论 <a class="header-anchor" href="#评论" aria-label="Permalink to &quot;评论&quot;">​</a></h3><hr><h3 id="合并代码之一" tabindex="-1">合并代码之一 <a class="header-anchor" href="#合并代码之一" aria-label="Permalink to &quot;合并代码之一&quot;">​</a></h3><img src="`+p+`" alt=""><ul><li>详见 : Pro git 3.2.3 冲突的合并</li></ul><h3 id="合并代码之二" tabindex="-1">合并代码之二 <a class="header-anchor" href="#合并代码之二" aria-label="Permalink to &quot;合并代码之二&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 假设现在在 dev 分支上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># dev 分支上拉取 master 上的代码,出现冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并完冲突阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># incoming change 和 current change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#      ↓               ↓</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取下来的代码改动   编辑器里的代码改动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 检查一下个文件的状态 ,检查是否还有没有未合并的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 现在好像不需要了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;合并冲突的信息&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 结束 merge 代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将代码提到 master 上</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 假设现在在 dev 分支上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># dev 分支上拉取 master 上的代码,出现冲突</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并完冲突阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># incoming change 和 current change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#      ↓               ↓</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取下来的代码改动   编辑器里的代码改动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 检查一下个文件的状态 ,检查是否还有没有未合并的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 现在好像不需要了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;合并冲突的信息&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 结束 merge 代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将代码提到 master 上</span></span></code></pre></div><h3 id="与上面的-合并代码之二-对应起来" tabindex="-1">与上面的 合并代码之二 对应起来 : <a class="header-anchor" href="#与上面的-合并代码之二-对应起来" aria-label="Permalink to &quot;与上面的 合并代码之二 对应起来 :&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span><span style="color:#79B8FF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">current change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">=======</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">incoming change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> 9b8ee9e28246d7945df3dda64a852cb8eb89edfd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">------</span><span style="color:#E1E4E8;">分割线</span><span style="color:#F97583;">---------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当前分支上的为 current change,其他分支上的为 incoming change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 代码冲突的来源:同一行的代码不同即冲突</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span><span style="color:#005CC5;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">current change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">=======</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">incoming change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;&gt;&gt;&gt;</span><span style="color:#24292E;"> 9b8ee9e28246d7945df3dda64a852cb8eb89edfd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">------</span><span style="color:#24292E;">分割线</span><span style="color:#D73A49;">---------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当前分支上的为 current change,其他分支上的为 incoming change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 代码冲突的来源:同一行的代码不同即冲突</span></span></code></pre></div><p>git config --global --add safe.directory C:/Users/DarkAngel/Desktop/resume Set the environment variable GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true and run again for more information. fatal: detected dubious ownership in repository at &#39;C:/Users/DarkAngel/Desktop/resume&#39; To add an exception for this directory, call:</p><pre><code>    git config --global --add safe.directory C:/Users/DarkAngel/Desktop/resume
</code></pre><p>Set the environment variable GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true and run again for more information.</p><hr><p>Git config——global——add safe。用户目录C:// DarkAngel /桌面/简历</p><p>设置环境变量GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true并运行</p><p>更多信息请再看一遍。</p><p>致命的:在“C:/Users/DarkAngel/Desktop/resume”存储库中检测到可疑的所有权</p><p>要为该目录添加一个异常，调用:</p><p>Git config ——global ——add safe。用户目录C: / / DarkAngel /桌面/简历</p><p>设置环境变量GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true并运行</p><p>更多信息请再看一遍。</p><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git mergetool</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">This message is displayed because &#39;merge.tool&#39; is not configured.</span></span>
<span class="line"><span style="color:#e1e4e8;">See &#39;git mergetool --tool-help&#39; or &#39;git help config&#39; for more details.</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;git mergetool&#39; will now attempt to use one of the following tools:</span></span>
<span class="line"><span style="color:#e1e4e8;">tortoisemerge emerge vimdiff nvimdiff</span></span>
<span class="line"><span style="color:#e1e4e8;">No files need merging</span></span>
<span class="line"><span style="color:#e1e4e8;">PS C:\\Users\\DarkAngel\\Desktop\\resume&gt; git mergetool --tool-help</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;git mergetool --tool=&lt;tool&gt;&#39; may be set to one of the following:</span></span>
<span class="line"><span style="color:#e1e4e8;">                vimdiff          Use Vim with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#e1e4e8;">                vimdiff1         Use Vim with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                vimdiff2         Use Vim with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                vimdiff3         Use Vim where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The following tools are valid, but not currently available:</span></span>
<span class="line"><span style="color:#e1e4e8;">                araxis           Use Araxis Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                bc               Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                bc3              Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                bc4              Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                codecompare      Use Code Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                deltawalker      Use DeltaWalker (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                diffmerge        Use DiffMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                diffuse          Use Diffuse (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                ecmerge          Use ECMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                emerge           Use Emacs&#39; Emerge</span></span>
<span class="line"><span style="color:#e1e4e8;">                examdiff         Use ExamDiff Pro (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                guiffy           Use Guiffy&#39;s Diff Tool (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                gvimdiff         Use gVim (requires a graphical session) with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#e1e4e8;">                gvimdiff1        Use gVim (requires a graphical session) with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                gvimdiff2        Use gVim (requires a graphical session) with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                gvimdiff3        Use gVim (requires a graphical session) where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#e1e4e8;">                kdiff3           Use KDiff3 (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                meld             Use Meld (requires a graphical session) with optional \`auto merge\` (see \`git help mergetool\`&#39;s \`CONFIGURATION\` section)</span></span>
<span class="line"><span style="color:#e1e4e8;">                nvimdiff         Use Neovim with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#e1e4e8;">                nvimdiff1        Use Neovim with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                nvimdiff2        Use Neovim with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#e1e4e8;">                nvimdiff3        Use Neovim where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#e1e4e8;">                opendiff         Use FileMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                p4merge          Use HelixCore P4Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                smerge           Use Sublime Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                tkdiff           Use TkDiff (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                tortoisemerge    Use TortoiseMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                winmerge         Use WinMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;">                xxdiff           Use xxdiff (requires a graphical session)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Some of the tools listed above only work in a windowed</span></span>
<span class="line"><span style="color:#e1e4e8;">environment. If run in a terminal-only session, they will fail.</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">git mergetool</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">This message is displayed because &#39;merge.tool&#39; is not configured.</span></span>
<span class="line"><span style="color:#24292e;">See &#39;git mergetool --tool-help&#39; or &#39;git help config&#39; for more details.</span></span>
<span class="line"><span style="color:#24292e;">&#39;git mergetool&#39; will now attempt to use one of the following tools:</span></span>
<span class="line"><span style="color:#24292e;">tortoisemerge emerge vimdiff nvimdiff</span></span>
<span class="line"><span style="color:#24292e;">No files need merging</span></span>
<span class="line"><span style="color:#24292e;">PS C:\\Users\\DarkAngel\\Desktop\\resume&gt; git mergetool --tool-help</span></span>
<span class="line"><span style="color:#24292e;">&#39;git mergetool --tool=&lt;tool&gt;&#39; may be set to one of the following:</span></span>
<span class="line"><span style="color:#24292e;">                vimdiff          Use Vim with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#24292e;">                vimdiff1         Use Vim with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                vimdiff2         Use Vim with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                vimdiff3         Use Vim where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The following tools are valid, but not currently available:</span></span>
<span class="line"><span style="color:#24292e;">                araxis           Use Araxis Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                bc               Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                bc3              Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                bc4              Use Beyond Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                codecompare      Use Code Compare (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                deltawalker      Use DeltaWalker (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                diffmerge        Use DiffMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                diffuse          Use Diffuse (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                ecmerge          Use ECMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                emerge           Use Emacs&#39; Emerge</span></span>
<span class="line"><span style="color:#24292e;">                examdiff         Use ExamDiff Pro (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                guiffy           Use Guiffy&#39;s Diff Tool (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                gvimdiff         Use gVim (requires a graphical session) with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#24292e;">                gvimdiff1        Use gVim (requires a graphical session) with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                gvimdiff2        Use gVim (requires a graphical session) with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                gvimdiff3        Use gVim (requires a graphical session) where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#24292e;">                kdiff3           Use KDiff3 (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                meld             Use Meld (requires a graphical session) with optional \`auto merge\` (see \`git help mergetool\`&#39;s \`CONFIGURATION\` section)</span></span>
<span class="line"><span style="color:#24292e;">                nvimdiff         Use Neovim with a custom layout (see \`git help mergetool\`&#39;s \`BACKEND SPECIFIC HINTS\` section)</span></span>
<span class="line"><span style="color:#24292e;">                nvimdiff1        Use Neovim with a 2 panes layout (LOCAL and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                nvimdiff2        Use Neovim with a 3 panes layout (LOCAL, MERGED and REMOTE)</span></span>
<span class="line"><span style="color:#24292e;">                nvimdiff3        Use Neovim where only the MERGED file is shown</span></span>
<span class="line"><span style="color:#24292e;">                opendiff         Use FileMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                p4merge          Use HelixCore P4Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                smerge           Use Sublime Merge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                tkdiff           Use TkDiff (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                tortoisemerge    Use TortoiseMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                winmerge         Use WinMerge (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;">                xxdiff           Use xxdiff (requires a graphical session)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Some of the tools listed above only work in a windowed</span></span>
<span class="line"><span style="color:#24292e;">environment. If run in a terminal-only session, they will fail.</span></span></code></pre></div><h3 id="可视化的差异编辑器" tabindex="-1">可视化的差异编辑器 <a class="header-anchor" href="#可视化的差异编辑器" aria-label="Permalink to &quot;可视化的差异编辑器&quot;">​</a></h3><p>git mergetool -t opendiff</p>`,205),c=[e];function t(r,i,y,E,F,g){return n(),a("div",null,c)}const m=s(o,[["render",t]]);export{h as __pageData,m as default};
