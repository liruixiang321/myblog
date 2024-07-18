---
updateTime: "2024-07-18 10:47:50"
desc: "与api相关的一些方案"
tags: "api"
---

# api 管理方案

## 方便 url 传参工具函数

```ts
/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = "";
  for (const key in obj) {
    parameters += key + "=" + encodeURIComponent(obj[key]) + "&";
  }
  //   为了避免服务器收到不可预知的请求，对任何用户输入的作为 URI 部分的内容你都需要用 encodeURIComponent 进行转义。比如，一个用户可能会输入"Thyme &time=again"作为comment变量的一部分。如果不使用 encodeURIComponent 对此内容进行转义，服务器得到的将是comment=Thyme%20&time=again。请注意，"&"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是comment=Thyme，另一个则是time=again），而不是一个键值对。
  parameters = parameters.replace(/&$/, ""); //   将结尾&去掉

  return /\?$/.test(baseUrl) //是否以？结尾
    ? baseUrl + parameters // 直接合并
    : baseUrl.replace(/\/?$/, "?") + parameters;
  //检查 baseUrl 字符串的末尾是否有一个斜杠（/）。如果有，就将其替换为一个问号（?）。如果没有斜杠，则在末尾添加一个问号。
}
```
