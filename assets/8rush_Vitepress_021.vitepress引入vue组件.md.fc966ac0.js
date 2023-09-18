import{_ as a,o as l,c as p,k as s,a as o,t as e,Q as t}from"./chunks/framework.681fc4ae.js";const c="/image-20221106212726449.png",r="/image-20221106213202800.png",b=JSON.parse('{"title":"vitepress引入vue组件","description":"","frontmatter":{"title":"vitepress引入vue组件"},"headers":[],"relativePath":"8rush/Vitepress/021.vitepress引入vue组件.md","filePath":"8rush/Vitepress/021.vitepress引入vue组件.md"}'),E={name:"8rush/Vitepress/021.vitepress引入vue组件.md"},y={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=t(`<p>这节课的内容需要有前置的良好的Vue基础，如果你仅仅想搭建一个存放md文件的网站的话，可以不必学习后面的内容，当然如果你想个性化自己的站点，那么推荐你学习一下引用的方式和注意点，开始你的个性化之旅。</p><h2 id="编写vue组件" tabindex="-1">编写VUE组件 <a class="header-anchor" href="#编写vue组件" aria-label="Permalink to &quot;编写VUE组件&quot;">​</a></h2><p>首先要明确的一点就是，Vitepress和Vuepress等工具都是尤大团队开发的方便Vue用户进行个人站点搭建的工具，本质上的Vue生态的一部分，所以想要个性化自己的网站，需要先学习Vue，Vitepress是基于Vite和Vue3.x进行开发的，所以这里的开发需要使用Vue3.x的内容。</p><p>我们在整个目录中新建一个compement文件夹，在其中新建一个.vue文件。vue的编写和正常vue开发几乎没有区别，后面会提到几个注意点，整的内容暂且省略，如果想模仿作者的页面可以来这个链接 <a href="https://github.com/aiai0603/aiai0603.github.io" target="_blank" rel="noreferrer">https://github.com/aiai0603/aiai0603.github.io</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">//....</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">//....</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">//....</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">//....</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">//....</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">//....</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="需要注意的几个点" tabindex="-1">需要注意的几个点 <a class="header-anchor" href="#需要注意的几个点" aria-label="Permalink to &quot;需要注意的几个点&quot;">​</a></h2><ol><li><p>window 对象，Node.js 中没有 window 对象，如果你需要使用它，在 <code>beforeMount</code> 或 <code>mounted</code> 再去访问访问浏览器 / DOM 的 API。如果你在使用或展示非 SSR 友好(比如包含自定义指令)的组件，你就可以使用<code>ClientOnly</code>将其包裹（来自官方）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">ClientOnly</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">NonSSRFriendlyComponent</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">ClientOnly</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">ClientOnly</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">NonSSRFriendlyComponent</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">ClientOnly</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li><li><p>这并不能解决一些组件或库在<strong>导入</strong>时就试图访问浏览器 API 的问题。 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中动态导入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./lib-that-access-window-on-import&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// use code</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./lib-that-access-window-on-import&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">module</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// use code</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>如果你的模块<code>export default</code>一个 Vue 组件，那么你可以动态注册。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;dynamicComponent&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:is=&quot;dynamicComponent&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#B392F0;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">dynamicComponent</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./lib-that-access-window-on-import&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">dynamicComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.default</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dynamicComponent&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:is=&quot;dynamicComponent&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">dynamicComponent</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./lib-that-access-window-on-import&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">module</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">this</span><span style="color:#24292E;">.</span><span style="color:#E36209;">dynamicComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">.default</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/script&gt;</span></span></code></pre></div></li><li><p>在VitePress中，一些核心的计算属性可以用在md文件中或者用在编写的Vue文件中，具体请参考官方的配置：<a href="https://vitejs.cn/vitepress/guide/global-computed.html" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/guide/global-computed.html</a></p></li><li><p>我们可以在vue中使用less、scss等预处理器，使用时需要先npm安装，但是不需要配置解析器等内容，同时我们可以使用系统预制的主题变量来编写我们的css内容，做到切换深色和淡色模式的时候的切换效果，例如：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-brand</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">a</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-brand</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>官方的主题颜色可以通过F12 查找源文件获取，或者查阅相关资料</p></li><li><p>在组件中引入public文件夹下的内容同样遵循之前的规则</p></li></ol><h2 id="引入vue组件" tabindex="-1">引入Vue组件 <a class="header-anchor" href="#引入vue组件" aria-label="Permalink to &quot;引入Vue组件&quot;">​</a></h2><p>我们将编写好的Vue文件通过相对路径的方式引入需要的md页面，之后引用它即可，要注意刚刚提到的注意点，你在使用或展示非 SSR 友好(比如包含自定义指令)的组件，你就可以使用<code>ClientOnly</code>将其包裹（来自官方）：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">---</span></span>
<span class="line"><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: 开源项目</span></span>
<span class="line"><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">: home</span></span>
<span class="line"><span style="color:#F97583;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TheProject</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import TheProject from &#39;../../compoment/TheProject.vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">---</span></span>
<span class="line"><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: 开源项目</span></span>
<span class="line"><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">: home</span></span>
<span class="line"><span style="color:#D73A49;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">TheProject</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import TheProject from &#39;../../compoment/TheProject.vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>我们预览一下效果，ok，非常完美，可以看到内容已经显示出来了：</p><p><img src="`+c+`" alt="image-20221106212726449"></p><h2 id="在md界面中使用vue" tabindex="-1">在md界面中使用Vue <a class="header-anchor" href="#在md界面中使用vue" aria-label="Permalink to &quot;在md界面中使用Vue&quot;">​</a></h2><p>在vitepress中，出来这样编写自定义的内容，我们同样可以在md界面中直接编写前端的代码，框架会为我们渲染为前端界面进行展示，你可以在md文件中既编写md文章的内容，又编写前端的代码，</p><p>比如我们在刚刚完成的页面上一些代码和样式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">---</span></span>
<span class="line"><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: 开源项目</span></span>
<span class="line"><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">: home</span></span>
<span class="line"><span style="color:#F97583;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">&gt; 测试一下哈哈哈哈哈 &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TheProject</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import TheProject from &#39;../../compoment/TheProject.vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">.test{</span></span>
<span class="line"><span style="color:#E1E4E8;">    color:red</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">---</span></span>
<span class="line"><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: 开源项目</span></span>
<span class="line"><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">: home</span></span>
<span class="line"><span style="color:#D73A49;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">&gt; 测试一下哈哈哈哈哈 &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">TheProject</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import TheProject from &#39;../../compoment/TheProject.vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">.test{</span></span>
<span class="line"><span style="color:#24292E;">    color:red</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><img src="`+r+`" alt="image-20221106213202800"></p><p>在其中同样支持vue的写法，比如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">&gt; {{a}} &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">&gt; {{ </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> + </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}} &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">&gt; {{a}} &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">&gt; {{ </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> + </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}} &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>好了以上就是如何来通过编写vue组件和代码来美化你的vitepress站点，如果你是前端大佬，你可以搭建和创造属于你自己的独一无二的网页，如果你不想动手也可以来github 使用作者编写的组件来美化你的项目，如果对你有帮助可以点一个star！</p><p>项目地址: <a href="https://github.com/aiai0603/aiai0603.github.io" target="_blank" rel="noreferrer">https://github.com/aiai0603/aiai0603.github.io</a></p><p>后续作者视情况可能会出一些修改整体主题等的更深入的教程，欢迎关注作者，有疑问也可以通过git等方式联系作者</p>`,22);function u(n,g,h,m,F,v){return l(),p("div",null,[s("h1",y,[o(e(n.$frontmatter.title)+" ",1),i]),d])}const B=a(E,[["render",u]]);export{b as __pageData,B as default};
