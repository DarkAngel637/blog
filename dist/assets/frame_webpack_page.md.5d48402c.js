import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01edc906.js";const u=JSON.parse('{"title":"webpack.connfig 配置","description":"","frontmatter":{},"headers":[],"relativePath":"frame/webpack/page.md","filePath":"frame/webpack/page.md"}'),p={name:"frame/webpack/page.md"},o=l(`<h1 id="webpack-connfig-配置" tabindex="-1">webpack.connfig 配置 <a class="header-anchor" href="#webpack-connfig-配置" aria-label="Permalink to &quot;webpack.connfig 配置&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 压缩 js 的插件</span></span>
<span class="line"><span style="color:#6A737D;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">os</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">threads</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// entry 表示 入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 类型可以是 string | object | array   </span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./app/entry&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 只有1个入口，入口只有1个文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: [</span><span style="color:#9ECBFF;">&#39;./app/entry1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./app/entry2&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 只有1个入口，入口有2个文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//  entry: [&quot;@babel/polyfill&quot;, &quot;./app/js&quot;], // @babel/polyfill 是将es6+ 转成es5</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: { </span><span style="color:#6A737D;">// 有2个入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: </span><span style="color:#9ECBFF;">&#39;./app/entry-a&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: [</span><span style="color:#9ECBFF;">&#39;./app/entry-b1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./app/entry-b2&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">mode: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// webpack --mode development   production 默认开启 tree shaking</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如何输出结果：在 Webpack 经过一系列处理后，如何输出最终想要的代码。</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 输出文件存放的目录，必须是 string 类型的绝对路径。</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 输出文件的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 完整的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;[name].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 当配置了多个 entry 时，通过名称模版为不同的 entry 生成不同的文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;[chunkhash].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 根据文件内容 hash 值生成文件名称，用于浏览器长时间缓存文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 发布到线上的所有资源的 URL 前缀，string 类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicPath: </span><span style="color:#9ECBFF;">&#39;/assets/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 放到指定目录下</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicPath: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 放到根目录下</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicPath: </span><span style="color:#9ECBFF;">&#39;https://cdn.example.com/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 放到 CDN 上去</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 导出库的名称，string 类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 不填它时，默认输出格式是匿名的立即执行函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    library: </span><span style="color:#9ECBFF;">&#39;MyLibrary&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 导出库的类型，枚举类型，默认是 var</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以是 umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp ，</span></span>
<span class="line"><span style="color:#E1E4E8;">    libraryTarget: </span><span style="color:#9ECBFF;">&#39;umd&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否包含有用的文件路径信息到生成的代码里去，boolean 类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    pathinfo: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 附加 Chunk 的文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    chunkFilename: </span><span style="color:#9ECBFF;">&#39;[id].js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ------------------------------</span></span>
<span class="line"><span style="color:#E1E4E8;">    chunkFilename: </span><span style="color:#9ECBFF;">&quot;static/js/[name].[contenthash:8].chunk.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 动态导入输出资源命名方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    assetModuleFilename: </span><span style="color:#9ECBFF;">&quot;static/media/[name].[hash][ext]&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span style="color:#E1E4E8;">    clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    runtimeChunk: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">entrypoint</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`runtime~\${</span><span style="color:#E1E4E8;">entrypoint</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// runtime文件命名规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// JSONP 异步加载资源时的回调函数名称，需要和服务端搭配使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    jsonpFunction: </span><span style="color:#9ECBFF;">&#39;myWebpackJsonp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 生成的 Source Map 文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceMapFilename: </span><span style="color:#9ECBFF;">&#39;[file].map&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 浏览器开发者工具里显示的源码模块名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    devtoolModuleFilenameTemplate: </span><span style="color:#9ECBFF;">&#39;webpack:///[resource-path]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 异步加载跨域的资源时使用的方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    crossOriginLoading: </span><span style="color:#9ECBFF;">&#39;use-credentials&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    crossOriginLoading: </span><span style="color:#9ECBFF;">&#39;anonymous&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    crossOriginLoading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置模块相关</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [ </span><span style="color:#6A737D;">// 配置 Loader</span></span>
<span class="line"><span style="color:#E1E4E8;">      {  </span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">jsx</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则匹配命中要使用 Loader 的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        include: [ </span><span style="color:#6A737D;">// 只会命中这里面的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">          path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude: [ </span><span style="color:#6A737D;">// 忽略这里面的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">          path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;app/demo-files&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [ </span><span style="color:#6A737D;">// 使用那些 Loader，有先后次序，从后往前执行</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 直接使用 Loader 的名称    style-loader 将 </span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">,      </span></span>
<span class="line"><span style="color:#E1E4E8;">            options: { </span><span style="color:#6A737D;">// 给 html-loader 传一些参数</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 处理js  npm i babel-loader @babel/preset-env @babel/core # babel-loader 处理 js 文件; @babel/preset-env 语法转换 ;@babel/polyfill es6+ 转成es5 (entry) @babel/plugin-transform-runtime ()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// options配置你也可以在.babelrc或babel.config.js中单独配置</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            presets: [</span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">            plugins: [</span><span style="color:#9ECBFF;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">         {</span></span>
<span class="line"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#6A737D;">//  处理图片 file-loader 和 url-loader; 小于 limit 参数即 1024B 的图片会被转译为 Base64 编码，对于超过 limit 值的图片则直接调用 file-loader 完成加载</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpeg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      use: [</span><span style="color:#9ECBFF;">&#39;file-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          limit: </span><span style="color:#79B8FF;">1024</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//  webpack 5 的话直接指定类型就行</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">      test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpeg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;asset/resource&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    noParse: [ </span><span style="color:#6A737D;">// 不用解析和处理的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">special-library</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用正则匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PreloadWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      rel: </span><span style="color:#9ECBFF;">&quot;preload&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// preload兼容性更好</span></span>
<span class="line"><span style="color:#E1E4E8;">      as: </span><span style="color:#9ECBFF;">&quot;script&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// rel: &#39;prefetch&#39; // prefetch兼容性更差</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> WorkboxPlugin.</span><span style="color:#B392F0;">GenerateSW</span><span style="color:#E1E4E8;">({</span><span style="color:#6A737D;">// 配合 npm i serve -g &amp;&amp; serve dist</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 这些选项帮助快速启用 ServiceWorkers</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 不允许遗留任何“旧的” ServiceWorkers</span></span>
<span class="line"><span style="color:#E1E4E8;">      clientsClaim: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      skipWaiting: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// optimization 用来做优化的(控制产物包体积)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//  code spliting 可以让模块用到的时候再加载</span></span>
<span class="line"><span style="color:#E1E4E8;">optimization:{</span></span>
<span class="line"><span style="color:#E1E4E8;">splitChunks:{</span><span style="color:#6A737D;">// 开启分包加载 https://www.webpackjs.com/plugins/split-chunks-plugin/</span></span>
<span class="line"><span style="color:#E1E4E8;"> chunks: </span><span style="color:#9ECBFF;">&#39;async&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">// 配置成 all 即对所有文件分包按需加载</span></span>
<span class="line"><span style="color:#E1E4E8;">      minSize: </span><span style="color:#79B8FF;">20000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minRemainingSize: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minChunks: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxAsyncRequests: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxInitialRequests: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enforceSizeThreshold: </span><span style="color:#79B8FF;">50000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 指定符合什么规则的模块拆到什么 chunk 里</span></span>
<span class="line"><span style="color:#E1E4E8;">        defaultVendors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          reuseExistingChunk: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 定义每个 chunk 要有多大，初始加载最多能加载个文件等维度</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          minChunks: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          reuseExistingChunk: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">  minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在Webpack4中 默认使用 uglifyjs-webpack-plugin压缩代码，也可以通过 minimizer 数组替换为 Terser 插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  minimizer: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        parallel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置寻找模块的规则</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: { </span></span>
<span class="line"><span style="color:#E1E4E8;">    modules: [ </span><span style="color:#6A737D;">// 寻找模块的根目录，array 类型，默认以 node_modules 为根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;node_modules&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    extensions: [</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.jsx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.css&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 模块的后缀名</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: { </span><span style="color:#6A737D;">// 模块别名配置，用于映射模块</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// 把 &#39;module&#39; 映射 &#39;new-module&#39;，同样的 &#39;module/path/file&#39; 也会被映射成 &#39;new-module/path/file&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;new-module&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 使用结尾符号 $ 后，把 &#39;only-module&#39; 映射成 &#39;new-module&#39;，</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 但是不像上面的，&#39;module/path/file&#39; 不会被映射成 &#39;new-module/path/file&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;only-module$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;new-module&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: [ </span><span style="color:#6A737D;">// alias 还支持使用数组来更详细的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 老的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">        alias: </span><span style="color:#9ECBFF;">&#39;new-module&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 新的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否是只映射模块，如果是 true 只有 &#39;module&#39; 会被映射，如果是 false &#39;module/inner/path&#39; 也会被映射</span></span>
<span class="line"><span style="color:#E1E4E8;">        onlyModule: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    symlinks: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否跟随文件软链接去搜寻模块的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    descriptionFiles: [</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 模块的描述文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    mainFields: [</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 模块的描述文件里的描述入口的文件的字段名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    enforceExtension: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否强制导入语句必须要写明文件后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 输出文件性能检查配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  performance: { </span></span>
<span class="line"><span style="color:#E1E4E8;">    hints: </span><span style="color:#9ECBFF;">&#39;warning&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 有性能问题时输出警告</span></span>
<span class="line"><span style="color:#E1E4E8;">    hints: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 有性能问题时输出错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    hints: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭性能检查</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxAssetSize: </span><span style="color:#79B8FF;">200000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 最大文件大小 (单位 bytes)</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxEntrypointSize: </span><span style="color:#79B8FF;">400000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 最大入口文件大小 (单位 bytes)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">assetFilter</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">assetFilename</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 过滤要检查的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> assetFilename.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.css&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> assetFilename.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于开发环境，适合使用：</span></span>
<span class="line"><span style="color:#6A737D;"> *  - eval：速度极快，但只能看到原始文件结构，看不到打包前的代码内容；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - cheap-eval-source-map：速度比较快，可以看到打包前的代码内容，但看不到 loader 处理之前的源码；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - cheap-module-eval-source-map：速度比较快，可以看到 loader 处理之前的源码，不过定位不到列级别；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - eval-source-map：初次编译较慢，但定位精度最高；</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于生产环境，则适合使用：</span></span>
<span class="line"><span style="color:#6A737D;"> *  - source-map：信息最完整，但安全性最低，外部用户可轻易获取到压缩、混淆之前的源码，慎重使用；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - hidden-source-map：信息较完整，安全性较低，外部用户获取到 .map 文件地址时依然可以拿到源码，慎重使用；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - nosources-source-map：源码信息缺失，但安全性较高，需要配合 Sentry 等工具实现完整的 Sourcemap 映射。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: </span><span style="color:#9ECBFF;">&#39;source-map&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 配置 source-map 类型</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  context: __dirname, </span><span style="color:#6A737D;">// Webpack 使用的根目录，string 类型必须是绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置输出代码的运行环境</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;web&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 浏览器，默认</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;webworker&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// WebWorker</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Node.js，使用 \`require\` 语句加载 Chunk 代码</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;async-node&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Node.js，异步加载 Chunk 代码</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;node-webkit&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// nw.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;electron-main&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// electron, 主线程</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;electron-renderer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// electron, 渲染线程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  externals: { </span><span style="color:#6A737D;">// 使用来自 JavaScript 运行环境提供的全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    vue: </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 同时 index.html 模板上引入 cdn 链接</span></span>
<span class="line"><span style="color:#6A737D;"> *  &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/vue/2.6.3/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  stats: { </span><span style="color:#6A737D;">// 控制台输出日志控制</span></span>
<span class="line"><span style="color:#E1E4E8;">    assets: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    colors: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    errors: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    errorDetails: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hash: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: { </span><span style="color:#6A737D;">// DevServer 相关的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: { </span><span style="color:#6A737D;">// 代理到后端服务接口</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        target:</span><span style="color:#9ECBFF;">&#39;http://localhost:8888/&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//代理目标的基础路径，服务端的端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//关闭语法检查</span></span>
<span class="line"><span style="color:#E1E4E8;">        lintOnSave:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        changeOrigin:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//允许跨域 可以代理反向的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">        pathRewrite:{</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;^/api&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//重写路径，将api开头的路径改为&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contentBase: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 配置 DevServer HTTP 服务器的文件根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    compress: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开启 gzip 压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    historyApiFallback: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开发 HTML5 History API 网页</span></span>
<span class="line"><span style="color:#E1E4E8;">    historyApiFallback: {</span><span style="color:#6A737D;">// 详细配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      rewrites: [</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// /user 开头的都返回 user.html</span></span>
<span class="line"><span style="color:#E1E4E8;">    { from:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">user</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, to: </span><span style="color:#9ECBFF;">&#39;/user.html&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { from:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">game</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, to: </span><span style="color:#9ECBFF;">&#39;/game.html&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 其它的都返回 index.html</span></span>
<span class="line"><span style="color:#E1E4E8;">        { from:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, to: path.posix.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(config.dev.assetsPublicPath, </span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">) },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开启模块热替换功能</span></span>
<span class="line"><span style="color:#E1E4E8;">    https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开启 HTTPS 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    static: {</span><span style="color:#6A737D;">// 静态资源文件路径?</span></span>
<span class="line"><span style="color:#E1E4E8;">      directory: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    profile: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    cache: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否启用缓存提升构建速度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    watch: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否启用监听模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    watchOptions: { </span><span style="color:#6A737D;">// 监听模式选项</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 不监听的文件或文件夹，支持正则匹配。默认为空</span></span>
<span class="line"><span style="color:#E1E4E8;">    ignored:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 默认为300ms </span></span>
<span class="line"><span style="color:#E1E4E8;">    aggregateTimeout: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每隔1000毫秒询问一次</span></span>
<span class="line"><span style="color:#E1E4E8;">    poll: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;terser-webpack-plugin&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// 压缩 js 的插件</span></span>
<span class="line"><span style="color:#6A737D;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">os</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;os&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">threads</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.</span><span style="color:#6F42C1;">cpus</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// entry 表示 入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 类型可以是 string | object | array   </span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&#39;./app/entry&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 只有1个入口，入口只有1个文件</span></span>
<span class="line"><span style="color:#24292E;">  entry: [</span><span style="color:#032F62;">&#39;./app/entry1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./app/entry2&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 只有1个入口，入口有2个文件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  entry: [&quot;@babel/polyfill&quot;, &quot;./app/js&quot;], // @babel/polyfill 是将es6+ 转成es5</span></span>
<span class="line"><span style="color:#24292E;">  entry: { </span><span style="color:#6A737D;">// 有2个入口</span></span>
<span class="line"><span style="color:#24292E;">    a: </span><span style="color:#032F62;">&#39;./app/entry-a&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    b: [</span><span style="color:#032F62;">&#39;./app/entry-b1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./app/entry-b2&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">mode: </span><span style="color:#032F62;">&#39;none&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// webpack --mode development   production 默认开启 tree shaking</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如何输出结果：在 Webpack 经过一系列处理后，如何输出最终想要的代码。</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出文件存放的目录，必须是 string 类型的绝对路径。</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出文件的名称</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;bundle.js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 完整的名称</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;[name].js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 当配置了多个 entry 时，通过名称模版为不同的 entry 生成不同的文件名称</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;[chunkhash].js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 根据文件内容 hash 值生成文件名称，用于浏览器长时间缓存文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 发布到线上的所有资源的 URL 前缀，string 类型</span></span>
<span class="line"><span style="color:#24292E;">    publicPath: </span><span style="color:#032F62;">&#39;/assets/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 放到指定目录下</span></span>
<span class="line"><span style="color:#24292E;">    publicPath: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 放到根目录下</span></span>
<span class="line"><span style="color:#24292E;">    publicPath: </span><span style="color:#032F62;">&#39;https://cdn.example.com/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 放到 CDN 上去</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 导出库的名称，string 类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 不填它时，默认输出格式是匿名的立即执行函数</span></span>
<span class="line"><span style="color:#24292E;">    library: </span><span style="color:#032F62;">&#39;MyLibrary&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 导出库的类型，枚举类型，默认是 var</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以是 umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp ，</span></span>
<span class="line"><span style="color:#24292E;">    libraryTarget: </span><span style="color:#032F62;">&#39;umd&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否包含有用的文件路径信息到生成的代码里去，boolean 类型</span></span>
<span class="line"><span style="color:#24292E;">    pathinfo: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 附加 Chunk 的文件名称</span></span>
<span class="line"><span style="color:#24292E;">    chunkFilename: </span><span style="color:#032F62;">&#39;[id].js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ------------------------------</span></span>
<span class="line"><span style="color:#24292E;">    chunkFilename: </span><span style="color:#032F62;">&quot;static/js/[name].[contenthash:8].chunk.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 动态导入输出资源命名方式</span></span>
<span class="line"><span style="color:#24292E;">    assetModuleFilename: </span><span style="color:#032F62;">&quot;static/media/[name].[hash][ext]&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span style="color:#24292E;">    clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    runtimeChunk: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">entrypoint</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`runtime~\${</span><span style="color:#24292E;">entrypoint</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// runtime文件命名规则</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// JSONP 异步加载资源时的回调函数名称，需要和服务端搭配使用</span></span>
<span class="line"><span style="color:#24292E;">    jsonpFunction: </span><span style="color:#032F62;">&#39;myWebpackJsonp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 生成的 Source Map 文件名称</span></span>
<span class="line"><span style="color:#24292E;">    sourceMapFilename: </span><span style="color:#032F62;">&#39;[file].map&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 浏览器开发者工具里显示的源码模块名称</span></span>
<span class="line"><span style="color:#24292E;">    devtoolModuleFilenameTemplate: </span><span style="color:#032F62;">&#39;webpack:///[resource-path]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 异步加载跨域的资源时使用的方式</span></span>
<span class="line"><span style="color:#24292E;">    crossOriginLoading: </span><span style="color:#032F62;">&#39;use-credentials&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    crossOriginLoading: </span><span style="color:#032F62;">&#39;anonymous&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    crossOriginLoading: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置模块相关</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [ </span><span style="color:#6A737D;">// 配置 Loader</span></span>
<span class="line"><span style="color:#24292E;">      {  </span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">jsx</span><span style="color:#D73A49;">?$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则匹配命中要使用 Loader 的文件</span></span>
<span class="line"><span style="color:#24292E;">        include: [ </span><span style="color:#6A737D;">// 只会命中这里面的文件</span></span>
<span class="line"><span style="color:#24292E;">          path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        exclude: [ </span><span style="color:#6A737D;">// 忽略这里面的文件</span></span>
<span class="line"><span style="color:#24292E;">          path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;app/demo-files&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        use: [ </span><span style="color:#6A737D;">// 使用那些 Loader，有先后次序，从后往前执行</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;style-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 直接使用 Loader 的名称    style-loader 将 </span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">,      </span></span>
<span class="line"><span style="color:#24292E;">            options: { </span><span style="color:#6A737D;">// 给 html-loader 传一些参数</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 处理js  npm i babel-loader @babel/preset-env @babel/core # babel-loader 处理 js 文件; @babel/preset-env 语法转换 ;@babel/polyfill es6+ 转成es5 (entry) @babel/plugin-transform-runtime ()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [{</span></span>
<span class="line"><span style="color:#24292E;">          loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// options配置你也可以在.babelrc或babel.config.js中单独配置</span></span>
<span class="line"><span style="color:#24292E;">          options: {</span></span>
<span class="line"><span style="color:#24292E;">            presets: [</span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#24292E;">            cacheCompression: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#24292E;">            plugins: [</span><span style="color:#032F62;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">         {</span></span>
<span class="line"><span style="color:#24292E;">                loader: </span><span style="color:#032F62;">&quot;thread-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">                options: {</span></span>
<span class="line"><span style="color:#24292E;">                  workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#6A737D;">//  处理图片 file-loader 和 url-loader; 小于 limit 参数即 1024B 的图片会被转译为 Base64 编码，对于超过 limit 值的图片则直接调用 file-loader 完成加载</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">      test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpeg)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      use: [</span><span style="color:#032F62;">&#39;file-loader&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: {</span></span>
<span class="line"><span style="color:#24292E;">          limit: </span><span style="color:#005CC5;">1024</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//  webpack 5 的话直接指定类型就行</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">      test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpeg)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;asset/resource&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    noParse: [ </span><span style="color:#6A737D;">// 不用解析和处理的模块</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">/special-library</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用正则匹配</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置插件</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PreloadWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      rel: </span><span style="color:#032F62;">&quot;preload&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// preload兼容性更好</span></span>
<span class="line"><span style="color:#24292E;">      as: </span><span style="color:#032F62;">&quot;script&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// rel: &#39;prefetch&#39; // prefetch兼容性更差</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> WorkboxPlugin.</span><span style="color:#6F42C1;">GenerateSW</span><span style="color:#24292E;">({</span><span style="color:#6A737D;">// 配合 npm i serve -g &amp;&amp; serve dist</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 这些选项帮助快速启用 ServiceWorkers</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 不允许遗留任何“旧的” ServiceWorkers</span></span>
<span class="line"><span style="color:#24292E;">      clientsClaim: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      skipWaiting: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// optimization 用来做优化的(控制产物包体积)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  code spliting 可以让模块用到的时候再加载</span></span>
<span class="line"><span style="color:#24292E;">optimization:{</span></span>
<span class="line"><span style="color:#24292E;">splitChunks:{</span><span style="color:#6A737D;">// 开启分包加载 https://www.webpackjs.com/plugins/split-chunks-plugin/</span></span>
<span class="line"><span style="color:#24292E;"> chunks: </span><span style="color:#032F62;">&#39;async&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">// 配置成 all 即对所有文件分包按需加载</span></span>
<span class="line"><span style="color:#24292E;">      minSize: </span><span style="color:#005CC5;">20000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minRemainingSize: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minChunks: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      maxAsyncRequests: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      maxInitialRequests: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      enforceSizeThreshold: </span><span style="color:#005CC5;">50000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 指定符合什么规则的模块拆到什么 chunk 里</span></span>
<span class="line"><span style="color:#24292E;">        defaultVendors: {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">node_modules</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          priority: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          reuseExistingChunk: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义每个 chunk 要有多大，初始加载最多能加载个文件等维度</span></span>
<span class="line"><span style="color:#24292E;">        default: {</span></span>
<span class="line"><span style="color:#24292E;">          minChunks: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          priority: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          reuseExistingChunk: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">  minimize: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在Webpack4中 默认使用 uglifyjs-webpack-plugin压缩代码，也可以通过 minimizer 数组替换为 Terser 插件</span></span>
<span class="line"><span style="color:#24292E;">  minimizer: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        parallel: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        terserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置寻找模块的规则</span></span>
<span class="line"><span style="color:#24292E;">  resolve: { </span></span>
<span class="line"><span style="color:#24292E;">    modules: [ </span><span style="color:#6A737D;">// 寻找模块的根目录，array 类型，默认以 node_modules 为根目录</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;node_modules&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    extensions: [</span><span style="color:#032F62;">&#39;.js&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;.json&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;.jsx&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;.css&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 模块的后缀名</span></span>
<span class="line"><span style="color:#24292E;">    alias: { </span><span style="color:#6A737D;">// 模块别名配置，用于映射模块</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// 把 &#39;module&#39; 映射 &#39;new-module&#39;，同样的 &#39;module/path/file&#39; 也会被映射成 &#39;new-module/path/file&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;new-module&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 使用结尾符号 $ 后，把 &#39;only-module&#39; 映射成 &#39;new-module&#39;，</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 但是不像上面的，&#39;module/path/file&#39; 不会被映射成 &#39;new-module/path/file&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;only-module$&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;new-module&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    alias: [ </span><span style="color:#6A737D;">// alias 还支持使用数组来更详细的配置</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 老的模块</span></span>
<span class="line"><span style="color:#24292E;">        alias: </span><span style="color:#032F62;">&#39;new-module&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 新的模块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否是只映射模块，如果是 true 只有 &#39;module&#39; 会被映射，如果是 false &#39;module/inner/path&#39; 也会被映射</span></span>
<span class="line"><span style="color:#24292E;">        onlyModule: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    symlinks: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否跟随文件软链接去搜寻模块的路径</span></span>
<span class="line"><span style="color:#24292E;">    descriptionFiles: [</span><span style="color:#032F62;">&#39;package.json&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 模块的描述文件</span></span>
<span class="line"><span style="color:#24292E;">    mainFields: [</span><span style="color:#032F62;">&#39;main&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 模块的描述文件里的描述入口的文件的字段名称</span></span>
<span class="line"><span style="color:#24292E;">    enforceExtension: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否强制导入语句必须要写明文件后缀</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输出文件性能检查配置</span></span>
<span class="line"><span style="color:#24292E;">  performance: { </span></span>
<span class="line"><span style="color:#24292E;">    hints: </span><span style="color:#032F62;">&#39;warning&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 有性能问题时输出警告</span></span>
<span class="line"><span style="color:#24292E;">    hints: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 有性能问题时输出错误</span></span>
<span class="line"><span style="color:#24292E;">    hints: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭性能检查</span></span>
<span class="line"><span style="color:#24292E;">    maxAssetSize: </span><span style="color:#005CC5;">200000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 最大文件大小 (单位 bytes)</span></span>
<span class="line"><span style="color:#24292E;">    maxEntrypointSize: </span><span style="color:#005CC5;">400000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 最大入口文件大小 (单位 bytes)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">assetFilter</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">assetFilename</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// 过滤要检查的文件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> assetFilename.</span><span style="color:#6F42C1;">endsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.css&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> assetFilename.</span><span style="color:#6F42C1;">endsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于开发环境，适合使用：</span></span>
<span class="line"><span style="color:#6A737D;"> *  - eval：速度极快，但只能看到原始文件结构，看不到打包前的代码内容；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - cheap-eval-source-map：速度比较快，可以看到打包前的代码内容，但看不到 loader 处理之前的源码；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - cheap-module-eval-source-map：速度比较快，可以看到 loader 处理之前的源码，不过定位不到列级别；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - eval-source-map：初次编译较慢，但定位精度最高；</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于生产环境，则适合使用：</span></span>
<span class="line"><span style="color:#6A737D;"> *  - source-map：信息最完整，但安全性最低，外部用户可轻易获取到压缩、混淆之前的源码，慎重使用；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - hidden-source-map：信息较完整，安全性较低，外部用户获取到 .map 文件地址时依然可以拿到源码，慎重使用；</span></span>
<span class="line"><span style="color:#6A737D;"> *  - nosources-source-map：源码信息缺失，但安全性较高，需要配合 Sentry 等工具实现完整的 Sourcemap 映射。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">  devtool: </span><span style="color:#032F62;">&#39;source-map&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 配置 source-map 类型</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  context: __dirname, </span><span style="color:#6A737D;">// Webpack 使用的根目录，string 类型必须是绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置输出代码的运行环境</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;web&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 浏览器，默认</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;webworker&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// WebWorker</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;node&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Node.js，使用 \`require\` 语句加载 Chunk 代码</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;async-node&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Node.js，异步加载 Chunk 代码</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;node-webkit&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// nw.js</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;electron-main&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// electron, 主线程</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;electron-renderer&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// electron, 渲染线程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  externals: { </span><span style="color:#6A737D;">// 使用来自 JavaScript 运行环境提供的全局变量</span></span>
<span class="line"><span style="color:#24292E;">    vue: </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 同时 index.html 模板上引入 cdn 链接</span></span>
<span class="line"><span style="color:#6A737D;"> *  &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/vue/2.6.3/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  stats: { </span><span style="color:#6A737D;">// 控制台输出日志控制</span></span>
<span class="line"><span style="color:#24292E;">    assets: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    colors: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    errors: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    errorDetails: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    hash: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  devServer: { </span><span style="color:#6A737D;">// DevServer 相关的配置</span></span>
<span class="line"><span style="color:#24292E;">    proxy: { </span><span style="color:#6A737D;">// 代理到后端服务接口</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">        target:</span><span style="color:#032F62;">&#39;http://localhost:8888/&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//代理目标的基础路径，服务端的端口号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//关闭语法检查</span></span>
<span class="line"><span style="color:#24292E;">        lintOnSave:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        changeOrigin:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//允许跨域 可以代理反向的地址</span></span>
<span class="line"><span style="color:#24292E;">        pathRewrite:{</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;^/api&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//重写路径，将api开头的路径改为&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contentBase: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;public&#39;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 配置 DevServer HTTP 服务器的文件根目录</span></span>
<span class="line"><span style="color:#24292E;">    compress: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开启 gzip 压缩</span></span>
<span class="line"><span style="color:#24292E;">    historyApiFallback: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开发 HTML5 History API 网页</span></span>
<span class="line"><span style="color:#24292E;">    historyApiFallback: {</span><span style="color:#6A737D;">// 详细配置</span></span>
<span class="line"><span style="color:#24292E;">      rewrites: [</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// /user 开头的都返回 user.html</span></span>
<span class="line"><span style="color:#24292E;">    { from:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">user/</span><span style="color:#24292E;">, to: </span><span style="color:#032F62;">&#39;/user.html&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { from:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">game/</span><span style="color:#24292E;">, to: </span><span style="color:#032F62;">&#39;/game.html&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 其它的都返回 index.html</span></span>
<span class="line"><span style="color:#24292E;">        { from:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, to: path.posix.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(config.dev.assetsPublicPath, </span><span style="color:#032F62;">&#39;index.html&#39;</span><span style="color:#24292E;">) },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    hot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开启模块热替换功能</span></span>
<span class="line"><span style="color:#24292E;">    https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开启 HTTPS 模式</span></span>
<span class="line"><span style="color:#24292E;">    static: {</span><span style="color:#6A737D;">// 静态资源文件路径?</span></span>
<span class="line"><span style="color:#24292E;">      directory: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;public&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    profile: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    cache: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否启用缓存提升构建速度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    watch: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否启用监听模式</span></span>
<span class="line"><span style="color:#24292E;">    watchOptions: { </span><span style="color:#6A737D;">// 监听模式选项</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 不监听的文件或文件夹，支持正则匹配。默认为空</span></span>
<span class="line"><span style="color:#24292E;">    ignored:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 默认为300ms </span></span>
<span class="line"><span style="color:#24292E;">    aggregateTimeout: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每隔1000毫秒询问一次</span></span>
<span class="line"><span style="color:#24292E;">    poll: </span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="css增强" tabindex="-1">css增强 <a class="header-anchor" href="#css增强" aria-label="Permalink to &quot;css增强&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss-loader</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autoprefixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss-loader</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autoprefixer</span></span></code></pre></div><ul><li>config.js 如何配置</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [miniCssExtractPlugin.loader, </span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&#39;postcss-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    plugins: [</span><span style="color:#9ECBFF;">&#39;autoprefixer&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [miniCssExtractPlugin.loader, </span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                loader: </span><span style="color:#032F62;">&#39;postcss-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                options: {</span></span>
<span class="line"><span style="color:#24292E;">                  postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                    plugins: [</span><span style="color:#032F62;">&#39;autoprefixer&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              }]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,6),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{u as __pageData,A as default};
