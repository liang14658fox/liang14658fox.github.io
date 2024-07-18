import{_ as a,o as i,c as l,Q as e}from"./chunks/framework.681fc4ae.js";const M=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"原生基础/WebAPIs/DOM/关系.md","filePath":"原生基础/WebAPIs/DOM/关系.md","lastUpdated":1719474694000}'),t={name:"原生基础/WebAPIs/DOM/关系.md"},r=e('<h2 id="js组成部分" tabindex="-1">JS组成部分 <a class="header-anchor" href="#js组成部分" aria-label="Permalink to &quot;JS组成部分&quot;">​</a></h2><ul><li>组成：</li></ul><ol><li>ECMAScript</li><li>BOM</li><li>DOM</li></ol><h2 id="web-apis" tabindex="-1">Web APIs <a class="header-anchor" href="#web-apis" aria-label="Permalink to &quot;Web APIs&quot;">​</a></h2><ul><li>定义：Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。</li><li>组成：Web APIs包含但不局限于DOM和BOM</li></ul><h2 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h2><ul><li><p>定义：BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。</p></li><li><p>组成：BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。</p></li><li><p>window是BOM的顶级对象，window包含以下对象：</p></li></ul><ol><li>frames</li><li>history</li><li>location</li><li>navigator</li><li>screen</li><li>document</li></ol><h2 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h2><ul><li>定义：文档对象模型（Document Object Model，简称 DOM），是 W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。</li><li>document是BOM的顶级对象，document包含</li></ul><ol><li>anchors</li><li>forms</li><li>images</li><li>links</li><li>location</li></ol><h2 id="javascript对象" tabindex="-1">JavaScript对象 <a class="header-anchor" href="#javascript对象" aria-label="Permalink to &quot;JavaScript对象&quot;">​</a></h2><h3 id="javascript对象包含" tabindex="-1">JavaScript对象包含 <a class="header-anchor" href="#javascript对象包含" aria-label="Permalink to &quot;JavaScript对象包含&quot;">​</a></h3><ol><li>浏览器对象</li><li>JavaScript内置对象</li><li>自定义对象</li></ol><p>前面两种对象是JS 基础 内容，属于 ECMAScript； 第三个浏览器对象属于我们JS 独有的， 我们JS API 讲解</p><h2 id="javascript内置对象" tabindex="-1">JavaScript内置对象 <a class="header-anchor" href="#javascript内置对象" aria-label="Permalink to &quot;JavaScript内置对象&quot;">​</a></h2><ul><li>定义：内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）</li></ul><h3 id="内置对象包含" tabindex="-1">内置对象包含 <a class="header-anchor" href="#内置对象包含" aria-label="Permalink to &quot;内置对象包含&quot;">​</a></h3><ul><li>Array</li><li>String</li><li>Math</li><li>Date</li></ul><h2 id="xhr" tabindex="-1">XHR <a class="header-anchor" href="#xhr" aria-label="Permalink to &quot;XHR&quot;">​</a></h2><p>XMLHttpRequest对象属于Web APIs，目前作者暂未查到XHR到底属于DOM、BOM还是其他Web APIs</p><h2 id="ajax" tabindex="-1">AJAX <a class="header-anchor" href="#ajax" aria-label="Permalink to &quot;AJAX&quot;">​</a></h2><ul><li>定义：Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。</li><li>性质：AJAX 不是新的编程语言，而是一种使用现有标准的新方法。AJAX是一种技术方案，但并不是一种新技术。</li><li>依赖：它依赖的是现有的CSS/HTML/Javascript，而其中最核心的依赖是浏览器提供的XMLHttpRequest对象，是这个对象使得浏览器可以发出HTTP请求与接收HTTP响应。所以我用一句话来总结XHR和AJAX两者的关系：我们使用XMLHttpRequest对象来发送一个AJAX请求。</li></ul><h2 id="标准" tabindex="-1">标准 <a class="header-anchor" href="#标准" aria-label="Permalink to &quot;标准&quot;">​</a></h2><p>JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C</p>',25),o=[r];function s(c,n,h,d,u,p){return i(),l("div",null,o)}const m=a(t,[["render",s]]);export{M as __pageData,m as default};
