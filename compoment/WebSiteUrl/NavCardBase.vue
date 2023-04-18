<script setup>
const navData = [
  {
    id: 1,
    text: 'iconfont-阿里巴巴矢量图标库',
    link: 'https://www.iconfont.cn/',
    desc: '矢量图标库',
  },
  {
    id: 1,
    text: 'mox.moe',
    link: 'https://mox.moe',
    desc: '漫画资源网站',
  },
  {
    id: 1,
    text: 'iconpark',
    link: 'https://iconpark.oceanengine.com/home',
    desc: '图标库',
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