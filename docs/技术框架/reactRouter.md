---
updateTime: "2024-07-29 11:29:10"
desc: "reactRouter"
tags: "reactRouter/学习"
---

# reactRouter

## 安装

```bash
# npm 安装
npm install react-router-dom
# yarn 安装
yarn add react-router-dom
# pnpm 安装
pnpm add react-router-dom
```

## 路由组件

### BrowserRouter

```tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 使用组件包裹
<BrowserRouter>
  <App />
</BrowserRouter>;
```

### Routes 定义路由

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 组件定义

```tsx
function Demo() {
  return <h2>欢迎学习React/18 19课程</h2>;
}
```

### 区别

- HashRouter
  - 基于 hash 模式：页面跳转原理是使用了 location.hash、location.replace，和 vue router 的 hash 模式实现一致。
  - 比较丑：在域名后，先拼接 /#，再拼接路径，也就是利用锚点，实现路由的跳转。如：www.dzm.com/#/xx
- BrowserRouter
  - 基于 history 模式：页面跳转原理是使用了 HTML5 为浏览器全局的 history 对象新增了两个 API，包括 history.pushState、history.replaceState，和 vue router 的 history 模式实现一致。
  - 更加优雅： 直接拼接路径。如：www.dzm.com/xx
  - 后端需做请求处理：切换路由后，请求接口路径会发生变化，后端需要配合做处理。
  - 兼容：低版本浏览器可能不支持，目前市面上热门浏览器应该都支持了，不是特殊情况可以放心使用。

### 使用场景

- HashRouter
  - 项目部署在内网：如 to B 项目、本公司业务人员用的项目等
- BrowserRouter
  - 项目部署在公网：如 to C 项目、面向大众的项目，url 路径美观点当然更好，但后端需要做处理，不过目前无论 to 哪基本都选用这种，特殊情况除外。

## 路由跳转

### 使用

#### NavLink

```tsx
<NavLink to="/about">About</NavLink>
```

#### Link

```tsx
<Link to="/about">About</Link>
```

#### Navigate

```tsx
// 路由中使用
<Route path="/vite" element={<Navigate to={"/react"} />}></Route>;

// 组件中使用
function Vue() {
  return <h2>欢迎学习Vue课程{<Navigate to={"/react"} />}</h2>;
}
```

#### Hook-useNavigate

```tsx
// 前提：必须在函数组件里面定义
const navigate = useNavigate();

// 点击按钮，进行跳转
navigate("/react");
```

#### 404 页面

```tsx
<Route path="*" element={<NotFound />}></Route>
```

## API 创建路由（推荐方式）

useRoutes

```tsx
function BaerRouter() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/vite",
      element: <Vite />,
    },
    {
      path: "/react",
      element: <ReactDemo />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
export default BaerRouter;

// 在main.tsx中加载
import BaseRouter from "./BaerRouter";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <BaseRouter />
  </BrowserRouter>
);
```

createBrowserRouter

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 创建路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vite",
    element: <Vite />,
  },
  {
    path: "/react",
    element: <ReactDemo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// 传递给RouterProvider
<RouterProvider router={router} />;
```

createHashRouter
用法同上。

## 动态路由

basename
基础路由地址

```tsx
{
  basename: "/app";
}
```

动态路由

```tsx
 {
    path: '/order/:orderId',
    element: <Order/>
}


{
    path: '/goods/:goodsId/order/:orderId',
    element: <Order/>
}


function Order(){
    const params = useParams();
    return <div>
        <h2>商品组件</h2>

        <p>
            <span>商品ID：{params.goodsId}</span>

            <span>订单ID：{params.orderId}</span>

        </p>

    </div>

}
```

## 路由嵌套

```tsx
{
  path: '/goods',
  element: <Goods />,
  children: [
    {
      path: 'list',
      element: (
        <div>
          <p>商品一</p>

          <p>商品二</p>

        </div>

      )
    },
    {
      path: 'cart',
      element: (
        <div>
          <p>苹果16手机，价格6999</p>

          <p>小米15手机，价格4999</p>

        </div>

      )
    }
  ]
}

// 组件定义
function Goods() {
  return (
    <div>
      <h2>商品主页</h2>

      <Outlet />
    </div>

  )
}
```

两个知识点

- useParams()
- Outlet（相当于 Vue 里面的 RouterView 组件）
