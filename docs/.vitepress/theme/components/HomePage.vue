<template>
  <div class="card-links">
    <!-- <div class="links-item" v-for="(item, index) in cardDataList" :key="index">
      <LinkCard :title="item.title" :details="item.details"></LinkCard>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  const cardDataList = [
    {
      title: "📚前端工作日常",
      details: "开发工具使用 踩坑记录...",
    },
    {
      title: "🙋前端基础知识",
      details: "Typescript 前端工程化...",
    },
    {
      title: "🛠️学习总结",
      details: "Vue3 leetcode...",
    },
  ];
</script>

<style scoped>
  .card-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;

    overflow: hidden;
    .post-item {
      margin: 10px;
    }
  }

  .links-item {
    margin: 10px;
  }
</style>
