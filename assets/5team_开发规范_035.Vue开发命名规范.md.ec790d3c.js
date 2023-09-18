import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.681fc4ae.js";const u=JSON.parse('{"title":"命名规范","description":"","frontmatter":{"title":"命名规范"},"headers":[],"relativePath":"5team/开发规范/035.Vue开发命名规范.md","filePath":"5team/开发规范/035.Vue开发命名规范.md"}'),p={name:"5team/开发规范/035.Vue开发命名规范.md"},e=l(`<h2 id="_1-参数命名规范——组件传参" tabindex="-1">1. 参数命名规范——组件传参 <a class="header-anchor" href="#_1-参数命名规范——组件传参" aria-label="Permalink to &quot;1. 参数命名规范——组件传参&quot;">​</a></h2><ol><li>发送方（父组件）</li></ol><ul><li><code>com</code> + <code>Params</code> + <code>_tosend</code></li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#FDAEB7;">son</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">:comParams_receive</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">comParams_tosend</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;&lt;/</span><span style="color:#FDAEB7;">son</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#B31D28;">son</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">:comParams_receive</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">comParams_tosend</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;&lt;/</span><span style="color:#B31D28;">son</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">comParams_tosend</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">comParams_tosend</span><span style="color:#666666;">:{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#B8A965;">xxx</span><span style="color:#666666;">:</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xxx</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">comParams_tosend</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">comParams_tosend</span><span style="color:#999999;">:{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#998418;">xxx</span><span style="color:#999999;">:</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xxx</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2"><li>接收方（子组件）使用</li></ol><ul><li><code>com</code> + <code>Params</code> + <code>_receive</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">comParams_receive</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">props</span><span style="color:#666666;">:{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">comParams_receive</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Object</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">created</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">comParams_receive</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">comParams_receive</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">props</span><span style="color:#999999;">:{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">comParams_receive</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Object</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">created</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">comParams_receive</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-参数命名规范——路由传参" tabindex="-1">2. 参数命名规范——路由传参 <a class="header-anchor" href="#_2-参数命名规范——路由传参" aria-label="Permalink to &quot;2. 参数命名规范——路由传参&quot;">​</a></h2><ol><li>发送方</li></ol><ul><li><code>router</code> + <code>Params</code> + <code>_tosend</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">routerParams_tosend</span></span>
<span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$router</span><span style="color:#666666;">.</span><span style="color:#80A665;">push</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">path</span><span style="color:#666666;">:</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">地址</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">query</span><span style="color:#666666;">:{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">routerParams_receive</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">stringify</span><span style="color:#666666;">(</span><span style="color:#BD976A;">routerParams_tosend</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">routerParams_tosend</span></span>
<span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$router</span><span style="color:#999999;">.</span><span style="color:#59873A;">push</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">path</span><span style="color:#999999;">:</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">地址</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">query</span><span style="color:#999999;">:{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">routerParams_receive</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">stringify</span><span style="color:#999999;">(</span><span style="color:#B07D48;">routerParams_tosend</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>接收方使用</li></ol><ul><li><code>router</code> + <code>Params</code> + <code>_receive</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">routerParams_receive</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#4D9375;">return</span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#B8A965;">routerParams_receive</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">null</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">created</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">routerParams_receive</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">JSON</span><span style="color:#666666;">.</span><span style="color:#80A665;">parse</span><span style="color:#666666;">(</span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">$router</span><span style="color:#666666;">.</span><span style="color:#BD976A;">query</span><span style="color:#666666;">.</span><span style="color:#BD976A;">routerParams_receive</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">routerParams_receive</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1E754F;">return</span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">routerParams_receive</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">null</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">created</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">routerParams_receive</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">JSON</span><span style="color:#999999;">.</span><span style="color:#59873A;">parse</span><span style="color:#999999;">(</span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">$router</span><span style="color:#999999;">.</span><span style="color:#B07D48;">query</span><span style="color:#999999;">.</span><span style="color:#B07D48;">routerParams_receive</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-参数命名规范——dialog" tabindex="-1">3. 参数命名规范——dialog <a class="header-anchor" href="#_3-参数命名规范——dialog" aria-label="Permalink to &quot;3. 参数命名规范——dialog&quot;">​</a></h2><ul><li><p><code>dialog</code> + <code>Visible</code> + <code>_目的</code></p></li><li><p><code>dialog</code> + <code>Title</code> + <code>_目的</code></p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">dialogVisible_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//dialog显隐</span></span>
<span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">dialogTitle_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// dialog标题</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">dialogVisible_purpose</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//dialog显隐</span></span>
<span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">dialogTitle_purpose</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// dialog标题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_4-参数命名规范——loading" tabindex="-1">4. 参数命名规范——loading <a class="header-anchor" href="#_4-参数命名规范——loading" aria-label="Permalink to &quot;4. 参数命名规范——loading&quot;">​</a></h2><ul><li><p><code>button</code> + <code>Loading</code> + <code>_目的</code></p></li><li><p><code>table</code> + <code>Loading</code> + <code>_目的</code></p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">tableLoading_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 表格loading</span></span>
<span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">buttonLoading_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// 按钮loading</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">tableLoading_purpose</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 表格loading</span></span>
<span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">buttonLoading_purpose</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 按钮loading</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_5-参数命名规范——提交表单参数" tabindex="-1">5. 参数命名规范——提交表单参数 <a class="header-anchor" href="#_5-参数命名规范——提交表单参数" aria-label="Permalink to &quot;5. 参数命名规范——提交表单参数&quot;">​</a></h2><ul><li><code>form</code> + <code>Params</code> + <code>_表单目的</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">formParams_purpose</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">formParams_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// formParams_表单目的</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">xxx</span><span style="color:#666666;">:</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xxx</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">formParams_purpose</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">formParams_purpose</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// formParams_表单目的</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">xxx</span><span style="color:#999999;">:</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xxx</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_6-参数命名规范——表格数据" tabindex="-1">6. 参数命名规范——表格数据 <a class="header-anchor" href="#_6-参数命名规范——表格数据" aria-label="Permalink to &quot;6. 参数命名规范——表格数据&quot;">​</a></h2><ul><li><code>table</code> + <code>Data</code> + <code>_表格目的</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#BD976A;">tableData_purpose</span></span>
<span class="line"><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">tableData_purpose</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// tableData_表格目的</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">xxx</span><span style="color:#666666;">:</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">xxx</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">xxx</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">]</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#B07D48;">tableData_purpose</span></span>
<span class="line"><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">tableData_purpose</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// tableData_表格目的</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">xxx</span><span style="color:#999999;">:</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">xxx</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">xxx</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,27),o=[e];function r(c,t,i,y,d,D){return a(),n("div",null,o)}const h=s(p,[["render",r]]);export{u as __pageData,h as default};
