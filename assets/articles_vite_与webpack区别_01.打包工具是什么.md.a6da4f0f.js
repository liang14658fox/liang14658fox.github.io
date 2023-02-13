import{_ as e,o as a,c as t,a as i}from"./app.785f9fc9.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"打包&构建工具","slug":"打包-构建工具","link":"#打包-构建工具","children":[]}],"relativePath":"articles/vite/与webpack区别/01.打包工具是什么.md"}'),p={name:"articles/vite/与webpack区别/01.打包工具是什么.md"},_=i('<h3 id="打包-构建工具" tabindex="-1">打包&amp;构建工具 <a class="header-anchor" href="#打包-构建工具" aria-hidden="true">#</a></h3><p>历史上先后出现了一系列构建工具，它们各有优缺点。由于前端工程师很熟悉JavaScript，Node.js又可以胜任所有构建需求，所以大多数构建工具都是用Node.js开发的。本文就来一一介绍它们。</p><p>前端技术发展之快，各种可以提高开发效率的新思想和框架层出不穷。但是它们都有一个共同点：源代码无法直接运行，必须通过转换后才可以正常运行。</p><p>构建就是做这件事情，将源代码转换成可执行的JavaScript、CSS、HTML代码，包括如下内容。</p><ul><li><p>代码转换：将TypeScript编译成JavaScript、将SCSS编译成CSS等。</p></li><li><p>文件优化：压缩JavaScript、CSS、HTML代码，压缩合并图片等。</p></li><li><p>代码分割：提取多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载。</p></li><li><p>模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。</p></li><li><p>自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。</p></li><li><p>代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。</p></li><li><p>自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统。</p></li></ul><p>构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。构建为前端开发注入了更大的活力，解放了我们的生产力。</p>',6),l=[_];function r(c,s,o,n,d,S){return a(),t("div",null,l)}const u=e(p,[["render",r]]);export{m as __pageData,u as default};
