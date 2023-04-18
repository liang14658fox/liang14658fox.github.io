<script setup>
const navData = [
  {
    id: 1,
    text: 'w3school 在线教程',
    link: 'https://www.w3school.com.cn/',
    desc: '较为全面的前端技术栈教程，配合在线用例。比较权威的教程网站。',
  },
  {
    id: 2,
    text: '阮一峰Flex布局教程',
    link: 'https://www.ruanyifeng.com/blog/2015/07/flex-examples.html',
    desc: '网友介绍的Flex教程网站',
  },
  {
    id: 2,
    text: 'Flex布局说明',
    link: 'https://yoksel.github.io/flex-cheatsheet/',
    desc: '网友介绍的Flex教程网站',
  }, {
    id: 2,
    text: '深入理解现代JavaScript文档',
    link: 'https://juejin.cn/post/7203651773621567525/',
    desc: '深入理解现代JavaScript文档',
  }, {
    id: 2,
    text: '深入理解现代JavaScript脑图代码',
    link: 'https://github.com/lgd8981289/book_read_quickly',
    desc: '深入理解现代JavaScript脑图代码',
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