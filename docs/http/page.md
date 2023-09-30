<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-09-30 20:42:47
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\http\page.md
-->
# http

## 缓存
都是通过 http header 实现的
- 协商缓存 :**last-modified** 和 **if-modified-since**,或者是 **E-tag** 和 **if-none-match** 资源没变化 则返回 304 并 更新浏览器缓存有效期
###  If-None-Match 和 ETag 
当本地缓存过期的时候，浏览器就会尝试协商缓存。协商缓存会发起请求，以验证本地副本是否可以使用。也称为再验证的过程。

· 如果验证后显示文档内容变化，浏览器会获取一份新的副本，替代旧副本，缓存在本地

· 如果验证后显示文档内容无变化，浏览器只用获取新的首部和新的过期日期

根据响应中的状态码来指明文档没有变化。304 Not Modified
验证文档内容是否变化有两种方式，统称为条件GET方法
###  Last-Modified 和 If-Modified-Since 
|第一个|第二个|
|:---:|:---:|
Last-Modified | If-Modified-Since
客户端的时间   | 服务端记录的第一次修改的时间

这一对首部通过资源修改日期判断是否有变化，主要过程为：

1. 首次获取资源：服务器响应中添加首部Last-Modified，说明资源最近一次修改时间。浏览器保存下来这个时间

2. 验证资源：浏览器带上If-Modified-Since首部，值就是Last-Modified返回的时间；服务器比较If-Modified-Since的时间与资源最近一次修改时间：

3. 如果最近一次修改时间小于If-Modified-Since的时间，则返回304响应，响应中也会有cache-control、expires、Date首部；

4. 如果最近一次修改时间大于If-Modified-Since的时间，则返回新资源，并且更新所对应的全部首部，包括cache-control、expires、Date


- 强缓存 : 强缓存通过HTTP 首部：**cache-control 和 Expires**管理
> Cache-control有max-age、s-maxage、no-cache、no-store、private、public这六个属性。
> - max-age决定客户端资源被缓存多久。
> - s-maxage决定代理服务器缓存的时长。
> - no-cache表示是强制进行协商缓存。
> - no-store是表示禁止任何缓存策略。
> - public表示资源即可以被浏览器缓存也可以被代理服务器缓存。
> - private表示资源只能被浏览器缓存。
## websocket

- #### 构造函数
  ```js
  WebSocket(url[, protocols])
  ```
- #### 常量

|         常量         | 值  |
| :------------------: | :-: |
| WebSocket.CONNECTING |  0  |
|    WebSocket.OPEN    |  1  |
|  WebSocket.CLOSING   |  2  |
|   WebSocket.CLOSED   |  3  |

### websocket 实例上的属性

```js
WebSocket = {
binaryType, // 使用二进制的数据类型连接。
bufferedAmount, //  只读 --- 未发送至服务器的字节数。
extensions, //  只读 --- 服务器选择的扩展。
onclose, // 用于指定连接关闭后的回调函数。
onerror, // 用于指定连接失败后的回调函数。
onmessage, // 用于指定当从服务器接受到信息时的回调函数。
onopen, // 用于指定连接成功后的回调函数。
protocol, //  只读 --- 服务器选择的下属协议。
readyState, //  只读 --- 当前的链接状态。 
url //  只读 --- WebSocket 的绝对路径。
}
```

### 方法

- WebSocket.close([code[, reason]])
  关闭当前链接。
- \*\*\* WebSocket.send(data)  
  向服务器发送数据。(最好在 onopen 事件里发送数据)

### 事件

使用 `addEventListener()` 或将一个事件监听器赋值给本接口的 `oneventname` 属性，来监听下面的事件。

- close
当一个 WebSocket 连接被关闭时触发。 (用来关闭 websocket 连接)
也可以通过 onclose 属性来设置。   (服务端 通过 message 事件接收客户端发送过来的消息)
- error
当一个 WebSocket 连接因错误而关闭时触发，例如无法发送数据时。
也可以通过 onerror 属性来设置。
- \*\*\* message
当通过 `WebSocket 收到数据时`触发。
也可以通过 onmessage 属性来设置。
- \*\*\* open
当一个 `WebSocket 连接成功时`触发。
也可以通过 onopen 属性来设置。


参看: https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

更多细节: mdn 里搜 websocket 
------
### 什么是 webSocket

WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。  

在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
WebSocket 具有以下特点：
1. **全双工通信**：WebSocket 允许客户端和服务器在连接建立后双向传输数据，不像传统的 HTTP 请求-响应模式那样需要等待服务器的响应。
2. **持久连接**：一旦建立 WebSocket 连接，它将保持打开状态，允许在连接的生命周期内随时传输数据，避免了频繁地建立和关闭连接的开销。
3. **低延迟**：WebSocket 的连接一旦建立，数据可以实时传输，无需等待额外的握手和请求。
4. **双方通知**：服务器可以主动向客户端发送数据，而不需要客户端首先请求。这对于实时更新和通知非常有用。
5. **减少网络流量**：WebSocket 通过在连接保持打开的情况下传输数据，可以减少 HTTP 请求的开销，从而减少网络流量。

### WebSocket 解决了什么问题：

在不使用 WebSocket 时，如果我们需要建立一条长连接，有以下几种方法：

- 轮询
- 长轮询（常用）
- SSE(Server Send Event)

当出现类似体育赛事、聊天室、实时位置之类的场景时，客户端要获取服务器端的变化，就只能通过轮询(定时请求)来了解服务器端有没有新的信息变化。WebSocket 的出现，让服务器端可以主动向服务器端发送信息，使得浏览器具备了实时双向通信的能力,这就是 WebSocket 解决的问题
WebSocket 适用于需要**实时、高效、双向通信**的场景，
具体场景有以下几种:

1. **实时聊天应用**：WebSocket 可以使聊天应用实现实时消息传递，从而用户可以即时收到新消息，无需手动刷新页面。
2. **实时协作工具**：协作工具可以使用 WebSocket 实现多用户同时编辑文档，实时更新内容。
3. **在线游戏**：多人在线游戏通常需要实时的玩家间通信，WebSocket 可以提供低延迟的双向通信，使游戏状态和动作可以及时传递。
4. **实时更新**：当应用需要实时更新数据，如股票市场价格、新闻、天气等，WebSocket 可以将更新直接推送给客户端，而不需要客户端不断地轮询服务器。
5. **通知和提醒**：应用可以使用 WebSocket 发送实时通知和提醒，如社交媒体的新消息提醒。
6. **在线交互式应用**：需要实时反馈和即时用户输入响应的应用，如实时投票应用、即时问答平台等。
7. **数据监控和控制**：监控系统和远程控制系统需要实时更新数据和状态，WebSocket 可以满足这些需求。

- 带宽问题：WebSocket 相对于 HTTP 来说协议头更加小，同时按需传递。
- 数据实时性问题：WebSocket 相对于轮询和长轮询来说，能够实时传递数据，延迟更小。
- 状态问题：相较于 HTTP 的无状态请求，WebSocket 在建立连接后能够维持特定的状态。

### WebSocket 与 HTTP 对比

![111](https://user-gold-cdn.xitu.io/2019/12/3/16ec9bc6c28a9a19?w=1014&h=442&f=png&s=225703)

### 基本使用(一个协议,四个事件(open,close,message,error),两个方法(send,close),open的时候 send 数据)

**客户端**

```js
const ws = new WebSocket('ws://localhost:8888')
ws.onopen = () => {
  console.log('WebSocket onopen')
  ws.send()// open 的时候才能send 数据
}
ws.onmessage = e => {
  console.log(e)
  console.log(e.data)
}
ws.onclose = e => {
  console.log('WebSocket onclose')
}
ws.onerror = e => {
  console.log('WebSocket onerror')
}
```

- WebSocket.onopen： 连接成功后调用
- WebSocket.onmessage： 当接收到服务器消息时调用
- WebSocket.onclose： 连接关闭后调用
- WebSocket.onerror： 发生错误后调用
### new Websocket(url).readyState
- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
**服务端例子(koa)**

```js
const Koa = require('koa')
const WebSocket = require('ws')
const app = new Koa()
const ws = new WebSocket.Server({ port: 8888 })
ws.on('connection', ws => {
  console.log('server connection')
  ws.on('message', msg => {
    console.log('server receive msg：', msg)
  })
  ws.send('Information from the server')
})
app.listen(3000)
```

WebSocket 可以传递 String、ArrayBuffer 和 Blob 三种数据类型，因此在收到消息时可能是其中的任意一种。其中，String 和 ArrayBuffer 使用的最多。

- 如果是 String 类型，直接通过字符串处理函数即可进行相关转换，如 JSON 等格式。
- 如果是二进制 blob 类型，则需要使用 ArrayBuffer 和 DataView 来进行处理，下面简单介绍。

二进制数据包括：blob 对象和 Arraybuffer 对象，所以我们需要分开来处理。

```javascript
// 接收数据
ws.onmessage = function(event) {
  if (event.data instanceof ArrayBuffer) {
    // 判断 ArrayBuffer 对象
  }
  if (event.data instanceof Blob) {
    // 判断 Blob 对象
  }
}
// 发送 Blob 对象的例子
let file = document.querySelector('input[type="file"]').files[0]
ws.send(file)
// 发送 ArrayBuffer 对象的例子
var img = canvas_context.getImageData(0, 0, 400, 320)
var binary = new Uint8Array(img.data.length)
for (var i = 0; i < img.data.length; i++) {
  binary[i] = img.data[i]
}
ws.send(binary.buffer)
```

webSocket.bufferedAmount 属性，表示还有多少字节的二进制数据没有发送出去
如果发送的二进制数据很大的话，可以这样判断

```javascript
var data = new ArrayBuffer(10000000)
socket.send(data)
if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
```

### 总结 WebSocket 的优点

- 双向通信(一开始说的，也是最重要的一点)。
- 数据格式比较轻量，性能开销小，通信高效
- 协议控制的数据包头部较小，而 HTTP 协议每次通信都需要携带完整的头部
- 更好的二进制支持
- 没有同源限制，客户端可以与任意服务器通信
- 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器
### 使用  (weboscket 如何使用)
主要就一个协议,4个事件,两个方法
- 一个协议,
  - wss://
- 四个事件,
  - onopen
  - onclose
  - onerror
  - onmessage
- 两个方法
  - send
  - close
- 注意 :
  - \* onopen 的时候才能 send

### WebSocket 握手请求头字段：
1. Upgrade：标识请求将升级为 WebSocket 连接。
2. Connection：标识请求将保持连接，值为 Upgrade。
3. Sec-WebSocket-Key：包含一个基于随机数的密钥，用于计算握手响应的 Sec-WebSocket-Accept 值。
4. Sec-WebSocket-Version：指定支持的 WebSocket 协议版本，如 13。
5. Sec-WebSocket-Extensions：指定支持的扩展，如压缩等。
6. Sec-WebSocket-Protocol：指定客户端请求的子协议，用于多个子协议的支持。
### WebSocket 握手响应头字段：
1. Upgrade：标识响应将升级为 WebSocket 连接。
2. Connection：标识响应将保持连接，值为 Upgrade。
3. Sec-WebSocket-Accept：包含基于客户端的 Sec-WebSocket-Key 计算的响应密钥。
4. Sec-WebSocket-Extensions：指定服务器支持的扩展。
5. Sec-WebSocket-Protocol：指定实际使用的子协议。
### 一些常见的 WebSocket 状态码 (stateClode)：
1. 连接状态码：
  -  1000：正常关闭。表示连接已经完成关闭。
  -  1001：终端关闭。表示终端或用户主动关闭连接。
  -  1006：无法连接。表示连接由于某种原因无法建立。
2. 保留状态码：
  -  1002：协议错误。表示服务器收到了一个无效的帧或违反了协议规定。
  -  1003：数据类型错误。表示服务器无法接受客户端发送的数据类型。
  -  1004：保留。此状态码当前未使用。
  -  1005：保留。此状态码当前未使用。
3. 错误状态码：
  -  1007：数据错误。表示服务器在接收到数据时遇到数据格式错误或不一致。
  -  1008：消息过大。表示接收到的消息太大，服务器无法处理。
  -  1009：数据过大。表示服务器在处理消息时接收到过大的数据。
  -  1010：扩展错误。表示客户端在扩展握手中出现错误。
  -  1011：服务错误。表示服务器由于遇到不可恢复的错误而关闭连接。
4. 保留状态码：
  -  1012：保留。此状态码当前未使用。
  -  1013：保留。此状态码当前未使用。
5. 应用程序状态码：
  -  3000-3999：这个范围的状态码是供应用程序自定义使用的，用于特定的应用需求。
一个协议,四个事件(open,close,message,error),两个方法(send,close)

请求地址分析:
                    |  proxy替换  |
http:\//localhost:8000/sacp/api/v1/sacp/api/get_xml
                     |-  拦截器 -|
                                 |-   zujianli   -|
提供数据的接口地址(proxy): https:\//www.fastmock.site/sacp/api/v1/sacp/api/get_xml
```js
// proxy
 '/sacp/api': {
      target: 'https://www.fastmock.site/mock/1f27181715381fce6ad7c986aadff494/sacp',
      secure: false,
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      // pathRewrite: {
      //   '^/sacp/api': '/api',
      // },
    },

// app.tsx
    const authHeaderInterceptor = (url: string, options: any) => {
  return {
    url: baseUrl + '/sacp/api/v1' + url,
    options: o,
  };
};
export const request = {
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],

};

// 组件里
const request1 = () => {
    return request('/sacp/api/get_xml', {
        method: 'GET'
    })
}
```

---
WebSockets API 的使用相对简单，只需要几个基本步骤：

「建立 WebSocket 连接」
在客户端代码中，使用 JavaScript 创建一个 WebSocket 对象，并通过 WebSocket URL 建立与服务器的连接。
```js
const socket = new WebSocket("ws://example.com/socket");
```
「处理连接事件」
在连接建立后，WebSocket 对象会触发不同的事件，我们可以监听这些事件来处理连接状态和接收数据。
```js
socket.onopen = () => {
  console.log("WebSocket 连接已建立");
};

socket.onmessage = (event) => {
  console.log("收到消息:", event.data);
};

socket.onclose = () => {
  console.log("WebSocket 连接已关闭");
};
```
「发送和接收数据」
通过 WebSocket 对象的 send() 方法发送数据到服务器，服务器可以使用 send() 方法将数据发送给客户端。
```js
// 发送数据
socket.send("Hello, Server!");

// 接收数据
socket.onmessage = (event) => {
  console.log("收到消息:", event.data);
};
```
「关闭连接」
当不再需要使用 WebSocket 连接时，可以通过调用 WebSocket 对象的 close() 方法来关闭连接。
```js
socket.close();
```
### 心跳机制

问题：

（1）websocket在连接后，如果长时间服务端和客户端不发消息，服务端会把websocket给断开。 

（2）存在网络忽然断开的情况，这时服务器端并没有触发onclose的事件。服务器会继续向客户端发送多余的信息，这些数据会丢失。

心跳重连机制

为了解决上面的问题，就需要⼀种机制来检测客户端和服务端是否处于正常的连接状态。因此就有了websocket的心跳机制。

⼼跳机制是客户端每隔⼀段时间会向服务端发送⼀个数据包，告诉服务端自己还活着，同时客户端会根据服务端是否会回传⼀个数据包来确定服务端是否还活着。
如果客户端没有收到回复，表示websocket断开连接或者网络出现问题，就需要重连。

websocket心跳机制：顾名思义，就是客户端每隔一段时间向服务端发送一个特有的心跳消息，每次服务端收到消息后只需将消息返回，此时，若二者还保持连接，则客户端就会收到消息，若没收到，则说明连接断开，此时，客户端就要主动重连，完成一个周期
心跳的实现也很简单，只需在第一次连接时用回调函数做延时处理，此时还需要设置一个心跳超时时间，若某时间段内客户端发送了消息，而服务端未返回，则认定为断线。

```js
function initHeartCheck() {
        return {
            timeout: 2 * 1000, // 每2s向服务端发送一次消息
            serverTimeout: 10 * 1000, // 10s收不到服务端消息算超时
            timer: null,
            serverTimer: null,
            reset() { // 心跳检测重置
                clearTimeout(this.timer);
                clearTimeout(this.serverTimer);
                this.timer = null;
                this.serverTimer = null;
                return this;
            },
            start() { // 心跳检测启动
                this.reset();
                this.timer = setTimeout(() => { 
                    socket.send('ping'); // 定时向服务端发送消息
                    if (!this.serverTimer) {
                        this.serverTimer = setTimeout(() => {
                            // 关闭连接触发重连
                           console.log(new Date().toLocaleString(), "not received pong, close the websocket");
                          socket.close(); //关闭websocket或根据业务需求去重连 
                        }, this.serverTimeout);
                    }
                }, this.timeout);
            },
        }
    }   

const socket = new WebSocket('ws://localhost:8080'); // WebSocket 建立连接
const heartCheck = initHeartCheck()；// 初始化心跳检测对象

// WebSocket建立连接成功
socket.addEventListener('open', function (event) {
　　heartCheck.start();// 启动心跳检测
　　socket.send('Hello Server!');
});
// WebSocket接受到服务端消息
socket.addEventListener('message',function(event){
  heartCheck.start();// 启动心跳检测
})
// WebSocket 连接被关闭
socket.addEventListener('close',function(event){
  heartCheck.reset();// 启动心跳检测
})
// WebSocket 连接因错误而关闭
socket.addEventListener('error',function(event){
  heartCheck.reset();// 启动心跳检测
})


```