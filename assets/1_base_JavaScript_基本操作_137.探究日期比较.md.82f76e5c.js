import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.681fc4ae.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1_base_JavaScript/基本操作/137.探究日期比较.md","filePath":"1_base_JavaScript/基本操作/137.探究日期比较.md"}'),l={name:"1_base_JavaScript/基本操作/137.探究日期比较.md"},o=p(`<h2 id="日期字符串的比较日期先后的函数封装-vue2" tabindex="-1">日期字符串的比较日期先后的函数封装（vue2） <a class="header-anchor" href="#日期字符串的比较日期先后的函数封装-vue2" aria-label="Permalink to &quot;日期字符串的比较日期先后的函数封装（vue2）&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">time2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compareTime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">startdate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">enddate</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> date1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> startdate;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> date2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> enddate;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(date1) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(date2)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&lt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(date1) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(date2)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;=&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compareTime</span><span style="color:#E1E4E8;">(time1, time2)</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    methods: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#E36209;">time1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">time2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compareTime</span><span style="color:#24292E;">(</span><span style="color:#E36209;">startdate</span><span style="color:#24292E;">, </span><span style="color:#E36209;">enddate</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> date1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> startdate;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> date2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> enddate;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Date.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(date1) </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(date2)) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&lt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Date.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(date1) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(date2)) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;=&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compareTime</span><span style="color:#24292E;">(time1, time2)</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">不适用于不同格式直接的比较</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// yyyy-M-d VS yyyy-M-d Good！</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2022-1-1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2022-1-1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// yyyy-MM-dd VS yyyy-M-d Bad！</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2022-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-1-1&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2022-1-1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// yyyy-MM-dd VS yyyy-MM-dd Good！</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2022-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">compareDate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-01-01&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2022-01-01&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// yyyy-M-d VS yyyy-M-d Good！</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2022-1-1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2022-1-1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// yyyy-MM-dd VS yyyy-M-d Bad！</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2022-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-1-1&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2022-1-1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// yyyy-MM-dd VS yyyy-MM-dd Good！</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2022-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">compareDate</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-01-01&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2022-01-01&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div></div>`,3),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const B=s(l,[["render",t]]);export{C as __pageData,B as default};
