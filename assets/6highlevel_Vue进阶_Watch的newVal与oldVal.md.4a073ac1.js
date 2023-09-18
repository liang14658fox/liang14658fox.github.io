import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"6highlevel/Vue进阶/Watch的newVal与oldVal.md","filePath":"6highlevel/Vue进阶/Watch的newVal与oldVal.md"}'),p={name:"6highlevel/Vue进阶/Watch的newVal与oldVal.md"},o=l(`<p>用到vue2侦听器的开发过程中发现，侦听变化数据得到的newVal和oldVal是相同的，如何解决呢？</p><h2 id="解决newval和oldval相同的bug" tabindex="-1">解决newVal和oldVal相同的BUG <a class="header-anchor" href="#解决newval和oldval相同的bug" aria-label="Permalink to &quot;解决newVal和oldVal相同的BUG&quot;">​</a></h2><p>因为监听的数据是一个地址，所以newVal和oldVal都指向同一个地址，输出都是相同的。</p><p>可以利用深浅拷贝解决。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Watcholdvalue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.FormData))</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 因为计算属性一开始就执行了一次,相当于在一开始就深拷贝拿到了oldvalue,改变之后又再一次深拷贝,每一次深拷贝生成的对象都是指向不同的地址,所以oldvalue和newvalue是两个不同的地址.</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Watcholdvalue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">oldVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(newVal,oldVal)</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                deep: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            FormData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                realForm: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    kmbm: </span><span style="color:#9ECBFF;">&#39;科目编码1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    checked: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ptionsList: </span><span style="color:#9ECBFF;">&#39;options_1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                },]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    computed: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Watcholdvalue</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.FormData))</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 因为计算属性一开始就执行了一次,相当于在一开始就深拷贝拿到了oldvalue,改变之后又再一次深拷贝,每一次深拷贝生成的对象都是指向不同的地址,所以oldvalue和newvalue是两个不同的地址.</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    watch: {</span></span>
<span class="line"><span style="color:#24292E;">        Watcholdvalue: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">, </span><span style="color:#E36209;">oldVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(newVal,oldVal)</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                deep: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            FormData: {</span></span>
<span class="line"><span style="color:#24292E;">                realForm: [{</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    kmbm: </span><span style="color:#032F62;">&#39;科目编码1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    checked: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    ptionsList: </span><span style="color:#032F62;">&#39;options_1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                },]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,5),e=[o];function c(t,E,r,y,i,d){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{h as __pageData,u as default};
