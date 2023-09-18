import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"6highlevel/ES6+/090.async&await&promise.md","filePath":"6highlevel/ES6+/090.async&await&promise.md"}'),p={name:"6highlevel/ES6+/090.async&await&promise.md"},o=l(`<h2 id="async-await-异步的最终解决方案" tabindex="-1"><code>async</code> <code>await</code> ：异步的最终解决方案 <a class="header-anchor" href="#async-await-异步的最终解决方案" aria-label="Permalink to &quot;\`async\` \`await\` ：异步的最终解决方案&quot;">​</a></h2><p>下面一段代码（vue2）将演示如何将异步请求同步化处理</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">forLoopFn</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testPromise</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 模拟请求，等待1秒</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list[i].color_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;green&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">testPromise</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">					</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resolve的返回值&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">				}, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">			}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">			})</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	components: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">forLoopFn</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.list.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">testPromise</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 模拟请求，等待1秒</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.list[i].color_2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;green&#39;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">testPromise</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">					</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;resolve的返回值&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">				}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),t=[o];function e(c,r,E,y,i,F){return n(),a("div",null,t)}const _=s(p,[["render",e]]);export{h as __pageData,_ as default};
