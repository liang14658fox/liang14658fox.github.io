import{_ as e,o as s,c as a,a as l}from"./app.e2b2b6aa.js";const y=JSON.parse('{"title":"类型转换","description":"","frontmatter":{"title":"类型转换"},"headers":[{"level":2,"title":"01. 字符串 => 数字","slug":"_01-字符串-数字","link":"#_01-字符串-数字","children":[]},{"level":2,"title":"02. 数字 => 字符串","slug":"_02-数字-字符串","link":"#_02-数字-字符串","children":[]},{"level":2,"title":"03. => 布尔型","slug":"_03-布尔型","link":"#_03-布尔型","children":[]},{"level":2,"title":"04. 对象 => JSON","slug":"_04-对象-json","link":"#_04-对象-json","children":[]},{"level":2,"title":"05. JSON => 对象","slug":"_05-json-对象","link":"#_05-json-对象","children":[]},{"level":2,"title":"06. 截取String前x位字符","slug":"_06-截取string前x位字符","link":"#_06-截取string前x位字符","children":[]}],"relativePath":"documentcatalog/d_native/c_data_structure/06.类型互相转换.md"}'),n={name:"documentcatalog/d_native/c_data_structure/06.类型互相转换.md"},o=l(`<h2 id="_01-字符串-数字" tabindex="-1">01. <code>字符串</code> =&gt; <code>数字</code> <a class="header-anchor" href="#_01-字符串-数字" aria-hidden="true">#</a></h2><ol><li><p>使用 <code>parseInt(&#39;12&#39;)</code> 方法转换整型</p></li><li><p>使用 <code>parseFloat(&#39;3.12&#39;)</code> 转换浮点类型</p></li><li><p>使用 <code>Number()</code> 强制转换</p></li></ol><p>JS隐式转换</p><h2 id="_02-数字-字符串" tabindex="-1">02. <code>数字</code> =&gt; <code>字符串</code> <a class="header-anchor" href="#_02-数字-字符串" aria-hidden="true">#</a></h2><ol><li><p>使用 <code>num.toString()</code> 方法</p></li><li><p>使用 <code>String(num)</code> 方法</p></li><li><p>利用 <code>num + &#39;&#39;</code> 的技巧</p></li></ol><h2 id="_03-布尔型" tabindex="-1">03. =&gt; <code>布尔型</code> <a class="header-anchor" href="#_03-布尔型" aria-hidden="true">#</a></h2><p><code>false</code> 、 <code>&#39;&#39;</code> 、 <code>0</code> 、 <code>NaN</code> 、 <code>null</code> 、 <code>undefined</code> 以及其他转换为布尔型</p><ol><li>使用Boolean()方法</li></ol><h2 id="_04-对象-json" tabindex="-1">04. <code>对象</code> =&gt; <code>JSON</code> <a class="header-anchor" href="#_04-对象-json" aria-hidden="true">#</a></h2><ol><li></li><li></li></ol><h2 id="_05-json-对象" tabindex="-1">05. <code>JSON</code> =&gt; <code>对象</code> <a class="header-anchor" href="#_05-json-对象" aria-hidden="true">#</a></h2><ol><li></li><li></li></ol><h2 id="_06-截取string前x位字符" tabindex="-1">06. 截取String前x位字符 <a class="header-anchor" href="#_06-截取string前x位字符" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456789</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">//1234</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">//56</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),c=[o];function t(r,i,p,d,_,h){return s(),a("div",null,c)}const C=e(n,[["render",t]]);export{y as __pageData,C as default};
