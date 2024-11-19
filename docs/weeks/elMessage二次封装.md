---
updateTime: "2024-9-24 16:17:00"
desc: "相同类型的弹窗，只显示一次即可。"
tags: "二次封装"
---

# elMessage 弹窗二次封装

每次点击 elMessage 弹窗的时候，都会弹出多次。即使使用节流的方式还是会多次弹出，所以需要二次封装一下。相同类型的弹窗，只显示一次即可。

```ts
import "element-plus/es/components/message/style/css";
import { ElMessage, MessageOptions, MessageHandler } from "element-plus";

let prevType: string | undefined = "";
let prevInstance: MessageHandler | null = null;

function showMessage(options: MessageOptions) {
  const { type } = options;
  //判断弹窗的类型是不是一致，一致就不弹出
  if (prevInstance && prevType === type) {
    return;
  }
  prevType = type;

  if (prevInstance) {
    prevInstance.close();
  }

  prevInstance = ElMessage({
    ...options,
    onClose: () => {
      prevType = "";
    },
  });
}

export default showMessage;
```
