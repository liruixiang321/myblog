# 重学 ts

## 字面量类型

概念： 字面量类型主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型，它们可以直接作为类型标注
实际开发中：单个字面量没有意义，往往和联合类型结合使用

```ts
//字面量类型+联合类型

interface IRes {
  code: number;
  status: string;
  data: any;
} //×

interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
} //√
```

### 总结

对于字面量类型，我们可以使用它来提供更精确的类型标注。比如，你可以将如用户类型与请求状态码这一类属性的类型，都使用字面量类型＋联合类型的形式改写，获得更详细的类型信息与更严格的类型约束。

## 枚举

概念:枚举类型是对 JavaScript 标准数据类型的一个补充，使用枚举可以为一组数值赋予名字,方便使用和维护。
实际使用:对于一些常量值，使用枚举可以方便的进行管理：

```ts
export default {
  Home_Page_Url: "url1",
  Setting_Page_Url: "url2",
  Share_Page_Url: "url3",
};

// 或是这样：
export const PageUrl = {
  Home_Page_Url: "url1",
  Setting_Page_Url: "url2",
  Share_Page_Url: "url3",
};
//如果把这段代码替换为枚举，会是如下的形式：
enum PageUrl {
  Home_Page_Url = "url1",
  Setting_Page_Url = "url2",
  Share_Page_Url = "url3",
}

const home = PageUrl.Home_Page_Url;
```

如果你只为某一个成员指定了枚举值，那么之前未赋值成员仍然会使用从 0 递增的方式，之后的成员则会开始从枚举值递增。

```ts
enum Items {
  // 0
  Foo,
  Bar = 599,
  // 600
  Baz,
}
```

### 枚举和对象主要的差异

枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。而枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员：

```ts
enum Items {
  Foo,
  Bar,
  Baz,
}

const fooValue = Items.Foo; // 0
const fooKey = Items[0]; // "Foo"
```

### 常量枚举

它和普通枚举的差异主要在访问性与编译产物。对于常量枚举，你只能通过枚举成员访问枚举值（而不能通过值访问成员）。

### 总结

对于枚举，我们可以使用它来替换掉之前使用对象进行常量收敛的代码，而如果你希望减少编译后的代码，可以进一步地使用在编译后会被完全抹除的常量枚举。

## 函数与 class 类型

### 函数类型签名

函数的声明描述了函数参数的类型和返回值类型。使用:语法进行标注。

实际开发中：函数分为 函数声明和函数表达式两种形式。

```ts
// 函数声明
function sum(a: number, b: number): number {
  return a + b;
}
// 函数表达式
const sum = function (a: number, b: number): number {
  return a + b;
};
```

实际开发中：在箭头函数中也有两种方式，**在参数和返回值之间使用 : 指定类型**或者**使用类型别名将函数声明进行抽离**

```ts
// 函数表达式
const sum = (a: number, b: number): number => {
  return a + b;
};
/

// 类型别名
type Sum = (a: number, b: number) => number;
const sum: Sum = (a, b) => a + b;
```

### 可选参数

```ts
// 在函数逻辑中注入可选参数默认值
function foo1(name: string, age?: number): number {
  const inputAge = age ?? 18;
  return name.length + inputAge;
}

// 直接为可选参数声明默认值
function foo2(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge;
}
```

::: tip
默认参数必须位于必选参数之后，否则会导致编译错误。
:::

### Class //TODO - 抽象类

class 的结构：属性，构造函数，方法，get/set

## 内置类型与类型断言

### any, unknown,never

一个被标记为 any 类型的参数可以接受任意类型的值。 any 类型的主要意义，其实就是为了表示一个无拘无束的“任意类型”，它能兼容所有类型，也能够被所有类型兼容。

::: tip
如果是类型不兼容报错导致你使用 any，考虑用类型断言替代
:::

::: tip
如果是类型太复杂导致你不想全部声明而使用 any，考虑将这一处的类型去断言为你需要的最简类型。如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
:::

::: tip
如果你是想表达一个未知类型，更合理的方式是使用 unknown。
:::

一个 unknown 类型的变量可以被任意类型赋值，但只能赋值给 any 和 unknown 类型的变量。

接下来就是**never 类型虚无**

```ts
type UnionWithNever = "linbudu" | 599 | true | void | never;
```

鼠标悬浮你会发现上面的类型显示`"linbudu" | 599 | true | void`，`never` 类型代表着永远不存在的值。

在实际使用中很少会声明 never 类型，它主要用在函数中，用来表示函数永远不会执行到这个位置。其之后的代码都会被忽略。

never 类型最重要的一个特性就是**只有 never 类型的值才能赋值给 never 类型。**基于这个特点，我们在赋值时如果忘记考虑某个 xx 类型时，代码块中就会出现将 xx 类型赋值给 never 类型变量的类型错误。
比如：

```ts
const arr = [];

arr.push("STRING"); // 类型“string”的参数不能赋给类型“never”的参数。
```

### 类型断言

类型断言代表含义就是显式的告诉编译器，你希望它按照某种类型进行编译，以此来防止其报错。

### 双重断言

使用类型断言时，当前类型与目标类型相差太远，编译器会报错。

```ts
const str: string = "adw";

// 从 X 类型 到 Y 类型的断言可能是错误的
(str as { handler: () => {} }).handler();
```

此时它会提醒你先断言到 unknown 类型，再断言到预期类型，就像这样：

```ts
const str: string = "linbudu";

(str as unknown as { handler: () => {} }).handler();

// 使用尖括号断言
(<{ handler: () => {} }>(<unknown>str)).handler();
```

### 非空断言

显式的声明一个值不为 null 和 undefined。

```ts
foo.func!().prop!.toFixed();
```

`!`的位置类似于`?`可选链，但不同的是非空断言属于 ts 语法，实际如果不存在该属性，运行时会报错，而可选链在不存在该属性时，不会继续运行下去，直接短路。
