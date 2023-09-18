import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const m=JSON.parse('{"title":"Vue异步API","description":"","frontmatter":{"title":"Vue异步API"},"headers":[],"relativePath":"4_frame_Vue.js/快速开发/034.Vue常用API.md","filePath":"4_frame_Vue.js/快速开发/034.Vue常用API.md"}'),e={name:"4_frame_Vue.js/快速开发/034.Vue常用API.md"},p=l(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本页面文档暂未更新</p></div><ol><li><code>$nextTick()</code><code>nextTick</code> 是 Vue.js 的一个异步API，用于在 DOM 更新之后执行一段延迟的操作。在 Vue.js 中，当修改数据后触发数据更新，但是 DOM 并不会立即更新，而是加入到异步队列中，在下一个时间片去更新 DOM。</li></ol><p><code>nextTick</code> 用于在 DOM 更新后执行一些操作，避免出现数据更新后立即去访问 DOM 却得不到最新的值的问题。例如，在使用 <code>$refs</code> 访问父子组件中的 DOM 元素时，常常需要在 DOM 完全更新后才能正确访问。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">created</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">$nextTick</span><span style="color:#666666;">(()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">渲染完毕之后执行：</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">created</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">$nextTick</span><span style="color:#999999;">(()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">渲染完毕之后执行：</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Vue.js 还提供了类似的异步API，例如 <code>$nextTick</code> 和 <code>$forceUpdate</code> 等。 <code>$forceUpdate</code> 则是用于强制更新组件的，它会触发组件的重新渲染。</p><ol start="2"><li>element刷新表单校验和值</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$refs</span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">formName</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">].</span><span style="color:#80A665;">resetFields</span><span style="color:#666666;">();</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$refs</span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">formName</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">].</span><span style="color:#59873A;">resetFields</span><span style="color:#999999;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>Vue强制刷新页面内容</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#80A665;">$forceUpdate</span><span style="color:#666666;">()</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#59873A;">$forceUpdate</span><span style="color:#999999;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>Element表格部分数据变化，重新渲染tableData</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,11),o=[p];function c(t,r,i,y,d,u){return a(),n("div",null,o)}const v=s(e,[["render",c]]);export{m as __pageData,v as default};
