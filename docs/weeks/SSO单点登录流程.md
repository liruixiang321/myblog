---
updateTime: "2024-07-19 09:47:34"
desc: "SSO单点登录流程"
tags: "sso"
---

# SSO单点登录流程

## 什么是SSO


## 单点登录流程

在前端的请求拦截器中，去获取token,如果token不存在则跳转到认证中心的登录页面，跳转到登录页面之后，登录成功后，会将认证中心返回的token存储到cookie中，并且跳转回之前的页面且url中携带着token,在前端的路由守卫中，截取到url中的token,验证一下token的有效性,获取到用户信息,然后存储到vuex中，并且跳转回之前的页面。

## 参考

[SSO单点登录流程](https://blog.csdn.net/qq_35159705/article/details/142097206)

## 在vue应用中使用

[在vue应用中使用](https://www.cnblogs.com/jevonsflash/p/17534501.html)

## oidc

前端需要做的工作：

1. 没有token，则跳转到认证中心的登录页面
2. 定义好回调地址，在回调地址中获取到code
3. 使用code去获取token
4. 将token存储到cookie中
5. 获取到用户信息，并将用户信息存储到vuex中
6. 跳转回之前的页面

oidc-client帮我们做了什么：

1. 帮我们做了登录
2. 帮我们做了回调
3. 帮我们做了token的存储
4. 帮我们做了用户信息的获取
5. 帮我们做了跳转

[oidc-client](https://juejin.cn/post/7311618702592213018?searchId=20250216170248DF7A924B1829353B8F05)
