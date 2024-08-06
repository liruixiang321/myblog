// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme-without-fonts";
import MyLayout from "./MyLayout.vue";
import sakura from "./components/Sakura.vue";
import LinkCard from "./components/LinkCard.vue";
import HomePage from "./components/HomePage.vue";
import "./styles/vars.css";
import "./styles/article.css";
import "./styles/vp-code-group.css";
import "uno.css";
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

if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome"))
    document.documentElement.classList.add("browser-chrome");
  else if (browser.includes("firefox"))
    document.documentElement.classList.add("browser-firefox");
  else if (browser.includes("safari"))
    document.documentElement.classList.add("browser-safari");
}
