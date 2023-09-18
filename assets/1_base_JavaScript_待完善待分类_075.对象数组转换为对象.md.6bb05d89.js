import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1_base_JavaScript/待完善待分类/075.对象数组转换为对象.md","filePath":"1_base_JavaScript/待完善待分类/075.对象数组转换为对象.md"}'),p={name:"1_base_JavaScript/待完善待分类/075.对象数组转换为对象.md"},o=l(`<h2 id="_1" tabindex="-1">1 <a class="header-anchor" href="#_1" aria-label="Permalink to &quot;1&quot;">​</a></h2><blockquote><h4 id="现在有一个对象数组-有一个需求-要根据日期渲染到element日历组件中。有两种实现方式" tabindex="-1">现在有一个对象数组，有一个需求，要根据日期渲染到element日历组件中。有两种实现方式 <a class="header-anchor" href="#现在有一个对象数组-有一个需求-要根据日期渲染到element日历组件中。有两种实现方式" aria-label="Permalink to &quot;现在有一个对象数组，有一个需求，要根据日期渲染到element日历组件中。有两种实现方式&quot;">​</a></h4><ul><li>...通用方法</li><li>...特殊方法</li></ul><p>*接下来讲解特殊方法的 <strong>数据结构转换</strong></p></blockquote><p>将对象数组的每一个数组元素（对象），作为键值对的值，放到一个新对象中。键值对的键名为数组元素（对象）的其中一个属性的值。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        date:</span><span style="color:#9ECBFF;">&#39;2023-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:</span><span style="color:#9ECBFF;">&#39;看电影&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        date:</span><span style="color:#9ECBFF;">&#39;2023-05-02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:</span><span style="color:#9ECBFF;">&#39;玩游戏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        date:</span><span style="color:#9ECBFF;">&#39;2023-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:</span><span style="color:#9ECBFF;">&#39;弹钢琴&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        date:</span><span style="color:#9ECBFF;">&#39;2023-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:</span><span style="color:#9ECBFF;">&#39;敲代码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        date:</span><span style="color:#032F62;">&#39;2023-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&#39;看电影&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        other:</span><span style="color:#032F62;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        date:</span><span style="color:#032F62;">&#39;2023-05-02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&#39;玩游戏&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        other:</span><span style="color:#032F62;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        date:</span><span style="color:#032F62;">&#39;2023-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&#39;弹钢琴&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        other:</span><span style="color:#032F62;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        date:</span><span style="color:#032F62;">&#39;2023-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&#39;敲代码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        other:</span><span style="color:#032F62;">&#39;ohter&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>期望</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;2023-05-01&#39;</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            date:</span><span style="color:#9ECBFF;">&#39;2023-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&#39;看电影&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;2023-05-02&#39;</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            date:</span><span style="color:#9ECBFF;">&#39;2023-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&#39;看电影&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;2023-05-03&#39;</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            date:</span><span style="color:#9ECBFF;">&#39;2023-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&#39;弹钢琴&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            date:</span><span style="color:#9ECBFF;">&#39;2023-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&#39;敲代码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            other:</span><span style="color:#9ECBFF;">&#39;ohter&#39;</span><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;2023-05-01&#39;</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            date:</span><span style="color:#032F62;">&#39;2023-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&#39;看电影&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            other:</span><span style="color:#032F62;">&#39;ohter&#39;</span><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;2023-05-02&#39;</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            date:</span><span style="color:#032F62;">&#39;2023-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&#39;看电影&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            other:</span><span style="color:#032F62;">&#39;ohter&#39;</span><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;2023-05-03&#39;</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            date:</span><span style="color:#032F62;">&#39;2023-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&#39;弹钢琴&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            other:</span><span style="color:#032F62;">&#39;ohter&#39;</span><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            date:</span><span style="color:#032F62;">&#39;2023-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&#39;敲代码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            other:</span><span style="color:#032F62;">&#39;ohter&#39;</span><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>算法</p>`,7),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const _=s(p,[["render",c]]);export{d as __pageData,_ as default};
