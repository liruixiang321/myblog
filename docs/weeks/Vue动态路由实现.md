---
updateTime: "2025-01-14 15:47:44"
desc: "Vue动态路由实现"
tags: "Vue"
---

# Vue 动态路由实现

大概思路:获取用户信息==>获取用户权限==>动态生成路由==>路由筛选/处理(如果路由定义在后端则不需要进行筛选)==>添加到路由器中==>跳转到对应的路由==>退出登陆,重置路由

在进入路由之前：

1. 用户进入页面时，首先去查看缓存中是否存有用户的信息，如果没有则跳转到登录页面，登陆后获取用户信息，如果有则拿到用户信息
2. 根据用户信息去请求后端接口，获取用户权限，后端会将用户的菜单信息和 rolelist 进行返回,我们将这些信息存到 store 中
3. 根据用户权限信息，动态生成路由，并添加到路由器中。

## 动态路由实现

```tsx
/**
 * 匹配本地文件目录路由
 * @param {Array} routes - 路由数组
 * @param {string} parentPath - 父路径
 * @param {number} level - 层级，默认为0
 * @returns {Array} - 生成的路由数组
 */
function generateRouters(routes, parentPath = "", level = 0) {
  routes.forEach((item) => {
    let path; // 匹配文件路径
    if (level === 0) {
      // 第一层路由
      path = item.path;
      item.component = () => import(`@/views${path}/index.vue`);
    } else {
      // 子路由
      path = parentPath + `/${item.path}`;
      item.component = () => import(`@/views${path}/index.vue`);
    }
    if (item.children && item.children.length > 0) {
      item.children = generateRouters(item.children, path, level + 1);
    }
  });
  return routes;
}
```

## 注意点

### 历史记录不保留

```tsx
// 设置replace:true，这样导航就不会留下历史记录
next({ ...to, replace: true });
```

当设置了 replace: true 后，这次路由跳转就不会在浏览器的历史记录中生成新的记录。也就是说，用户在浏览器中点击“后退”按钮时，不会回到这次跳转之前的页面，而是直接跳过这个页面，回到更前面的页面。这在某些场景下很有用，例如在登录后直接跳转到首页，并且不希望用户通过后退按钮回到登录页。
