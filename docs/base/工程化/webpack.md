---
updateTime: "2025-01-07 15:27"
desc: "webpack学习笔记"
tags: "webpack/工程化"
---

# Webpack

## miniWebpack

**基本流程**

1. 从入口进入
2. 查找依赖
3. 递归解析依赖，生成依赖图谱
4. 同时通过 AST 将 es6+语法转换为 es5 语法
5. 生成浏览器可执行的代码

**完整流程**

1. 从入口进行分析，使用 loader 进行编译
2. babel 将 js 文件解析为 AST 语法树
3. 解析 AST 找到 import 节点
4. 递归解析依赖，生成浏览器可执行的代码并进行缓存，同时生成依赖图谱
5. 递归所有模块，组装成一个个包含多个模块的 chunk
6. 将 chunk 输出到 output 文件夹

## webpack 热更新

1. 启动 devServer 与浏览器建立 websocket 连接

2. 文件变化时，webpack 重新编译，生成新的 hash 值

3. 通过 websocket 通知浏览器

4. 浏览器接收到新的 hash 值，通过 websocket 请求新的模块

## webpack5 的模块联邦
