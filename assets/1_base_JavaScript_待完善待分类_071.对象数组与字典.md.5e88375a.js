import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const p="/对象数组转换图.png",g=JSON.parse('{"title":"对象数组与字典","description":"","frontmatter":{"title":"对象数组与字典"},"headers":[],"relativePath":"1_base_JavaScript/待完善待分类/071.对象数组与字典.md","filePath":"1_base_JavaScript/待完善待分类/071.对象数组与字典.md"}'),o={name:"1_base_JavaScript/待完善待分类/071.对象数组与字典.md"},e=l('<p><img src="'+p+`" alt="对象数组转换图"></p><h2 id="算法1-将-对象数组-转换为-健值对对象" tabindex="-1">算法1. 将 对象数组 转换为 健值对对象 <a class="header-anchor" href="#算法1-将-对象数组-转换为-健值对对象" aria-label="Permalink to &quot;算法1. 将 对象数组 转换为 健值对对象&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-b6UBt" id="tab-aCnrrwc" checked="checked"><label for="tab-aCnrrwc">方案一</label><input type="radio" name="group-b6UBt" id="tab-B5ciIJR"><label for="tab-B5ciIJR">方案二</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> directionary_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;一级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;二级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;aw&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;三级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;四级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> TypeObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">directionary_2.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    TypeObj[item.value]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">item.dictlabel</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(TypeObj)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> directionary_2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;一级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;二级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;aw&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;三级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;四级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> TypeObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">directionary_2.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    TypeObj[item.value]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">item.dictlabel</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(TypeObj)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> directionary_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;一级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;二级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;aw&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;三级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;四级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> TypeObj_2</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">directionary_2.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    TypeObj_2[item.value]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">item[Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(item)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(TypeObj_2)</span></span>
<span class="line"><span style="color:#6A737D;">//得到健值对对象</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">// 1:&#39;一级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 2:&#39;二级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 3:&#39;三级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 4:&#39;四级&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> directionary_2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;一级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;二级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;aw&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;三级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;四级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> TypeObj_2</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">directionary_2.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    TypeObj_2[item.value]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">item[Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(item)[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(TypeObj_2)</span></span>
<span class="line"><span style="color:#6A737D;">//得到健值对对象</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">// 1:&#39;一级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 2:&#39;二级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 3:&#39;三级&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// 4:&#39;四级&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre></div></div></div><h2 id="算法02-通过对象数组里的属性值找到字典对象的健名" tabindex="-1">算法02. 通过对象数组里的属性值找到字典对象的健名 <a class="header-anchor" href="#算法02-通过对象数组里的属性值找到字典对象的健名" aria-label="Permalink to &quot;算法02. 通过对象数组里的属性值找到字典对象的健名&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objArray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uuid: </span><span style="color:#79B8FF;">1098884683</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comname: </span><span style="color:#9ECBFF;">&#39;青岛微智慧信息有限公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        universary: </span><span style="color:#9ECBFF;">&#39;key1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        user: </span><span style="color:#9ECBFF;">&#39;宋顺&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        warnlevel: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uuid: </span><span style="color:#79B8FF;">2772912121</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comname: </span><span style="color:#9ECBFF;">&#39;国有资产运营有限公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        universary: </span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        user: </span><span style="color:#9ECBFF;">&#39;梁远东&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        warnlevel: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uuid: </span><span style="color:#79B8FF;">1191492658</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comname: </span><span style="color:#9ECBFF;">&#39;微软中国&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        universary: </span><span style="color:#9ECBFF;">&#39;key3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        user: </span><span style="color:#9ECBFF;">&#39;比尔盖茨&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        warnlevel: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uuid: </span><span style="color:#79B8FF;">45319927</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        comname: </span><span style="color:#9ECBFF;">&#39;苹果公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        universary: </span><span style="color:#9ECBFF;">&#39;key4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        user: </span><span style="color:#9ECBFF;">&#39;库克&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        warnlevel: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objDict </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    key1:</span><span style="color:#9ECBFF;">&#39;山东大学&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    key2:</span><span style="color:#9ECBFF;">&#39;青岛理工大学&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    key3:</span><span style="color:#9ECBFF;">&#39;山东建筑大学&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    key4:</span><span style="color:#9ECBFF;">&#39;山东政法学院&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">objArray.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    item.universary </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> objDict[item.universary]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(objArray)</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        uuid: </span><span style="color:#005CC5;">1098884683</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        comname: </span><span style="color:#032F62;">&#39;青岛微智慧信息有限公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        universary: </span><span style="color:#032F62;">&#39;key1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        user: </span><span style="color:#032F62;">&#39;宋顺&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        warnlevel: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        uuid: </span><span style="color:#005CC5;">2772912121</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        comname: </span><span style="color:#032F62;">&#39;国有资产运营有限公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        universary: </span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        user: </span><span style="color:#032F62;">&#39;梁远东&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        warnlevel: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        uuid: </span><span style="color:#005CC5;">1191492658</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        comname: </span><span style="color:#032F62;">&#39;微软中国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        universary: </span><span style="color:#032F62;">&#39;key3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        user: </span><span style="color:#032F62;">&#39;比尔盖茨&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        warnlevel: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        uuid: </span><span style="color:#005CC5;">45319927</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        comname: </span><span style="color:#032F62;">&#39;苹果公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        universary: </span><span style="color:#032F62;">&#39;key4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        user: </span><span style="color:#032F62;">&#39;库克&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        warnlevel: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objDict </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    key1:</span><span style="color:#032F62;">&#39;山东大学&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    key2:</span><span style="color:#032F62;">&#39;青岛理工大学&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    key3:</span><span style="color:#032F62;">&#39;山东建筑大学&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    key4:</span><span style="color:#032F62;">&#39;山东政法学院&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">objArray.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    item.universary </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> objDict[item.universary]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(objArray)</span></span></code></pre></div><h2 id="算法03-对象数组通过对象数组类型的字典" tabindex="-1">算法03. 对象数组通过对象数组类型的字典 <a class="header-anchor" href="#算法03-对象数组通过对象数组类型的字典" aria-label="Permalink to &quot;算法03. 对象数组通过对象数组类型的字典&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VAfaC" id="tab-dcxaejd" checked="checked"><label for="tab-dcxaejd">算法</label><input type="radio" name="group-VAfaC" id="tab-UN20ehv"><label for="tab-UN20ehv">目标数组</label><input type="radio" name="group-VAfaC" id="tab-sU0xbqj"><label for="tab-sU0xbqj">字典</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">objArray.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">imdex</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> from </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">directionary_3.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(from </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> directionary_3[i].from){</span></span>
<span class="line"><span style="color:#E1E4E8;">            item.warnlevel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> directionary_3[i].dictlabel</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(objArray)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">objArray.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">imdex</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> from </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.id;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">directionary_3.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(from </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> directionary_3[i].from){</span></span>
<span class="line"><span style="color:#24292E;">            item.warnlevel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> directionary_3[i].dictlabel</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(objArray)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objArray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            uuid: </span><span style="color:#79B8FF;">1098884683</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            comname: </span><span style="color:#9ECBFF;">&#39;青岛微智慧信息有限公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            street: </span><span style="color:#79B8FF;">99</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            user: </span><span style="color:#9ECBFF;">&#39;宋顺&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            warnlevel: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            uuid: </span><span style="color:#79B8FF;">2772912121</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            comname: </span><span style="color:#9ECBFF;">&#39;国有资产运营有限公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            street: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            user: </span><span style="color:#9ECBFF;">&#39;梁远东&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            warnlevel: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            uuid: </span><span style="color:#79B8FF;">1191492658</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            comname: </span><span style="color:#9ECBFF;">&#39;微软中国&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            street: </span><span style="color:#79B8FF;">110</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            user: </span><span style="color:#9ECBFF;">&#39;比尔盖茨&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            warnlevel: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            uuid: </span><span style="color:#79B8FF;">45319927</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            comname: </span><span style="color:#9ECBFF;">&#39;苹果公司&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            street: </span><span style="color:#79B8FF;">107</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            user: </span><span style="color:#9ECBFF;">&#39;库克&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            warnlevel: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            uuid: </span><span style="color:#005CC5;">1098884683</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            comname: </span><span style="color:#032F62;">&#39;青岛微智慧信息有限公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            street: </span><span style="color:#005CC5;">99</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            user: </span><span style="color:#032F62;">&#39;宋顺&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            warnlevel: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            uuid: </span><span style="color:#005CC5;">2772912121</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            comname: </span><span style="color:#032F62;">&#39;国有资产运营有限公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            street: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            user: </span><span style="color:#032F62;">&#39;梁远东&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            warnlevel: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            uuid: </span><span style="color:#005CC5;">1191492658</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            comname: </span><span style="color:#032F62;">&#39;微软中国&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            street: </span><span style="color:#005CC5;">110</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            user: </span><span style="color:#032F62;">&#39;比尔盖茨&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            warnlevel: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            uuid: </span><span style="color:#005CC5;">45319927</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            comname: </span><span style="color:#032F62;">&#39;苹果公司&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            street: </span><span style="color:#005CC5;">107</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            user: </span><span style="color:#032F62;">&#39;库克&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            warnlevel: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> directionary_3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;一级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;低级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;二级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;中级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;三级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;高级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            dictlabel: </span><span style="color:#9ECBFF;">&#39;四级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;特级&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> directionary_3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;一级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;低级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;二级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;中级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;三级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;高级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            dictlabel: </span><span style="color:#032F62;">&#39;四级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;特级&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span></code></pre></div></div></div>`,7),c=[e];function E(t,r,y,i,F,d){return n(),a("div",null,c)}const u=s(o,[["render",E]]);export{g as __pageData,u as default};
