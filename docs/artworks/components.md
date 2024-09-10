# 组件库

## lint 的抽离

<LinkCard link="https://juejin.cn/post/7357231056288350248?searchId=2024090922065645C42270F548026A0EE4" desc="Monorepo代码规范：搭建 typeScript+ eslint + prettier + vscode 组件库开发环境"></LinkCard>

## 打包

## 基于 lodash.template 方法实现 gen 命令创建组件库模版

## 通过 bash 实现的 gen 命令

```bash

#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ${INPUT_NAME}Props } from './$INPUT_NAME'

defineOptions({
  name: 'El$NAME',
})

const props = defineProps(${INPUT_NAME}Props)

// init here
</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type $NAME from './$INPUT_NAME.vue'

export const ${INPUT_NAME}Props = buildProps({})

export type ${NAME}Props = ExtractPropTypes<typeof ${INPUT_NAME}Props>
export type ${NAME}Instance = InstanceType<typeof $NAME>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@element-plus/utils'
import $NAME from './src/$INPUT_NAME.vue'

export const El$NAME = withInstall($NAME)
export default El$NAME

export * from './src/$INPUT_NAME'
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.test.tsx <<EOF
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import $NAME from '../src/$INPUT_NAME.vue'

const AXIOM = 'Rem is the best girl'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <$NAME>{AXIOM}</$NAME>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF

```

1. **脚本开始**：`#! /bin/bash` 指定了脚本执行时使用的 shell。

2. **获取参数**：`NAME=$1` 获取命令行传递的第一个参数，通常是用来命名新创建的组件。

3. **确定文件路径**：`FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)` 计算脚本所在目录的上级目录下的 `packages` 目录的绝对路径。

4. **参数验证**：检查是否传递了一个参数，参数中是否包含空格，或者参数是否为空。

5. **创建目录**：`DIRNAME="$FILE_PATH/components/$NAME"` 构建新组件的目录路径，并检查该目录是否已存在。

6. **规范化组件名称**：通过一系列 `sed` 命令将组件名称中的下划线或连字符转换为空格，并首字母大写，以符合 Vue 组件的命名规范。

7. **创建目录结构**：创建组件的目录、源代码目录和测试目录。

8. **创建 Vue 组件文件**：`$DIRNAME/src/$INPUT_NAME.vue` 创建 Vue 组件文件，包含一个简单的模板和 TypeScript 脚本。

9. **创建类型定义文件**：`$DIRNAME/src/$INPUT_NAME.ts` 创建类型定义文件，用于定义组件的属性类型。

10. **创建入口文件**：`$DIRNAME/index.ts` 创建组件的入口文件，用于导出组件。

11. **创建测试文件**：`$DIRNAME/__tests__/$INPUT_NAME.test.tsx` 创建组件的测试文件，使用 `vitest` 和 `@vue/test-utils` 进行测试。

生成的文件内容如下：

- **Vue 组件文件 (`$DIRNAME/src/$INPUT_NAME.vue`)**:

  ```vue
  <template>
    <div>
      <slot />
    </div>
  </template>

  <script lang="ts" setup>
    import { ${INPUT_NAME}Props } from './$INPUT_NAME'

    defineOptions({
      name: 'El$NAME',
    })

    const props = defineProps(${INPUT_NAME}Props)

    // init here
  </script>
  ```

- **类型定义文件 (`$DIRNAME/src/$INPUT_NAME.ts`)**:

  ```typescript
  import { buildProps } from '@element-plus/utils'

  import type { ExtractPropTypes } from 'vue'
  import type $NAME from './$INPUT_NAME.vue'

  export const ${INPUT_NAME}Props = buildProps({})

  export type ${NAME}Props = ExtractPropTypes<typeof ${INPUT_NAME}Props>
  export type ${NAME}Instance = InstanceType<typeof $NAME>
  ```

- **入口文件 (`$DIRNAME/index.ts`)**:

  ```typescript
  import { withInstall } from "@element-plus/utils";
  import $NAME from "./src/$INPUT_NAME.vue";

  export const El$NAME = withInstall($NAME);
  export default El$NAME;

  export * from "./src/$INPUT_NAME";
  ```

- **测试文件 (`$DIRNAME/__tests__/$INPUT_NAME.test.tsx`)**:

  ```tsx
  import { mount } from "@vue/test-utils";
  import { describe, expect, test } from "vitest";
  import $NAME from "../src/$INPUT_NAME.vue";

  const AXIOM = "Rem is the best girl";

  describe("$NAME.vue", () => {
    test("render test", () => {
      const wrapper = mount(() => <$NAME>{AXIOM}</$NAME>);

      expect(wrapper.text()).toEqual(AXIOM);
    });
  });
  ```

这些文件构成了一个基本的 Vue 组件，包括它的模板、脚本、类型定义、入口导出和测试。
