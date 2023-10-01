<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-10-01 16:59:44
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\node\koa.md
-->
# koa
## 安装
```shell
# nodejs >=7
npm i koa
```
## 基本模板

```js
const Koa = require('koa');
const app = new Koa();
// const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const connect = require('./db/index');

router.get('/list',async ctx=>{
    // connect.query(sql,回调);
    //查询
    // let datas = null

    let res = await new Promise((resolve,reject)=>{
        connect.query('select * from user',(err,data)=>{
            if(!err){
                console.log(data,'****')
                // datas = data;
                resolve(data);
               
            } else {
                reject(err)
                // console.log(err)
            }
        });
    })
   
    ctx.body = {
        code:0,
        mes:'成功',
        data:res
    }
   
});
// app.use(static(path.join(__dirname,'./public/')));
app.use(bodyParser());
app.use(router.routes(),router.allowedMethods());
app.listen(3000);
```
## 数据库
```js
const mysql = require('mysql'); //引入
//创建链接
const connect = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'db'
})


//测试链接
connect.connect((err)=>{
    if(!err){
        console.log('链接成功')
    } else {
        console.log('链接失败')

    }
})


module.exports = connect;
```
## 模仿 koa-static 写一个中间件

```js
const {existsSync,statSync,readFileSync} = require('fs');
const path = require('path');
module.exports = (pathname)=>{
    return async (ctx,next)=>{
        let url = path.join(pathname,'index.html');
        if(existsSync(url)){
            if(statSync(url).isFile()){
                let str = readFileSync(url).toString();
                console.log(str)
                ctx.body = str;
                await next(); //执行下一个中间件
            }
        }
    }
}
```
## 相对应的package.json

```json
{
  "name": "koa_app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon ./app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.13.1",
    "koa-router": "^10.1.1",
    "koa-static": "^5.0.0",
    "mysql": "^2.18.1"
  }
}
