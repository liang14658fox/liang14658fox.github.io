<script setup>
const demo = [
  {
    name: "基于Echarts的人物关系分析图",
    description:
      "使用Echarts基于vue3和vite搭建一个简单的电影小说人物关系分析图并且同步到Git Pages",
    tags: ["vue3", "vite", "vitepress", "博客"],
    link: "https://github.com/aiai0603/aiai0603.github.io",
    pre: "https://aiai0603.github.io/",
    href: "/articles/other/vitepress/01.vitepress的搭建",
    img: "/docs/react.jpg",
  },
  {
    name: "显卡性能天梯",
    description: "",
    tags: ["vue3", "ECharts", "node.js"],
    link: "",
    pre: "",
    href: "",
    img: "",
  },
  {
    name: "教育局官网",
    description: "",
    tags: ["vue2", "Element", "Ant D"],
    link: "",
    pre: "",
    href: "",
    img: "",
  },
  {
    name: "税务共享中心",
    description: "",
    tags: ["JavaScript"],
    link: "",
    pre: "",
    href: "",
    img: "",
  },
  {
    name: "中土世界地图剧情",
    description: "",
    tags: ["JavaScript"],
    link: "",
    pre: "",
    href: "",
    img: "",
  },
  {
    name: "科技树",
    description: "",
    tags: ["JavaScript"],
    link: "",
    pre: "",
    href: "",
    img: "",
  },

];

const online = []
</script>

<template>
  <div class="container">
    <div class="title">项目分享</div>
    <div class="desc">
      分享个人编写的部分开源前端项目和实用工具,包含项目在线地址，部分开源地址和教程，开源项目可以任意取用(禁止用于学术不端等途径)，欢迎大家为作者寻找项目问题和提出PR，任何问题请联系作者
      <a href="mailto:1098884683@qq.com">邮箱</a>
    </div>
    <div class="list">
      <div class="card" v-for="item in demo" :key="item.name">
        <div class="img-pic">
          <div class="img-shadow">
            <div class="card-desc">{{ item.description }}</div>
          </div>
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="card-word">
          <div class="card-name">{{ item.name }}</div>
          <div class="card-tag">
            <div v-for="tag in item.tags" :key="tag" class="card-tag-item">
              {{ tag }}
            </div>
          </div>
          <div class="card-footer">
            <img src="/text.png" alt="" class="card-footer-img" />
            <a :href="item.href" v-if="item.href" class="card-footer-word has">文档</a>
            <div v-else class="card-footer-word">暂无</div>
            <img src="/github.png" alt="" class="card-footer-img" />
            <a :href="item.link" v-if="item.link" class="card-footer-word has">Git</a>
            <div v-else class="card-footer-word">暂无</div>
            <img src="/online.png" alt="" class="card-footer-img" />
            <a :href="item.pre" v-if="item.pre" class="card-footer-word has">预览</a>
            <div v-else class="card-footer-word">暂无</div>
          </div>
        </div>
      </div>
    </div>

    <div class="title divide">一起开源</div>
    <div class="desc">
      和作者一起参与开源项目实践，充实你的简历，包括但不限于项目学习，日常开源DEMO编写，参与各类开发竞赛，字学计划，开源之夏，开源社区，以及日常项目外包等，任何问题请联系作者
      <a href="mailto:1098884683@qq.com">邮箱</a>
    </div>
    <div class="list">
      <div class="card" v-for="item in online" :key="item.name">
        <div class="img-pic">
          <div class="img-shadow">
            <div class="card-desc">{{ item.description }}</div>
          </div>
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="card-word">
          <div class="card-name">{{ item.name }}</div>

          <div class="card-tag">
            <div v-for="tag in item.tags" :key="tag" class="card-tag-item">
              {{ tag }}
            </div>
          </div>
          <div class="card-footer">
            <img src="/text.png" alt="" class="card-footer-img" />

            <a :href="item.href" v-if="item.href" class="card-footer-word has">文档</a>
            <div v-else class="card-footer-word">暂无</div>

            <img src="/github.png" alt="" class="card-footer-img" />

            <a :href="item.link" v-if="item.link" class="card-footer-word has">Git</a>
            <div v-else class="card-footer-word">暂无</div>

            <img src="/online.png" alt="" class="card-footer-img" />

            <a :href="item.pre" v-if="item.pre" class="card-footer-word has">预览</a>
            <div v-else class="card-footer-word">暂无</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.divide {
  margin-top: 64px;
}

.desc {
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  margin-bottom: 48px;

  a {
    color: var(--vp-c-brand);
  }
}

.title {
  display: flex;
  flex-flow: row;
  justify-content: center;
  line-height: 60px;
  width: 100%;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 24px;
}

.img-pic {
  position: relative;

  &:hover .img-shadow {
    opacity: 1;
    transition: all 0.5s;
  }
}

.img-shadow {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 10%;
}

.container {
  max-width: 1440px;
  margin: 24px auto;
  padding: 48px;

  @media (max-width: 1280px) {
    padding: 36px;
  }

  @media (max-width: 1080px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;

  @media (max-width: 1280px) {
    grid-gap: 36px;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.has:hover {
  color: var(--vp-c-brand);
}

.card {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);
    transition: all 0.3s;
  }

  &-footer {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 24px;

    &-img {
      width: 20px;
      margin-right: 12px;
    }

    &-word {
      margin-right: 16px;
    }
  }

  &-word {
    padding: 24px 36px 36px;
    display: flex;
    flex-flow: column;
  }

  &-name {
    font-size: 24px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 超出部分省略号 */
    word-break: break-all;
    /* break-all(允许在单词内换行。) */
    display: -webkit-box;
    /* 对象作为伸缩盒子模型显示 */
    -webkit-box-orient: vertical;
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-line-clamp: 1;
    /* 显示的行数 */
  }

  &-desc {
    margin-top: 16px;
    font-size: 18px;
    color: white;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 超出部分省略号 */
    word-break: break-all;
    /* break-all(允许在单词内换行。) */
    display: -webkit-box;
    /* 对象作为伸缩盒子模型显示 */
    -webkit-box-orient: vertical;
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-line-clamp: 3;
    /* 显示的行数 */
  }

  &-tag {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      cursor: pointer;
      margin-top: 16px;
      padding: 2px 12px;
      background: var(--vp-c-brand);
      margin-right: 12px;
      font-size: 14px;
      color: white;
      border-radius: 12px;
    }
  }
}
</style>