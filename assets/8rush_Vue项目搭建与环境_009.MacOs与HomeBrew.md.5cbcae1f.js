import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.681fc4ae.js";const m=JSON.parse('{"title":"HomeBrew","description":"","frontmatter":{"title":"HomeBrew"},"headers":[],"relativePath":"8rush/Vue项目搭建与环境/009.MacOs与HomeBrew.md","filePath":"8rush/Vue项目搭建与环境/009.MacOs与HomeBrew.md"}'),l={name:"8rush/Vue项目搭建与环境/009.MacOs与HomeBrew.md"},n=o('<blockquote><p>为了在mac电脑上配置node环境，HomeBrew是必要条件（而且mac新电脑激活即自带git的，不需要像win系统那样安装git客户端）</p></blockquote><h2 id="macos安装homebrew" tabindex="-1">macOS安装HomeBrew <a class="header-anchor" href="#macos安装homebrew" aria-label="Permalink to &quot;macOS安装HomeBrew&quot;">​</a></h2><blockquote><p>前置条件：新macOS系统</p></blockquote><blockquote><p>目的：安装node</p></blockquote><ol><li>打开终端：在mac电脑上，打开终端应用，输入以下命令：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/usr/bin/ruby</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-fsSL</span><span style="color:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/master/install)”</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/usr/bin/ruby</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-fsSL</span><span style="color:#032F62;"> https://raw.githubusercontent.com/Homebrew/install/master/install)”</span></span></code></pre></div><ol start="2"><li><p>同意安装条款：输入安装命令后，会出现一堆安装条款，按照提示依次选择并按下回车键，同意即可。</p></li><li><p>验证安装，如果出现版本号，则表示安装成功。</p></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><h2 id="使用homebrew安装node" tabindex="-1">使用HomeBrew安装node <a class="header-anchor" href="#使用homebrew安装node" aria-label="Permalink to &quot;使用HomeBrew安装node&quot;">​</a></h2><blockquote><p>前置条件：HomeBrew安装成功</p></blockquote><ol><li><p>打开终端：使用mac的终端程序打开Terminal（终端）。</p></li><li><p>安装node。</p></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node</span></span></code></pre></div><ol start="3"><li>验证安装，如果出现版本号，则表示安装成功。</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div>',14),p=[n];function t(c,r,i,d,h,u){return a(),e("div",null,p)}const b=s(l,[["render",t]]);export{m as __pageData,b as default};
