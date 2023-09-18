import{_ as n,C as a,o as l,c as p,H as o,Q as e}from"./chunks/framework.681fc4ae.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"6highlevel/JavaScript高级/114.你真的了解原型链吗？.md","filePath":"6highlevel/JavaScript高级/114.你真的了解原型链吗？.md"}'),c={name:"6highlevel/JavaScript高级/114.你真的了解原型链吗？.md"},t=e(`<h2 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-label="Permalink to &quot;原型&quot;">​</a></h2><p>作用：通过构造函数的 <code>pritotype</code> ，可以存放一些公共的方法和属性，可以节省一定的内存空间。</p><p>写一个构造函数，名字要传递进来。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">sex</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">男</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">18</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">sex</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">男</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">18</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>通过这个构造函数实例化两个对象，<code>xm</code> 和 <code>xh</code> ，他们的年龄和性别一样，名字不一样。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">xm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xiaoming</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">xh</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xiaohong</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">xm</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xiaoming</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">xh</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xiaohong</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Fn()</code> 是构造函数，我们 <code>new</code> 了构造函数之后，就会给我们创建实例对象，这里创建了两个实例对象，系统开辟了两块空间分别存储这两个对象的信息。 但是我们发现，它们中一些属性值是完全一样的，可以把他们相同的属性和方法拿出来，每个实例对象对他们进行共用就可以了。</p><blockquote><p>有什么办法可以实现共用？这就用到 <code>prototype</code> 属性了</p></blockquote><p><code>prototype</code> 是函数的属性，这个属性的值是一个对象。 所以 <code>Fn()</code> 这个函数就有 <code>prototype</code> 这个属性，而且我们可以在这个属性（值是对象）里面添加一些属性和方法。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#B8A965;">Fn</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">sex</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">男</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#B8A965;">Fn</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">age</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">18</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#998418;">Fn</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">sex</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">男</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#998418;">Fn</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">age</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">18</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>怎样使用实例出来的对象？这就要用到 <code>_proto_</code> 属性了。 <code>_proto_</code> 是对象的属性，而 <code>prototype</code> 是函数的属性。实例化出来的对象的 <code>_proto_</code> 属性指向的就是构造函数的 <code>prototype</code> 属性（完全相等）。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">xm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xiaoming</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">xh</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xiaohong</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">xm</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xiaoming</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">xh</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xiaohong</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><ul><li>作用：通过原型链，可以做一些方法和属性的继承</li></ul><blockquote><p>我们强调过对象都会有一个 <code>_proto_</code> 属性，并且，构造函数的 <code>prototype</code> 也是一个对象。 那么构造函数的 <code>prototype</code> 也有一个 <code>_proto_</code> 属性，这个 <code>_proto_</code> 指向谁取决于我们有没有让它专门让它指向另外一个构造函数的 <code>prototype</code> 。如果没有指定的话，它会一直往外面找，一直找到 <code>Object</code> ，指向 <code>Object.prototype</code>。</p></blockquote><ol><li>比如我要在实例对象 <code>person</code> 里面找一个属性 <code>name</code> ，首先它会看自己有没有这个属性</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">踢足球</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#B8A965;">Fn</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">唱歌</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">person</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#BD976A;">person</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">游泳</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">person</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 游泳，是它本身的属性</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">踢足球</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#998418;">Fn</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">唱歌</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">person</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">person</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">游泳</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">person</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 游泳，是它本身的属性</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>没有的话就会顺着原型链找，先是通过它自身的 <code>_proto_</code> 属性，然后找到构造函数的 <code>prototype</code> 里面设置的公共属性和方法 mo&#39;gu</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">踢足球</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#B8A965;">Fn</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">唱歌</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">person</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">()</span></span>
<span class="line highlighted"><span style="color:#758575DD;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">person</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 唱歌，来自构造函数的属性</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">踢足球</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#998418;">Fn</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">唱歌</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">person</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">()</span></span>
<span class="line highlighted"><span style="color:#A0ADA0;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">person</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 唱歌，来自构造函数的属性</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>如果这里还没有的话，那就继续通过 <code>prototype</code> 的 <code>_proto_</code> 属性，一直找到 <code>object</code> 的<code>prototype</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#B8A965;">Object</span><span style="color:#666666;">.</span><span style="color:#B8A965;">prototype</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">踢足球</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#758575DD;">// Fn.prototype.skill = &#39;唱歌&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">person</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#758575DD;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">person</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 踢足球，来自Object.prototype</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#998418;">Object</span><span style="color:#999999;">.</span><span style="color:#998418;">prototype</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">踢足球</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">// Fn.prototype.skill = &#39;唱歌&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">person</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#A0ADA0;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">person</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 踢足球，来自Object.prototype</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4"><li>如果这里还没有，那就是 <code>undefined</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// Object.prototype.skill = &#39;踢足球&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">(</span><span style="color:#BD976A;">name</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">name</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#758575DD;">// Fn.prototype.skill = &#39;唱歌&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">person</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Fn</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#758575DD;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">person</span><span style="color:#666666;">.</span><span style="color:#BD976A;">skill</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// undefined，Object也没有了，那就真没有了</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// Object.prototype.skill = &#39;踢足球&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">(</span><span style="color:#B07D48;">name</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">// Fn.prototype.skill = &#39;唱歌&#39; // 也注释掉</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">person</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Fn</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#A0ADA0;">// person.skill = &#39;游泳&#39; // 注释掉</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">person</span><span style="color:#999999;">.</span><span style="color:#B07D48;">skill</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// undefined，Object也没有了，那就真没有了</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,23);function r(y,i,A,D,B,d){const s=a("Badge");return l(),p("div",null,[o(s,{type:"tip",text:"^finished"}),t])}const b=n(c,[["render",r]]);export{C as __pageData,b as default};
