import{_ as e,o as i,c as p,h as a}from"./app.779b484d.js";const S=JSON.parse('{"title":"打包&构建工具","description":"","frontmatter":{"title":"打包&构建工具"},"headers":[{"level":3,"title":"打包&构建工具","slug":"打包-构建工具","link":"#打包-构建工具","children":[]},{"level":2,"title":"1. webpack","slug":"_1-webpack","link":"#_1-webpack","children":[]},{"level":2,"title":"2. Vite","slug":"_2-vite","link":"#_2-vite","children":[]},{"level":2,"title":"3. Vite的优点","slug":"_3-vite的优点","link":"#_3-vite的优点","children":[]}],"relativePath":"markdown/directory_1_template/items_1_frame/part_1_build/list_1_create/012.webpack与vite.md"}'),t={name:"markdown/directory_1_template/items_1_frame/part_1_build/list_1_create/012.webpack与vite.md"},l=a('<h3 id="打包-构建工具" tabindex="-1">打包&amp;构建工具 <a class="header-anchor" href="#打包-构建工具" aria-hidden="true">#</a></h3><p>历史上先后出现了一系列构建工具，它们各有优缺点。由于前端工程师很熟悉JavaScript，Node.js又可以胜任所有构建需求，所以大多数构建工具都是用Node.js开发的。本文就来一一介绍它们。</p><p>前端技术发展之快，各种可以提高开发效率的新思想和框架层出不穷。但是它们都有一个共同点：源代码无法直接运行，必须通过转换后才可以正常运行。</p><p>构建就是做这件事情，将源代码转换成可执行的JavaScript、CSS、HTML代码，包括如下内容。</p><ul><li><p>代码转换：将TypeScript编译成JavaScript、将SCSS编译成CSS等。</p></li><li><p>文件优化：压缩JavaScript、CSS、HTML代码，压缩合并图片等。</p></li><li><p>代码分割：提取多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载。</p></li><li><p>模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。</p></li><li><p>自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。</p></li><li><p>代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。</p></li><li><p>自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统。</p></li></ul><p>构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。构建为前端开发注入了更大的活力，解放了我们的生产力。</p><h2 id="_1-webpack" tabindex="-1">1. webpack <a class="header-anchor" href="#_1-webpack" aria-hidden="true">#</a></h2><p>Webpack 会遍历你的应用程序中的所有文件，并将代码转换成开发服务器，Webpack 将整个代码渲染到一个开发环境中。</p><p>webpack从一个entry.js文件开始，将其依赖的所有js或者其他assets通过loader打包成一个的文件， 随后这个打包后的文件将被从server传递到客户端浏览器运行。</p><p>因为这样处理规则，当保存文件时，整个 JavaScript 包将由 Webpack 重新构建，这就是为什么更改可能需要长达 10 秒才能反映在浏览器中，更新速度会随着应用体积增长而直线下降。</p><h2 id="_2-vite" tabindex="-1">2. Vite <a class="header-anchor" href="#_2-vite" aria-hidden="true">#</a></h2><p>Vite 的工作方式不同，它不会遍历整个应用程序，Vite 只是转换当时正在使用的文件/模块。</p><p>Vite的核心理念：非打包开发构建</p><p>Vite 的核心思想：浏览器请求它时，使用 ES 模块转换并提供一段应用程序代码。</p><p>开始开发构建时，Vite将首先将的JavaScript 模块分为两类：依赖模块和源码模块。</p><p>依赖项模块是第三方依赖的代码，从node_modules文件夹中导入的JavaScript 模块。这些模块将使用esbuild进行处理和捆绑，esbuild是一个用 Go 编写的 JavaScript 打包工具，执行速度比 Webpack 快 10-100 倍。</p><p>源码模块是源代码，即业务代码，通常涉及特定库的扩展，如、.jsx或.vue文件.scss。</p><p>它使用基于路由的代码拆分来了解代码的哪些部分实际需要加载，因此，它不必重新打包所有内容。</p><p>它还使用现代浏览器中的原生 ES 模块支持来交付代码，这让浏览器可以在开发中承担打包工作。</p><p>在生产方面，虽然现在所有主流浏览器都支持原生 ES 模块，但它实现了诸如 tree-shaking、延迟加载和通用块拆分等性能优化技术，仍然比非打包应用程序带来更好的整体性能。出于这个原因，Vite附带了一个预先配置的build命令，该命令使用Rollup打包来打包和实现各种性能优化。</p><p>Webpack 这样的基于打包器的工作流必须在单个浏览器请求之前处理整个 JavaScript 模块，但 Vite 只在单个浏览器请求之前处理依赖模块。这就是为什么 Vite 能够比 Webpack 更快地处理开发构建。</p><h2 id="_3-vite的优点" tabindex="-1">3. Vite的优点 <a class="header-anchor" href="#_3-vite的优点" aria-hidden="true">#</a></h2><ul><li>极速的服务启动</li></ul><p>使用原生 ESM 文件，无需打包!</p><ul><li>轻量快速的热重载</li></ul><p>无论应用程序大小如何，都始终极快的模块热重载（HMR）</p><ul><li>丰富的功能</li></ul><p>对 TypeScript、JSX、CSS 等支持开箱即用</p><ul><li>优化的构建</li></ul><p>可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建</p><ul><li>通用的插件</li></ul><p>在开发和构建之间共享 Rollup-superset 插件接口</p><ul><li>完全类型化的API</li></ul><p>灵活的 API 和完整 TypeScript 类型</p>',34),r=[l];function c(_,s,d,n,o,u){return i(),p("div",null,r)}const v=e(t,[["render",c]]);export{S as __pageData,v as default};
