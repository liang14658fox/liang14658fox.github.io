import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1_base_JavaScript/DOM与BOM/159.浏览器状态.md","filePath":"1_base_JavaScript/DOM与BOM/159.浏览器状态.md"}'),p={name:"1_base_JavaScript/DOM与BOM/159.浏览器状态.md"},o=l(`<h2 id="判断当前标签页是否为可视状态" tabindex="-1">判断当前标签页是否为可视状态 <a class="header-anchor" href="#判断当前标签页是否为可视状态" aria-label="Permalink to &quot;判断当前标签页是否为可视状态&quot;">​</a></h2><p>浏览器可以打开很多标签页，下面 👇🏻 的代码段就是判断当前标签页是否是激活的标签页</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">isBrowserTabInView</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">document</span><span style="color:#666666;">.</span><span style="color:#BD976A;">hidden</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#80A665;">isBrowserTabInView</span><span style="color:#666666;">();</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">isBrowserTabInView</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">document</span><span style="color:#999999;">.</span><span style="color:#B07D48;">hidden</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#59873A;">isBrowserTabInView</span><span style="color:#999999;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="检查指定元素是否处于聚焦状态" tabindex="-1">检查指定元素是否处于聚焦状态 <a class="header-anchor" href="#检查指定元素是否处于聚焦状态" aria-label="Permalink to &quot;检查指定元素是否处于聚焦状态&quot;">​</a></h2><p>可以使用 document.activeElement 来判断元素是否处于聚焦状态</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">elementIsInFocus</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">el</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">el</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">document</span><span style="color:#666666;">.</span><span style="color:#BD976A;">activeElement</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#80A665;">elementIsInFocus</span><span style="color:#666666;">(</span><span style="color:#BD976A;">anyElement</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#758575DD;">// Result: 如果处于焦点状态会返回 True 否则返回 False</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">elementIsInFocus</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">el</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">el</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">document</span><span style="color:#999999;">.</span><span style="color:#B07D48;">activeElement</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#59873A;">elementIsInFocus</span><span style="color:#999999;">(</span><span style="color:#B07D48;">anyElement</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// Result: 如果处于焦点状态会返回 True 否则返回 False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="检查当前用户是否支持触摸事件" tabindex="-1">检查当前用户是否支持触摸事件 <a class="header-anchor" href="#检查当前用户是否支持触摸事件" aria-label="Permalink to &quot;检查当前用户是否支持触摸事件&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">touchSupported</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">ontouchstart</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">window</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">||</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">window</span><span style="color:#666666;">.</span><span style="color:#BD976A;">DocumentTouch</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">document</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">instanceof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">window</span><span style="color:#666666;">.</span><span style="color:#5DA994;">DocumentTouch</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#80A665;">touchSupported</span><span style="color:#666666;">());</span></span>
<span class="line"><span style="color:#758575DD;">// Result: 如果支持触摸事件会返回 True 否则返回 False</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">touchSupported</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">ontouchstart</span><span style="color:#B5695999;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">window</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">||</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">window</span><span style="color:#999999;">.</span><span style="color:#B07D48;">DocumentTouch</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">document</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">instanceof</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">window</span><span style="color:#999999;">.</span><span style="color:#2E8F82;">DocumentTouch</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#59873A;">touchSupported</span><span style="color:#999999;">());</span></span>
<span class="line"><span style="color:#A0ADA0;">// Result: 如果支持触摸事件会返回 True 否则返回 False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="检查当前用户是否是苹果设备" tabindex="-1">检查当前用户是否是苹果设备 <a class="header-anchor" href="#检查当前用户是否是苹果设备" aria-label="Permalink to &quot;检查当前用户是否是苹果设备&quot;">​</a></h2><p>可以使用 navigator.platform 判断当前用户是否是苹果设备</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">isAppleDevice</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#C4704F;"> </span><span style="color:#C98A7D99;">/</span><span style="color:#C4704F;">Mac</span><span style="color:#CB7676;">|</span><span style="color:#C4704F;">iPod</span><span style="color:#CB7676;">|</span><span style="color:#C4704F;">iPhone</span><span style="color:#CB7676;">|</span><span style="color:#C4704F;">iPad</span><span style="color:#C98A7D99;">/</span><span style="color:#666666;">.</span><span style="color:#80A665;">test</span><span style="color:#666666;">(</span><span style="color:#BD976A;">navigator</span><span style="color:#666666;">.</span><span style="color:#BD976A;">platform</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">isAppleDevice</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#758575DD;">// Result: 是苹果设备会返回 True</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">isAppleDevice</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#AB5E3F;">Mac</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">iPod</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">iPhone</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">iPad</span><span style="color:#B5695999;">/</span><span style="color:#999999;">.</span><span style="color:#59873A;">test</span><span style="color:#999999;">(</span><span style="color:#B07D48;">navigator</span><span style="color:#999999;">.</span><span style="color:#B07D48;">platform</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">isAppleDevice</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#A0ADA0;">// Result: 是苹果设备会返回 True</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="滚动至页面顶部" tabindex="-1">滚动至页面顶部 <a class="header-anchor" href="#滚动至页面顶部" aria-label="Permalink to &quot;滚动至页面顶部&quot;">​</a></h2><p>window.scrollTo() 会滚动至指定的坐标，如果设置坐标为（0，0），就会回到页面顶部</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">goToTop</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">window</span><span style="color:#666666;">.</span><span style="color:#80A665;">scrollTo</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#80A665;">goToTop</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#758575DD;">// Result: 将会滚动至顶部</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">goToTop</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">window</span><span style="color:#999999;">.</span><span style="color:#59873A;">scrollTo</span><span style="color:#999999;">(</span><span style="color:#2F798A;">0</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#59873A;">goToTop</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#A0ADA0;">// Result: 将会滚动至顶部</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),e=[o];function c(t,r,y,i,A,d){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{B as __pageData,u as default};
