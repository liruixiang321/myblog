---
updateTime: "2023-12-01 22:27"
desc: "在工作日常中如何改善你的烂代码"
tags: "js/代码优化"
---

# 改变你的烂代码

## 一、变量的解构

这是我之前写的代码：

### 优化前

```js
const App = (props) => {
  const { data } = props;
  const { name, age } = data;
};
```

这段代码之所以烂的原因在于没有正确理解解构赋值的规则。

> 解构赋值的规则是，只要等号右边的值不是对象或者数组，将先将其转为对象。由于`undefined`，`null`无法转为对象，所以对他们进行解构赋值时都会报错。

所以当 data 为 undefiined 或者 null 时，上述代码就会报错。

### 优化后

```js
const App = (props) => {
  const { data } = props || {};
  const { name, age } = data || {};
};
```

## 不靠谱的默认值

上面的代码还可以再优化一下：

```js
const App = (props = {}) => {
  const { data = {} } = props;
  const { name, age } = data;
};
```

但是这样确实不对的：

> ES6 内部使用严格相等运算符（``）判断一个变量是否有值。所以，如果对一个对象的属性值不严格等于`undefined`，默认值是不会生效的。

所以当`props.data`为`null`，那么`const {name,name} = null`就会报错！

## 二、要注意数组方法只能数组调用

### 优化前

```js
const App = (props) => {
  const { data } = props || {};
  const nameList = (data || []).map((item) => item.name);
};
```

加入当传入的`data`是`123`，那么 data 此时并没有数组的 map 方法可以调用，所以此时会报错。解决办法就是先判断是否为数组再进行调用方法。数组的 Array.isArray 方法进行判断。

### 优化后

```js
const App = (props) => {
  const { data } = props || {};
  let nameList = [];
  if (Array.isArray(data)) {
    nameList = data.map((item) => item.name);
  }
};
```

## 三、对象中不一定存在对应属性

### 优化前

```js
const App = (props) => {
  const { data } = props || {};
  let infoList = [];
  if (Array.isArray(data)) {
    infoList = data.map((item) => `我的名字是${item.name},今年${item.age}岁了`);
  }
};
```

加入`item`中的`name`为`undefined`或者`null`，那么`item.name`必定会报错

### 优化后

```js
const App = (props) => {
  const { data } = props || {};
  let infoList = [];
  if (Array.isArray(data)) {
    infoList = data.map(
      (item) => `我的名字是${item?.name},今年${item?.age}岁了`
    );
  }
};
```

`?`可选链操作符，虽然好用，但也不能滥用。`item?.name`会被编译成`item  null || item  void 0 ? void 0 : item.name`,滥用会导致编辑后的代码大小增大。

### 二次优化后

```js
const App = (props) => {
  const { data } = props || {};
  let infoList = [];
  if (Array.isArray(data)) {
    infoList = data.map((item) => {
      const { name, age } = item || {};
      return `我的名字是${name},今年${age}岁了`;
    });
  }
};
```

## 四、对象的方法调用

### 优化前

```js
const App = (props) => {
  const { data } = props || {};
  const nameList = Object.keys(data || {});
};
```

data 变量可能不是对象，所以再调用对象的方法会报错。

### 优化后

```js
const _toString = Object.prototype.toString;
const isPlainObject = (obj) => {
  return _toString.call(obj)  '[object Object]';
}
const App = (props) => {
  const { data } = props || {};
  const nameList = [];
  if (isPlainObject(data)) {
    nameList = Object.keys(data);
  }
}
```

还是先判断是否为对象再进行调用

## 六、async/await 错误捕获

### 优化前

```js
import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const res = await queryData();
    setLoading(false);
  };
};
```

### 优化后

```js
import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await queryData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
};
```
