<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-09-30 16:50:11
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\node\base.md
-->
# node and npm
```shell
# 本地安装

npm install axios -S # 下载包到生产依赖中 (-s <==> --save  s 不区分大小写)

npm install axios -D # 下载包到开发依赖中 (-D <==> --save -dev  -d 不区分大小写 --save -dev 中间有没有空格都可以)

# 全局安装

npm install axios -g  

# 不更新lock 安装
npm ci 

# 本地卸载

npm uninstall axios -S # 下载包到生产依赖中

npm uninstall axios -D # 下载包到开发依赖中

# 安装路径

npm root # 查看 本地 npm 包安装路径

npm root -g # 查看 全局 npm 包安装路径

# 其他操作

npm update # 升级npm 包版本

npm publish # 将包发布到 npmjs 官网

npm config list # 查看配置

npm config set registry "镜像地址" # 设置镜像

npm config get registry # 查看镜像

npm config set cache "缓存路径" # 设置全局缓存路径

npm config get cache # 查看缓存路径

npm config set prefix "全局安装路径" # 设置缓存路径

npm config get prefix # 查看缓存路径

npm init -y # 意见初始化 package.json

npm init # 自定义初始化 package.json

npm cache verify #

npm cache clean --force #

# 查看 命令介绍

npm help view # 查看 npm view 的介绍

# 升级 npm 

npm install npm@latest -g

##################### nvm 的命令 #########################
nvm on  # 开启node.js版本管理。

nvm off  # 关闭node.js版本管理。

nvm list available  # 显示所有可以下载的版本

nvm install 14.17.0 # 安装指定版本的nodejs

nvm uninstall node版本号  # 卸载到对应版本的node

nvm ls # 查看已安装的node

nvm ls-remote         # 查看远程所有的 Node.js 版本

nvm use 14.17.0 # 切换指定版本的node

nvm alias dev 17.0.0  # 设置指定版本的别名，如将 17.0.0 版本别名设置为 dev

nvm alias default 17.0.0  # 设置默认 Node.js 版本

nvm --help # 显示命令行帮助信息
```
### 配置环境变量

#### 光配置 node

#### 安装nvm 之后配置环境变量
nvm 官网链接 : https://github.com/coreybutler/nvm-windows/releases
2. 点击下一步安装到 D:\NVM 下

3. 先在D:\NVM 下创建nodejs文件夹，然后将路径设置如下：D:\NVM\nodejs
4、点击next 一直点击 完成安装；

5、找到指定nvm打开 settings.txt ,添加以下两行文本：
```shell
node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/
```
环境变量配置：
1. 点击计算机
2. 右击点击属性
3. 选择高级系统设置
4. 点击环境变量
5. 查看环境变量是否配置（默认nvm安装成功后，自动生成）： 

与如下配置（保持一致）:
用户变量:

变量|值
|:---|:---|
NVM_HOME|D:\NVM
NVM_SYMLINK|D:\NVM\nodejs
系统变量:
变量|值
|:---|:---|
NVM_HOME|D:\NVM
NVM_SYMLINK|D:\NVM\nodejs
验证nvm安装：
打开cmd，输入nvm -v

不返回版本就是是因为权限不够 可以使用 管理员身份的nvm 或者 windows powershell 执行


nvm  下配置 node环境变量
1.首先在NVM的安装目录新建两个文件夹node_global和node_cache
2. 创建完两个文件夹后，在cmd窗口中输入以下命令
```shell
npm config set prefix "D:\NVM\node_global" # 顺带把 该路径配置到 path 环境变量里
npm config set cache "D:\NVM\node_cache"

```
Path (用户,系统) \AppData\Roaming\npm => D:\nodejs\node_global(非C p盘下node_global 的路径)
node_path ( 系统 ) node_global 文件夹的路径