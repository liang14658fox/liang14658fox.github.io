import{_ as n,C as o,o as p,c as t,H as e,w as c,k as s,a,Q as r}from"./chunks/framework.681fc4ae.js";const v=JSON.parse('{"title":"git命令","description":"","frontmatter":{"title":"git命令"},"headers":[],"relativePath":"5team/项目管理工具/Git/122.常用git命令.md","filePath":"5team/项目管理工具/Git/122.常用git命令.md"}'),y={name:"5team/项目管理工具/Git/122.常用git命令.md"},i=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"本页面文档暂未更新")],-1),E=s("h1",{id:"常用一些-git-命令",tabindex:"-1"},[a("常用一些 Git 命令 "),s("a",{class:"header-anchor",href:"#常用一些-git-命令","aria-label":'Permalink to "常用一些 Git 命令"'},"​")],-1),F=r(`<p>推荐 mac 用户安装 oh-my-zsh，在这备忘一些常用的命令，以及一些简写方式。</p><blockquote><p>以下参考自 <a href="https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git" target="_blank" rel="noreferrer">ohmyzsh git</a></p></blockquote><table><thead><tr><th style="text-align:center;">简写（Alias）</th><th style="text-align:center;">对应命令</th><th style="text-align:center;">详情</th></tr></thead><tbody><tr><td style="text-align:center;">gaa</td><td style="text-align:center;">git add --all</td><td style="text-align:center;">添加当前项目所有文件修改、增删的文件到缓存区</td></tr><tr><td style="text-align:center;">gb</td><td style="text-align:center;">git branch</td><td style="text-align:center;">查看分支列表</td></tr><tr><td style="text-align:center;">gc!</td><td style="text-align:center;">git commit -v --amend</td><td style="text-align:center;">修正上次提交，像 reabase 一样操作，每次提交执行一次，覆盖上一次提交，即可保证只有一个 commit</td></tr><tr><td style="text-align:center;">gcb</td><td style="text-align:center;">git checkout -b</td><td style="text-align:center;">基于当前分支切换新的分支</td></tr><tr><td style="text-align:center;">gcp</td><td style="text-align:center;">git cherry-pick</td><td style="text-align:center;">根据 commitId 拿某一次的提交</td></tr><tr><td style="text-align:center;">gbD</td><td style="text-align:center;">git branch -D</td><td style="text-align:center;">删除分支</td></tr><tr><td style="text-align:center;">glods</td><td style="text-align:center;">git log --graph --date=short</td><td style="text-align:center;">查看提交记录</td></tr><tr><td style="text-align:center;">gpf</td><td style="text-align:center;">git push --force</td><td style="text-align:center;">强制推送，一般用于 reabase 之后</td></tr></tbody></table><h2 id="删除其它分支" tabindex="-1">删除其它分支 <a class="header-anchor" href="#删除其它分支" aria-label="Permalink to &quot;删除其它分支&quot;">​</a></h2><p>这个是我经常会用到的，因为本地开发多次之后，使用 <code>git branch</code> 之后会发现有很多分支还在，为了保证「干净卫生」，所以就了解一下，可以执行如下命令。</p><ul><li>增强命令（master）</li></ul><blockquote><p>可以删除除开 master 以外的分支，但类似 <code>mr/master/xxx</code> 这样的带有 master 的删除不了。</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;master&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;master&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><ul><li>增强命令（main）</li></ul><blockquote><p>同上。</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;main&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;main&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><ul><li>增强命令（release）</li></ul><blockquote><p>同上。</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">release</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;release&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">release</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;release&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h2 id="rebase" tabindex="-1">rebase <a class="header-anchor" href="#rebase" aria-label="Permalink to &quot;rebase&quot;">​</a></h2><p>rebase 命令很强大，<code>git rebase -i HEAD~[num]</code> 和 <code>git pull --rebase</code> 等。</p><blockquote><p>推荐阅读 <a href="http://jartto.wang/2018/12/11/git-rebase/" target="_blank" rel="noreferrer">彻底搞懂 Git-Rebase</a></p></blockquote><h2 id="查看完整信息" tabindex="-1">查看完整信息 <a class="header-anchor" href="#查看完整信息" aria-label="Permalink to &quot;查看完整信息&quot;">​</a></h2><p>谁用谁知道！</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span></span></code></pre></div><h2 id="git-commit-提交规范" tabindex="-1">git commit 提交规范 <a class="header-anchor" href="#git-commit-提交规范" aria-label="Permalink to &quot;git commit 提交规范&quot;">​</a></h2><p>这里以 coding 工作台为例子，其它代码托管平台可能需要修改一下正则。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">^(feat</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">fix</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">docs</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">style</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">refactor</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">perf</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">test</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">build</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">revert</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">merge</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">chore</span><span style="color:#E1E4E8;">)(</span><span style="color:#B392F0;">\\(.+\\</span><span style="color:#E1E4E8;">))</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">*)#[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">-9]+</span><span style="color:#79B8FF;">\\s</span><span style="color:#E1E4E8;">+</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">^(Accept</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Request</span><span style="color:#E1E4E8;">)</span><span style="color:#79B8FF;">\\s</span><span style="color:#E1E4E8;">+#[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">-9]+:</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">\\(.+\\s+-&gt;\\s+.+\\</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">^(feat</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">fix</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">docs</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">refactor</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">perf</span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">test</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">build</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">revert</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">merge</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">chore</span><span style="color:#24292E;">)(</span><span style="color:#6F42C1;">\\(.+\\</span><span style="color:#24292E;">))</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.</span><span style="color:#24292E;">*)#[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">-9]+</span><span style="color:#005CC5;">\\s</span><span style="color:#24292E;">+</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">^(Accept</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Request</span><span style="color:#24292E;">)</span><span style="color:#005CC5;">\\s</span><span style="color:#24292E;">+#[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">-9]+:</span><span style="color:#005CC5;">\\s</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">\\(.+\\s+-&gt;\\s+.+\\</span><span style="color:#24292E;">))</span></span></code></pre></div><h3 id="书写工具辅助" tabindex="-1">书写工具辅助 <a class="header-anchor" href="#书写工具辅助" aria-label="Permalink to &quot;书写工具辅助&quot;">​</a></h3><p>第一种：</p><p>全局安装 <code>commitizen</code>，即可使用 <code>git cz</code> 命令取代 <code>git commit</code>，提供交互式选择界面，协助书写。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitizen</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.czrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-conventional-changelog</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.czrc</span></span></code></pre></div><blockquote><p>参考阅读 <a href="https://coding.net/help/docs/ci/practice/lint/git-commit.html#install" target="_blank" rel="noreferrer">Commit Message</a></p></blockquote><p>第二种：</p><p>更花哨一点，使用 <a href="https://github.com/streamich/git-cz" target="_blank" rel="noreferrer">git-cz</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git-cz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commitizen</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git-cz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git-cz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git-cz</span></span></code></pre></div><h2 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h2><p>平常需要切换分支，但有时候又不想要立即 commit 上去，于是可以通过 <code>git stash</code> 备份一下，主要的一些命令如下：</p><p>备份当前改动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span></code></pre></div><p>查看备份列表</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><p>恢复备份的改动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span></code></pre></div>`,39);function d(g,h,C,m,u,b){const l=o("VideoLink");return p(),t("div",null,[i,E,e(l,{bvId:"BV1ZP4y1Q76V"},{default:c(()=>[a("程序员进厂前必知必会 Git 技巧 | commit 提交规范 | rebase、amend 操作 B 站视频传送门")]),_:1}),F])}const k=n(y,[["render",d]]);export{v as __pageData,k as default};
