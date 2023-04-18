import{_ as e,o as t,c as l,a}from"./app.abd710a5.js";const o="/lifecycle.png",f=JSON.parse('{"title":"Vue生命周期","description":"","frontmatter":{"title":"Vue生命周期"},"headers":[{"level":2,"title":"01. Vue生命周期","slug":"_01-vue生命周期","link":"#_01-vue生命周期","children":[]},{"level":2,"title":"02. mounted 和 created","slug":"_02-mounted-和-created","link":"#_02-mounted-和-created","children":[]}],"relativePath":"documentcatalog/e_notebook/b_underlying_source_code/01.生命周期.md"}'),_={name:"documentcatalog/e_notebook/b_underlying_source_code/01.生命周期.md"},c=a('<h2 id="_01-vue生命周期" tabindex="-1">01. Vue生命周期 <a class="header-anchor" href="#_01-vue生命周期" aria-hidden="true">#</a></h2><p><img src="'+o+'" alt="lifecycle"></p><h2 id="_02-mounted-和-created" tabindex="-1">02. mounted 和 created <a class="header-anchor" href="#_02-mounted-和-created" aria-hidden="true">#</a></h2><ul><li>相同点：</li></ul><p>都是Vue实例的生命周期钩子，它们都可以用来在一个实例被创建出来之后执行代码。</p><ul><li>不同点：</li></ul><ol><li>created 会在实例创建完成后被立即调用，而 mounted 会在挂载元素到实例上时被调用。</li><li>created 不会挂载 DOM 元素，而 mounted 会把实例挂载到 DOM 元素上。</li></ol><ul><li>应该使用：</li></ul><ol><li>created 适合在实例创建完成之后，进行数据的初始化，比如从后台获取数据，初始化实例的数据等。</li><li>mounted 适合在挂载 DOM 元素后，进行 DOM 操作，比如初始化插件，获取 DOM 元素属性等。</li></ol>',9),d=[c];function i(n,r,u,s,m,h){return t(),l("div",null,d)}const g=e(_,[["render",i]]);export{f as __pageData,g as default};
