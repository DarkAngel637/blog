import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7204edfa.js";const d=JSON.parse('{"title":"h5","description":"","frontmatter":{},"headers":[],"relativePath":"html/h5.md","filePath":"html/h5.md"}'),p={name:"html/h5.md"},o=l(`<h1 id="h5" tabindex="-1">h5 <a class="header-anchor" href="#h5" aria-label="Permalink to &quot;h5&quot;">​</a></h1><h3 id="flex-属性及原理" tabindex="-1">flex 属性及原理 <a class="header-anchor" href="#flex-属性及原理" aria-label="Permalink to &quot;flex 属性及原理&quot;">​</a></h3><p>弹性布局中的元素是有<strong>伸展</strong>和<strong>收缩</strong>自身的能力的</p><ul><li>原理 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;</li></ul><p>Flex 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。项目默认沿主轴排列，当然项目的排列方向也可以通过改变属性来控制。</p><p>主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。</p><p><img src="https://img-blog.csdnimg.cn/20191205190822518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RaWV8xMg==,size_16,color_FFFFFF,t_70" alt="img"></p><p>三、容器属性 以下六个属性设置在容器上</p><p>flex-direction:row/column 决定主轴的方向（即项目的排列方向） flex-wrap:wrap/no-wrap 项目是否换行及换行方向 flex-flow flex-direction 属性和 flex-wrap 属性的简写形式 justify-content 定义了项目在主轴上的对齐方式 align-items 定义了项目在交叉轴上的对齐方式 align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 四、项目属性 以下六个属性设置在弹性子容器上</p><p>order 定义项目的排列顺序。数值越小，排列越靠前，默认为 0 flex-grow 定义项目的放大比例，默认为 0，即不放大 flex-shrink 定义项目的缩放比例，默认为 0，即不缩放 flex -basis 定义了在分配多余空间之前，项目占据的主轴空间 flex flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 1 0 auto align-self 允许单个项目有与其他项目不一样的对齐方式</p><h2 id="语义化标签" tabindex="-1">语义化标签 <a class="header-anchor" href="#语义化标签" aria-label="Permalink to &quot;语义化标签&quot;">​</a></h2><h2 id="新增表单控件" tabindex="-1">新增表单控件 <a class="header-anchor" href="#新增表单控件" aria-label="Permalink to &quot;新增表单控件&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个预定义的选项列表，用于与输入框一起使用。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">datalist</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个颜色选择器。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个日期选择器。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个本地日期和时间选择器。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;datetime-local&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个邮箱输入框，自带邮箱验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个数字输入框。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;number&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个范围滑块。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;range&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个搜索框，自带搜索建议和搜索历史功能。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;search&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个电话号码输入框，自带电话号码格式验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tel&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个时间选择器。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个URL输入框，自带URL格式验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 定义一个数值范围的可视化显示。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meter</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 定义任务的进度条。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">progress</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个预定义的选项列表，用于与输入框一起使用。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">datalist</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个颜色选择器。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;color&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个日期选择器。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个本地日期和时间选择器。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;datetime-local&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个邮箱输入框，自带邮箱验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;email&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个数字输入框。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;number&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个范围滑块。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;range&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个搜索框，自带搜索建议和搜索历史功能。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;search&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个电话号码输入框，自带电话号码格式验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tel&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个时间选择器。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 定义一个URL输入框，自带URL格式验证功能。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 定义一个数值范围的可视化显示。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">meter</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 定义任务的进度条。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">progress</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="音视频标签-video-audio-source-track-字幕标签" tabindex="-1">音视频标签 video,audio,source,track(字幕标签) <a class="header-anchor" href="#音视频标签-video-audio-source-track-字幕标签" aria-label="Permalink to &quot;音视频标签 video,audio,source,track(字幕标签)&quot;">​</a></h2><h2 id="canvas" tabindex="-1">canvas <a class="header-anchor" href="#canvas" aria-label="Permalink to &quot;canvas&quot;">​</a></h2><h2 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;websocket&quot;">​</a></h2><h2 id="webworker" tabindex="-1">webworker <a class="header-anchor" href="#webworker" aria-label="Permalink to &quot;webworker&quot;">​</a></h2><h2 id="webstorage" tabindex="-1">webStorage <a class="header-anchor" href="#webstorage" aria-label="Permalink to &quot;webStorage&quot;">​</a></h2><h2 id="navigator-geolocation-地理定位" tabindex="-1">navigator.geolocation (地理定位) <a class="header-anchor" href="#navigator-geolocation-地理定位" aria-label="Permalink to &quot;navigator.geolocation (地理定位)&quot;">​</a></h2><h2 id="dataset-属性" tabindex="-1">dataset 属性 <a class="header-anchor" href="#dataset-属性" aria-label="Permalink to &quot;dataset 属性&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-id</span><span style="color:#E1E4E8;"> =</span><span style="color:#9ECBFF;">&quot;h1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">通过 element.dataset 属性可以获取到这个 id</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-id</span><span style="color:#24292E;"> =</span><span style="color:#032F62;">&quot;h1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">通过 element.dataset 属性可以获取到这个 id</span></span></code></pre></div><h2 id="拖拽" tabindex="-1">拖拽 <a class="header-anchor" href="#拖拽" aria-label="Permalink to &quot;拖拽&quot;">​</a></h2>`,22),t=[o];function e(c,r,i,E,y,u){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{d as __pageData,g as default};
