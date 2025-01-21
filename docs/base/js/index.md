# js

## 如何判断对象是否为空对象

```js
let obj = {};
function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0;
}
//reflect.ownKeys 返回一个由目标对象自身的属性键组成的数组。
console.log(isEmpty(obj)); // true
```
