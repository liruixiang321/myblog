---
updateTime: "2024-07-18 10:47:50"
desc: "简单封装一个diolog组件，记录一下封装过程"
tags: "组件封装"
---

## 组件封装

### 1. 创建一个组件

::: code-group

```ts [Dialog.vue]
<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    @close="handleClose"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  width: {
    type: String,
    default: '50%'
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const visible = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  visible.value = val;
});

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleClose = () => {
  visible.value = false;
};

const handleConfirm = () => {
  emit('confirm');
  handleClose();
};

const handleCancel = () => {
  emit('cancel');
  handleClose();
};
</script>
```

:::

### 2. 创建一个 hooks

::: code-group

```typescript [useDialog.ts]
import { ref } from "vue";

export function useDialog() {
  const isVisible = ref(false);

  const openDialog = () => {
    isVisible.value = true;
  };

  const closeDialog = () => {
    isVisible.value = false;
  };

  return {
    isVisible,
    openDialog,
    closeDialog,
  };
}
```

:::

### 3. 考虑点

1. 可重用的 Dialog 组件
2. 使用 v-model 控制对话框的显示和隐藏
3. 自定义标题、宽度和点击模态框是否关闭
4. 提供默认的确认和取消按钮，可以通过插槽自定义
5. useDialog hook 提供了简单的状态管理和方法

### 4. 封装组件的要素和步骤

1. 可复用性

- 确保组件设计足够通用，可以在不同场景下使用
- 提供合适的 props 和事件，以便用户可以自定义行为

2. 状态管理

- 正确处理对话框的显示/隐藏状态
- 使用 v-model 或 .sync 修饰符实现双向绑定

3. 插槽设计

- 提供默认插槽用于主要内容
- 考虑为标题、底部按钮等提供具名插槽，增加灵活性

4. 性能优化

- 使用 v-if 而不是 v-show 来控制对话框，避免不必要的渲染

5. 事件处理

- 提供必要的事件，如确认、取消、关闭等
- 正确处理事件冒泡和传播

6. 样式封装

- 考虑使用 scoped 样式或 CSS 模块
- 提供一些基本样式，但允许用户覆盖

7. 动画效果

- 考虑添加进入/离开动画，提升用户体验

8. 可访问性

- 确保组件可以通过键盘操作
- 添加适当的 ARIA 属性

9. 国际化

- 考虑文本内容的国际化支持

10. 错误处理

- 对传入的 props 进行验证
- 处理可能的异常情况

11. 文档和示例

- 编写清晰的使用文档
- 提供多个使用示例

12. 测试

- 编写单元测试和集成测试
- 测试各种边界情况
