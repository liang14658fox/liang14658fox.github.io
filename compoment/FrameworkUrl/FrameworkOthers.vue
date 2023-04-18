<script setup>
const navData = [
  {
    id: 1,
    text: 'Vite',
    link: 'https://cn.vitejs.dev/',
    desc: 'Vite是一种新型前端构建工具，能够显著提升前端开发体验。',
  },
  {
    id: 2,
    text: 'RuoYi',
    link: 'http://doc.ruoyi.vip/',
    desc: '基于SpringBoot、Shiro、Mybatis的权限后台管理系统',
  },
  {
    id: 3,
    text: 'uni-app',
    link: 'https://uniapp.dcloud.net.cn/',
    desc: 'ni-app 是一个使用 Vue.js 开发所有前端应用的框架，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用。',
  },
  {
    id: 4,
    text: 'wangEditor 5',
    link: 'https://www.wangeditor.com/',
    desc: '开源 Web 富文本编辑器，开箱即用，配置简单',
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