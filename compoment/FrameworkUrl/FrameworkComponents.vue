<script setup>
const navData = [
  {
    id: 1,
    text: 'Element',
    link: 'https://element.eleme.cn/#/zh-CN',
    desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
  },
  {
    id: 2,
    text: 'Ant Design Vue',
    link: 'https://www.antdv.com/components/overview',
    desc: '适用于 Web 应用程序的企业级 UI 设计语言。一套开箱即用的高质量 Vue 组件。',
  },
  {
    id: 3,
    text: 'uView',
    link: 'https://www.uviewui.com/',
    desc: 'uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
  },
  {
    id: 4,
    text: 'Bootstrap',
    link: 'https://www.bootcss.com/',
    desc: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
  },
  {
    id: 5,
    text: 'View Design',
    link: 'https://www.iviewui.com/',
    desc: '基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务。',
  },
  {
    id: 1,
    text: 'Apache Echarts',
    link: 'https://echarts.apache.org/zh/index.html',
    desc: '一个基于 JavaScript 的开源可视化图表库',
  },
  {
    id: 1,
    text: 'uCharts',
    link: 'https://www.ucharts.cn/v2/#/',
    desc: '高性能跨平台图表库，PC、H5、APP、小程序、Vue、Taro',
  },
  {
    id: 1,
    text: 'ElementPlus',
    link: 'https://element-plus.gitee.io/zh-CN/component/button.html',
    desc: '基于 Vue 3，面向设计师和开发者的组件库',
  },
  {
    id: 5,
    text: 'Vis.js',
    link: 'https://visjs.org/',
    desc: 'A dynamic, browser based visualization library.',
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