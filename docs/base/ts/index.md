# ts

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
