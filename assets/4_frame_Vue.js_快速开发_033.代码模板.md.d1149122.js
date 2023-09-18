import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const b=JSON.parse('{"title":"复制模板","description":"","frontmatter":{"title":"复制模板"},"headers":[],"relativePath":"4_frame_Vue.js/快速开发/033.代码模板.md","filePath":"4_frame_Vue.js/快速开发/033.代码模板.md"}'),p={name:"4_frame_Vue.js/快速开发/033.代码模板.md"},e=l(`<h2 id="vue2-单文件组件" tabindex="-1">Vue2 单文件组件 <a class="header-anchor" href="#vue2-单文件组件" aria-label="Permalink to &quot;Vue2 单文件组件&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">components</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">props</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">created</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">methods</span><span style="color:#666666;">:{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">style</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">scoped</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">style</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">components</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">props</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">created</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">methods</span><span style="color:#999999;">:{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">style</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">scoped</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">style</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="vue2-侦听器-watch" tabindex="-1">Vue2 侦听器 Watch <a class="header-anchor" href="#vue2-侦听器-watch" aria-label="Permalink to &quot;Vue2 侦听器 Watch&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">dateName</span><span style="color:#666666;">:</span><span style="color:#CB7676;">null</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">watch</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">dateName</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#80A665;">handler</span><span style="color:#666666;">(</span><span style="color:#BD976A;">newVal</span><span style="color:#666666;">,</span><span style="color:#BD976A;">oldVal</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">deep</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">dateName</span><span style="color:#999999;">:</span><span style="color:#AB5959;">null</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">watch</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">dateName</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#59873A;">handler</span><span style="color:#999999;">(</span><span style="color:#B07D48;">newVal</span><span style="color:#999999;">,</span><span style="color:#B07D48;">oldVal</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">deep</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="vue2-路由跳转-传参" tabindex="-1">Vue2 路由跳转 传参 <a class="header-anchor" href="#vue2-路由跳转-传参" aria-label="Permalink to &quot;Vue2 路由跳转 传参&quot;">​</a></h2><ul><li>出发点</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">routerParams_tosend</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$router</span><span style="color:#666666;">.</span><span style="color:#80A665;">push</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">path</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xxx/xxx</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">query</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">routerParams_receive</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">stringify</span><span style="color:#666666;">(</span><span style="color:#BD976A;">routerParams_tosend</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">routerParams_tosend</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$router</span><span style="color:#999999;">.</span><span style="color:#59873A;">push</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">path</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xxx/xxx</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">query</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">routerParams_receive</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">stringify</span><span style="color:#999999;">(</span><span style="color:#B07D48;">routerParams_tosend</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>目的地</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">created</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">parse</span><span style="color:#666666;">(</span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$route</span><span style="color:#666666;">.</span><span style="color:#BD976A;">query</span><span style="color:#666666;">.</span><span style="color:#BD976A;">routerParams_receive</span><span style="color:#666666;">))</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">created</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">parse</span><span style="color:#999999;">(</span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$route</span><span style="color:#999999;">.</span><span style="color:#B07D48;">query</span><span style="color:#999999;">.</span><span style="color:#B07D48;">routerParams_receive</span><span style="color:#999999;">))</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),o=[e];function c(r,t,y,i,A,D){return n(),a("div",null,o)}const E=s(p,[["render",c]]);export{b as __pageData,E as default};
