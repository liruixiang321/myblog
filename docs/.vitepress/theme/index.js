// .vitepress/theme/index.js
import "uno.css";
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
import sakura from "./components/Sakura.vue";
import LinkCard from "./components/LinkCard.vue";
import HomePage from "./components/HomePage.vue";
import "./style.css";

import { h } from "vue";
/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  Layout: () => {
    return h(MyLayout);
  },
  enhanceApp: ({ app }) => {
    app.component("Sakura", sakura);
    app.component("LinkCard", LinkCard);
    app.component("HomePage", HomePage);
  },
};
