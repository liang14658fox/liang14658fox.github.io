import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"元素特殊位置布局","description":"","frontmatter":{"title":"元素特殊位置布局"},"headers":[],"relativePath":"1_base_CSS/Layout/099.元素特殊位置布局.md","filePath":"1_base_CSS/Layout/099.元素特殊位置布局.md"}'),p={name:"1_base_CSS/Layout/099.元素特殊位置布局.md"},o=l(`<h2 id="_1-部分元素居右" tabindex="-1">1. 部分元素居右 <a class="header-anchor" href="#_1-部分元素居右" aria-label="Permalink to &quot;1. 部分元素居右&quot;">​</a></h2><ul><li>flex方案</li></ul><p>仅需给父元素设置flex布局，给要居右的子元素们的第一个子元素设置 <code>margin-left:auto;</code>即可</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.father</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.rightDiv</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-left</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.father</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.rightDiv</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-left</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2-让子元素自动占满一行" tabindex="-1">2. 让子元素自动占满一行 <a class="header-anchor" href="#_2-让子元素自动占满一行" aria-label="Permalink to &quot;2. 让子元素自动占满一行&quot;">​</a></h2><p>可以使用Flex布局中的<code>flex-wrap: wrap</code>和<code>flex-basis</code>属性来实现。具体实现方法如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">flex-wrap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">wrap</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">flex-basis</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#6A737D;">/* 使用\`flex-basis\`将每个子元素的初始宽度设置为父元素宽度除以3，即每行分成3份。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.parent</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">flex-wrap</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">wrap</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.parent</span><span style="color:#24292E;"> </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">flex-basis</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#6A737D;">/* 使用\`flex-basis\`将每个子元素的初始宽度设置为父元素宽度除以3，即每行分成3份。 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_3-固定宽度的子元素均匀分布" tabindex="-1">3. 固定宽度的子元素均匀分布 <a class="header-anchor" href="#_3-固定宽度的子元素均匀分布" aria-label="Permalink to &quot;3. 固定宽度的子元素均匀分布&quot;">​</a></h2><p>可以使用Flex布局中的<code>justify-content: space-between</code>属性来实现。具体实现方法如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">space-between</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.parent</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 固定宽度 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.parent</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">justify-content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">space-between</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.parent</span><span style="color:#24292E;"> </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 固定宽度 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_4-子元素紧贴父元素并均匀分布" tabindex="-1">4. 子元素紧贴父元素并均匀分布 <a class="header-anchor" href="#_4-子元素紧贴父元素并均匀分布" aria-label="Permalink to &quot;4. 子元素紧贴父元素并均匀分布&quot;">​</a></h2><p>父元素有一行子元素，子元素直接有margin，子元素与父元素无margin或者padding。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-x2Zgy" id="tab-SVQKYWL" checked="checked"><label for="tab-SVQKYWL">一行子元素</label><input type="radio" name="group-x2Zgy" id="tab-5mvsXSk"><label for="tab-5mvsXSk">多行子元素</label></div><div class="blocks"><div class="language-css vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.father</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.father</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 单独给最后一个子元素设置 */</span></span>
<span class="line"><span style="color:#B392F0;">.lastItem</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.father</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.father</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 单独给最后一个子元素设置 */</span></span>
<span class="line"><span style="color:#6F42C1;">.lastItem</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.father</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* 让父元素内右边距变为负数 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-right</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">-20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.father</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.father</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* 让父元素内右边距变为负数 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-right</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">-20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.father</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,13),e=[o];function c(t,r,y,E,i,d){return a(),n("div",null,e)}const C=s(p,[["render",c]]);export{h as __pageData,C as default};
