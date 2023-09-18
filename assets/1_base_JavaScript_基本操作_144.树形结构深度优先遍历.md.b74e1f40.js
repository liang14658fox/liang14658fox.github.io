import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1_base_JavaScript/基本操作/144.树形结构深度优先遍历.md","filePath":"1_base_JavaScript/基本操作/144.树形结构深度优先遍历.md"}'),p={name:"1_base_JavaScript/基本操作/144.树形结构深度优先遍历.md"},o=l(`<h2 id="树形结构深度优先遍历" tabindex="-1">树形结构深度优先遍历 <a class="header-anchor" href="#树形结构深度优先遍历" aria-label="Permalink to &quot;树形结构深度优先遍历&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;13%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">			}],</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;13%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">			}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;zsl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;6%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;children&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">			}],</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;children&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> node) { </span><span style="color:#6A737D;">// 判断对象是否存在指定属性</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> child </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> node.children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(obj)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;13%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">			}],</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;13%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">			}, {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;zsl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;6%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;children&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">			}],</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;children&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> node) { </span><span style="color:#6A737D;">// 判断对象是否存在指定属性</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> child </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> node.children) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(obj)</span></span></code></pre></div><blockquote><p>该方法同样适用于有向无环图的数据结构</p></blockquote>`,3),t=[o];function e(c,E,r,y,i,u){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{q as __pageData,d as default};
