import{_ as p,C as o,o as e,c,H as a,k as l,a as n,Q as t}from"./chunks/framework.681fc4ae.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"6highlevel/JavaScript高级/113.函数的this指向.md","filePath":"6highlevel/JavaScript高级/113.函数的this指向.md"}'),r={name:"6highlevel/JavaScript高级/113.函数的this指向.md"},E=t(`<h2 id="普通函数的this" tabindex="-1">普通函数的this <a class="header-anchor" href="#普通函数的this" aria-label="Permalink to &quot;普通函数的this&quot;">​</a></h2><blockquote><h4 id="先看这样一句话" tabindex="-1">先看这样一句话： <a class="header-anchor" href="#先看这样一句话" aria-label="Permalink to &quot;先看这样一句话：&quot;">​</a></h4><ul><li>this 用于访问当前方法的所属对象</li></ul><p>什么意思呢？举个例子：</p></blockquote><p>这里我声明一个对象，这个对象里有一个属性a随便给他赋值，还有一个方法b。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a : </span><span style="color:#79B8FF;">128</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;"> : </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// { a: 128,b: f...}</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> obj) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    a : </span><span style="color:#005CC5;">128</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">b</span><span style="color:#24292E;"> : </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// { a: 128,b: f...}</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> obj) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过打印发现，这里this指向当前方法的所属对象obj。</p><blockquote><p>这个很好理解，现在稍微改动一下，对象的方法这次不写在对象里面了。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a : </span><span style="color:#79B8FF;">128</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// { a: 128,b: f...}</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> obj) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    a : </span><span style="color:#005CC5;">128</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// { a: 128,b: f...}</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> obj) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>通过打印结果发现结果跟上面的一样，貌似没什么特别的。</p><blockquote><p>这种写法好像很熟悉，和写事件的处理函数很像。比如给document添加一个点击事件。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// document</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// document</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>这里打印输出了document，所以这里的this指向的就是绑定了该事件的对象，和前面都是一样的。</p><blockquote><p>但是，实际上，事件onclick也是一个方法，因为它后面跟的就是一个函数，只不过这个方法需要我们手动取操作才执行（比如点击事件、键盘事件），前面的方法是单独调用执行的。</p></blockquote><p>之前说的都是对象的方法的调用，那么接下来来说说普通函数。</p><blockquote><h4 id="还有这样一句话" tabindex="-1">还有这样一句话： <a class="header-anchor" href="#还有这样一句话" aria-label="Permalink to &quot;还有这样一句话：&quot;">​</a></h4><ul><li>普通函数下this不受函数定义的环境影响，而是取决于函数被谁调用</li></ul><p>这句话非常重要。如何理解？举例子：</p></blockquote><p>这里定义一个普通函数，名称为a。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">a</span><span style="color:#24292E;">()</span></span></code></pre></div><p>那么this指向哪里呢？根据上面那句话我们不知道谁调用的a(),你认为是window？没错，确实是window。</p><blockquote><p>但是如果是window，那么问题又来了：它似乎收到了函数定义环境的影响，而不是取决于函数被谁调用。</p></blockquote><p>再改一下代码，函数还是不变（仍然定义在之前的环境）。声明一个数组，给数组元素赋值函数a</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// [1,2,3,fn: f]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">arr.fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a</span></span>
<span class="line"><span style="color:#E1E4E8;">arr.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// [1,2,3,fn: f]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">arr.fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a</span></span>
<span class="line"><span style="color:#24292E;">arr.</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span></code></pre></div><p>这次this打印出来是arr这个数组，可以论证之前的那句话了，不受函数定义环境影响，而取决于函数被谁调用。</p><blockquote><p>现在打开严格模式再执行一次看看this是不是还是window</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">a</span><span style="color:#24292E;">()</span></span></code></pre></div><p>打开严格模式之后发现输出undefined，这里this找不到谁调用的函数，所以输出的就是undefined。</p><p>让setTImeout调用函数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div><p>将a()当做一个构造函数，实例化一个对象出来，看看this指向是不是实例化出来的对象。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>未完成</p></div>`,29),i={id:"箭头函数的this指向",tabindex:"-1"},y=l("a",{class:"header-anchor",href:"#箭头函数的this指向","aria-label":'Permalink to "箭头函数的this指向 <Badge type="danger" text="^2023-06-15" />"'},"​",-1);function d(h,u,g,F,b,C){const s=o("Badge");return e(),c("div",null,[a(s,{type:"tip",text:"^finished"}),E,l("h2",i,[n("箭头函数的this指向 "),a(s,{type:"danger",text:"^2023-06-15"}),n(),y])])}const f=p(r,[["render",d]]);export{k as __pageData,f as default};
