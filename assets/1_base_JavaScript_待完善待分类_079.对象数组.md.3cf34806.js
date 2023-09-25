import{_ as a,C as n,o as l,c as p,H as o,Q as e}from"./chunks/framework.681fc4ae.js";const d=JSON.parse('{"title":"对象数组基础操作","description":"","frontmatter":{"title":"对象数组基础操作"},"headers":[],"relativePath":"1_base_JavaScript/待完善待分类/079.对象数组.md","filePath":"1_base_JavaScript/待完善待分类/079.对象数组.md"}'),c={name:"1_base_JavaScript/待完善待分类/079.对象数组.md"},t=e(`<h2 id="删除对象数组中指定属性等于指定数组元素的对象" tabindex="-1">删除对象数组中指定属性等于指定数组元素的对象 <a class="header-anchor" href="#删除对象数组中指定属性等于指定数组元素的对象" aria-label="Permalink to &quot;删除对象数组中指定属性等于指定数组元素的对象&quot;">​</a></h2><blockquote><p>假设你有一个对象数组 <code>objects</code>，每个对象都有一个名为 <code>name</code> 的属性，以及一个数组 <code>names</code>，包含了需要删除的对象的 <code>name</code> 值。 你可以使用 <code>filter()</code> 函数来过滤出不包含需要删除的对象的新数组。</p></blockquote><p>示例函数：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">removeObjectsByName</span><span style="color:#666666;">(</span><span style="color:#BD976A;">objects</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">names</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">objects</span><span style="color:#666666;">.</span><span style="color:#80A665;">filter</span><span style="color:#666666;">(</span><span style="color:#BD976A;">obj</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">!</span><span style="color:#BD976A;">names</span><span style="color:#666666;">.</span><span style="color:#80A665;">includes</span><span style="color:#666666;">(</span><span style="color:#BD976A;">obj</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#666666;">));</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">removeObjectsByName</span><span style="color:#999999;">(</span><span style="color:#B07D48;">objects</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">names</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">objects</span><span style="color:#999999;">.</span><span style="color:#59873A;">filter</span><span style="color:#999999;">(</span><span style="color:#B07D48;">obj</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#B07D48;">names</span><span style="color:#999999;">.</span><span style="color:#59873A;">includes</span><span style="color:#999999;">(</span><span style="color:#B07D48;">obj</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#999999;">));</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个函数使用 <code>filter()</code> 函数遍历对象数组 <code>objects</code>，并返回一个新数组，其中不包含与 <code>names</code> 数组中的元素对应的对象。 示例用法：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">objects</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">John</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">25</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Alice</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">30</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Bob</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">35</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">John</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">40</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">names</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">John</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Alice</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">filteredObjects</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">removeObjectsByName</span><span style="color:#666666;">(</span><span style="color:#BD976A;">objects</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">names</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">filteredObjects</span><span style="color:#666666;">);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">objects</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">John</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">25</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Alice</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">30</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Bob</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">35</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">John</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">40</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">names</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">John</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Alice</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">filteredObjects</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">removeObjectsByName</span><span style="color:#999999;">(</span><span style="color:#B07D48;">objects</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">names</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">filteredObjects</span><span style="color:#999999;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>输出结果：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">Bob</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">35</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">name</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">John</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">40</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">Bob</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">35</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">name</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">John</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">40</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,8);function r(y,A,D,i,B,E){const s=n("Badge");return l(),p("div",null,[o(s,{type:"tip",text:"^finished"}),t])}const b=a(c,[["render",r]]);export{d as __pageData,b as default};
