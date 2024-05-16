// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  content: ["./docs/.vitepress/**/*.{vue,js}", "./docs/**/*.md"],
  theme: {
    // extend: {
    //   colors: {
    //     VPLight: "#3451b2",
    //     VPDark: "#a8b1ff",
    //   },
    // },
  },
  presets: [presetUno()],
  darkMode: "class",
});
