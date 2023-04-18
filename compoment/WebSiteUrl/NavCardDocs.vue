<script setup>
const navData = [
  {
    id: 1,
    text: 'ChoDocs',
    link: 'https://chodocs.cn/',
    desc: 'Front-end learning document collection. 一站式前端内容网站，包括学习路线、知识体系。',
  },
  {
    id: 2,
    text: 'I Dont Know JS',
    link: 'https://idkjs.mphy.top/',
    desc: 'JS 一些诡异的行为的解释和花里胡哨的操作，有些看着没啥用，实则蕴含了 JS 底层的一些原理。也包含了平时写代码时的一些技巧。',
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