<!--
 * @Author: Dark Angel
 * @Date: 2023-09-30 15:54:02
 * @LastEditTime: 2023-09-30 15:55:20
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\frame\webpack\webpack.confg 配置.md
-->

# webpack.connfig 配置

```js
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");// 压缩 js 的插件
// nodejs核心模块，直接使用
const os = require("os");
// cpu核数
const threads = os.cpus().length;
module.exports = {
  // entry 表示 入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
  // 类型可以是 string | object | array   
  entry: './app/entry', // 只有1个入口，入口只有1个文件
  entry: ['./app/entry1', './app/entry2'], // 只有1个入口，入口有2个文件
  //  entry: ["@babel/polyfill", "./app/js"], // @babel/polyfill 是将es6+ 转成es5
  entry: { // 有2个入口
    a: './app/entry-a',
    b: ['./app/entry-b1', './app/entry-b2']
  },
mode: 'none' | 'development' | 'production', // webpack --mode development   production 默认开启 tree shaking
  // 如何输出结果：在 Webpack 经过一系列处理后，如何输出最终想要的代码。
  output: {
    // 输出文件存放的目录，必须是 string 类型的绝对路径。
    path: path.resolve(__dirname, 'dist'),

    // 输出文件的名称
    filename: 'bundle.js', // 完整的名称
    filename: '[name].js', // 当配置了多个 entry 时，通过名称模版为不同的 entry 生成不同的文件名称
    filename: '[chunkhash].js', // 根据文件内容 hash 值生成文件名称，用于浏览器长时间缓存文件

    // 发布到线上的所有资源的 URL 前缀，string 类型
    publicPath: '/assets/', // 放到指定目录下
    publicPath: '', // 放到根目录下
    publicPath: 'https://cdn.example.com/', // 放到 CDN 上去

    // 导出库的名称，string 类型
    // 不填它时，默认输出格式是匿名的立即执行函数
    library: 'MyLibrary',

    // 导出库的类型，枚举类型，默认是 var
    // 可以是 umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp ，
    libraryTarget: 'umd', 

    // 是否包含有用的文件路径信息到生成的代码里去，boolean 类型
    pathinfo: true, 

    // 附加 Chunk 的文件名称
    chunkFilename: '[id].js',
    // ------------------------------
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
    assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
    clean: true,
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`, // runtime文件命名规则
    },
    // ------------------------------

    // JSONP 异步加载资源时的回调函数名称，需要和服务端搭配使用
    jsonpFunction: 'myWebpackJsonp',

    // 生成的 Source Map 文件名称
    sourceMapFilename: '[file].map',

    // 浏览器开发者工具里显示的源码模块名称
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',

    // 异步加载跨域的资源时使用的方式
    crossOriginLoading: 'use-credentials',
    crossOriginLoading: 'anonymous',
    crossOriginLoading: false,
  },

  // 配置模块相关
  module: {
    rules: [ // 配置 Loader
      {  
        test: /\.jsx?$/, // 正则匹配命中要使用 Loader 的文件
        include: [ // 只会命中这里面的文件
          path.resolve(__dirname, 'app')
        ],
        exclude: [ // 忽略这里面的文件
          path.resolve(__dirname, 'app/demo-files')
        ],
        use: [ // 使用那些 Loader，有先后次序，从后往前执行
          'style-loader', // 直接使用 Loader 的名称    style-loader 将 
          {
            loader: 'css-loader',      
            options: { // 给 html-loader 传一些参数
            }
          }
        ]
      },
      // 处理js  npm i babel-loader @babel/preset-env @babel/core # babel-loader 处理 js 文件; @babel/preset-env 语法转换 ;@babel/polyfill es6+ 转成es5 (entry) @babel/plugin-transform-runtime ()
{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          // options配置你也可以在.babelrc或babel.config.js中单独配置
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true, // 开启babel编译缓存
            cacheCompression: false, // 缓存文件不要压缩
            plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
          }
        },
         {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
],
        exclude: /node_modules/
      },
//  处理图片 file-loader 和 url-loader; 小于 limit 参数即 1024B 的图片会被转译为 Base64 编码，对于超过 limit 值的图片则直接调用 file-loader 完成加载
{
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader']
    },
{
        loader: 'url-loader',
        options: {
          limit: 1024
        }
      },
      //  webpack 5 的话直接指定类型就行
      {
      test: /\.(png|jpg|gif|jpeg)$/,
      type: 'asset/resource'
    }
    ],
    noParse: [ // 不用解析和处理的模块
      /special-library\.js$/  // 用正则匹配
    ],
  },

  // 配置插件
  plugins: [
    new PreloadWebpackPlugin({
      rel: "preload", // preload兼容性更好
      as: "script",
      // rel: 'prefetch' // prefetch兼容性更差
    }),
    new WorkboxPlugin.GenerateSW({// 配合 npm i serve -g && serve dist
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  // optimization 用来做优化的(控制产物包体积)
  //  code spliting 可以让模块用到的时候再加载
optimization:{
splitChunks:{// 开启分包加载 https://www.webpackjs.com/plugins/split-chunks-plugin/
 chunks: 'async',// 配置成 all 即对所有文件分包按需加载
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // 指定符合什么规则的模块拆到什么 chunk 里
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        // 定义每个 chunk 要有多大，初始加载最多能加载个文件等维度
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
},
  minimize: true,
  // 在Webpack4中 默认使用 uglifyjs-webpack-plugin压缩代码，也可以通过 minimizer 数组替换为 Terser 插件
  minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      })
    ]
},
  // 配置寻找模块的规则
  resolve: { 
    modules: [ // 寻找模块的根目录，array 类型，默认以 node_modules 为根目录
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.js', '.json', '.jsx', '.css'], // 模块的后缀名
    alias: { // 模块别名配置，用于映射模块
       // 把 'module' 映射 'new-module'，同样的 'module/path/file' 也会被映射成 'new-module/path/file'
      'module': 'new-module',
      // 使用结尾符号 $ 后，把 'only-module' 映射成 'new-module'，
      // 但是不像上面的，'module/path/file' 不会被映射成 'new-module/path/file'
      'only-module$': 'new-module', 
    },
    alias: [ // alias 还支持使用数组来更详细的配置
      {
        name: 'module', // 老的模块
        alias: 'new-module', // 新的模块
        // 是否是只映射模块，如果是 true 只有 'module' 会被映射，如果是 false 'module/inner/path' 也会被映射
        onlyModule: true, 
      }
    ],
    symlinks: true, // 是否跟随文件软链接去搜寻模块的路径
    descriptionFiles: ['package.json'], // 模块的描述文件
    mainFields: ['main'], // 模块的描述文件里的描述入口的文件的字段名称
    enforceExtension: false, // 是否强制导入语句必须要写明文件后缀
  },

  // 输出文件性能检查配置
  performance: { 
    hints: 'warning', // 有性能问题时输出警告
    hints: 'error', // 有性能问题时输出错误
    hints: false, // 关闭性能检查
    maxAssetSize: 200000, // 最大文件大小 (单位 bytes)
    maxEntrypointSize: 400000, // 最大入口文件大小 (单位 bytes)
    assetFilter: function(assetFilename) { // 过滤要检查的文件
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
/**
 * 对于开发环境，适合使用：
 *  - eval：速度极快，但只能看到原始文件结构，看不到打包前的代码内容；
 *  - cheap-eval-source-map：速度比较快，可以看到打包前的代码内容，但看不到 loader 处理之前的源码；
 *  - cheap-module-eval-source-map：速度比较快，可以看到 loader 处理之前的源码，不过定位不到列级别；
 *  - eval-source-map：初次编译较慢，但定位精度最高；
 * 对于生产环境，则适合使用：
 *  - source-map：信息最完整，但安全性最低，外部用户可轻易获取到压缩、混淆之前的源码，慎重使用；
 *  - hidden-source-map：信息较完整，安全性较低，外部用户获取到 .map 文件地址时依然可以拿到源码，慎重使用；
 *  - nosources-source-map：源码信息缺失，但安全性较高，需要配合 Sentry 等工具实现完整的 Sourcemap 映射。
 */
  devtool: 'source-map', // 配置 source-map 类型

  context: __dirname, // Webpack 使用的根目录，string 类型必须是绝对路径

  // 配置输出代码的运行环境
  target: 'web', // 浏览器，默认
  target: 'webworker', // WebWorker
  target: 'node', // Node.js，使用 `require` 语句加载 Chunk 代码
  target: 'async-node', // Node.js，异步加载 Chunk 代码
  target: 'node-webkit', // nw.js
  target: 'electron-main', // electron, 主线程
  target: 'electron-renderer', // electron, 渲染线程

  externals: { // 使用来自 JavaScript 运行环境提供的全局变量
    vue: 'vue'
/**
 * 同时 index.html 模板上引入 cdn 链接
 *  <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.3/vue.min.js"></script>
 */

  },

  stats: { // 控制台输出日志控制
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },

  devServer: { // DevServer 相关的配置
    proxy: { // 代理到后端服务接口
      '/api':{
        target:'http://localhost:8888/',//代理目标的基础路径，服务端的端口号
        //关闭语法检查
        lintOnSave:false,
        changeOrigin:true,//允许跨域 可以代理反向的地址
        pathRewrite:{
          '^/api':'' //重写路径，将api开头的路径改为''
        }
      }
    },
    contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录
    compress: true, // 是否开启 gzip 压缩
    historyApiFallback: true, // 是否开发 HTML5 History API 网页
    historyApiFallback: {// 详细配置
      rewrites: [
         // /user 开头的都返回 user.html
    { from: /^\/user/, to: '/user.html' },
    { from: /^\/game/, to: '/game.html' },
    // 其它的都返回 index.html
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 是否开启模块热替换功能
    https: false, // 是否开启 HTTPS 模式
    static: {// 静态资源文件路径?
      directory: path.join(__dirname, 'public'),
    },
    },

    profile: true, // 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳

    cache: false, // 是否启用缓存提升构建速度

    watch: true, // 是否启用监听模式
    watchOptions: { // 监听模式选项
    // 不监听的文件或文件夹，支持正则匹配。默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为300ms 
    aggregateTimeout: 300,
    // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每隔1000毫秒询问一次
    poll: 1000
  },
}
```
### css增强
```shell
npm i postcss postcss-loader autoprefixer
```
- config.js 如何配置
```js
module.exports = {
  // ...
  module: {
    rules: [
      //...
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 
              'css-loader', 
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['autoprefixer']
                  }

                }
              }]
      },
    ]
  }
  //...
}
```