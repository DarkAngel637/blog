<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-10-01 16:37:03
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\css\page.md
-->
# css
## 盒模型  **margin:0 auto; !important,行内元素宽高,元素尺寸**

IE6及其更高的版本，还有现在所有标准的浏览器都遵循的是W3C盒模型，IE6以下版本的浏览器遵循的是IE盒模型。
如果在**ie6,7,8中DOCTYPE缺失**会触发IE(怪异)模式
1. IE下标准模式为：**content+padding+border+margin**。怪异模式下为：**content+margin**(padding,border包含在content宽高中)
2. 怪异模式中IE5 以前都不识别 **！important声明**
3. 设置**行内元素宽高**，标准模式下不生效，怪异模式下生效
4. **margin:0 auto,在标准模式下会水平居中**，怪异模式下不会。

`box-sizing:border-box;` 设置盒模型为怪异模式
 (border-box:width+margin),content-box:(width,padding.border)
对于IE盒模型，设置padding或者border以后，会撑开盒子的宽度或者高度。对于怪异盒模型，设置padding或者border以后，不会撑开盒子的宽度或者高度，而是把内容区域往中间挤压。
## 怎样的元素属于 BFC(重点)？
- 使用 <span class="highlight"><u>float</u></span> 使其浮动的元素
- <span class="highlight"><u>绝对定位</u></span>的元素 (包含 position: fixed 或 position: sticky
- 使用以下属性的元素 display: inline-block
- <span class="highlight"><u>表格单元格</u></span>或使用 <span class="highlight"><u>display: table-cell,</u></span> 包括使用 <span class="highlight"><u>display: table-* </u></span> 属性的所有表格单元格
- 表格标题或使用 `display: table-caption` 的元素
- 块级元素的 overflow 属性不为 visible
- 元素属性为 display: flow-root 或 display: flow-root list-item
- 元素属性为 contain: layout, content, 或 strict
- flex items
- 网格布局元素
- multicol containers
- 元素属性 <span class="highlight"><u>column-span</u> 设置为 all</span>
更多见mdn文档.
## BFC 特性？
- 特性1：上下外边距重叠
**同一个 BFC 下**的两个**相邻块级元素**，会发生**上下方向的 margin 重叠**。
- 特性2：浮动元素也会参与计算高度


<style>
    .highlight{
        background:red;
        color:yellow
    }
</style>