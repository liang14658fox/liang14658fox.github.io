import{_ as s,o as a,c as l,a as n}from"./app.abd710a5.js";const b=JSON.parse('{"title":"git与GitHub","description":"","frontmatter":{"title":"git与GitHub"},"headers":[{"level":2,"title":"1. 查看目前电脑的ssh key","slug":"_1-查看目前电脑的ssh-key","link":"#_1-查看目前电脑的ssh-key","children":[]},{"level":2,"title":"2. 何谓公钥","slug":"_2-何谓公钥","link":"#_2-何谓公钥","children":[]},{"level":2,"title":"3. 将本地项目上传至GitHub仓库","slug":"_3-将本地项目上传至github仓库","link":"#_3-将本地项目上传至github仓库","children":[]}],"relativePath":"documentcatalog/e_notebook/c_other/02.git与GitHub.md"}'),e={name:"documentcatalog/e_notebook/c_other/02.git与GitHub.md"},p=n(`<h2 id="_1-查看目前电脑的ssh-key" tabindex="-1">1. 查看目前电脑的ssh key <a class="header-anchor" href="#_1-查看目前电脑的ssh-key" aria-hidden="true">#</a></h2><ul><li>方法一</li></ul><ol><li><p>打开你的 git bash 窗口</p></li><li><p>进入 .ssh 目录：</p></li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><p>找到 id_rsa.pub 文件：ls</p></li><li><p>查看公钥：</p></li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">id_rsa.pub</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">id_rsa.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>方法二</li></ul><p>或者你也可以直接输入命令</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/id_rsa.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>方法三</li></ul><p>或者你也可以直接打开你用户（一般都是 Administrator）下的 .ssh 文件夹 打开它里面的 id_rsa.pub 文件</p><h2 id="_2-何谓公钥" tabindex="-1">2. 何谓公钥 <a class="header-anchor" href="#_2-何谓公钥" aria-hidden="true">#</a></h2><p>1.很多服务器都是需要认证的，ssh认证是其中的一种。在客户端生成公钥，把生成的公钥添加到服务器，你以后连接服务器就不用每次都输入用户名和密码了。 2.很多git服务器都是用ssh认证方式，你需要把你生成的公钥发送给代码仓库管理员，让他给你添加到服务器上，你就可以通过ssh自由地拉取和提交代码了。</p><ul><li>Git</li></ul><p>Git是一个开源的分布式版本控制系统，它可以记录文件在不同时间点的变更情况，以便用户回滚到任何一个历史版本。</p><ul><li>GitHub</li></ul><p>GitHub是一个基于Git的代码托管平台，支持多人协作开发，拥有强大的社区和工具，支持在线文件编辑、网页托管和博客等功能。</p><ul><li>Gitee</li></ul><p>Gitee是一个中国 开源软件托管平台，支持Git和SVN。</p><ul><li>GitLab</li></ul><p>GitLab是一个基于Git的开源代码托管平台，可以支持敏捷开发、代码审查和测试，同时支持多人协作开发。</p><ul><li>SVN</li></ul><p>SVN是一种集中式的版本控制系统，它可以记录文件在不同时间点的变更情况，但不支持分布式开发。</p><h2 id="_3-将本地项目上传至github仓库" tabindex="-1">3. 将本地项目上传至GitHub仓库 <a class="header-anchor" href="#_3-将本地项目上传至github仓库" aria-hidden="true">#</a></h2><p>mac还是win？ 电脑是否已有SSH key？</p><ol><li><p>先在GitHub上注册账号，登录GitHub</p></li><li><p>下载Git for Windows，安装即可</p></li><li><p>打开Git Bash，创建SSH key：</p></li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li><p>复制SSH public key，添加到GitHub账号中</p></li><li><p>设置GitHub用户名和邮箱：</p></li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Your Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">查看已经设置的GitHub账户</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><ol start="6"><li><p>创建一个新的仓库，点击“Clone or download”，复制URL</p></li><li><p>在Git Bash中克隆仓库：</p></li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://GitHub.com/username/project.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>进入仓库文件夹，添加文件：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="9"><li>提交文件：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="10"><li>推送文件到远程仓库：</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,40),i=[p];function t(o,r,c,d,u,C){return a(),l("div",null,i)}const y=s(e,[["render",t]]);export{b as __pageData,y as default};
