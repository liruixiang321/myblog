---
layout: page
sidebar: false

hero:
  title: "作品集"
  subTitle: "工作+一些比较cool的东西"

types:
  - name: "组件库封装"
    desc: "个人组件库，集成了在工作中遇到的和一些有趣好看的组件"
    link: "/artworks/components.md"
    icon: "📝"
  - name: "简历自制"
    desc: "一个在线简历自制网站，支持pdf导出"
    link: "/artworks/resume.md"
    icon: "🏃"
  - name: "前端监控实践"
    desc: "前端监控sdk,个人实践产物"
    link: "/artworks/jiankong.md"
# flow: true
---

<script setup>
import BlogArchive from '../.vitepress/theme/view/BlogArchiveSidebar.vue'
</script>

<BlogArchive/>