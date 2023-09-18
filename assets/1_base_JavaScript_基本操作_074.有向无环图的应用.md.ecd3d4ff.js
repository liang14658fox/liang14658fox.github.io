import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const A=JSON.parse('{"title":"DAG深度优先","description":"","frontmatter":{"title":"DAG深度优先"},"headers":[],"relativePath":"1_base_JavaScript/基本操作/074.有向无环图的应用.md","filePath":"1_base_JavaScript/基本操作/074.有向无环图的应用.md"}'),p={name:"1_base_JavaScript/基本操作/074.有向无环图的应用.md"},o=l(`<h2 id="深度优先遍历有向无环图" tabindex="-1">深度优先遍历有向无环图 <a class="header-anchor" href="#深度优先遍历有向无环图" aria-label="Permalink to &quot;深度优先遍历有向无环图&quot;">​</a></h2><p>深度优先遍历是一种用于遍历或搜索树或图的算法，它通过从根节点开始依次访问每个子节点，直到到达没有子节点的节点为止，然后返回到上一个未访问完的节点，继续访问其未访问的子节点。在此过程中，每个节点只被访问一次。</p><p>深度优先遍历有两种常见的实现方式：递归和迭代。</p><p>如果有向无环图的数据存储在一个对象数组中，可以先遍历数组，将所有节点初始化为active为true，同时给每个节点设置一个id属性，方便后面的操作。</p><p>然后再遍历一次数组，根据每个节点对象中提供的子节点信息，将节点之间的关联关系建立起来。这样就可以在遍历时方便地找到每个节点的子节点了。</p><p>最后使用递归方式，从根节点开始遍历整个DAG。在递归过程中，检查每个节点的active属性值，如果为f则将其所有子节点的active属性都设为f，然后继续遍历子节点，以此类推，直至遍历完整个DAG。</p><p>下面是一个使用JavaScript实现的示例代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 定义一个有向无环图</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> graph </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span><span style="color:#9ECBFF;">&#39;B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;B&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span><span style="color:#9ECBFF;">&#39;D&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span><span style="color:#9ECBFF;">&#39;F&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;D&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span><span style="color:#9ECBFF;">&#39;G&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: [</span><span style="color:#9ECBFF;">&#39;G&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;H&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;F&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;G&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;H&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将节点数组转换为节点对象字典，方便查找</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> nodes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> graph) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodes[node.id] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { id: node.id, active: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, children: [] };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 建立节点之间的关联关系</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> graph) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nodes[node.id];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> childId </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> node.children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> child </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nodes[childId];</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent.children.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历DAG的函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">node.active) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果当前节点的active属性为f，将其所有子节点的active属性也设置为f</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> child </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> node.children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            child.active </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果当前节点的active属性为t，继续遍历其子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> child </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> node.children) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例：从起始节点A开始遍历整个DAG</span></span>
<span class="line"><span style="color:#B392F0;">traverseDAG</span><span style="color:#E1E4E8;">(nodes[</span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 定义一个有向无环图</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> graph </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;B&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;D&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span><span style="color:#032F62;">&#39;G&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span><span style="color:#032F62;">&#39;G&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;H&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;F&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: []</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;G&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: []</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;H&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将节点数组转换为节点对象字典，方便查找</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> nodes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> graph) {</span></span>
<span class="line"><span style="color:#24292E;">    nodes[node.id] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { id: node.id, active: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, children: [] };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 建立节点之间的关联关系</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> graph) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nodes[node.id];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> childId </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> node.children) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> child </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nodes[childId];</span></span>
<span class="line"><span style="color:#24292E;">        parent.children.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历DAG的函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">node.active) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果当前节点的active属性为f，将其所有子节点的active属性也设置为f</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> child </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> node.children) {</span></span>
<span class="line"><span style="color:#24292E;">            child.active </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果当前节点的active属性为t，继续遍历其子节点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> child </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> node.children) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(child);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例：从起始节点A开始遍历整个DAG</span></span>
<span class="line"><span style="color:#6F42C1;">traverseDAG</span><span style="color:#24292E;">(nodes[</span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">]);</span></span></code></pre></div><p>这个示例中先将有向无环图转换为节点对象字典，方便后续查找节点。然后使用两次遍历，一次建立节点之间的关联关系，一次进行DAG的遍历。</p><h2 id="为只有父节点信息的节点添加child" tabindex="-1">为只有父节点信息的节点添加child <a class="header-anchor" href="#为只有父节点信息的节点添加child" aria-label="Permalink to &quot;为只有父节点信息的节点添加child&quot;">​</a></h2><p>如果对象数组中，每个节点只有父节点的name信息，而没有子节点的信息，通过什么方式才能给节点添加他们的子节点信息呢？</p><p>可以使用循环遍历这个对象数组，在遍历每个节点的同时，根据它们的父节点name信息来找到它们的子节点，然后将子节点信息添加到相应的节点中。具体步骤如下：</p><ol><li>创建一个空的子节点存储对象。</li><li>在循环中遍历每个节点。</li><li>对于每个节点，在循环中再次遍历整个对象数组。</li><li>对于每个对象数组中的节点，检查它的父节点name信息是否与当前节点的name信息相同。</li><li>如果是，将这个节点添加到当前节点的子节点数组中。</li><li>继续遍历，直到整个对象数组中的所有节点都被处理完毕。</li><li>返回处理完毕后的对象数组，每个节点都包含相应的子节点信息。</li></ol><p>以下是一个示例实现：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 假设你的对象数组名为nodeArray，每个节点只有name和parentName信息</span></span>
<span class="line"><span style="color:#6A737D;">// 创建空的子节点存储对象</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> nodesWithChildren </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历每个节点</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nodeArray.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建一个新的对象，将当前节点信息添加到其中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: nodeArray[i].name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历整个对象数组，查找当前节点的子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nodeArray.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (nodeArray[j].parentName </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> currentNode.name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 如果找到了子节点，就将其添加到当前节点的子节点数组中</span></span>
<span class="line"><span style="color:#E1E4E8;">            currentNode.children.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(nodeArray[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将包含子节点信息的当前节点添加到新的存储对象中</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodesWithChildren.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回包含子节点信息的新对象数组</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> nodesWithChildren;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 假设你的对象数组名为nodeArray，每个节点只有name和parentName信息</span></span>
<span class="line"><span style="color:#6A737D;">// 创建空的子节点存储对象</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> nodesWithChildren </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历每个节点</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nodeArray.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建一个新的对象，将当前节点信息添加到其中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        name: nodeArray[i].name,</span></span>
<span class="line"><span style="color:#24292E;">        children: []</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历整个对象数组，查找当前节点的子节点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nodeArray.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nodeArray[j].parentName </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> currentNode.name) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 如果找到了子节点，就将其添加到当前节点的子节点数组中</span></span>
<span class="line"><span style="color:#24292E;">            currentNode.children.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(nodeArray[j]);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将包含子节点信息的当前节点添加到新的存储对象中</span></span>
<span class="line"><span style="color:#24292E;">    nodesWithChildren.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(currentNode);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回包含子节点信息的新对象数组</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nodesWithChildren;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">浅拷贝</p><p>利用浅拷贝特性，不需要转换数组赋值给原来的data</p></div><div class="warning custom-block"><p class="custom-block-title">转换为数组</p><p>将对象结构转换为数组需要图形结构扁平化相关操作，而不是仅仅<code>const result = Object.values(nodes);</code></p></div>`,17),e=[o];function c(r,t,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{A as __pageData,h as default};
