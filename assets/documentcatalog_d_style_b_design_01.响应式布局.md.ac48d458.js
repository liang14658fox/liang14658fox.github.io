import{_ as t,o as l,c as d,a as i}from"./app.36602870.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 响应式布局","slug":"_1-响应式布局","link":"#_1-响应式布局","children":[]},{"level":2,"title":"2. 移动端页面单独开发","slug":"_2-移动端页面单独开发","link":"#_2-移动端页面单独开发","children":[]},{"level":2,"title":"表格对比","slug":"表格对比","link":"#表格对比","children":[]},{"level":2,"title":"1. 响应式页面开发方案","slug":"_1-响应式页面开发方案","link":"#_1-响应式页面开发方案","children":[]},{"level":2,"title":"2. 单独开发移动端页面方案","slug":"_2-单独开发移动端页面方案","link":"#_2-单独开发移动端页面方案","children":[]}],"relativePath":"documentcatalog/d_style/b_design/01.响应式布局.md"}'),e={name:"documentcatalog/d_style/b_design/01.响应式布局.md"},r=i('<h2 id="_1-响应式布局" tabindex="-1">1. 响应式布局 <a class="header-anchor" href="#_1-响应式布局" aria-hidden="true">#</a></h2><p>开发一套界面，根据页面宽度自适应网页内容。</p><div class="tip custom-block"><p class="custom-block-title">优点</p><ol><li>灵活性强，能够快捷解决多设备显示适用问题</li><li>适合有移动端适配需求的新项目</li><li>适合简单的页面，比如博客、静态展示页面</li></ol></div><div class="warning custom-block"><p class="custom-block-title">缺点</p><ol><li>第一次开发工作量大，每个页面的页面元素都要设计为响应式</li><li>单个页面代码体积大，加载时间可能会加长</li><li>在一定程度上改变了网站原有的布局结构</li></ol></div><h2 id="_2-移动端页面单独开发" tabindex="-1">2. 移动端页面单独开发 <a class="header-anchor" href="#_2-移动端页面单独开发" aria-hidden="true">#</a></h2><p>需要开发多套界面，通过检测视口分辨率，来判断当前访问的设备是 PC 端、平板还是手机，从而请求服务层，返回不同的页面。</p><div class="tip custom-block"><p class="custom-block-title">优点</p><ol><li>升级网站（二次开发）工作量小，适合仅有pc端的旧网站升级。</li><li>单个页面的代码体积小，加载时间快</li><li>对网站复杂程度兼容更大</li><li>测试和运营都相对容易和精准</li></ol></div><div class="warning custom-block"><p class="custom-block-title">缺点</p><ol><li>一次性开发两份页面，总工作量大，不适合新项目</li><li>全部页面的代码体积加起来大</li></ol></div><h2 id="表格对比" tabindex="-1">表格对比 <a class="header-anchor" href="#表格对比" aria-hidden="true">#</a></h2><table><thead><tr><th><strong>/</strong></th><th>响应式</th><th>单独开发移动端</th></tr></thead><tbody><tr><td><strong>单个页面体积</strong></td><td>大（1.5）</td><td>小（1）</td></tr><tr><td><strong>总代码体积</strong></td><td>小（1.5）</td><td>大（2）（pc页面和移动页面两份代码）</td></tr><tr><td><strong>页面加载时间</strong></td><td>慢（1.5）</td><td>快（1）（仅需加载pc页面或者移动页面）</td></tr><tr><td><strong>单个页面工作量</strong></td><td>大（1.5）</td><td>小（1）（升级仅有pc端的老项目仅需再单独写一份移动端）</td></tr><tr><td><strong>总工作量</strong></td><td>小（1.5）</td><td>大（2）</td></tr><tr><td><strong>升级原有项目工作量</strong></td><td>大（1.5+1.5）（需重新设计，弃用老项目）</td><td>小（1）（升级仅有pc端的老项目仅需再单独写一份移动端）</td></tr><tr><td><strong>适合项目类型</strong></td><td>简单（博客、静态）</td><td>复杂（复杂业务还是不推荐移动端）</td></tr><tr><td><strong>适合什么需求</strong></td><td>新项目</td><td>仅有PC端端老项目升级</td></tr></tbody></table><h2 id="_1-响应式页面开发方案" tabindex="-1">1. 响应式页面开发方案 <a class="header-anchor" href="#_1-响应式页面开发方案" aria-hidden="true">#</a></h2><ul><li>媒体查询加载不同css文件</li><li>flex布局</li><li>rem适配方案</li><li></li></ul><h2 id="_2-单独开发移动端页面方案" tabindex="-1">2. 单独开发移动端页面方案 <a class="header-anchor" href="#_2-单独开发移动端页面方案" aria-hidden="true">#</a></h2><ul><li>媒体查询加载不同页面</li><li></li></ul>',14),s=[r];function a(o,n,c,_,h,g){return l(),d("div",null,s)}const b=t(e,[["render",a]]);export{u as __pageData,b as default};
