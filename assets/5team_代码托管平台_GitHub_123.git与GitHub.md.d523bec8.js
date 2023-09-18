import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.681fc4ae.js";const v=JSON.parse('{"title":"git与GitHub","description":"","frontmatter":{"title":"git与GitHub"},"headers":[],"relativePath":"5team/代码托管平台/GitHub/123.git与GitHub.md","filePath":"5team/代码托管平台/GitHub/123.git与GitHub.md"}'),n={name:"5team/代码托管平台/GitHub/123.git与GitHub.md"},p=l('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>此文档暂未更新</p></div><h2 id="_1-mac系统查看目前电脑的ssh-key" tabindex="-1">1. Mac系统查看目前电脑的ssh key <a class="header-anchor" href="#_1-mac系统查看目前电脑的ssh-key" aria-label="Permalink to &quot;1. Mac系统查看目前电脑的ssh key&quot;">​</a></h2><p>打开终端，直接输入命令</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">cat</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">~/.ssh/id_rsa.pub</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">cat</span><span style="color:#393A34;"> </span><span style="color:#B56959;">~/.ssh/id_rsa.pub</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-windows系统查看目前电脑的ssh-key" tabindex="-1">2. Windows系统查看目前电脑的ssh key <a class="header-anchor" href="#_2-windows系统查看目前电脑的ssh-key" aria-label="Permalink to &quot;2. Windows系统查看目前电脑的ssh key&quot;">​</a></h2><h2 id="_2-何谓公钥" tabindex="-1">2. 何谓公钥 <a class="header-anchor" href="#_2-何谓公钥" aria-label="Permalink to &quot;2. 何谓公钥&quot;">​</a></h2><p>1.很多服务器都是需要认证的，ssh认证是其中的一种。在客户端生成公钥，把生成的公钥添加到服务器，你以后连接服务器就不用每次都输入用户名和密码了。 2.很多git服务器都是用ssh认证方式，你需要把你生成的公钥发送给代码仓库管理员，让他给你添加到服务器上，你就可以通过ssh自由地拉取和提交代码了。</p><ul><li>Git</li></ul><p>Git是一个开源的分布式版本控制系统，它可以记录文件在不同时间点的变更情况，以便用户回滚到任何一个历史版本。</p><ul><li>GitHub</li></ul><p>GitHub是一个基于Git的代码托管平台，支持多人协作开发，拥有强大的社区和工具，支持在线文件编辑、网页托管和博客等功能。</p><ul><li>Gitee</li></ul><p>Gitee是一个中国 开源软件托管平台，支持Git和SVN。</p><ul><li>GitLab</li></ul><p>GitLab是一个基于Git的开源代码托管平台，可以支持敏捷开发、代码审查和测试，同时支持多人协作开发。</p><ul><li>SVN</li></ul><p>SVN是一种集中式的版本控制系统，它可以记录文件在不同时间点的变更情况，但不支持分布式开发。</p><h2 id="_3-将本地项目上传至github仓库" tabindex="-1">3. 将本地项目上传至GitHub仓库 <a class="header-anchor" href="#_3-将本地项目上传至github仓库" aria-label="Permalink to &quot;3. 将本地项目上传至GitHub仓库&quot;">​</a></h2><p>mac还是win？ 电脑是否已有SSH key？</p><ol><li><p>先在GitHub上注册账号，登录GitHub</p></li><li><p>下载Git for Windows，安装即可</p></li><li><p>打开Git Bash，创建SSH key：</p></li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">ssh-keygen</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-t</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">rsa</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-C</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">your_email@example.com</span><span style="color:#C98A7D99;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">ssh-keygen</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-t</span><span style="color:#393A34;"> </span><span style="color:#B56959;">rsa</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-C</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">your_email@example.com</span><span style="color:#B5695999;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li><p>复制SSH public key，添加到GitHub账号中</p></li><li><p>设置GitHub用户名和邮箱：</p></li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--global</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">user.name</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">Your Name</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--global</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">user.email</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">your_email@example.com</span><span style="color:#C98A7D99;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--global</span><span style="color:#393A34;"> </span><span style="color:#B56959;">user.name</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">Your Name</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B56959;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--global</span><span style="color:#393A34;"> </span><span style="color:#B56959;">user.email</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">your_email@example.com</span><span style="color:#B5695999;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">查看已经设置的GitHub账户</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><ol start="6"><li><p>创建一个新的仓库，点击“Clone or download”，复制URL</p></li><li><p>在Git Bash中克隆仓库：</p></li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">clone</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">https://GitHub.com/username/project.git</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">clone</span><span style="color:#393A34;"> </span><span style="color:#B56959;">https://GitHub.com/username/project.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>进入仓库文件夹，添加文件：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">.</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#B56959;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="9"><li>提交文件：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">commit</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-m</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">message</span><span style="color:#C98A7D99;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">commit</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-m</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">message</span><span style="color:#B5695999;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="10"><li>推送文件到远程仓库：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">push</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">origin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">master</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">push</span><span style="color:#393A34;"> </span><span style="color:#B56959;">origin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-mac系统将本地项目上传到github仓库" tabindex="-1">4. Mac系统将本地项目上传到github仓库 <a class="header-anchor" href="#_4-mac系统将本地项目上传到github仓库" aria-label="Permalink to &quot;4. Mac系统将本地项目上传到github仓库&quot;">​</a></h2><ul><li>前置条件</li></ul><ol><li></li><li></li></ol><h2 id="_5-mac系统新建github仓库git分支-并推送项目" tabindex="-1">5. Mac系统新建github仓库git分支，并推送项目 <a class="header-anchor" href="#_5-mac系统新建github仓库git分支-并推送项目" aria-label="Permalink to &quot;5. Mac系统新建github仓库git分支，并推送项目&quot;">​</a></h2><ul><li>查看本地分支</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看远程分支</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看所有分支</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>新增本地分支 <code>master</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>将新建的本地分支 <code>master</code> 推送到远程分支</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>将项目推送到新建的分支 <code>master</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>删除本地分支 <code>master</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>202304018 15:37测试</p>',51),o=[p];function i(t,c,r,d,u,h){return a(),e("div",null,o)}const b=s(n,[["render",i]]);export{v as __pageData,b as default};
