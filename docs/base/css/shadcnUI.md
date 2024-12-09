---
update: "2024-08-15 21:59:38"
desc: "深入解析 2023 年 GitHub 增长最快的 UI 组件库"
tags: "shadcnUI/组件库"
---

# shadcnUI 简介

shadcnUI 是一个基于 Tailwind CSS 和 React 构建的现代化 UI 组件库。它采用组件优先的设计理念，提供了一套完整的可重用、可定制的组件系统。

# shadcnUI 的核心优势

1. **组件设计理念**

   - 采用 Copy-Paste 方式，让开发者完全掌控组件代码
   - 无需额外的依赖管理，降低项目维护成本

2. **样式系统**

   - 基于 Tailwind CSS 构建，提供完整的主题定制能力
   - 支持暗黑模式和响应式设计
   - 提供符合 WAI-ARIA 规范的可访问性支持

3. **开发体验**
   - 提供 CLI 工具，快速安装和配置组件
   - 详尽的文档和示例代码
   - TypeScript 支持，提供完整的类型定义

# 快速上手

```jsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
    </div>
  );
}
```

# 样式定制方案

shadcnUI 提供了多层次的样式定制能力，让开发者能够精确控制组件的外观和行为：

## 1. 全局主题配置

通过修改 `tailwind.config.js` 来自定义全局主题：

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070f3',
          dark: '#0761d1',
          light: '#3291ff'
        }
      },
      borderRadius: {
        'custom': '0.5rem'
      }
    }
  }
```

## 2. 组件级别定制

使用 CSS 变量覆盖

```css
/* 修改按钮的基础样式 */
.button {
  --button-background: theme("colors.primary.DEFAULT");
  --button-hover: theme("colors.primary.dark");
}
```

通过 className 扩展

```jsx
<Button className="bg-custom-color hover:bg-custom-hover">自定义按钮</Button>
```

## 3. 组件变体

```tsx
// button.tsx
const buttonVariants = cva("rounded-md px-4 py-2 transition-colors", {
  variants: {
    variant: {
      default: "bg-primary text-white hover:bg-primary-dark",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      custom: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
```

## 暗黑模式适配

```tsx
/* 在暗黑模式下修改组件样式 */
@media (prefers-color-scheme: dark) {
  .button {
    --button-background: theme('colors.gray.800');
    --button-text: theme('colors.white');
  }
}
```
