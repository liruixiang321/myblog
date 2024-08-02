---
updateTime: "2024-08-01 10:44:48"
desc: "Umi上手"
tags: "Umi/学习"
---

# UmiJS

一些特别注意的部分

## 路由

- 在全局布局 src/layouts/index 中，通过 <Outlet/> 来渲染子路由：

### wrappers

配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验：

```js
export default {
  routes: [
    { path: "/user", component: "user", wrappers: ["@/wrappers/auth"] },
    { path: "/login", component: "login" },
  ],
};
```

在 auth 组件中:

```js
import { Navigate, Outlet } from "umi";

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
```

而 umi 官方推荐使用高阶组件来使用 wrapper,例如这样

```js
// src/hocs/withAuth.tsx
import { Navigate } from "umi";

const withAuth = (Component) => () => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
};
// src/pages/user.tsx

const TheOldPage = () => {
  // ...
};

export default withAuth(TheOldPage);
```

### 跳转

#### history

```jsx
import { history } from "umi";

// 跳转到指定路由
history.push("/list");

// 带参数跳转到指定路由
history.push("/list?a=b&c=d#anchor", state);
history.push(
  {
    pathname: "/list",
    search: "?a=b&c=d",
    hash: "anchor",
  },
  {
    some: "state-data",
  }
);

// 跳转当前路径，并刷新 state
history.push({}, state);

// 跳转到上一个路由
history.back();
history.go(-1);
```

#### Link

<Link> 是 React 组件，是带路由跳转功能的 <a> 元素。

#### useNavigate

useNavigate 钩子函数返回一个可以控制跳转的函数；比如可以用在提交完表单后跳转到其他页面。

#### navigator

与上者的内部实现原理相同，出自于 `react-router-dom`

```jsx
import { Navigate } from "umi";

export const patchClientRoutes = ({ routes }) => {
  routes.unshift({
    path: "/",
    element: <Navigate to="/home" replace />,
  });
};
```

### 数据加载

Umi 提供了开箱即用的数据预加载方案，能够解决在**多层嵌套路由**下，页面组件和数据依赖的瀑布流请求。Umi 会自动根据当前路由或准备跳转的路由，并行地发起他们的数据请求，因此当路由组件加载完成后，已经有马上可以使用的数据了。
这里我看这个解决方案应该是应用在多级路由嵌套，通过将请求函数以特定的函数名导出，汇总后一起进行异步请求不会阻塞组件的加载。

## 单元测试

Jest 是一个流行的 JavaScript 测试框架，它提供了一套完整的解决方案来测试前端应用程序。以下是 Jest 如何对前端进行测试的一些关键点：

- 单元测试：Jest 允许你编写单元测试来测试应用程序中最小的可测试部分。单元测试通常针对函数或类方法，确保它们在给定输入时产生预期的输出。

- 快照测试：Jest 支持快照测试，它允许你保存组件的渲染输出，并在后续的测试中比较新的渲染输出与之前的快照。如果有任何变化，Jest 会通知你，这有助于确保 UI 的一致性。

- 模拟（Mocking）：Jest 内置了模拟功能，允许你模拟函数、模块或服务，这样你就可以在不依赖实际实现的情况下测试代码。

- 异步测试：Jest 支持异步测试，这对于测试那些依赖于 Promise 或异步 API 的前端代码非常有用。

- 覆盖率报告：Jest 可以生成代码覆盖率报告，帮助你了解测试覆盖了代码的哪些部分，以及哪些部分可能需要更多的测试。

- 集成测试：虽然 Jest 主要用于单元测试，但也可以用于集成测试，测试多个组件或模块之间的交互。

- 测试环境：Jest 提供了一个模拟的浏览器环境，这意味着你可以测试 React 组件等前端代码，而不需要在真实的浏览器中运行测试。

- 测试配置：Jest 允许你自定义测试配置，包括测试环境、测试匹配模式、预处理脚本等。

- 测试运行器：Jest 可以作为测试运行器与许多前端项目集成，包括那些使用 Create React App、Vue CLI 或 Angular CLI 创建的项目。

- 与 UI 测试库的集成：Jest 可以与如 React Testing Library 或 Enzyme 等 UI 测试库一起使用，以提供更丰富的测试功能，如模拟用户事件、查询 DOM 元素等。
