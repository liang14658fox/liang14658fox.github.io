import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"6highlevel/Vue进阶/JSX根据对象数组禁用按钮.md","filePath":"6highlevel/Vue进阶/JSX根据对象数组禁用按钮.md"}'),p={name:"6highlevel/Vue进阶/JSX根据对象数组禁用按钮.md"},o=l(`<p>使用vue2+element开发表单业务时，常常需要列控制的功能，此时方案将选择为JSON/JSX二次封装的element表格。</p><p>当表格每一行的按钮需要根据当前所处行的内容来判断是否要禁用按钮时，需要用到render函数的属性判断。</p><p>代码如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            columnList: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    label: </span><span style="color:#9ECBFF;">&#39;操作&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    width: </span><span style="color:#9ECBFF;">&#39;120&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    align: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">column</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, {}, [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;el-link&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                style: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    color: row.isDisabled </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;禁用&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;#0052d9&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&#39;pointer-events&#39;</span><span style="color:#E1E4E8;">: row.isDisabled </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;禁用&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&#39;margin-right&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;10px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                on: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        _this.</span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(row)</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }, </span><span style="color:#9ECBFF;">&#39;编辑&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;el-link&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                on: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        _this.</span><span style="color:#B392F0;">deleteList</span><span style="color:#E1E4E8;">(row)</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    type: </span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }, </span><span style="color:#9ECBFF;">&#39;删除&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ])</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            columnList: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    label: </span><span style="color:#032F62;">&#39;操作&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    width: </span><span style="color:#032F62;">&#39;120&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    align: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">h</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">, </span><span style="color:#E36209;">column</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">, {}, [</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;el-link&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                                style: {</span></span>
<span class="line"><span style="color:#24292E;">                                    color: row.isDisabled </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;禁用&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;#0052d9&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&#39;pointer-events&#39;</span><span style="color:#24292E;">: row.isDisabled </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;禁用&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&#39;margin-right&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;10px&#39;</span></span>
<span class="line"><span style="color:#24292E;">                                },</span></span>
<span class="line"><span style="color:#24292E;">                                on: {</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                                        _this.</span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(row)</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            }, </span><span style="color:#032F62;">&#39;编辑&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;el-link&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                                on: {</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                                        _this.</span><span style="color:#6F42C1;">deleteList</span><span style="color:#24292E;">(row)</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                },</span></span>
<span class="line"><span style="color:#24292E;">                                props: {</span></span>
<span class="line"><span style="color:#24292E;">                                    type: </span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                },</span></span>
<span class="line"><span style="color:#24292E;">                            }, </span><span style="color:#032F62;">&#39;删除&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                        ])</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const _=s(p,[["render",c]]);export{d as __pageData,_ as default};
