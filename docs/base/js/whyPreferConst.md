---

updateTime: "2023-12-01 22:27"
desc: "介绍了在let和const之间，建议优先使用const"
tags: "js/代码优化"

---


# 为什么要首选const

在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。

const优于let有几个原因。

一个是const可以提醒阅读程序的人，这个变量不应该改变；另一个是const比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；

最后一个原因是 JavaScript 编译器会对const进行优化，所以多使用const，有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同。有人声称JavaScript引擎可以使代码运行 const 得更快，因为知道变量不会被重新分配。

参考：

* On let vs const[https://overreacted.io/on-let-vs-const/]
* Discuss on Twitter[https://twitter.com/dan_abramov/status/1208850443197145091]
