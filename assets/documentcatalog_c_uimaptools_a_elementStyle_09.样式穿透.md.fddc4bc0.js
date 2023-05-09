import{_ as s,o as n,c as a,a as e}from"./app.1e352e66.js";const F=JSON.parse('{"title":"组件样式定制","description":"","frontmatter":{"title":"组件样式定制"},"headers":[{"level":2,"title":"1. 深度选择器 /deep/","slug":"_1-深度选择器-deep","link":"#_1-深度选择器-deep","children":[]},{"level":2,"title":"2. 深度选择器 ::v-deep","slug":"_2-深度选择器-v-deep","link":"#_2-深度选择器-v-deep","children":[]},{"level":2,"title":"3. 深度选择器 >>>","slug":"_3-深度选择器","link":"#_3-深度选择器","children":[]},{"level":2,"title":"4. !important","slug":"_4-important","link":"#_4-important","children":[]},{"level":2,"title":"5. scoped","slug":"_5-scoped","link":"#_5-scoped","children":[]},{"level":2,"title":"6. scss","slug":"_6-scss","link":"#_6-scss","children":[]},{"level":2,"title":"7. sass","slug":"_7-sass","link":"#_7-sass","children":[]},{"level":2,"title":"8. less","slug":"_8-less","link":"#_8-less","children":[]},{"level":2,"title":"9. css","slug":"_9-css","link":"#_9-css","children":[]}],"relativePath":"documentcatalog/c_uimaptools/a_elementStyle/09.样式穿透.md"}'),l={name:"documentcatalog/c_uimaptools/a_elementStyle/09.样式穿透.md"},p=e(`<h1 id="深度选择器" tabindex="-1">深度选择器 <a class="header-anchor" href="#深度选择器" aria-hidden="true">#</a></h1><p><code>::v-deep</code> 和 <code>/deep/</code> 是出现在 <code>Vue.js</code> 技术栈中的。</p><p>学习 <code>Vue.js</code> 的时候，你会碰到这些选择器。在使用 <code>Vue.js</code> 编写组件时，组件的样式可能会嵌套在父级组件中，此时使用 <code>/deep/</code> 或 <code>::v-deep</code> 可以穿透到子组件内部的 DOM 元素，实现样式的继承和覆盖。</p><h2 id="_1-深度选择器-deep" tabindex="-1">1. 深度选择器 <code>/deep/</code> <a class="header-anchor" href="#_1-深度选择器-deep" aria-hidden="true">#</a></h2><p>在 Vue.js 2.6 中，<code>/deep/</code> 被标记为过时，可以用 <code>::v-deep</code> 来代替。同时也可以使用 <code>&gt;&gt;&gt;</code> 选择器来实现相同的选择器效果。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/deep/ </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">el-switch__core</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">不含税</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">is-checked</span><span style="color:#A6ACCD;"> /deep/ </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">el-switch__core</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">含税</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_2-深度选择器-v-deep" tabindex="-1">2. 深度选择器 <code>::v-deep</code> <a class="header-anchor" href="#_2-深度选择器-v-deep" aria-hidden="true">#</a></h2><h2 id="_3-深度选择器" tabindex="-1">3. 深度选择器 <code>&gt;&gt;&gt;</code> <a class="header-anchor" href="#_3-深度选择器" aria-hidden="true">#</a></h2><h2 id="_4-important" tabindex="-1">4. <code>!important</code> <a class="header-anchor" href="#_4-important" aria-hidden="true">#</a></h2><p>在 <code>css</code> 中，<code>!important</code> 可以用于覆盖样式优先级和继承规则，以确保特定规则的优先级最高。</p><h2 id="_5-scoped" tabindex="-1">5. <code>scoped</code> <a class="header-anchor" href="#_5-scoped" aria-hidden="true">#</a></h2><h2 id="_6-scss" tabindex="-1">6. <code>scss</code> <a class="header-anchor" href="#_6-scss" aria-hidden="true">#</a></h2><p><code>scss</code> 则是一种 <code>css</code> 预处理器，它允许你使用变量、嵌套、混合、继承等高级功能来编写样式表，简化了 <code>css</code> 的书写。<code>scss</code> 文件可以使用 <code>.scss</code> 后缀名，也可以使用 <code>.sass</code> 后缀名。</p><p>总之，学习 <code>Vue.js</code> 和 <code>css</code> 的时候，你都会碰到 <code>::v-deep</code> 和 <code>!important</code>，在学习 <code>scss</code> 时会接触到后者的简写语法 <code>!</code>。</p><h2 id="_7-sass" tabindex="-1">7. <code>sass</code> <a class="header-anchor" href="#_7-sass" aria-hidden="true">#</a></h2><ul><li>全称 <code>Syntactically Awesome StyleSheets</code></li></ul><p><code>sass</code> 是一款强化 <code>CSS</code> 的辅助工具，它在 <code>CSS</code> 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 <code>CSS</code> 更加强大与优雅。使用 <code>sass</code> 以及 <code>sass</code> 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。</p><h2 id="_8-less" tabindex="-1">8. <code>less</code> <a class="header-anchor" href="#_8-less" aria-hidden="true">#</a></h2><ul><li>全称 <code>Leaner Style Sheets</code></li></ul><p><code>less</code> 是一门向后兼容的 <code>css</code> 扩展语言，是一门 <code>css</code> 预处理语言，它扩充了 <code>css</code> 语言，增加了诸如变量、混合（ <code>mixin</code> ）、函数等功能，让 <code>css</code> 更易维护、方便制作主题、扩充。<code>less</code> 可以运行在 <code>Node</code> 或浏览器端。</p><p><code>less</code> 提供了使用嵌套（nesting）代替层叠或与层叠结合使用的能力。</p><p>假设我们有以下 <code>css</code> 代码：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">navigation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>用 <code>less</code> 语言我们可以这样写：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    .navigation {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>用 <code>less</code> 书写的代码更加简洁，并模仿了 <code>HTML</code> 的组件结构。</p><h2 id="_9-css" tabindex="-1">9. <code>css</code> <a class="header-anchor" href="#_9-css" aria-hidden="true">#</a></h2><ul><li>全称 <code>Cascading Style Sheets</code> （层叠样式表）</li></ul><p><code>css</code> 是一门历史悠久的标记性语言，同 <code>HTML</code> 一道，被广泛应用于万维网（World Wide Web）中。<code>HTML</code> 主要负责文档结构的定义，<code>css</code> 负责文档表现形式或样式的定义。</p>`,29),o=[p];function c(r,t,d,i,D,C){return n(),a("div",null,o)}const b=s(l,[["render",c]]);export{F as __pageData,b as default};
