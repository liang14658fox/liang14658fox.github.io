import{_ as s,o as n,c as a,a as l}from"./app.d713a44f.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"判断一个对象中是否存在某个键名","slug":"判断一个对象中是否存在某个键名","link":"#判断一个对象中是否存在某个键名","children":[]},{"level":2,"title":"9. 冻结对象","slug":"_9-冻结对象","link":"#_9-冻结对象","children":[]},{"level":2,"title":"10. 彻底冻结对象","slug":"_10-彻底冻结对象","link":"#_10-彻底冻结对象","children":[]}],"relativePath":"documentcatalog/d_native/c_data_structure/12.对象操作.md"}'),p={name:"documentcatalog/d_native/c_data_structure/12.对象操作.md"},o=l(`<h2 id="判断一个对象中是否存在某个键名" tabindex="-1">判断一个对象中是否存在某个键名 <a class="header-anchor" href="#判断一个对象中是否存在某个键名" aria-hidden="true">#</a></h2><p>例如：查看对象obj中是否有name属性</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">101</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">school</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">青岛理工大学</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> obj) </span><span style="color:#676E95;font-style:italic;">//f alse</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> obj) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_9-冻结对象" tabindex="-1">9. 冻结对象 <a class="header-anchor" href="#_9-冻结对象" aria-hidden="true">#</a></h2><p>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 为 foo 添加一个属性，可以成功</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prop </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prop </span><span style="color:#676E95;font-style:italic;">// 123</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将 foo 指向另一个对象，就会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// TypeError: &quot;foo&quot; is read-only</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。</p><p>下面是另一个例子。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可执行</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 可执行</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dave</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。</p><p>如果真的想将对象冻结，应该使用Object.freeze方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 常规模式时，下面一行不起作用；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 严格模式时，该行会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prop </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。</p><h2 id="_10-彻底冻结对象" tabindex="-1">10. 彻底冻结对象 <a class="header-anchor" href="#_10-彻底冻结对象" aria-hidden="true">#</a></h2><p>除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> constantize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">constantize</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,16),e=[o];function t(c,r,y,D,i,F){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};
