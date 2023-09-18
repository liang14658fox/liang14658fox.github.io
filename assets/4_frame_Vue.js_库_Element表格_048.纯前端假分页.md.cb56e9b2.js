import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const d=JSON.parse('{"title":"纯前端分页","description":"","frontmatter":{"title":"纯前端分页"},"headers":[],"relativePath":"4_frame_Vue.js/库/Element表格/048.纯前端假分页.md","filePath":"4_frame_Vue.js/库/Element表格/048.纯前端假分页.md"}'),p={name:"4_frame_Vue.js/库/Element表格/048.纯前端假分页.md"},o=l(`<h3 id="纯前端分页" tabindex="-1">纯前端分页 <a class="header-anchor" href="#纯前端分页" aria-label="Permalink to &quot;纯前端分页&quot;">​</a></h3><p>使用Vue+element-UI，查询数据返回到前端表格，这个表格有分页数据。</p><p>当有多个tab栏，每隔tab栏都有一个独立的分页系统，这些分页会出现显示bug：</p><ul><li>当切换tab时，分页高亮会不动，而表格数据正确。</li></ul><p>需要data里面初始化paginationShow为true，然后使用v-if强制刷新组件即可。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeName&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;border-card&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@tab-click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleClick&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;border-card&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">el-tab-pane</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;纯前端分页&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;first&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">&lt;!-- 表格数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">&lt;!-- 这里是纯前端分页代码：slice，当然也可以在method里做这些事 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">&lt;!-- 这个表格还可以设置前端排序（:default-sort） --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData1.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100%&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:default-sort</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{prop: &#39;date&#39;, order: &#39;descending&#39;}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;日期&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sortable</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;180&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;姓名&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sortable</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;180&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;address&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;地址&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:formatter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;formatter&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">&lt;!-- 分页数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;block&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-pagination</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@size-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleSizeChange1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@current-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleCurrentChange1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">:current-page</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentPage1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:page-sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[5, 10, 20, 30]&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:page-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageSize1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;total, sizes, prev, pager, next, jumper&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:total</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;this.tableData1.length&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;/</span><span style="color:#85E89D;">el-pagination</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">el-tab-pane</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">el-tab-pane</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;解决分页bug&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;second&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData2.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">border</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100%&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selection&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;姓名&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sortable</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;180&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;日期&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">el-pagination</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@size-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleSizeChange2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@current-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleCurrentChange2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:current-page</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentPage2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:page-sizes</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[5, 10, 15, 20, 25]&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:page-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageSize2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;total, sizes, prev, pager, next, jumper&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:total</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData2.length&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;float:right;margin-top:15px;&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-pagination</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">el-tab-pane</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">el-tabs</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeName&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;border-card&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@tab-click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleClick&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;border-card&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">el-tab-pane</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;纯前端分页&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;first&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">&lt;!-- 表格数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">&lt;!-- 这里是纯前端分页代码：slice，当然也可以在method里做这些事 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">&lt;!-- 这个表格还可以设置前端排序（:default-sort） --&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData1.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100%&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:default-sort</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{prop: &#39;date&#39;, order: &#39;descending&#39;}&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;日期&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortable</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;180&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;姓名&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortable</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;180&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;address&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;地址&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:formatter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;formatter&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">&lt;!-- 分页数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;block&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-pagination</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@size-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleSizeChange1&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@current-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleCurrentChange1&quot;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">:current-page</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentPage1&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:page-sizes</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[5, 10, 20, 30]&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:page-size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageSize1&quot;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;total, sizes, prev, pager, next, jumper&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:total</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;this.tableData1.length&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;/</span><span style="color:#22863A;">el-pagination</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">el-tab-pane</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">el-tab-pane</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;解决分页bug&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;second&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData2.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">border</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100%&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selection&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;姓名&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortable</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;180&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;日期&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">el-pagination</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@size-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleSizeChange2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@current-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleCurrentChange2&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:current-page</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentPage2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:page-sizes</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[5, 10, 15, 20, 25]&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:page-size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageSize2&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;total, sizes, prev, pager, next, jumper&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:total</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData2.length&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;float:right;margin-top:15px;&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">el-pagination</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">el-tab-pane</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">el-tabs</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>Script代码</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>vue组件为单文件组件而非vue-cli。·</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 分页组件，当前页数：z</span></span>
<span class="line"><span style="color:#E1E4E8;">		currentPage1: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		currentPage2: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		pageSize1: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		pageSize2: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// tab栏组件：</span></span>
<span class="line"><span style="color:#E1E4E8;">		activeName: </span><span style="color:#9ECBFF;">&#39;first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 表格数据：</span></span>
<span class="line"><span style="color:#E1E4E8;">		tableData1: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-04&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1517 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1519 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎10&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;王小虎11&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		tableData2: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-04&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1517 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1519 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;10&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			date: </span><span style="color:#9ECBFF;">&#39;2016-05-03&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			name: </span><span style="color:#9ECBFF;">&#39;11&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			address: </span><span style="color:#9ECBFF;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}]</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handleClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tab</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(tab, event);</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">column</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> row.address;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handleSizeChange1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`每页 \${</span><span style="color:#E1E4E8;">val</span><span style="color:#9ECBFF;">} 条\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pageSize1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handleCurrentChange1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`当前页: \${</span><span style="color:#E1E4E8;">val</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentPage1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 每页多少条</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handleSizeChange2</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pageSize2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 当前页</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handleCurrentChange2</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentPage2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	data: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 分页组件，当前页数：z</span></span>
<span class="line"><span style="color:#24292E;">		currentPage1: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		currentPage2: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		pageSize1: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		pageSize2: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// tab栏组件：</span></span>
<span class="line"><span style="color:#24292E;">		activeName: </span><span style="color:#032F62;">&#39;first&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 表格数据：</span></span>
<span class="line"><span style="color:#24292E;">		tableData1: [{</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-04&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1517 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1519 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;王小虎11&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		tableData2: [{</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-04&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1517 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1519 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			date: </span><span style="color:#032F62;">&#39;2016-05-03&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			name: </span><span style="color:#032F62;">&#39;11&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			address: </span><span style="color:#032F62;">&#39;上海市普陀区金沙江路 1516 弄&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}]</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handleClick</span><span style="color:#24292E;">(</span><span style="color:#E36209;">tab</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(tab, event);</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">row</span><span style="color:#24292E;">, </span><span style="color:#E36209;">column</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> row.address;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handleSizeChange1</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`每页 \${</span><span style="color:#24292E;">val</span><span style="color:#032F62;">} 条\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pageSize1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handleCurrentChange1</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`当前页: \${</span><span style="color:#24292E;">val</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentPage1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 每页多少条</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handleSizeChange2</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pageSize2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 当前页</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handleCurrentChange2</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentPage2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,9),t=[o];function e(c,E,r,y,i,F){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{d as __pageData,C as default};
