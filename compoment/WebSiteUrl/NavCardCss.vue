<script setup>
const navData = [
  
  {
    id: 3,
    text: 'CSS字体生成器',
    link: 'https://typescale.com/?size=',
    desc: '手动生成需要的CSS字体代码',
  },
  {
    id: 4,
    text: 'CSS布局生成器',
    link: 'https://layout.bradwoods.io/',
    desc: '从几个布置好的Grid与flex中挑选想要的页面布局，生成代码',
  },
  {
    id: 5,
    text: '开箱即用CSS样式大全',
    link: 'https://uiverse.io/',
    desc: '开箱即用的按钮、复选框、开关、卡片、加载、输入框和表单CSS代码',
  },
  {
    id: 6,
    text: '全局阴影效果',
    link: 'https://www.joshwcomeau.com/css/designing-shadows/#layering',
    desc: '深入探讨CSS全局阴影效果的文章',
  },
  {
    id: 6,
    text: 'CSS布局样式',
    link: 'https://csslayout.io/',
    desc: 'tree/table/Tooltip/...',
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