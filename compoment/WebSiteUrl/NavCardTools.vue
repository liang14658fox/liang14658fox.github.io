<script setup>
const navData = [
{
    id: 1,
    text: '一键配色生成',
    link: 'https://mycolor.space/?hex=%23845EC2&sub=1',
    desc: '根据任意颜色生成不同风格的配色方案',
  },
  {
    id: 2,
    text: '在线图片取色器',
    link: 'http://www.jiniannet.com/page/allcolor',
    desc: '上传图片在线点击取色',
  },
  {
    id: 2,
    text: '在线切图工具',
    link: 'https://tinypng.com/',
    desc: '上传图片并在线压缩图片大小，用于减少服务器压力',
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

<style scoped>

</style>