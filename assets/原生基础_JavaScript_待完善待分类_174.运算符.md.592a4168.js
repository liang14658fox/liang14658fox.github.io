import{_ as a,o as e,c as r,Q as o}from"./chunks/framework.681fc4ae.js";const m=JSON.parse('{"title":"1 运算符","description":"","frontmatter":{},"headers":[],"relativePath":"原生基础/JavaScript/待完善待分类/174.运算符.md","filePath":"原生基础/JavaScript/待完善待分类/174.运算符.md","lastUpdated":1719474694000}'),t={name:"原生基础/JavaScript/待完善待分类/174.运算符.md"},i=o('<h1 id="_1-运算符" tabindex="-1">1 运算符 <a class="header-anchor" href="#_1-运算符" aria-label="Permalink to &quot;1 运算符&quot;">​</a></h1><h2 id="_1-1-赋值运算符-assignment-operators" tabindex="-1">1.1 赋值运算符（Assignment operators） <a class="header-anchor" href="#_1-1-赋值运算符-assignment-operators" aria-label="Permalink to &quot;1.1 赋值运算符（Assignment operators）&quot;">​</a></h2><h3 id="解构" tabindex="-1">解构 <a class="header-anchor" href="#解构" aria-label="Permalink to &quot;解构&quot;">​</a></h3><h2 id="_1-2-比较运算符-comparison-operators" tabindex="-1">1.2 比较运算符（Comparison operators） <a class="header-anchor" href="#_1-2-比较运算符-comparison-operators" aria-label="Permalink to &quot;1.2 比较运算符（Comparison operators）&quot;">​</a></h2><h2 id="_1-3-算数运算符-arithmetic-operators" tabindex="-1">1.3 算数运算符（Arithmetic operators） <a class="header-anchor" href="#_1-3-算数运算符-arithmetic-operators" aria-label="Permalink to &quot;1.3 算数运算符（Arithmetic operators）&quot;">​</a></h2><h2 id="_1-4-位运算符-bitwise-operators" tabindex="-1">1.4 位运算符（Bitwise operators） <a class="header-anchor" href="#_1-4-位运算符-bitwise-operators" aria-label="Permalink to &quot;1.4 位运算符（Bitwise operators）&quot;">​</a></h2><h3 id="位逻辑运算符" tabindex="-1">位逻辑运算符 <a class="header-anchor" href="#位逻辑运算符" aria-label="Permalink to &quot;位逻辑运算符&quot;">​</a></h3><h3 id="移位运算符" tabindex="-1">移位运算符 <a class="header-anchor" href="#移位运算符" aria-label="Permalink to &quot;移位运算符&quot;">​</a></h3><h2 id="_1-5-逻辑运算符-logical-operators" tabindex="-1">1.5 逻辑运算符（Logical operators） <a class="header-anchor" href="#_1-5-逻辑运算符-logical-operators" aria-label="Permalink to &quot;1.5 逻辑运算符（Logical operators）&quot;">​</a></h2><h3 id="短路求值" tabindex="-1">短路求值 <a class="header-anchor" href="#短路求值" aria-label="Permalink to &quot;短路求值&quot;">​</a></h3><h2 id="_1-6-字符串运算符-string-operators" tabindex="-1">1.6 字符串运算符（String operators） <a class="header-anchor" href="#_1-6-字符串运算符-string-operators" aria-label="Permalink to &quot;1.6 字符串运算符（String operators）&quot;">​</a></h2><h2 id="_1-7-条件-三元-运算符-conditional-operator" tabindex="-1">1.7 条件（三元）运算符（Conditional operator） <a class="header-anchor" href="#_1-7-条件-三元-运算符-conditional-operator" aria-label="Permalink to &quot;1.7 条件（三元）运算符（Conditional operator）&quot;">​</a></h2><h2 id="_1-8-逗号运算符-comma-operator" tabindex="-1">1.8 逗号运算符（Comma operator） <a class="header-anchor" href="#_1-8-逗号运算符-comma-operator" aria-label="Permalink to &quot;1.8 逗号运算符（Comma operator）&quot;">​</a></h2><h2 id="_1-9-一元运算符-unary-operators" tabindex="-1">1.9 一元运算符（Unary operators） <a class="header-anchor" href="#_1-9-一元运算符-unary-operators" aria-label="Permalink to &quot;1.9 一元运算符（Unary operators）&quot;">​</a></h2><h3 id="一元操作符" tabindex="-1">一元操作符 <a class="header-anchor" href="#一元操作符" aria-label="Permalink to &quot;一元操作符&quot;">​</a></h3><p>delete</p><p>typeof</p><p>void</p><h2 id="_1-10-关系运算符-relational-operator" tabindex="-1">1.10 关系运算符（Relational operator） <a class="header-anchor" href="#_1-10-关系运算符-relational-operator" aria-label="Permalink to &quot;1.10 关系运算符（Relational operator）&quot;">​</a></h2><p>in</p><p>instanceof</p><h2 id="_1-11-运算符优先级" tabindex="-1">1.11 运算符优先级 <a class="header-anchor" href="#_1-11-运算符优先级" aria-label="Permalink to &quot;1.11 运算符优先级&quot;">​</a></h2><h1 id="_2-表达式" tabindex="-1">2 表达式 <a class="header-anchor" href="#_2-表达式" aria-label="Permalink to &quot;2 表达式&quot;">​</a></h1><p>表达式是一组代码的集合，它返回一个值</p><div class="info custom-block"><p class="custom-block-title">JavaScript 有以下表达式类型：</p><ol><li>算数：得出一个数字，例如 3.14159。（通常使用算数运算符）</li><li>字符串：得出一个字符串，例如，&quot;Fred&quot; 或 &quot;234&quot;。（通常使用字符串运算符。）</li><li>逻辑值：得出 true 或者 false。（经常涉及到逻辑运算符。）</li><li>基本表达式：javascript 中基本的关键字和一般表达式。</li><li>左值表达式：分配给左值。</li></ol></div><h2 id="_2-1-基本表达式" tabindex="-1">2.1 基本表达式 <a class="header-anchor" href="#_2-1-基本表达式" aria-label="Permalink to &quot;2.1 基本表达式&quot;">​</a></h2><h3 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h3><h3 id="分组操作符" tabindex="-1">分组操作符 <a class="header-anchor" href="#分组操作符" aria-label="Permalink to &quot;分组操作符&quot;">​</a></h3><h2 id="_2-2-左值表达式" tabindex="-1">2.2 左值表达式 <a class="header-anchor" href="#_2-2-左值表达式" aria-label="Permalink to &quot;2.2 左值表达式&quot;">​</a></h2><h3 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-label="Permalink to &quot;new&quot;">​</a></h3><h3 id="super" tabindex="-1">super <a class="header-anchor" href="#super" aria-label="Permalink to &quot;super&quot;">​</a></h3>',31),l=[i];function h(s,n,d,c,p,u){return e(),r("div",null,l)}const b=a(t,[["render",h]]);export{m as __pageData,b as default};
