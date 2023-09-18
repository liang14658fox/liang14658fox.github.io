import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const b=JSON.parse('{"title":"灰色滤镜","description":"","frontmatter":{"title":"灰色滤镜"},"headers":[],"relativePath":"6highlevel/CSS高级进阶/082.网站灰色滤镜.md","filePath":"6highlevel/CSS高级进阶/082.网站灰色滤镜.md"}'),e={name:"6highlevel/CSS高级进阶/082.网站灰色滤镜.md"},p=l(`<h2 id="一行代码将网站置灰" tabindex="-1">一行代码将网站置灰 <a class="header-anchor" href="#一行代码将网站置灰" aria-label="Permalink to &quot;一行代码将网站置灰&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">html</span><span style="color:#B392F0;">.gray-mode</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">filter</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grayscale</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.95</span><span style="color:#E1E4E8;">); </span><span style="color:#79B8FF;">-webkit-filter</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grayscale</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.95</span><span style="color:#E1E4E8;">); }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.gray-mode</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.95</span><span style="color:#24292E;">); </span><span style="color:#005CC5;">-webkit-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.95</span><span style="color:#24292E;">); }</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">blur 模糊-webkit-filter:blur(2px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">brightness 亮度-webkit-filter:brightness(25%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">contrast 对比度-webkit-filter: contrast(50%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">drop-shadow</span><span style="color:#E1E4E8;"> 阴影-webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0</span><span style="color:#B392F0;">.5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">opacity 透明度-webkit-filter: opacity(50%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">grayscale 灰度-webkit-filter: grayscale(80%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">sepia 褐色-webkit-filter: sepia(100%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">invert 反色-webkit-filter: invert(100%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">hue-rotate</span><span style="color:#E1E4E8;"> 色相旋转-webkit-filter:hue-rotate(180deg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">saturate 饱和度-webkit-filter: saturate(1000%);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">blur 模糊-webkit-filter:blur(2px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">brightness 亮度-webkit-filter:brightness(25%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">contrast 对比度-webkit-filter: contrast(50%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">drop-shadow</span><span style="color:#24292E;"> 阴影-webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0</span><span style="color:#6F42C1;">.5</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">opacity 透明度-webkit-filter: opacity(50%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">grayscale 灰度-webkit-filter: grayscale(80%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">sepia 褐色-webkit-filter: sepia(100%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">invert 反色-webkit-filter: invert(100%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">hue-rotate</span><span style="color:#24292E;"> 色相旋转-webkit-filter:hue-rotate(180deg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">saturate 饱和度-webkit-filter: saturate(1000%);</span></span></code></pre></div>`,4),t=[p];function o(c,r,i,E,y,d){return a(),n("div",null,t)}const g=s(e,[["render",o]]);export{b as __pageData,g as default};
