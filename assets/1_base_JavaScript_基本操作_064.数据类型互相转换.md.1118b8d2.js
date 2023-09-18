import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const B=JSON.parse('{"title":"类型转换","description":"","frontmatter":{"title":"类型转换"},"headers":[],"relativePath":"1_base_JavaScript/基本操作/064.数据类型互相转换.md","filePath":"1_base_JavaScript/基本操作/064.数据类型互相转换.md"}'),p={name:"1_base_JavaScript/基本操作/064.数据类型互相转换.md"},o=l(`<h2 id="_1-字符串-数字" tabindex="-1">1. <code>字符串</code> =&gt; <code>数字</code> <a class="header-anchor" href="#_1-字符串-数字" aria-label="Permalink to &quot;1. \`字符串\` =&gt; \`数字\`&quot;">​</a></h2><ol><li><p>使用 <code>parseInt(&#39;12&#39;)</code> 方法转换整型</p></li><li><p>使用 <code>parseFloat(&#39;3.12&#39;)</code> 转换浮点类型</p></li><li><p>使用 <code>Number()</code> 强制转换</p></li></ol><p>JS隐式转换</p><h2 id="_2-数字-字符串" tabindex="-1">2. <code>数字</code> =&gt; <code>字符串</code> <a class="header-anchor" href="#_2-数字-字符串" aria-label="Permalink to &quot;2. \`数字\` =&gt; \`字符串\`&quot;">​</a></h2><ol><li><p>使用 <code>num.toString()</code> 方法</p></li><li><p>使用 <code>String(num)</code> 方法</p></li><li><p>利用 <code>num + &#39;&#39;</code> 的技巧</p></li></ol><h2 id="_3-其他-布尔型" tabindex="-1">3. 其他 =&gt; <code>布尔型</code> <a class="header-anchor" href="#_3-其他-布尔型" aria-label="Permalink to &quot;3. 其他 =&gt; \`布尔型\`&quot;">​</a></h2><ol><li>使用Boolean()方法</li><li>在if(){}中使用</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#CB7676;">-</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">hello</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#666666;">{},</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">hello</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// true</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#C98A7D99;">&#39;&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#4D9375;">NaN</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#CB7676;">null</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#CB7676;">undefined</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">	</span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#AB5959;">-</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">hello</span><span style="color:#B5695999;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#999999;">{},</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">hello</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#2F798A;">0</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#B5695999;">&#39;&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1E754F;">NaN</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#AB5959;">null</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#AB5959;">undefined</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#393A34;">	</span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_4-对象-json" tabindex="-1">4. <code>对象</code> =&gt; <code>JSON</code> <a class="header-anchor" href="#_4-对象-json" aria-label="Permalink to &quot;4. \`对象\` =&gt; \`JSON\`&quot;">​</a></h2><ol><li><code>JSON.stringify()</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">json</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">name</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">iphone</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">price</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#4C9A91;">666</span><span style="color:#666666;">};</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//创建对象；</span></span>
<span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">jsonStr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">stringify</span><span style="color:#666666;">(</span><span style="color:#BD976A;">json</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">       </span><span style="color:#758575DD;">//转为JSON字符串</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">jsonStr</span><span style="color:#666666;">);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">json</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">name</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">iphone</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">price</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#2F798A;">666</span><span style="color:#999999;">};</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//创建对象；</span></span>
<span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">jsonStr</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">stringify</span><span style="color:#999999;">(</span><span style="color:#B07D48;">json</span><span style="color:#999999;">);</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">//转为JSON字符串</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">jsonStr</span><span style="color:#999999;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-json-对象" tabindex="-1">5. <code>JSON</code> =&gt; <code>对象</code> <a class="header-anchor" href="#_5-json-对象" aria-label="Permalink to &quot;5. \`JSON\` =&gt; \`对象\`&quot;">​</a></h2><ol><li><code>JSON.parse()</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">jsonObj1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">parse</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">//使用JSON.parse() 将JSON字符串转为JS对象;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">jsonObj1</span><span style="color:#666666;">);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">jsonObj1</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">parse</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">);</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">//使用JSON.parse() 将JSON字符串转为JS对象;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">jsonObj1</span><span style="color:#999999;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li><code>eval()</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">jsonObj2</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">eval</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">)</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//使用eval() 将JSON字符串转为JS对象；</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">jsonObj2</span><span style="color:#666666;">);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">jsonObj2</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">eval</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">)</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//使用eval() 将JSON字符串转为JS对象；</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">jsonObj2</span><span style="color:#999999;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-截取string前x位字符" tabindex="-1">6. 截取String前x位字符 <a class="header-anchor" href="#_6-截取string前x位字符" aria-label="Permalink to &quot;6. 截取String前x位字符&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">123456789</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">str</span><span style="color:#666666;">.</span><span style="color:#80A665;">slice</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">,</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">))</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//1234</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">str</span><span style="color:#666666;">.</span><span style="color:#80A665;">slice</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">5</span><span style="color:#666666;">,</span><span style="color:#4C9A91;">6</span><span style="color:#666666;">))</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//56</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">str</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">123456789</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">str</span><span style="color:#999999;">.</span><span style="color:#59873A;">slice</span><span style="color:#999999;">(</span><span style="color:#2F798A;">0</span><span style="color:#999999;">,</span><span style="color:#2F798A;">4</span><span style="color:#999999;">))</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//1234</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">str</span><span style="color:#999999;">.</span><span style="color:#59873A;">slice</span><span style="color:#999999;">(</span><span style="color:#2F798A;">5</span><span style="color:#999999;">,</span><span style="color:#2F798A;">6</span><span style="color:#999999;">))</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//56</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,18),e=[o];function c(r,t,y,A,i,D){return a(),n("div",null,e)}const C=s(p,[["render",c]]);export{B as __pageData,C as default};
