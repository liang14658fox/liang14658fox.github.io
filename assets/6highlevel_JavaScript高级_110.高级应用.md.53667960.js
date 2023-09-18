import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const B=JSON.parse('{"title":"JS高级","description":"","frontmatter":{"title":"JS高级"},"headers":[],"relativePath":"6highlevel/JavaScript高级/110.高级应用.md","filePath":"6highlevel/JavaScript高级/110.高级应用.md"}'),p={name:"6highlevel/JavaScript高级/110.高级应用.md"},o=l(`<ul><li><code>exports</code></li><li><code>module.exports</code></li><li><code>import</code></li><li><code>mixin</code></li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li></ul><h2 id="原型的应用" tabindex="-1">原型的应用 <a class="header-anchor" href="#原型的应用" aria-label="Permalink to &quot;原型的应用&quot;">​</a></h2><blockquote><p>js中有两种调用函数的方法，比如 <code>array.函数名()</code>，是一种，还有 <code>函数名(array)</code> 是另外一种，我想自定一个函数，并且调用方式与第一种方式一样，怎么写？</p></blockquote><p>你可以通过将自定义函数转换为数组方法来实现调用方式类似于 <code>array.函数名()</code> 的效果。为此，你需要将这个函数添加到数组的原型上，这样就可以在任何数组实例上使用这个函数。</p><p>例子：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#B8A965;">Array</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#80A665;">自定义函数名</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#758575DD;">// 执行逻辑</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">自定义函数被调用了</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 使用调用方式一：array.自定义函数名()</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">array</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#BD976A;">array</span><span style="color:#666666;">.</span><span style="color:#80A665;">自定义函数名</span><span style="color:#666666;">();</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 输出 &quot;自定义函数被调用了&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 使用调用方式二：自定义函数名(array)</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">自定义函数名</span><span style="color:#666666;">(</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#758575DD;">// 执行逻辑</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">自定义函数被调用了</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#80A665;">自定义函数名</span><span style="color:#666666;">(</span><span style="color:#BD976A;">array</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 输出 &quot;自定义函数被调用了&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#998418;">Array</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#59873A;">自定义函数名</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#A0ADA0;">// 执行逻辑</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">自定义函数被调用了</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 使用调用方式一：array.自定义函数名()</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">array</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#B07D48;">array</span><span style="color:#999999;">.</span><span style="color:#59873A;">自定义函数名</span><span style="color:#999999;">();</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 输出 &quot;自定义函数被调用了&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 使用调用方式二：自定义函数名(array)</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">自定义函数名</span><span style="color:#999999;">(</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#A0ADA0;">// 执行逻辑</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">自定义函数被调用了</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#59873A;">自定义函数名</span><span style="color:#999999;">(</span><span style="color:#B07D48;">array</span><span style="color:#999999;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 输出 &quot;自定义函数被调用了&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在这个例子中，我们将自定义函数添加到原型上，并且可以在任何数组实例上使用 <code>array.自定义函数名()</code> 这种调用方式，与使用内置数组方法相同。同时，我们还可以使用传统的函数调用方式：<code>自定义函数名(array)</code>。</p><p>怎么应用到vue2项目中呢 在 Vue2 项目中，你也可以使用相同的方式将自定义函数添加到数组的原型上，从而在模板中使用调用方式类似于 <code>array.函数名()</code> 的效果。</p><p>例子：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#B8A965;">Array</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#80A665;">自定义函数名</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#758575DD;">// 执行逻辑</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">自定义函数被调用了</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 在 Vue2 项目中使用</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">ul</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">li</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">v-for</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">item in list</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#666666;">{{</span><span style="color:#DBD7CAEE;"> item.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;item.list.自定义函数名()&quot;&gt;调用自定义函数&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#BD976A;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">return </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#80A665;">list</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#B8A965;">id</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">第一项</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">list</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#B8A965;">id</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">第二项</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">list</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">5</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">6</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#B8A965;">id</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">第三项</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#B8A965;">list</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">7</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">8</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">9</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/script&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#998418;">Array</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#59873A;">自定义函数名</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#A0ADA0;">// 执行逻辑</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">自定义函数被调用了</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 在 Vue2 项目中使用</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">ul</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">li</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">v-for</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">item in list</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#999999;">{{</span><span style="color:#393A34;"> item.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">}}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;button</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;item.list.自定义函数名()&quot;&gt;调用自定义函数&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#B07D48;">export</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">return </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#59873A;">list</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#998418;">id</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">第一项</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">list</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#998418;">id</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">第二项</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">list</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">4</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">5</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">6</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#998418;">id</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">第三项</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#998418;">list</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">7</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">8</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">9</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>在这个例子中，我们在 Vue2 的组件中定义一个数组 <code>list</code>，并且在组件的模板中使用 <code>v-for</code> 指令遍历数组中的每一项。每个数组项都有一个按钮，当点击按钮时会调用该项的 <code>list.自定义函数名()</code> 方法。这个自定义函数通过之前添加到数组原型上的定义可以在所有数组实例中使用。</p><p>需要注意的是，修改原型可能会影响所有数组实例，因此请谨慎使用。如果你只想在特定的组件或页面使用自定义函数，请将其定义为组件或页面的方法，而不是添加到数组原型上。</p><p>如果你想在整个 Vue2 项目中使用自定义原型函数，可以将其添加到项目的 <code>main.js</code> 文件中。<code>main.js</code> 文件是项目入口文件，通常用于引入全局组件、插件和其他配置。</p><p>你可以将自定义原型函数的代码添加到 <code>main.js</code> 文件的任何位置，在 Vue 实例化之前添加就可以了，如下所示：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Vue</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vue</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">App</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">./App.vue</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 添加自定义原型函数</span></span>
<span class="line"><span style="color:#B8A965;">Array</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#80A665;">自定义函数名</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#758575DD;">// 执行逻辑</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">自定义函数被调用了</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Vue</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#80A665;">render</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">h</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">h</span><span style="color:#666666;">(</span><span style="color:#BD976A;">App</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}).</span><span style="color:#80A665;">$mount</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">#app</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Vue</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">./App.vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 添加自定义原型函数</span></span>
<span class="line"><span style="color:#998418;">Array</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#59873A;">自定义函数名</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#A0ADA0;">// 执行逻辑</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">自定义函数被调用了</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Vue</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#59873A;">render</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">h</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#59873A;">h</span><span style="color:#999999;">(</span><span style="color:#B07D48;">App</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}).</span><span style="color:#59873A;">$mount</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果你只想在某个组件或页面中使用自定义原型函数，可以将其添加到该组件或页面的 <code>&lt;script&gt;</code> 标签中，或将其定义为组件或页面的方法。</p>`,16),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{B as __pageData,b as default};
