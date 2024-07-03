---
updateTime: "2023-05-23 15:47:44"
desc: "主要介绍了Iconify上手使用以及在项目中如何简便的引入"
tags: "Iconify"
---

# Iconify 上手体验

今天学习了 Iconify，一方面之后的项目会使用到，另一方面是 Anthony Fu 大佬在社区一直在推荐并推动着这个项目，我也是通过了他的两篇博客[Journey with Icons (antfu.me)](https://antfu.me/posts/journey-with-icons) 和[Journey with Icons Continues (antfu.me)](https://antfu.me/posts/journey-with-icons-continues)来进行的学习，并上手体验了一下，以此来记录一下 😊。

[Iconify](https://iconify.design/)是一款收录各种图标供开发者使用的开源项目，提供了超过 150，000 个开源矢量图标，而且数目还在持续增长。

## purge-icons 插件

使用 iconify 服务器提供的在线图标会出现很多的不稳定因素，可能会出现在首次加载时闪烁的现象，解决方法就是将图标预加载和图标渲染进行同步，AnthonyFu 创作的这款 purgeicons 插件为我们完美的解决了问题。

> 它静态分析您的代码并按需生成[图标包](https://docs.iconify.design/sources/bundles/)。

![img](https://user-images.githubusercontent.com/11247099/89781398-ce625a80-db45-11ea-86bf-d50471c526b7.gif)

使用方法：

```js
import { createApp } from "vue";
import App from "./App.vue";

import "@purge-icons/generated"; // <-- This

createApp(App).mount("#app");
```

由于我的项目都是基于 Vben,而我也发现 Vben 也正是采用的这款方案，所以我直接在 Vben 项目上进行了实验。

在 Vben/build/vite/plugin/index.ts 中有对该插件的相关配置：

```js
import purgeIcons from 'vite-plugin-purge-icons';
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend(),
  ];
    ...
    vitePlugins.push(purgeIcons());
    return vitePlugins;
}
```

下面是 Vben 封装的 Icon.vue 组件

```vue
<template>
  <SvgIcon
    :size="size"
    :name="getSvgIcon"
    v-if="isSvgIcon"
    :class="[$attrs.class, 'anticon']"
    :spin="spin"
  />
  <span
    v-else
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    :style="getWrapStyle"
  ></span>
</template>
<script lang="ts">
  import type { PropType } from "vue";
  import {
    defineComponent,
    ref,
    watch,
    onMounted,
    nextTick,
    unref,
    computed,
    CSSProperties,
  } from "vue";
  import SvgIcon from "./SvgIcon.vue";
  import Iconify from "@purge-icons/generated";
  import { isString } from "/@/utils/is";
  import { propTypes } from "/@/utils/propTypes";

  const SVG_END_WITH_FLAG = "|svg";
  export default defineComponent({
    name: "Icon",
    components: { SvgIcon },
    props: {
      // icon name
      icon: propTypes.string, //组件接受icon的名字
      // icon color
      color: propTypes.string, //icon的颜色
      // icon size
      size: {
        //icon的大小
        type: [String, Number] as PropType<string | number>,
        default: 16,
      },
      spin: propTypes.bool.def(false), //是否有加载动画
      prefix: propTypes.string.def(""), //icon的前缀
    },
    setup(props) {
      const elRef = ref<ElRef>(null);
      const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));
      const getSvgIcon = computed(() =>
        props.icon.replace(SVG_END_WITH_FLAG, "")
      );
      const getIconRef = computed(
        () => `${props.prefix ? props.prefix + ":" : ""}${props.icon}`
      );

      const update = async () => {
        if (unref(isSvgIcon)) return;

        const el = unref(elRef);
        if (!el) return;

        await nextTick();
        const icon = unref(getIconRef);
        if (!icon) return;

        const svg = Iconify.renderSVG(icon, {});
        //对图标进行渲染
        if (svg) {
          el.textContent = "";
          el.appendChild(svg);
        } else {
          const span = document.createElement("span");
          span.className = "iconify";
          span.dataset.icon = icon;
          el.textContent = "";
          el.appendChild(span);
        }
      };

      const getWrapStyle = computed((): CSSProperties => {
        const { size, color } = props;
        let fs = size;
        if (isString(size)) {
          fs = parseInt(size, 10);
        }

        return {
          fontSize: `${fs}px`,
          color: color,
          display: "inline-flex",
        };
      });

      watch(() => props.icon, update, { flush: "post" });

      onMounted(update);

      return { elRef, getWrapStyle, isSvgIcon, getSvgIcon };
    },
  });
</script>
<style lang="less">
  .app-iconify {
    display: inline-block;
    // vertical-align: middle;

    &-spin {
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    }
  }

  span.iconify {
    display: block;
    min-width: 1em;
    min-height: 1em;
    background-color: @iconify-bg-color;
    border-radius: 100%;
  }
</style>
```

在组件中使用

```vue
<CollapseContainer title="IconIfy 组件使用" class="my-5">
      <div class="flex flex-wrap justify-around">
        <Icon icon="ion:layers-outline" :size="30" />
        <Icon icon="ion:bar-chart-outline" :size="30" />
        <Icon icon="ion:tv-outline" :size="30" />
        <Icon icon="ion:settings-outline" :size="30" />
        <Icon icon="material-symbols:10k-outline" :size="30" />
        <Icon icon="emojione-v1:anxious-face-with-sweat" :size="30"/>
        <Icon icon="twemoji:face-with-hand-over-mouth"  size="30"/>
      </div>
    </CollapseContainer>
```

显示

![演示](../public/weeks//屏幕截图%202023-07-04%20164224.png)

## Icônes

类似于阿里的 iconfont 平台，可以自己挑选需要的图标库并进行下载，也是由 antfu 大佬进行开源

![演示](../public/weeks/屏幕截图%202023-07-04%20165056.png)

最方便的是可以下载对应的组件，直接解压到相关项目的目录中，以组件的形式直接引入到项目中，太方便啦 😎

## Iconify IntelliSense for VS Code

配套使用的还有 antfu 佬为编辑器开发的图标智能化插件

![演示](https://github.com/antfu/vscode-iconify/blob/main/screenshots/preface.png?raw=true)

可以是我们在编辑器中便可以看到图标，使用的时候先打出图标集名称，用`：`断开，插件会提供图标集下所有的图标可供搜索和选择。

![演示](../public/weeks/屏幕截图%202023-07-04%20171011.png)

## 新的解决发案(搭配自动导入插件)

> Vite 的核心概念之一是一切都是**按需的**。模块仅在被请求时进行转译。通过这种方式，Vite 服务器立即启动，而无需捆绑整个应用程序。此外，[Vite 的插件 API](https://vitejs.dev/guide/api-plugin.html) 是 [Rollup 插件系统](https://rollupjs.org/guide/en/#plugin-development)之上的扩展，它允许您对模块进行一些[自定义转换](https://rollupjs.org/guide/en/#transform)。
>
> 因此，如果我们以 Vite 的方式思考 - 也许我们可以在编译时而不是客户端解决这个问题！通过使用[虚拟模块](https://vitejs.dev/guide/api-plugin.html#importing-a-virtual-file)，我能够**即时**将图标作为组件提供，并将其作为[`vite-plugin-icon`](https://github.com/antfu/unplugin-icons)（重命名为稍后）。`unplugin-icons`

所以下面主要使用[unplugin-icons](https://github.com/antfu/unplugin-icons)来进行下面的实验

### 只安装一个图标集

### install

---

```bash
npm i -D unplugin-icons
```

安装 skill Icons

```bash
npm i -D @iconify-json/skill-icons
```

在 vite.config.js 中添加

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite"; //自动导入功能支持
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      //icons插件
      autoInstall: true, //可以在编译阶段自动引入未安装的图标
      compiler: "vue3",
    }),
    Components({
      resolvers: [
        IconsResolver({
          //通过resolver使其可以自动导入功能
          prefix: "icon", //{prefix}-{collection}-{icon}
        }),
      ],
    }),
  ],
});
```

在组件中使用

```vue
<template>
  <icon-SkillIcons-vue />
  <icon-twemoji:1st-place-medal
    style="font-size: 4em;color:blue"
  ></icon-twemoji:1st-place-medal>
  <icon-ic:baseline-11mp
    style="font-size: 3em; color: aquamarine;"
  ></icon-ic:baseline-11mp>
  <icon-ic:sharp-pause-circle />
  <icon-bi:1-circle-fill />
  <icon-carbon:align-box-top-left />
</template>
```
