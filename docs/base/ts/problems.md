# 使用TS时遇到的一些问题

## 数组赋值问题

>不能将类型“{ value: string; label: string; }[]”分配给类型“never[]”。
  不能将类型“{ value: string; label: string; }”分配给类型“never”。ts(2322)

场景:我在接收到一个返回结果后，需要提取部分属性并且重新组装成一个对象数组，代码与下面代码类似

```ts
const data = reactive({
    name: [],
  });
 let opt = [{ value: "12" }, { value: "122" }];
  data.name = opt
    .filter((item) => item.value != "3")
    .map((item) => {
      let temp = { value: "", label: "" };
      temp.value = item.value;
      temp.label = item.value;
      return temp;
    });
```

这时代码运行没问题，但是ts的报错让人很不爽😫，问题的根源在于在声明空数组的时候没有为其赋予类型，那么他就会推断为never类型，后面再为他赋值也就不行了，解决方法有两种，一是在data中声明为any🤣（为了图方便，你也可以声明为更加细致的类型，这里使用as来断言）。而是在最后将其返回的数组断言为never类型。


