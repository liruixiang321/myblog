<template>
  <div class="lg:sticky lg:top-20">
    <!-- 类别 -->

    <!-- 随机一言 -->
    <div
      @click="openLink()"
      class="stript flex gap-2 py-2 mt-4 rounded-lg shadow-md bg-amber-100/80 dark:bg-amber-950/80"
      v-if="quoteInfo.string"
    >
      <span class="self-start text-2xl">“</span>
      <div class="flex-1 my-4 indent-4">
        <h1>{{ quoteInfo.string }}</h1>
        <p v-if="quoteInfo.from" class="text-right">
          —— 《{{ quoteInfo.from }}》
        </p>
      </div>
      <span class="self-end text-2xl">”</span>
    </div>
    <!--TODO: 推荐阅读 -->
    <!-- <div class="p-4 mt-6 bg-slate-200">
      <div v-for="(post, index) in features" :key="index">
        <p>{{ post.frontmatter.desc }}</p>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from "vue";
  import { useRouter } from "vitepress";

  const router = useRouter();
  // 随机一言
  const quoteInfo = reactive({
    string: "",
    from: "",
  });
  const openLink = () => router.go("/myblog/artworks/jiankong");
  onMounted(async () => {
    fetch("https://v1.hitokoto.cn?c=a&c=b&c=d&c=i&min_length=10")
      .then((response) => response.json())
      .then(({ hitokoto, from }) => {
        quoteInfo.string = hitokoto;
        quoteInfo.from = from;
      })
      .catch(console.error);
  });
</script>
<style></style>
