import{_ as s,o as n,c as a,a as e}from"./app.9d25832d.js";const m=JSON.parse('{"title":"TS","description":"","frontmatter":{"title":"TS"},"headers":[],"relativePath":"documentcatalog/d_native/e_typescript/01.环境配置.md"}'),p={name:"documentcatalog/d_native/e_typescript/01.环境配置.md"},l=e(`<p>环境配置</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 环境配置</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ts-node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">typescript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ts-node-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加 tsconfig.json</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--package</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">typescript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>执行单个文件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ts-node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>监听文件变更</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ts-node-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--respawn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--transpile-only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6),t=[l];function o(c,r,i,d,C,y){return n(),a("div",null,t)}const u=s(p,[["render",o]]);export{m as __pageData,u as default};
