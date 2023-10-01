<!--
 * @Author: Dark Angel
 * @Date: 2023-09-30 21:45:07
 * @LastEditTime: 2023-10-01 05:06:09
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\readme.md
-->
# 针对本文档

本地开发完之后需要本地打包,打包完毕之后上传 dist 连同源文件

剩下的就得自己看流程了,比如

- 是不是非得两个 pipeline 以及
-  pipeline 的 yml 怎么配置
-  现在的pipeline 没有相应的云主机组去部署,所以现在只能进行到部署之前,要实现页面更新只能手动点击 gitpages 的部署
### 有个问题: 为什么 http 不分一直更新不到线上去?

最后推送了一次,流水线部署之后又手动进行了一下部署才展示出来......(什么问题到底)
提交完之后需要点击一下 gitee pages 的部署才能更新到页面


更新流程 : 写 md ,打包,提交到git 点击 giteepages 的部署