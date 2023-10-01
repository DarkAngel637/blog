<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-10-01 20:00:16
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\node\base.md
-->
# node 
>fs
```js
const fs=require("fs");
// 读文件
fs.readFile()
fs.readFileSync()
// 写文件
fs.writeFile()
fs.writeFileSync()

// 在文件里加内容
fs.appendFile()
fs.appendFileSync()

// 拷贝文件
fs.copyFile()
fs.copyFileSync()
// 删除文件
fs.unlink()
fs.unlinkSync()
// 判断
fs.existsSync("文件路径")
fs.exists("文件路径")// node 20 被废弃, 使用 fs.stat() 或者 fs.access()
let state=fs.statSync("文件路径")
state.isFile()
state.isDirectory()
// 文件夹操作
// 读
fs.readdir()
fs.readdirSync()
// 写
fs.mddir()
fs.mddirSync()
// 删
fs.rmdir()
fs.rmdirSync()
// 重命名
fs.rename()
fs.renameSync()

// 流拷贝文件
let rs=fs.createReadStream()
let ws=fs.createwriteStream()
rs.pipe(ws)
```
>path
```js
const path=require("path");
path.basename()
path.dirname()
path.extname()
path.isAbsolute()
path.normalize()
path.parse()
path.relative()
path.resolve()
```
>http
```js
const http=require("http");
http.createServer((req,res)=>{
    cosnole.log(req,res,'req,res')
}).listen(3000,()=>console.log("success"))
http.get()
http.request()
```
>url
```js
const url=require("url");
url.parse()
```
>url
```js
const {createHmac}=require("crypto")

crypto.createHmac(algorithm, key,?options).update("明文").digest("jinzhi")
```
## 其他东西
```js
process.cwd()// 工程项目目录
process.argv()
process.action()
process.stdout()
__dirname// 被执行文件的文件夹的目录
__filename// 被执行文件的目录
os.networkInterfaces()// 已分配网络地址的网络接口的对象
child_process.exec(cmd,options,callback)// 执行命令
```
这里仅介绍以上四个模块,更多请看 [nodejs api](https://nodejs.org/dist/latest/docs/api/)
## express 

```js
const express = require("express");
const app = express();
// 创建请求 (接受前端传过来的 get 请求)

app.use()// 使用 express 挂载中间件,第一个参数是绝对路径,第二个是挂载的中间件
// 下面这三个可以放到 app.use() 里面
express.json()
express.urlunicoded()
express.static()


app.get("接收数据的端口", (req, res,next) => {  

// ...
const str= res.query;// get 请求从 query 中获取数据

// 发送绝对文件路径下的文件并结束响应
res.sendFile(path,options,fn)
// 向前端发送数据并结束响应 -- res.send()可以 **根据传入数据的类型自动设置 http headers 里的 Content-Type**
    res.send("hello world");
    // 结束响应 -- res.end() 要手动设置 Content-Length HTTP 响应标头,不传入任何参数
    res.end();
});
// 创建请求 (接受前端传过来的 get 请求)
app.post("接收数据的端口", (req, res,next) => {  

// ...
const str= res.body;// post 请求从 body 中获取数据

// 发送绝对文件路径下的文件并结束响应
res.sendFile(path,options,fn)
// 向前端发送数据并结束响应
    res.send("hello world");
    // 结束响应
    res.end();// 用法见 nodejs http 模块
});
// 监听端口
app.listen(3000, () => {  
    console.log("Server running on 3000");
});
```
## 渲染静态文件


```js
const express = require("express");
const path = require("path");
// 创建 express 应用
const app = new express();
// express.static() // 静态服务器上加载静态文件 返回一个中间件函数可供app.use 使用
app.use(express.static(path.join(__dirname, "/public")));// 如果在 public/有一个index.html文件，当你访问根域 URL（http://localhost:3000）时，就会提供静态资源。
/**
 * app.use((req,res,next)=>{
 *      req.locals.name = 'Flavio'; // 存储中间件生成的数据，并传递给后续中间件函数或请求处理程序
 * })
 * 
 * 中间件函数末尾调用next()以便将执行传递给下一个处理程序。除非我们想提前结束响应并将其发送回客户端。(洋葱模型从外传到内,不用next 之后就会将结果从内返回到外)
*/
// app.set()

app.listen(3000, () => {  
    console.log("Server running on 3000");
});
```
### 请求方式
```js
// 这个 '/' 就是接口地址,也就是 express 里的路由,跟前端的路由不同,前端路由是地址栏里的http 或者https 地址对应的那个页面,后端路由是 对应的那一部分处理逻辑
app.get('/', (req, res) => {
  /* */
});
app.post('/', (req, res) => {
  /* */
});
app.put('/', (req, res) => {
  /* */
});
app.delete('/', (req, res) => {
  /* */
});
app.patch('/', (req, res) => {
  /* */
});
// 命名参数 通过 req.params 获取
app.get('/uppercase/:theValue', (req, res) =>
  res.send(req.params.theValue.toUpperCase())
);
// 正则表达式匹配路径
app.get(/post/, (req, res) => {
  /* */
});
```
req 和 res，分别代表了请求（Request）和响应（Response）对象。

- 请求是一个 HTTP 请求，它包含了所有请求信息：包括请求参数、标头、请求体等。

- 响应是 HTTP 响应对象，会返回给客户端。


> #### req
属性	|介绍
|:---:|:---:|
.app|	持有对 Express app 对象的引用
.baseUrl|	app 响应的基本路径
.body|	包含在请求体提交的数据（必须手动解析和填充后才能访问）
.cookies|	包含由请求发送的 cookies（需要 cookie-parser中间件）
.hostname|	Host HTTP 标头值定义的主机名
.ip|	客户端 IP
.method|	使用的 HTTP 方法
.params|	路由命名参数
.path|	URL 路径
.protocol|	请求协议
.query|	包含请求中使用的所有查询字符串的对象
.secure|	请求是安全时（使用 HTTPS）为 true
.signedCookies|	包含由请求发送的签名 cookies（需要 cookie-parser 中间件）
.xhr	|请求为 XMLHttpRequest 时为 true
headers	|访问所有 HTTP 标头的值
header("请求表头名")	|访问指定的 HTTP 标头的值

### 设置 http status

res.status() 返回一个 promise 对象,可以直接调用 send,end,sendFile 方法结束请求

或者 可以直接调用 sendStatus()
```js
res.status(404).end();

res.status(404).send('File not found');

// ------------------- res.sendStatus -------------------
res.sendStatus(200);
// === res.status(200).send('OK')

res.sendStatus(403);
// === res.status(403).send('Forbidden')

res.sendStatus(404);
// === res.status(404).send('Not Found')

res.sendStatus(500);
// === res.status(500).send('Internal Server Error')
```
### 向客户端返回一个 json 串
res.json(obj|arr);
```js
res.json({ username: 'Flavio' });
```
res.json 在发送前将传入的数组或对象转换为 JSON 格式

### 管理 cookies
res.cookie(key,value,options)
```js
res.cookie('username', 'Flavio', {
  domain: '.flaviocopes.com',
  path: '/administrator',
  secure: true
});
```
可以设置的有用的参数包括：

值	|描述
|:---:|:---:|
domain|	cookie 的域名
expires|	设置 cookie 过期日期。如果未设置或者为 0，这个 cookie 将作为会话 cookie。
httpOnly|	设置 cookie 仅被 web 服务器访问。具体可查看 HttpOnly
maxAge|	设置相对于当前时间的过期时间，以毫秒为单位
path|	cookie 路径。默认值为 '/'
secure|	标记为 cookie HTTPS only
signed|	设置需要签名的 cookie
sameSite|	SameSite 的值

\*\*\*\*\*清除 cookie 可以使用：
```js
res.clearCookie('cookie 中的 key');
```
关于http 表头
```js
req.headers // 全部表头 
req.header("请求表头的key") // 访问单个表头
//  更快访问 --- res.type('Content-Type 标头类型')
res.type('html');
// => 'text/html'

res.type('json');
// => 'application/json'

res.type('application/json');
// => 'application/json'

res.type('png');
// => image/png:
```
### 重定向
Response.redirect(code,path)
- path 可以是以下几种类型:
    - 绝对路径（/go-there）
    - 绝对 URL（https://anothersite.com）
    - 相对路径（go-there）
    -  .. 返回上一层
```js
// 创建一个重定向
res.redirect('/go-there');
// 创建一个301 重定向
res.redirect(301,'/go-there');
// 重定向回 Referrer HTTP 标头值（如果未设置默认值为 /）

res.redirect('back');

```
### 如何向客户端发送文件
Express 提供了一个简便的方法将文件转换为附件传输：`Response.download()`。
Response.download(path,'rename',cbk)
- path : 下载文件的路径
- rename : 自定义文件名
- cbk : 发生错误时的回调
```js
// 下载文件
app.get('/', (req, res) => res.download('./file.pdf'));
// 自定义文件名下载
app.get('/', (req, res) => res.download('./file.pdf', 'user-facing-filename.pdf',(err) => {
  if (err) {
    //handle error
    return;
  } else {
    //do something
  }
}););

```

一旦用户点击使用此方法发送文件的路由，浏览器将提示用户下载。

Response.download() 方法允许发送附加到请求的文件，浏览器不会在页面中显示它，而是将其保存到磁盘。

### Express 中的会话
```shell
npm install express-session
# or 
yarn add express-session
```
```js
const express = require('express');
const session = require('express-session');

const app = express();
app.use(
  session({
    secret: '343ji43j4n3jn4jk3n'
  })
);

// secret是唯一的必填参数，还有许多可选参数。secret必须为一个唯一的随机字符串。

// 会话被添加到请求，所以可以通过 req.session访问：
app.get('/', (req, res, next) => {
  const session = req.session;// 可访问数据,也可设置数据

}
```
### 验证输入 还可以清理输入
```shell
npm install express-validator
```
```js
const { check, validationResult } = require('express-validator');
const app=require('express')();
app.post(
  '/form',
//   验证规则数组
  [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
  }
);
```
注意我使用了：

isLength()
isEmail()
isNumeric()
还有更多方法，都来自 validator.js，包括：

contains(), 检查是否包含指定值
equals(), 检查是否与指定值相等
isAlpha()
isAlphanumeric()
isAscii()
isBase64()
isBoolean()
isCurrency()
isDecimal()
isEmpty()
isFQDN(), 检查是否为完全合格的域名
isFloat()
isHash()
isHexColor()
isIP()
isIn(), 检查值是否属于允许值数组
isInt()
isJSON()
isLatLong()
isLength()
isLowercase()
isMobilePhone()
isNumeric()
isPostalCode()
isURL()
isUppercase()
isWhitelisted(), 检查输入是否在白名单内
你也可以使用matches()来进行正则表达式验证。

日期可以通过以下方式验证：

isAfter(), 检查输入的日期是否在你传入的日期之后
isBefore(), 检查输入的日期是否在你传入的日期之前
isISO8601()
isRFC3339()
验证都可链式调用
`withMessage()` 用来自定义错误信息
custom 用来自定义验证器
```js
check('email').custom((email) => {
      if (alreadyHaveEmail(email)) {
        throw new Error('Email already registered');
      }
    })
```
清理输入
```js
app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('age').isNumeric().trim().escape()
  ],
  (req, res) => {
    //...
  }
);
```
在代码中我使用的清理方法包括：

- trim()修剪字符串开头和结尾的字符（默认为空格）
- escape()将 <, >, &, ', "和 /替换成它们对应的 HTML 实体
- normalizeEmail()规范化电子邮件地址，它接受小写邮件地址或者子地址的选项。(如 flavio+newsletters@gmail.com)
其他的清理方法包括：

- blacklist() 删除出现在黑名单中的字符
- whitelist() 删除未出现在白名单中的字符
- unescape() 将 HTML 编码的实体替换为<, >, &, ', " 和 /
- ltrim() 类似于 trim()，但只修剪字符串开头的字符
- rtrim() 类似于 trim()， 但只修剪字符串末尾的字符
- stripLow()删除通常不可见的 ASCII 控制字符
强制转换格式：

- toBoolean() 将输入字符串转换为布尔值。除了 '0'、'false' 和 '' 之外的所有内容都返回 true。在严格模式下，只有 '1' 和 'true' 返回 true。
- toDate() 将输入字符串转换为日期，如果输入不是日期，则为 null。
- toFloat() 将输入字符串转换为浮点数，如果输入不是浮点数，则转换为 NaN。
- toInt()将输入字符串转换为整数，如果输入不是整数，则转换为 NaN。
与自定义验证器一样，你可以创建自定义清理器。

在回调函数中，你只需返回清理后的值：
```js
const sanitizeValue = (value) => {
  //sanitize...
};

app.post(
  '/form',
  [
    check('value').customSanitizer((value) => {
      return sanitizeValue(value);
    })
  ],
  (req, res) => {
    const value = req.body.value;
  }
);
```
### 如何在 Express 中处理表单
以下是一个 HTML 表单示例：
```html
<form method="POST" action="/submit-form">
  <input type="text" name="username" />
  <input type="submit" />
</form>
```
当用户按下提交按钮时，浏览器会自动向页面同源的/submit-form URL 发出 POST请求。浏览器发送表单包含的数据，编码为 application/x-www-form-urlencoded。在此特定示例中，表单数据包含username输入字段值。

表单也可以通过 GET 方法发送数据，但是大多数情况为POST。

表单数据将在 POST 请求体中发送。

可以使用express.urlencoded()中间件提取：
```js
const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
```
现在，需要在/submit-form 路由上创建一个 POST 端点，任何数据都可以在 Request.body 访问：
```js
app.post('/submit-form', (req, res) => {
  const username = req.body.username;
  //...
  res.end();
});
```
别忘记提前使用express-validator验证数据。

### 如何在 Express 中处理表单中的文件上传
以下代码是允许用户上传文件的 HTML 表单示例：
```html
<form method="POST" action="/submit-form" enctype="multipart/form-data">
  <input type="file" name="document" />
  <input type="submit" />
</form>
```
别忘记在表单添加enctype="multipart/form-data"，否则表单不会被上传。

当用户按下提交按钮时，浏览器会自动向页面同源的/submit-form URL 发出 POST 请求。浏览器发送表单包含的数据，但表单未编码为普通表单 application/x-www-form-urlencoded，而是 multipart/form-data。

在服务器端，处理多部分数据可能很棘手且容易出错，因此我们将使用一个名为 formidable 的库。这里是它的 GitHub 仓库 – 拥有超过 4000 颗星，并且维护良好。

可以通过以下命令安装：
```shell
npm install formidable
```
然后引用到 Node.js 文件：
```js
const express = require('express');
const app = express();
const formidable = require('formidable');
```
现在，在 /submit-form 路由的 POST 端点中，我们使用 formidable.IncomingForm() 实例化一个新的 Formidable 表单：
```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm();
});
```
这样做之后，我们需要解析表单。我们可以通过回调来同步执行此操作，这意味着所有文件都已处理。一旦 formidable 完成，文件就可以被访问：
```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err);
      throw err;
    }
    console.log('Fields', fields);
    console.log('Files', files);
    for (const file of Object.entries(files)) {
      console.log(file);
    }
  });
});
```
或者可以使用事件而不是回调。例如，当每个文件被解析时，或其他事件（例如文件处理完成、接收非文件字段或发生错误）时，都会收到通知：
```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm()
    .parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field);
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file);
    })
    .on('aborted', () => {
      console.error('Request aborted by the user');
    })
    .on('error', (err) => {
      console.error('Error', err);
      throw err;
    })
    .on('end', () => {
      res.end();
    });
});
```
无论选择哪种方式，你都将获得一个或多个 Formidable.File 对象，这些对象为你提供有关已上传文件的信息。这些是可以调用的一些方法：

- file.size, 以字节为单位的文件大小
- file.path, 文件写入的路径
- file.name, 文件名
- file.type, 文件的 MIME 类型
路径默认为临时文件夹，如果监听 fileBegin 事件可以修改：
```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm()
    .parse(req)
    .on('fileBegin', (name, file) => {
      file.path = __dirname + '/uploads/' + file.name;
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file);
    });
  //...
});
``` 
## 开发一个交互式命令行 最基本的步骤
1.初始化 `package.json` 
```shell
npm init -y 
``` 
2. 创建入口文件 index.js
3. package,json 里添加 bin 节点
```json
{
    "bin":{"命令名":"./index.js"}  
}
```
4. index.js 中写入 `#!/usr/bin/env node`
```js
// index.js
#!/usr/bin/env node

```
5 执行 npm link 或者 npm install -g
 ```shell
 npm link 
  #或者
 npm install -g
 ```
 nodejs 中
-  \<params> 为必选参数
-  \[params] 为可选参数