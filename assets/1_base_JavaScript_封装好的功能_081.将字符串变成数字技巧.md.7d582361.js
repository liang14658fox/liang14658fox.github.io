import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const b=JSON.parse('{"title":"将一个字符串变成数字","description":"","frontmatter":{"title":"将一个字符串变成数字"},"headers":[],"relativePath":"1_base_JavaScript/封装好的功能/081.将字符串变成数字技巧.md","filePath":"1_base_JavaScript/封装好的功能/081.将字符串变成数字技巧.md"}'),p={name:"1_base_JavaScript/封装好的功能/081.将字符串变成数字技巧.md"},o=l(`<ul><li>常规操作</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#80A665;">Number</span><span style="color:#666666;">(</span><span style="color:#BD976A;">str</span><span style="color:#666666;">))</span><span style="color:#DBD7CAEE;">   </span><span style="color:#758575DD;">//2</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">str</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#59873A;">Number</span><span style="color:#999999;">(</span><span style="color:#B07D48;">str</span><span style="color:#999999;">))</span><span style="color:#393A34;">   </span><span style="color:#A0ADA0;">//2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>优化一</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">~~</span><span style="color:#BD976A;">str</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//2</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">str</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">~~</span><span style="color:#B07D48;">str</span><span style="color:#999999;">)</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>js中有~是按位取反运算,~~ 用来作双非按位取反运算。</p><p>~~ 的作用是去掉小数部分,对于正数，向下取整；对于负数，向上取整；与Math.floor()不同的是，它只是单纯的去掉小数部分，不论正负都不会改变整数部分。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">~~null</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">      </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~undefined</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">--</span><span style="color:#4D9375;">NaN</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">       </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">         </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#666666;">{};</span><span style="color:#DBD7CAEE;">        </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#666666;">[];</span><span style="color:#DBD7CAEE;">        </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">1</span><span style="color:#CB7676;">/</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">     </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#4D9375;">false</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">     </span><span style="color:#758575DD;">// =&gt; 0</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#4D9375;">true</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">      </span><span style="color:#758575DD;">// =&gt; 1</span></span>
<span class="line"><span style="color:#CB7676;">~~</span><span style="color:#4C9A91;">1.9</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">       </span><span style="color:#758575DD;">// =&gt; 1</span></span>
<span class="line"><span style="color:#CB7676;">~~-</span><span style="color:#4C9A91;">1.9</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">      </span><span style="color:#758575DD;">// =&gt; -1</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">~~null</span><span style="color:#999999;">;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~undefined</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">--</span><span style="color:#1E754F;">NaN</span><span style="color:#999999;">;</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span><span style="color:#393A34;">         </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#999999;">{};</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#999999;">[];</span><span style="color:#393A34;">        </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#999999;">(</span><span style="color:#2F798A;">1</span><span style="color:#AB5959;">/</span><span style="color:#2F798A;">0</span><span style="color:#999999;">);</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#1E754F;">false</span><span style="color:#999999;">;</span><span style="color:#393A34;">     </span><span style="color:#A0ADA0;">// =&gt; 0</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#1E754F;">true</span><span style="color:#999999;">;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">// =&gt; 1</span></span>
<span class="line"><span style="color:#AB5959;">~~</span><span style="color:#2F798A;">1.9</span><span style="color:#999999;">;</span><span style="color:#393A34;">       </span><span style="color:#A0ADA0;">// =&gt; 1</span></span>
<span class="line"><span style="color:#AB5959;">~~-</span><span style="color:#2F798A;">1.9</span><span style="color:#999999;">;</span><span style="color:#393A34;">      </span><span style="color:#A0ADA0;">// =&gt; -1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div><ul><li>优化二</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">+</span><span style="color:#BD976A;">str</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//2</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">str</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">+</span><span style="color:#B07D48;">str</span><span style="color:#999999;">)</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>JS中的 &#39;+&#39; 号</p><p>当用作单目操作符的时候，+操作符不会对Number类型产生影响。但如果应用在字符串类型上，会将其转换为数字：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">25</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">a</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//25</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">50</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//String</span></span>
<span class="line"><span style="color:#BD976A;">b</span><span style="color:#666666;">=</span><span style="color:#CB7676;">+</span><span style="color:#BD976A;">b</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//Number</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">a</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">25</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">a</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">a</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//25</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">50</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">);</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//String</span></span>
<span class="line"><span style="color:#B07D48;">b</span><span style="color:#999999;">=</span><span style="color:#AB5959;">+</span><span style="color:#B07D48;">b</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">);</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//Number</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>通常使用+操作符可以快速地将字符串转换为数字。但是如果字符串字面量无法转化为数字的话，结果会出人意料：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">kangkang</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">a</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//NaN</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">a</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//Number</span></span>
<span class="line"><span style="color:#CB7676;">let</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">b</span><span style="color:#666666;">=</span><span style="color:#CB7676;">+</span><span style="color:#BD976A;">b</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">b</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">//0</span></span>
<span class="line"><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">);</span><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">//Number</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">a</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">kangkang</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">a</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">a</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//NaN</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">a</span><span style="color:#999999;">);</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//Number</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">b</span><span style="color:#999999;">=</span><span style="color:#AB5959;">+</span><span style="color:#B07D48;">b</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">b</span><span style="color:#999999;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//0</span></span>
<span class="line"><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">);</span><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">//Number</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>`,8),e=[o];function c(t,r,y,A,D,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{b as __pageData,d as default};
