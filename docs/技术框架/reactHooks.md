---
updateTime: "2024-07-29 11:29:10"
desc: "reactHooks"
tags: "reactHooks/学习"
---

# reactHooks

Hook 就是 JavaScript 函数，这个函数可以帮助你 钩入(hook into)
React State 以及生命周期等特性;

优势:

- 它可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性;
- 但是我们可以由此延伸出非常多的用法，来让我们前可所提到的问题得到解决;

Hook 的使用场景

- Hook 的出现基本可以代替我们之前所有使用 class 组件的地方(除了一些非常不常用的场景);
- 但是如果是一个旧的项目，你并不需要直接将所有的代码重构为 Hooks，因为它完全向下兼容，你可以渐进式的来使用它
- Hook 只能在函数组件中使用，不能在类组件，或者函数组件之外的地方使用;

## useState

useState 是一个 React Hook，允许函数组件在内部管理状态。
组件通常需要根据交互更改屏幕上显示的内容，例如点击某个按钮更改值，或者输入文本框中的内容，这些值被称为状态值也就是(state)。

### 使用方法

useState 接收一个参数，即状态的初始值，然后返回一个数组，其中包含两个元素：当前的状态值和一个更新该状态的函数

```js
const [state, setState] = useState(initialState);
```

### 注意事项

- useState 是一个 Hook，因此你只能在组件的顶层 或自己的 Hook 中调用它。你不能在循环或条件语句中调用它。
- 在严格模式中，React 将 两次调用初始化函数，以 帮你找到意外的不纯性。这只是开发时的行为，不影响生产

### 实践

#### 添加一个状态

```js
const Card = () => {
  let [index, setIndex] = useState(0);
  let [name, setName] = useState("lrx");
  let [arr, setArr] = useState([1, 2, 3]);
};
```

按照惯例使用 数组解构 来命名状态变量，例如 [index, setIndex]。
useState 返回一个只包含两个项的数组：

1. 当前状态值
2. 更新该状态的函数

要更新屏幕上的内容，请使用新状态调用 set 函数：
调用 set 函数更新 state 将会重新渲染组件。

```js
setIndex(index + 1);
```

#### 案例 1(基本数据类型)

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

#### 案例 2(复杂数据类型)

##### 数组

在 React 中你需要将数组视为只读的，不可以直接修改原数组，例如：不可以调用 arr.push() arr.pop() 等方法。
下面是常见数组操作的参考表。当你操作 React state 中的数组时，你需要避免使用左列的方法，而首选右列的方法：

| 避免使用 (会改变原始数组)          | 推荐使用 (会返回一个新数组)       |
| ---------------------------------- | --------------------------------- |
| 添加元素 push，unshift             | concat，[...arr] 展开语法（例子） |
| 删除元素 pop，shift，splice        | filter，slice（例子）             |
| 替换元素 splice，arr[i] = ... 赋值 | map（例子）                       |
| 排序 reverse，sort                 | 先将数组复制一份（例子）          |

###### 数组新增数据

创建一个新数组，包含了原始数组的所有元素，然后在末尾添加新元素，如果想在头部添加新元素，返过来即可。

###### 数组删除数据

创建一个新数组，包含了原始数组的所有元素，然后删除指定元素，如果想在头部删除元素，返过来即可。

###### 数组替换数据

使用 map 筛选出需要替换的元素，然后替换为新的元素，其他元素保持不变。

```jsx
import { useState } from "react";
function App() {
  let [arr, setArr] = useState([1, 2, 3]);
  const heandleClick = () => {
    setArr(
      arr.map((item) => {
        return item == 2 ? 666 : item;
      })
    );
  };
  return (
    <>
      <button onClick={heandleClick}>更改值</button>
      <div id="aaa">{arr}</div>
    </>
  );
}
export default App;
```

###### 指定位置插入元素

案例在 2 后面插入 2.5，通过 slice，截取前面的元素，因为 slice 返回一个新的数组，然后在中间插入我们需要插入的元素，然后把末尾的元素也通过 slice 截取出来，拼接到后面。

```tsx
import { useState } from "react";
function App() {
  let [arr, setArr] = useState([1, 2, 3]);
  const heandleClick = () => {
    let startIndex = 0;
    let endIndex = 2;
    setArr([...arr.slice(startIndex, endIndex), 2.5, ...arr.slice(endIndex)]);
  };
  return (
    <>
      <button onClick={heandleClick}>更改值</button>
      <div id="aaa">{arr}</div>
    </>
  );
}
export default App;
```

##### 对象

useState 可以接受一个函数，可以在函数里面编写逻辑，初始化值，注意这个只会执行一次，更新的时候就不会执行了。
在使用 setObject 的时候，可以使用 Object.assign 合并对象 或者 ... 合并对象，不能单独赋值，不然会覆盖原始对象。

```tsx
import { useState } from "react";
function App() {
  let [obj, setObj] = useState({ name: "lrx", age: 18 });
  const heandleClick = () => {
    // setObj(Object.assign({}, obj, { age: 20 }));//1
    setObj({ ...obj, age: 20 }); //2
  };
  return <button onClick={heandleClick}>更改值</button>;
}
export default App;
```

### useState 的异步更新机制

#### 异步机制

```tsx
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // 0
  };
  return <button onClick={handleClick}>Click me</button>;
}
export default App;
```

此时 index 应该打印 1，但是还是 0，因为我们正常编写的代码是同步的，所以会先执行，而 set 函数是异步的所以后执行，这么做是为了性能优化，因为我们要的是结果而不是过程。

#### 内部机制

当我们多次以相同的操作更新状态时，React 会进行比较，如果值相同，则会屏蔽后续的更新行为。自带防抖的功能，防止频繁的更新。

案例：

```tsx
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // 1
    setCount(count + 1); // 1
  };
  return <button onClick={handleClick}>Click me</button>;
}
export default App;
```

结果是 1 并不是 2，因为 setIndex(index + 1)的值是一样的，后续操作被屏蔽掉了，阻止了更新。
为了解决这个问题，你可以向 setIndex 传递一个更新函数，而不是一个状态。

```tsx
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // 1
    setCount((prevCount) => prevCount + 1); // 2
  };
  return <button onClick={handleClick}>Click me</button>;
}
export default App;
```

现在没有其他排队的更新，因此 React 最终将存储 2 作为当前状态。
按照惯例，通常将待定状态参数命名为状态变量名称的第一个字母，例如 prevIndex 或者其他你觉得更清楚的名称。

## useEffect

依赖发生改变就会重新执行 🧐，类似于 Vue 的 watchEffect,后面还可以加一个参数用来进行优化防止内部代码再次执行，比如一些请求代码。useEffect 是 React 中用于处理副作用的钩子。并且 useEffect 还在这里充当生命周期函数，在之前你可能会在类组件中使用 componentDidMount、componentDidUpdate 和 componentWillUnmount 来处理这些生命周期事件。

### 什么是副作用函数，什么是纯函数？

纯函数:

1. 输入决定输出：相同的输入永远会得到相同的输出。这意味着函数的行为是可预测的。
2. 无副作用：纯函数不会修改外部状态，也不会依赖外部可变状态。因此，纯函数内部的操作不会影响外部的变量、文件、数据库等。

副作用函数:

1. 副作用函数 指的是那些在执行时会改变外部状态或依赖外部可变状态的函数。
2. 可预测性降低但是副作用不一定是坏事有时候副作用带来的效果才是我们所期待的
3. 高耦合度函数非常依赖外部的变量状态紧密

- 操作引用类型
- 操作本地存储例如 localStorage
- 调用外部 API，例如 fetch ajax
- 操作 DOM
- 计时器

```tsx
let a = 0;

function calculateDouble(number) {
  a += 1; //修改函数外部环境变量

  localStorage.setItem("a", a); //修改 localStorage

  fetch(/*…*/).then((res) => {
    //网络请求
    //…
  });

  document.querySelector(".root").style.color = "red"; //修改 DOM element

  return number * 2;
}
```

### 使用

```tsx
useEffect(setup, dependencies?)
```

**参数**

- setup：Effect 处理函数,可以返回一个清理函数。组件挂载时执行 setup,依赖项更新时先执行 cleanup 再执行 setup,组件卸载时执行 cleanup。
- dependencies(可选)：setup 中使用到的响应式值列表(props、state 等)。必须以数组形式编写如[dep1, dep2]。不传则每次重渲染都执行 Effect。

**返回值**

useEffect 返回 undefined

```tsx
let a = useEffect(() => {});
console.log("a", a); //undefined
```

### 基本使用

副作用函数能做的事情 useEffect 都能做，例如操作 DOM、网络请求、计时器等等。

#### 操作 DOM

```tsx
import { useEffect } from "react";

function App() {
  const dom = document.getElementById("data");
  console.log(dom); //null
  useEffect(() => {
    const data = document.getElementById("data");
    console.log(data); //<div id='data'>12</div>
  }, []);
  return <div id="data">12</div>;
}
```

#### 网络请求

```tsx
useEffect(() => {
  fetch("http://localhost:5174/?name=12");
}, []);
```

### 执行时机

**组件挂载时执行**
根据我们下面的例子可以观察到，组件在挂载的时候就执行了 useEffect 的副作用函数。
类似于 componentDidMount

```tsx
useEffect(() => {
  console.log("组件挂载");
}, []);
```

**组件更新时执行**

- 无依赖项更新
  根据我们下面的例子可以观察到，当有响应式值发生改变时，useEffect 的副作用函数就会执行。
  类似于 componentDidUpdate + componentDidMount

```tsx
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("执行了", count, name);
  });
  return (
    <div id="data">
      <div>
        <h3>count:{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h3>name:{name}</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};
export default App;
```

- 有依赖项更新
  根据我们下面的例子可以观察到，当依赖项数组中的 count 值发生改变时，useEffect 的副作用函数就会执行。而当 name 值改变时,由于它不在依赖项数组中,所以不会触发副作用函数的执行

```tsx
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("执行了", count, name);
  }, [count]);
  return (
    <div id="data">
      <div>
        <h3>count:{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h3>name:{name}</h3>
        <button onClick={() => setName(name + 1)}>+</button>
      </div>
    </div>
  );
};
export default App;
```

- 依赖项空值
  根据我们下面的例子可以观察到，当依赖项为空数组时，useEffect 的副作用函数只会执行一次，也就是组件挂载时执行。
  适合做一些初始化的操作例如获取详情什么的

```tsx
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("执行了", count, name);
  }, []); //只会执行一次
  return (
    <div id="data">
      <div>
        <h3>count:{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h3>name:{name}</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};
export default App;
```

**组件卸载时执行**

useEffect 的副作用函数可以返回一个清理函数，当组件卸载时，useEffect 的副作用函数就会执行清理函数。
确切说清理函数就是副作用函数运行之前，会清楚上一次的副作用函数。
根据我们下面的例子可以观察到，当组件卸载时，useEffect 的副作用函数就会执行。
类似于 componentWillUnmount

```tsx
import { useEffect, useState } from "react";
// 子组件
const Child = (props: { name: string }) => {
  useEffect(() => {
    console.log("render", props.name);
    // 返回一个清理函数
    return () => {
      console.log("unmount", props.name);
    };
  }, [props.name]);
  return <div>Child:{props.name}</div>;
};
const App = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  return (
    <div id="data">
      <div>
        <h3>父组件</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setShow(!show)}>显示/隐藏</button>
      </div>
      <hr />
      <h3>子组件</h3>
      {show && <Child name={name} />}
    </div>
  );
};

export default App;
```

**清理函数场景**
例如我们下面这个例子，当 name 值发生改变时，useEffect 的副作用函数就会执行，并且会开启一个定时器，当 name 值再次发生改变时，useEffect 的副作用函数就会执行清理函数，清除上一次的定时器。这样就避免了接口请求的重复执行。

```tsx
import { useEffect, useState } from "react";
// 子组件
const Child = (props: { name: string }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(`http://localhost:5174/?name=${props.name}`);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.name]);
  return <div>Child</div>;
};
const App = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  return (
    <div id="data">
      <div>
        <h3>父组件</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setShow(!show)}>显示/隐藏</button>
      </div>
      <hr />
      <h3>子组件</h3>
      {show && <Child name={name} />}
    </div>
  );
};
```

### 真实案例

下面是一个真实的用户信息获取案例，通过 id 获取用户信息，并且当 id 发生改变时，会获取新的用户信息。

```tsx
import React, { useState, useEffect } from "react";

interface IUserData {
  username: string;
  email: string;
  phone: string;
  name: string;
  website: string;
}

function App() {
  const [userId, setUserId] = useState("1");
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setErrorStatus] = useState(null);

  const FetchUserData = () => {
    setLoading(true);
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((data) => setUserData(data))
      .catch((error) => setErrorStatus(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    FetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>用户信息</h1>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      {loading && <p>加载中...</p>}
      {error && <p>错误: {error}</p>}
      {userData && (
        <div>
          <p>用户名: {userData.username}</p>
          <p>邮箱: {userData.email}</p>
          <p>电话: {userData.phone}</p>
          <p>姓名: {userData.name}</p>
          <p>网站: {userData.website}</p>
        </div>
      )}
    </div>
  );
}
```

![alt text](image-1.png)

## useContext

## useReducer

useState 的替代方案

## useCallBack

~~类似于 Vue 的计算属性~~
想象这个场景：你有一个 React.memo 化的子组件，该子组件接受一个父组件传递的函数作为 prop。如果父组件重新渲染，而且这个函数是在父组件的函数体内定义的，那么每次父组件渲染时，都会为子组件传递一个新的函数实例。这可能会导致子组件不必要地重新渲染，即使该函数的实际内容没有任何变化。

useCallback 的主要目的是解决这样的问题。它确保，除非依赖项发生变化，否则函数实例保持不变。这可以防止因为父组件的非相关渲染而导致的子组件的不必要重新渲染。

当然，useCallback 真正的应用场景不仅于此，它还可以用于其他需要稳定引用的场景，例如事件处理器、setTimeout/setInterval 的回调、函数用于 useEffect、useMemo 或 useCallback 等的依赖项、或其他可能因为函数引用改变而导致意外行为的场合。

### 使用 ⚙️

![iamge](../public/vue3/react/useCallback.png)
只有当 dependency1、dependency2 等依赖发生改变时，函数才会重新创建。这对于 React.memo 化的组件、useEffect、useMemo 等钩子的输入特别有用，因为它们都依赖于输入的引用恒定性。

### useMemo 和 useCallback

<LinkCard link="https://zhuanlan.zhihu.com/p/678677928" desc="精读React hooks（八）：我们为什么需要useCallback"></LinkCard>

这个作者写的很好，解释了 useCallback，useCallback 其实就是 useMemo 的语法糖，他的底层也是这么实现的。

![useCallBack](../public/vue3/react/useCallback实现.png)

我们可以将一个 useCallback 转化为 useMemo 的写法

## useMemo

类似于 Vue 的计算属性

## useRef

## useImperativeHandle

## 自定义 hooks

> 组件内部的代码描述的是想要做什么（使用在线状态！），而不是怎么做（通过订阅浏览器事件完成）。

- [Hook 的名称必须永远以 use 开头](https://react.docschina.org/learn/reusing-logic-with-custom-hooks#hook-names-always-start-with-use)
- [自定义 Hook 共享的是状态逻辑，而不是状态本身](https://react.docschina.org/learn/reusing-logic-with-custom-hooks#custom-hooks-let-you-share-stateful-logic-not-state-itself)
- [在 Hook 之间传递响应值](https://react.docschina.org/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks)

### 如何检验自己的 Hooks 标准且优雅 🧐

官方文档也进行了探讨并且给出了标准：

> 理想情况下，你的自定义 Hook 名称应该清晰到即使一个不经常写代码的人也能很好地猜中自定义 Hook 的功能，输入和返回：
>
> - ✅ useData(url)
> - ✅ useImpressionLog(eventName, extraData)
> - ✅ useChatRoom(options)
>
>   当你和外部系统同步的时候，你的自定义 Hook 名称可能会更加专业，并使用该系统特定的术语。只要对熟悉这个系统的人来说名称清晰就可以：
>
> - ✅ useMediaQuery(query)
> - ✅ useSocket(url)
> - ✅ useIntersectionObserver(ref, options)
>
> 保持自定义 Hook 专注于具体的高级用例,避免创建和使用作为 useEffect API 本身的替代品和 wrapper 的自定义“生命周期” Hook：

![imgae](../public/vue3/react/自定义hooks.png)

> 好的自定义 Hook 通过限制功能使代码调用更具声明性。例如 useChatRoom(options) 只能连接聊天室，而 useImpressionLog(eventName, extraData) 只能向分析系统发送展示日志。如果你的自定义 Hook API 没有约束用例且非常抽象，那么在长期的运行中，它引入的问题可能比解决的问题更多。

![iamge](../public/vue3/react/自定义hooks2.png)

```

```

```

```
