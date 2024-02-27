import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.681fc4ae.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架与工程化/Vue/Vue进阶/127.渲染函数 & JSX.md","filePath":"框架与工程化/Vue/Vue进阶/127.渲染函数 & JSX.md","lastUpdated":null}'),e={name:"框架与工程化/Vue/Vue进阶/127.渲染函数 & JSX.md"},o=n('<p>JSX 是 JavaScript 的一个类似 XML 的扩展，有了它，我们可以用以下的方式来书写代码</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">vnode</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">hello</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">vnode</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">hello</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 JSX 表达式中，使用大括号来嵌入动态值：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">vnode</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">id</span><span style="color:#666666;">={</span><span style="color:#BD976A;">dynamicId</span><span style="color:#666666;">}&gt;</span><span style="color:#DBD7CAEE;">hello, </span><span style="color:#666666;">{</span><span style="color:#BD976A;">userName</span><span style="color:#666666;">}&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">vnode</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">id</span><span style="color:#999999;">={</span><span style="color:#B07D48;">dynamicId</span><span style="color:#999999;">}&gt;</span><span style="color:#393A34;">hello, </span><span style="color:#999999;">{</span><span style="color:#B07D48;">userName</span><span style="color:#999999;">}&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>create-vue 和 Vue CLI 都有预置的 JSX 语法支持。</p><p>虽然最早是由 React 引入，但实际上 JSX 语法并没有定义运行时语义，并且能被编译成各种不同的输出形式。如果你之前使用过 JSX 语法，那么请注意 Vue 的 JSX 转换方式与 React 中 JSX 的转换方式不同，因此你不能在 Vue 应用中使用 React 的 JSX 转换。与 React JSX 语法的一些明显区别包括：</p><ul><li>可以使用 HTML attributes 比如 class 和 for 作为 props - 不需要使用 className 或 htmlFor。</li><li>传递子元素给组件 (比如 slots) 的方式不同。</li></ul><p>Vue 的类型定义也提供了 TSX 语法的类型推导支持。当使用 TSX 语法时，确保在 tsconfig.json 中配置了 &quot;jsx&quot;: &quot;preserve&quot;，这样的 TypeScript 就能保证 Vue JSX 语法转换过程中的完整性。</p>',8),p=[o];function t(c,r,i,y,d,u){return a(),l("div",null,p)}const D=s(e,[["render",t]]);export{_ as __pageData,D as default};
