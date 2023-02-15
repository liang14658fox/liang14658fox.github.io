import{_ as l,o as p,c as o,a as n,d as s,t as e,b as a}from"./app.29c92ba3.js";const h=JSON.parse('{"title":"12. if-else 代码优化方案","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 三元表达式","slug":"_1-三元表达式","link":"#_1-三元表达式","children":[]},{"level":2,"title":"2. 合并条件表达式","slug":"_2-合并条件表达式","link":"#_2-合并条件表达式","children":[]},{"level":2,"title":"3. 提前 return，减少嵌套","slug":"_3-提前-return-减少嵌套","link":"#_3-提前-return-减少嵌套","children":[]},{"level":2,"title":"4. 主干代码置后，走正常流程","slug":"_4-主干代码置后-走正常流程","link":"#_4-主干代码置后-走正常流程","children":[]},{"level":2,"title":"5. 表驱动","slug":"_5-表驱动","link":"#_5-表驱动","children":[]},{"level":2,"title":"6. 离散化","slug":"_6-离散化","link":"#_6-离散化","children":[]},{"level":2,"title":"7. includes / indexOf","slug":"_7-includes-indexof","link":"#_7-includes-indexof","children":[]},{"level":2,"title":"8. 使用函数默认参数和 ??","slug":"_8-使用函数默认参数和","link":"#_8-使用函数默认参数和","children":[]}],"relativePath":"articles/javascript/javascript语法糖/01.优化if else语法方案.md"}'),t={name:"articles/javascript/javascript语法糖/01.优化if else语法方案.md"},c=a("",11),r=n("code",null,"v-bind",-1),y=n("code",null,"computed",-1),F=n("code",null,"if-else",-1),i=a("",66);function D(C,A,b,u,d,m){return p(),o("div",null,[c,n("p",null,[s("少数情况下要写嵌套三元表达式，例如 vue 的插值语法 "),n("code",null,e(),1),s(" 里或者 "),r,s(" 绑定的变量里（实际上可以写 "),y,s(" 等优化），又或者是 TS 类型体操的条件类型的时候必须写，那推荐下面这种格式的写法，可读性不比 "),F,s(" 差（bushi）：")]),i])}const g=l(t,[["render",D]]);export{h as __pageData,g as default};
