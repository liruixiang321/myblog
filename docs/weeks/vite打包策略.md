---
updateTime: "2024-12-23 15:47:44"
desc: "vite打包策略"
tags: "性能优化"
---

# vite 打包策略

## 产物

- bundle：指的是整体的打包产物，包含 JS 和各种静态资源。
- chunk：指的是打包后的 JS 文件，是 bundle 的子集。
- vendor：是指第三方包的打包产物，是一种特殊的 chunk。

## vite 默认的打包策略

可以看到，一方面 Vite 实现了自动 CSS 代码分割的能力，即实现一个 chunk 对应一个 css 文件，比如上面产物中 index.js 对应一份 index.css，而按需加载的 chunk Danamic.js 也对应单独的一份 Danamic.css 文件，与 JS 文件的代码分割同理，这样做也能提升 CSS 文件的缓存复用率。而另一方面， Vite 基于 Rollup 的 manualChunksAPI 实现了应用拆包的策略:

对于 Initital Chunk 而言，业务代码和第三方包代码分别打包为单独的 chunk，在上述的例子中分别对应 index.js 和 vendor.js。需要说明的是，这是 Vite 2.9 版本之前的做法，而在 Vite 2.9 及以后的版本，默认打包策略更加简单粗暴，将所有的 js 代码全部打包到 index.js 中。
对于 Async Chunk 而言 ，动态 import 的代码会被拆分成单独的 chunk，如上述的 Dynacmic 组件。
可以发现，Vite 默认拆包的优势在于实现了 CSS 代码分割与业务代码、第三方库代码、动态 import 模块代码三者的分离，但缺点也比较直观，第三方库的打包产物容易变得比较臃肿，上述例子中的 vendor.js 的大小已经达到 500 KB 以上，显然是有进一步拆包的优化空间的，这个时候我们就需要用到 Rollup 中的拆包 API ——manualChunks 了。
