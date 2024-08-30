import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"原生基础/JavaScript/JS数组的操作方法大全/遍历数组元素.md","filePath":"原生基础/JavaScript/JS数组的操作方法大全/遍历数组元素.md","lastUpdated":1724385104000}'),p={name:"原生基础/JavaScript/JS数组的操作方法大全/遍历数组元素.md"},o=l(`<h2 id="使用-for-in-遍历数组元素" tabindex="-1">使用 for...in 遍历数组元素 <a class="header-anchor" href="#使用-for-in-遍历数组元素" aria-label="Permalink to &quot;使用 for...in 遍历数组元素&quot;">​</a></h2><p>for...in 其实是对象的遍历方式，并不是数组专有，使用 for...in 将循环遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性，其遍历顺序与 Object.keys()函数取到的列表一致。</p><p>该方法会遍历数组中非数字下标的元素，会忽略空元素：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">7</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">5</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">10</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">stringify</span><span style="color:#666666;">(</span><span style="color:#BD976A;">Object</span><span style="color:#666666;">.</span><span style="color:#80A665;">keys</span><span style="color:#666666;">(</span><span style="color:#BD976A;">list</span><span style="color:#666666;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#BD976A;">key</span><span style="color:#666666;">]);</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">7</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">5</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">10</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">stringify</span><span style="color:#999999;">(</span><span style="color:#B07D48;">Object</span><span style="color:#999999;">.</span><span style="color:#59873A;">keys</span><span style="color:#999999;">(</span><span style="color:#B07D48;">list</span><span style="color:#999999;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">for</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B07D48;">key</span><span style="color:#999999;">]);</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出:</p><blockquote><p>[&quot;0&quot;,&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;10&quot;,&quot;a&quot;] 0, 7 1, 5 2, 2 3, 3 10, 1 a, 1</p></blockquote><p>这个方法遍历数组是最坑的，它通常表现为有序，但是因为它是按照对象的枚举顺序来遍历的，也就是规范没有规定顺序的，所以具体实现是由着浏览器来的。MDN 文档里也明确建议“不要依赖其遍历顺序”：</p><h2 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-label="Permalink to &quot;for...of&quot;">​</a></h2><p>这个方法用于可迭代对象的迭代,用来遍历数组是有序的,并且迭代的是数组的值。该方法不会遍历非数字下标的元素，同时不会忽略数组的空元素：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">7</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">5</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">5</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">4</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">5</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">10</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#758575DD;">// 此时下标6、7、8、9为空元素</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">value</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">of</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">value</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">7</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">5</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">5</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">4</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">4</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">5</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">10</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">// 此时下标6、7、8、9为空元素</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">for</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">value</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">of</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">value</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>输出：</p><blockquote><p>7 5 2 3 5 4 //　遍历空元素 　//　遍历空元素 　//　遍历空元素 　//　遍历空元素 1</p></blockquote><h2 id="使用-for-循环" tabindex="-1">使用 for 循环 <a class="header-anchor" href="#使用-for-循环" aria-label="Permalink to &quot;使用 for 循环&quot;">​</a></h2><p>该方法和方法 2 比较像，是有序的，不会忽略空元素。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">b</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">c</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">d</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">e</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">10</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">z</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">idx</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">idx</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&lt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">.</span><span style="color:#B8A965;">length</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">idx</span><span style="color:#CB7676;">++</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">idx</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#BD976A;">idx</span><span style="color:#666666;">]);</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">b</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">c</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">d</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">4</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">e</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">10</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">z</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">for</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">idx</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">idx</span><span style="color:#393A34;"> </span><span style="color:#999999;">&lt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">.</span><span style="color:#998418;">length</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">idx</span><span style="color:#AB5959;">++</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">idx</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B07D48;">idx</span><span style="color:#999999;">]);</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p><blockquote><p>0, a 1, b 2, c 3, d 4, e 5, //空元素 6, 7, 8, 9, 10, z</p></blockquote><h2 id="foreach-遍历" tabindex="-1">forEach 遍历 <a class="header-anchor" href="#foreach-遍历" aria-label="Permalink to &quot;forEach 遍历&quot;">​</a></h2><p>forEach 是数组的一个高阶函数,用法如下:</p><p>arr.forEach(callback[, thisArg])</p><p>参数说明：</p><p>callback 为数组中每个元素执行的函数，该函数接收三个参数：</p><p>currentValue 数组中正在处理的当前元素。</p><p>index (可选) 数组中正在处理的当前元素的索引。</p><p>array (可选) forEach() 方法正在操作的数组。</p><p>thisArg (可选) 可选参数。当执行回调函数时用作 this 的值(参考对象)。</p><p>forEach 遍历数组会按照数组下标升序遍历，并且会忽略空元素：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">b</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">c</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">d</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">e</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#4C9A91;">10</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">z</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">a</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BD976A;">list</span><span style="color:#666666;">.</span><span style="color:#80A665;">forEach</span><span style="color:#666666;">((</span><span style="color:#BD976A;">value</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">list</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">value</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">});</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">b</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">c</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">d</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">4</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">e</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#2F798A;">10</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">z</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">a</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;">list</span><span style="color:#999999;">.</span><span style="color:#59873A;">forEach</span><span style="color:#999999;">((</span><span style="color:#B07D48;">value</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">list</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">value</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p><blockquote><p>0, a 1, b 2, c 3, d 4, e 10, z</p></blockquote><p>有一个很容易忽略的细节，我们都应该尽可能地避免在遍历中取增删数组的元素，否则会出现一些意外的情况，并且不同的遍历方法还会有不同的表现。</p><h2 id="倒叙遍历数组元素" tabindex="-1">倒叙遍历数组元素 <a class="header-anchor" href="#倒叙遍历数组元素" aria-label="Permalink to &quot;倒叙遍历数组元素&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">arr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">4</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">5</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">6</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">7</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">8</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">9</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#4D9375;">for</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">var</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">i</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">arr</span><span style="color:#666666;">.</span><span style="color:#B8A965;">length</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">-</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">i</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&gt;=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">i</span><span style="color:#CB7676;">--</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">[</span><span style="color:#BD976A;">i</span><span style="color:#666666;">]);</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">arr</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">4</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">5</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">6</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">7</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">8</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">9</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#1E754F;">for</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">var</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">i</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">arr</span><span style="color:#999999;">.</span><span style="color:#998418;">length</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">i</span><span style="color:#393A34;"> </span><span style="color:#999999;">&gt;=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">i</span><span style="color:#AB5959;">--</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">[</span><span style="color:#B07D48;">i</span><span style="color:#999999;">]);</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,33),e=[o];function t(c,r,y,A,D,i){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{E as __pageData,C as default};
