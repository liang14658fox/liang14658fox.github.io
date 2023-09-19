import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1_base_JavaScript/封装好的功能/146.判断变量是数组还是对象.md","filePath":"1_base_JavaScript/封装好的功能/146.判断变量是数组还是对象.md"}'),p={name:"1_base_JavaScript/封装好的功能/146.判断变量是数组还是对象.md"},o=l(`<h2 id="object-prototype-tostring-call" tabindex="-1">Object.prototype.toString.call() <a class="header-anchor" href="#object-prototype-tostring-call" aria-label="Permalink to &quot;Object.prototype.toString.call()&quot;">​</a></h2><p>利用 <code>Object.prototype.toString.call()</code>方法将该变量转化为代表其类型的string</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">toString</span><span style="color:#666666;">.</span><span style="color:#80A665;">call</span><span style="color:#666666;">(</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// [object Array]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">toString</span><span style="color:#666666;">.</span><span style="color:#80A665;">call</span><span style="color:#666666;">(</span><span style="color:#BD976A;">obj</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// [object Object]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">toString</span><span style="color:#999999;">.</span><span style="color:#59873A;">call</span><span style="color:#999999;">(</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// [object Array]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">toString</span><span style="color:#999999;">.</span><span style="color:#59873A;">call</span><span style="color:#999999;">(</span><span style="color:#B07D48;">obj</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// [object Object]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="array-isarray" tabindex="-1">Array.isArray() <a class="header-anchor" href="#array-isarray" aria-label="Permalink to &quot;Array.isArray()&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#BD976A;">Array</span><span style="color:#666666;">.</span><span style="color:#80A665;">isArray</span><span style="color:#666666;">(</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BD976A;">Array</span><span style="color:#666666;">.</span><span style="color:#80A665;">isArray</span><span style="color:#666666;">(</span><span style="color:#BD976A;">obj</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B07D48;">Array</span><span style="color:#999999;">.</span><span style="color:#59873A;">isArray</span><span style="color:#999999;">(</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;">Array</span><span style="color:#999999;">.</span><span style="color:#59873A;">isArray</span><span style="color:#999999;">(</span><span style="color:#B07D48;">obj</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),e=[o];function r(t,c,y,i,A,d){return a(),n("div",null,e)}const D=s(p,[["render",r]]);export{_ as __pageData,D as default};
