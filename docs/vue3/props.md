# props

>props是用来接受父级组件传来的参数的选项，主要用来进行组件间的通信。

## props的声明
一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute

## 只读性
props是只读属性，也就是说子组件只能读取父组件传过来的props，但是对不支持对props在子组件中的修改，这是因为Vue要求数据单向流，这是为了防止在参数比较多时造成混乱，会使逻辑混乱并且VueTools对数据的追踪造成困难。

## 使用
### 非`<script setup>`
我在vue3+ts中使用props来接受父组件中传过来的参数，下面是在非`<script setup>`中的一段代码
``` js
export const getModalInitDataProps = <T>() => {
  return {
    type: [Number, Object] as PropType<bizModalInitData<T>>,
    required: false,
    default: { pageType: enumPageType.Add, transData: {} },
    validator(value: bizModalInitData<T>) {
      const tmp = value as bizModalInitData<T>;
      if (tmp) {
        return true;
      }
      return false;
    },
  };
};
 const curProps = {
    initData: getModalInitDataProps<stdSteelGradeClassify>(),
    okFn: {
      type: Function as PropType<() => void>,
      default() {
        return undefined;
      },
    },
    steelGradeOpts: {
      default: [],
    },
  };
  export default defineComponent({
    // ...
    props: curProps,
    // ...
  })
```
当我们在设计组件时，我们需要定义组件的 props，用于接收传入的数据并进行类型验证。在Vue中，我们可以使用 `PropType` 类型来指定 props 的类型验证器。对于复杂的类型，如泛型类型 `bizModalInitData<T>`，我们可以使用自定义的类型验证器函数来验证传入的 props 是否符合类型要求。

下面是对代码的详细讲解：

1. 首先，我们定义了一个泛型函数 `getModalInitDataProps`，它接收一个类型参数 `T`。这个函数的作用是获取用于定义组件 props 的选项对象。

2. 在函数体内部，我们返回了一个对象，该对象描述了 props 的各种选项，包括类型、是否必需、默认值和验证器等。

3. 我们使用 `type` 属性来指定 props 的类型。在这里，我们将类型定义为 `[Number, Object]`，即接受数字或对象类型。并通过 `as PropType<bizModalInitData<T>>` 进行类型断言，确保 props 的类型与 `bizModalInitData<T>` 匹配。这样我们数字和对象也可以通过TS的类型检查了
。

4. `required` 属性用于指定 props 是否是必需的。在这里，我们将它设置为 `false`，即可选的 props。

5. `default` 属性用于设置 props 的默认值。在这里，我们将它设置为 `{ pageType: enumPageType.Add, transData: {} }`，确保默认值与 `bizModalInitData<T>` 类型相匹配。

6. 最后，我们定义了一个类型验证器函数 `validator`，用于验证传入的 props 是否符合 `bizModalInitData<T>` 的类型要求。在这个例子中，我们简单地判断传入的值是否为真值，并返回相应的验证结果。

通过使用这种设计，我们可以创建一个通用的函数来获取用于定义组件 props 的选项对象，同时保证类型的正确性和有效性。通过使用自定义的类型验证器函数，我们可以更灵活地进行类型验证，以满足不同的需求。同时，这种代码的可读性和可维护性也得到了提高。

当进行复杂类型的声明时,我们可以使用 PropType 这个工具类型来`标记`更复杂的 props 类型：

``` ts
import { defineComponent } from 'vue'

export default defineComponent({
  // 启用了类型推导
  props: {
    name: String,
    id: [Number, String],
    msg: { type: String, required: true },
    metadata: null
  },
  mounted() {
    this.name // 类型：string | undefined
    this.id // 类型：number | string | undefined
    this.msg // 类型：string
    this.metadata // 类型：any
  }
})

```

### `<script setup>`中

在setup标签中使用props,必须通过defineProps来进行声明。

``` js
<script setup>
const props = defineProps(['foo'])
console.log(props.foo)
</script>
```

也可以使用对象的形式进行声明(运行时声明)

``` ts
defineProps({
  title: String,
  likes: Number
})
```

>这被称之为“运行时声明”，因为传递给 defineProps() 的参数会作为运行时的 props 选项使用。

除此之外，由于我们使用Ts,我们可以给defineProps传入参数的泛型进行声明，这叫做基于类型的声明，这种类型检查会发生在运行之前，更为直接。

``` ts
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

但是这样使用的缺点是不可以定义默认值，我们可以配合Vue3提供的withDefaults使用🙌

``` ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

 :::warning   运行时和类型声明只能选择一种使用，不可同时使用。


