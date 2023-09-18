import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const d=JSON.parse('{"title":"JS高级","description":"","frontmatter":{"title":"JS高级"},"headers":[],"relativePath":"6highlevel/JavaScript高级/110.高级应用.md","filePath":"6highlevel/JavaScript高级/110.高级应用.md"}'),p={name:"6highlevel/JavaScript高级/110.高级应用.md"},o=l(`<ul><li><code>exports</code></li><li><code>module.exports</code></li><li><code>import</code></li><li><code>mixin</code></li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li><li>\`</li></ul><h2 id="原型的应用" tabindex="-1">原型的应用 <a class="header-anchor" href="#原型的应用" aria-label="Permalink to &quot;原型的应用&quot;">​</a></h2><blockquote><p>js中有两种调用函数的方法，比如 <code>array.函数名()</code>，是一种，还有 <code>函数名(array)</code> 是另外一种，我想自定一个函数，并且调用方式与第一种方式一样，怎么写？</p></blockquote><p>你可以通过将自定义函数转换为数组方法来实现调用方式类似于 <code>array.函数名()</code> 的效果。为此，你需要将这个函数添加到数组的原型上，这样就可以在任何数组实例上使用这个函数。</p><p>例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;自定义函数被调用了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用调用方式一：array.自定义函数名()</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> array </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">array.</span><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 输出 &quot;自定义函数被调用了&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用调用方式二：自定义函数名(array)</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;自定义函数被调用了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;">(array); </span><span style="color:#6A737D;">// 输出 &quot;自定义函数被调用了&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;自定义函数被调用了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用调用方式一：array.自定义函数名()</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> array </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">array.</span><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 输出 &quot;自定义函数被调用了&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用调用方式二：自定义函数名(array)</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;自定义函数被调用了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;">(array); </span><span style="color:#6A737D;">// 输出 &quot;自定义函数被调用了&quot;</span></span></code></pre></div><p>在这个例子中，我们将自定义函数添加到原型上，并且可以在任何数组实例上使用 <code>array.自定义函数名()</code> 这种调用方式，与使用内置数组方法相同。同时，我们还可以使用传统的函数调用方式：<code>自定义函数名(array)</code>。</p><p>怎么应用到vue2项目中呢 在 Vue2 项目中，你也可以使用相同的方式将自定义函数添加到数组的原型上，从而在模板中使用调用方式类似于 <code>array.函数名()</code> 的效果。</p><p>例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;自定义函数被调用了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 Vue2 项目中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;item in list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ item.name }}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;item.list.自定义函数名()&quot;&gt;调用自定义函数&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#B392F0;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">return {</span></span>
<span class="line"><span style="color:#B392F0;">list</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">name: </span><span style="color:#9ECBFF;">&quot;第一项&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">list: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">name: </span><span style="color:#9ECBFF;">&quot;第二项&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">list: [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">name: </span><span style="color:#9ECBFF;">&quot;第三项&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">list: [</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 定义自定义函数</span></span>
<span class="line"><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;自定义函数被调用了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 Vue2 项目中使用</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;item in list&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">{{ item.name }}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;item.list.自定义函数名()&quot;&gt;调用自定义函数&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">return {</span></span>
<span class="line"><span style="color:#6F42C1;">list</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">name: </span><span style="color:#032F62;">&quot;第一项&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">list: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">name: </span><span style="color:#032F62;">&quot;第二项&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">list: [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">name: </span><span style="color:#032F62;">&quot;第三项&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">list: [</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/script&gt;</span></span></code></pre></div><p>在这个例子中，我们在 Vue2 的组件中定义一个数组 <code>list</code>，并且在组件的模板中使用 <code>v-for</code> 指令遍历数组中的每一项。每个数组项都有一个按钮，当点击按钮时会调用该项的 <code>list.自定义函数名()</code> 方法。这个自定义函数通过之前添加到数组原型上的定义可以在所有数组实例中使用。</p><p>需要注意的是，修改原型可能会影响所有数组实例，因此请谨慎使用。如果你只想在特定的组件或页面使用自定义函数，请将其定义为组件或页面的方法，而不是添加到数组原型上。</p><p>如果你想在整个 Vue2 项目中使用自定义原型函数，可以将其添加到项目的 <code>main.js</code> 文件中。<code>main.js</code> 文件是项目入口文件，通常用于引入全局组件、插件和其他配置。</p><p>你可以将自定义原型函数的代码添加到 <code>main.js</code> 文件的任何位置，在 Vue 实例化之前添加就可以了，如下所示：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加自定义原型函数</span></span>
<span class="line"><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">自定义函数名</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;自定义函数被调用了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加自定义原型函数</span></span>
<span class="line"><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">自定义函数名</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 执行逻辑</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;自定义函数被调用了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: </span><span style="color:#E36209;">h</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>如果你只想在某个组件或页面中使用自定义原型函数，可以将其添加到该组件或页面的 <code>&lt;script&gt;</code> 标签中，或将其定义为组件或页面的方法。</p>`,16),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
