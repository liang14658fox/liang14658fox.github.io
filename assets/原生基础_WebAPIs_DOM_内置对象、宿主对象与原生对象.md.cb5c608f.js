import{_ as l,o as i,c as e,Q as t}from"./chunks/framework.681fc4ae.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"原生基础/WebAPIs/DOM/内置对象、宿主对象与原生对象.md","filePath":"原生基础/WebAPIs/DOM/内置对象、宿主对象与原生对象.md","lastUpdated":1719474694000}'),o={name:"原生基础/WebAPIs/DOM/内置对象、宿主对象与原生对象.md"},a=t('<h2 id="_1-内置对象-build-in-objects" tabindex="-1">1. 内置对象(Build-in objects) <a class="header-anchor" href="#_1-内置对象-build-in-objects" aria-label="Permalink to &quot;1. 内置对象(Build-in objects)&quot;">​</a></h2><ul><li>定义：由ECMAScript实现提供的对象，独立于宿主环境，总是在引擎初始化阶段就创建好的对象。</li><li>关系：内置对象是本地对象的子集。</li><li>包含：Global和Math。</li></ul><h2 id="_2-本地对象-原生对象-内部对象-naitve-objects" tabindex="-1">2. 本地对象/原生对象/内部对象(Naitve objects) <a class="header-anchor" href="#_2-本地对象-原生对象-内部对象-naitve-objects" aria-label="Permalink to &quot;2. 本地对象/原生对象/内部对象(Naitve objects)&quot;">​</a></h2><ol><li>定义：除了内置对象，还包括了一些在运行过程中动态创建的对象</li><li>包含：</li></ol><ul><li>Object</li><li>Function</li><li>Array</li><li>String</li><li>Boolean</li><li>Number</li><li>Date</li><li>RegExp</li><li>Error</li><li>EvalError</li><li>RangeError</li><li>ReferenceError</li><li>SyntaxError</li><li>TypeError</li><li>URIError</li><li>ActiveXObject(服务器方面)</li><li>Enumerator(集合遍历类)</li><li>RegExp（正则表达式）</li></ul><blockquote><p>由此可以看出，简单来说，原生对象就是 ECMA-262 定义的类（引用类型）。</p></blockquote><h2 id="_3-宿主对象-host-objects" tabindex="-1">3. 宿主对象(Host objects) <a class="header-anchor" href="#_3-宿主对象-host-objects" aria-label="Permalink to &quot;3. 宿主对象(Host objects)&quot;">​</a></h2><p>宿主对象包含所有的DOM、BOM</p><ol><li>浏览器环境中的宿主对象：</li></ol><ul><li>window: 表示浏览器窗口，是全局对象。</li><li>document: 表示当前 HTML 文档，用于操作 DOM。</li><li>navigator: 提供有关浏览器的信息。</li><li>location: 提供有关当前 URL 的信息。</li><li>console: 用于在浏览器控制台输出信息。</li><li>XMLHttpRequest (XHR): 用于在客户端发起 HTTP 请求。</li></ul><ol start="2"><li>Node.js 环境中的宿主对象：</li></ol><ul><li>global: 表示全局对象。</li><li>process: 提供有关当前 Node.js 进程的信息。</li><li>require: 用于加载模块。</li><li>Buffer: 用于处理二进制数据。</li><li>fs: 用于文件系统操作。</li><li>http、https: 用于创建 HTTP 或 HTTPS 服务器。</li></ul>',12),r=[a];function s(c,_,n,d,u,b){return i(),e("div",null,r)}const j=l(o,[["render",s]]);export{p as __pageData,j as default};
