<script setup>
const navData = [
  // {
  //   id: 1,
  //   text: 'JQuery',
  //   link: 'https://jquery.com/',
  //   desc: '',
  // },
  {
    id: 1,
    text: 'Vue',
    link: 'https://cn.vuejs.org/',
    desc: '一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型。',
  },
  {
    id: 2,
    text: 'Vue Router',
    link: 'https://router.vuejs.org/zh/',
    desc: 'Vue.js 的官方路由，为 Vue.js 提供富有表现力、可配置的、方便的路由',
  },
  {
    id: 3,
    text: 'Axios文档',
    link: 'https://www.axios-http.cn/',
    desc: 'Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
  },
  {
    id: 3,
    text: 'Axios中文网',
    link: 'http://www.axios-js.com/',
    desc: '易用、简洁且高效的http库',
  },
  {
    id: 4,
    text: 'React',
    link: 'http://react.caibaojian.com.cn/',
    desc: '用于构建用户界面的 JavaScript 库，目前国外和中国南方城市比较流行。',
  },{
    id: 5,
    text: 'Axios',
    link: 'https://www.axios-http.cn/',
    desc: 'Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
  },
  
]
</script>

<template>
  <div class="grid auto-rows-auto grid-cols-2 gap-[12px]">
    <section v-for="navItem of navData" :key="navItem.id">
      <a :href="navItem.link" rel="noreferrer" target="_blank" class="group">
        <section
          class="flex h-full flex-col border-1  border-solid border-[var(--vp-c-border)]/[.55] rounded-[8px] leading-[24px] px-[24px] py-[12px] group-hover:shadow">
          <span class="text-gray-600 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100">
            {{ navItem.text }}
          </span>
          <span
            class="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50 min-h-[20px]">
            {{ navItem.desc ?? navItem.text }}
          </span>
        </section>
      </a>
    </section>
  </div>
</template>

<style scoped></style>