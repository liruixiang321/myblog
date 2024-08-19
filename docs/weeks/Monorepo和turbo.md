---
updateTime: "2024-08-06 15:53:31"
desc: "monorepo把所有有依赖关系的代码都放到一个仓库中进行统一维护，当一个库变动时，其它的代码能自动的进行依赖升级，那么就能精简开发流程、提高开发效率。这种多包的代码仓库管理方式"
tags: "包管理/工程化"
---

## monorepo📚

**✨monorepo 是什么**

Monorepo 是一种项目管理方式，在 Monorepo 之前，代码仓库管理方式是 MultiRepo，即每个项目都对应着一个单独的代码仓库每个项目进行分散管理。
这就会导致许多弊端，例如可能每个项目的基建以及工具库都是差不多的，基础代码的重复复用问题等等...
Monorepo 就是把多个项目放在一个仓库里面,现代的前端工程已经越来越离不开 Monorepo 了，无论是业务代码还是工具库，越来越多的项目已经采用 Monorepo 的方式来进行开发。Google 宁愿把所有的代码都放在一个 Monorepo 工程下面，Vue 3、Yarn、Npm7 等等知名开源项目的源码也是采用 Monorepo 的方式来进行管理的。
一般 Monorepo 的目录如下所示，在 packages 存放多个子项目，并且每个子项目都有自己的 package.json:

```md
.
├── package
│   ├── package1
│   │   └── package.json
│   └── package12
│      └── package.json
└── package.json
```

**🍰MultiRepo 的弊端**

**_代码复用_**

在维护多个项目的时候，有一些逻辑很有可能会被多次用到，比如一些基础的组件、工具函数，或者一些配置，你可能会想: 要不把代码直接 copy 过来，多省事儿！但有个问题是，如果这些代码出现 bug、或者需要做一些调整的时候，就得修改多份，维护成本越来越高。
那如何来解决这个问题呢？比较好的方式是将公共的逻辑代码抽取出来，作为一个 npm 包进行发布，一旦需要改动，只需要改动一份代码，然后 publish 就行了。

但这真的就完美解决了么？我举个例子，比如你引入了 1.1.0 版本的 A 包，某个工具函数出现问题了，你需要做这些事情：

去修改一个工具函数的代码
发布 1.1.1 版本的新包
项目中安装新版本的 A。
可能只是改了一行代码，需要走这么多流程。然而开发阶段是很难保证不出 bug 的，如果有个按钮需要改个样式，又需要把上面的流程重新走一遍......停下来想想，这些重复的步骤真的是必须的吗？我们只是想复用一下代码，为什么每次修改代码都这么复杂？

上述的问题其实是 MultiRepo 普遍存在的问题，因为不同的仓库工作区的割裂，导致复用代码的成本很高，开发调试的流程繁琐，甚至在基础库频繁改动的情况下让人感到很抓狂，体验很差。

**_版本管理_**
在 MultiRepo 的开发方式下，依赖包的版本管理有时候是一个特别玄学的问题。比如说刚开始一个工具包版本是 v1.0.0，有诸多项目都依赖于这个工具包，但在某个时刻，这个工具包发了一个 break change 版本，和原来版本的 API 完全不兼容。而事实上有些项目并没有升级这个依赖，导致一些莫名的报错。

当项目多了之后，很容易出现这种依赖更新不及时的情况。这又是一个痛点。
**_项目基建_**
由于在 MultiRepo 当中，各个项目的工作流是割裂的，因此每个项目需要单独配置开发环境、配置 CI 流程、配置部署发布流程等等，甚至每个项目都有自己单独的一套脚手架工具。

其实，很容易发现这些项目里的很多基建的逻辑都是重复的，如果是 10 个项目，就需要维护 10 份基建的流程，逻辑重复不说，各个项目间存在构建、部署和发布的规范不能统一的情况，这样维护起来就更加麻烦了。

**monorepo 落地**

关于 monorepo 的文章已经很多了，并且目前可以搭建 Monorepo 的工具也很多，例如
| 工具 | 简述 |
| --- | --- |
| [Bit](https://bit.dev/) | 用于组件驱动开发的工具链 |
|[Turborepo](https://turbo.build/repo/docs) | 用于 JavaScript 和 TypeScript 代码库的高性能构建系统|
| [Rush](https://rushjs.io/) | 一个可扩展的 web 单仓库管理器 |
| [Nx](https://nx.dev/) | 具有一流的 monorepo 支持和强大集成的下一代构建系统 |
|[Lerna](https://www.lernajs.cn/) | 用于管理包含多个软件包的项目 |

### pnpm 包管理

**为什么选择 pnpm**
Monorepo 的单仓分模块的要求，使得仓库内的模块不仅要处理与外部模块的关系，还要处理内部之间相互的依赖关系。因此我们需要选择一个强大的包管理工具帮助处理这些任务。
目前前端包管理的根基是 npm，在其基础上衍生出了 yarn、pnpm。在 2022 年以后，我们推荐使用 pnpm 来管理项目依赖。pnpm 覆盖了 npm、yarn 的大部分能力，且多个维度的体验都有大幅度提升。💯

> pnpm 是一款快速、高效使用磁盘空间的包管理器。

它具有以下优势：

- 速度快：多数场景下，安装速度是 npm/yarn 的 2 - 3 倍。

- 基于内容寻址：硬链接节约磁盘空间，不会重复安装同一个包，对于同一个包的不同版本采取增量写入新文件的策略。

- 依赖访问安全性强：优化了 node_modules 的扁平结构，提供了限制依赖的非法访问(幽灵依赖) 的手段。

- 支持 Monorepo：自身能力就对 Monorepo 工程模式提供了有力的支持。在轻量场景下，无需集成 lerna Turborepo 等工具。

### monorepo 的使用

**中枢管理操作**
在 workspace 模式下，项目根目录通常不会作为一个子模块或者 npm 包，而是主要作为一个管理中枢，执行一些全局操作，安装一些共有的依赖，每个子模块都能访问根目录的依赖，适合把 TypeScript、Vite、eslint 等公共开发依赖装在这里，下面简单介绍一些常用的中枢管理操作。

**monorepo 仓库的所有权问题**

<LinkCard desc="Every big monorepo needs the CODEOWNERS feature" link="https://www.satellytes.com/blog/post/monorepo-codeowner-github-enterprise/"></LinkCard>

### 在 monorepo 模式下进行发包

1. 安装 pnpm
2. pnpm init
3. 修改 package.json,包管理器限制

```json
{
  "name": "monorepo发包",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",

  "scripts": {
    //只允许pnpm来开发
    "preinstall": "npx only-allow pnpm"
  },
  "private": true,
  //   防止最外层被发布出去，设置为true后发布会进行提醒
  "engines": {
    "node": ">=16"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

4. 手动添加 pnpm-workspace.yaml 文件

```bash
packages:
  - 'packages/**'
```

5. 添加 packages 文件夹
6. 添加子包 test-share
7. 进入子包 pnpm init
8. 修改 package.json

```json
 "publishConfig": {
    "access": "public"
  },
```

9. 修改包名为@project/test-share
10. 添加子包 app
11. 进入子包 pnpm init 同时修改 package.json
12. 子包名@project/app
13. app 里添加依赖

```bash
pnpm -F @project/app add @project/test-share
```

添加依赖后

```json
 "dependencies": {
    "@monorepo-test/test-share": "workspace:^"
  }
```

> 假设我们的 workspace 中有 foo、 bar、 qar、 zoo 并且它们的版本都是 1.5.0，如下：

```bash
{
    "dependencies": {
        "foo": "workspace:*",
        "bar": "workspace:~",
        "qar": "workspace:^",
        "zoo": "workspace:^1.5.0"
    }
}

//将会被转化为：

{
    "dependencies": {
        "foo": "1.5.0", //这表示依赖项foo需要使用版本1.5.0。没有使用任何特定的版本范围符号，所以它将严格安装这个版本。
        "bar": "~1.5.0", //这里的~符号表示依赖项bar可以安装1.5.0或者更高但低于2.0.0的版本。这意味着它允许安装1.5.x系列的任何版本，但不会升级到2.0.0或更高版本。
        "qar": "^1.5.0", //^符号表示依赖项qar可以安装1.5.0或者更高但低于2.0.0的版本。与~符号不同，^允许安装到1.x.x系列的任何版本，这意味着如果qar发布了1.6.0，它也会被认为是兼容的。
        "zoo": "^1.5.0" //这与qar的规则相同，依赖项zoo可以安装1.5.0或者更高但低于2.0.0的版本。
    }
}
```

14. 登陆 npm

```bash
npm login
```

15. 安装发包依赖(用来进行发包管理和日志)

```bash
pnpm install @changesets/cli -w --save-dev
pnpm changeset init
```

16. 发布

pnpm changeset
pnpm changeset version
pnpm changeset publish

## Turborepo📚

> Turborepo 是一个针对 JavaScript 和 TypeScript 代码库优化的智能构建系统。具有缓存、并行处理的特性。

### turbo 的特性

总的来说就是更快，更简单

#### 多任务并行处理

Turbo 支持多个任务的并行运行，我们在对多个子包，编译打包的过程中，turbo 会同时进行多个任务的处理
在传统的 monorepo 任务运行器中，就像 lerna 或者 yarn 自己的内置 workspaces run 命令一样，每个项目的 script 生命周期脚本都以拓扑方式运行（这是“依赖优先”顺序的数学术语）或单独并行运行。根据 monorepo 的依赖关系图，CPU 内核可能处于空闲状态——这样就会浪费宝贵的时间和资源。
为了可以了解 turbo 多么强大，下图比较了 turbovslerna 任务执行时间线：
![alt text](image-9.png)
Turbo 它能够有效地安排任务类似于瀑布可以同时异步执行多个任务，而 lerna 一次只能执行一项任务 所以 Turbo 的 性能不言而喻

#### 云缓存

Turbo 通过其远程缓存功能可以帮助多人远程构建云缓存实现了更快的构建。

#### 任务管道

用配置文件定义任务之间的关系，然后让 Turborepo 优化构建内容和时间。

#### 基于约定的配置

通过约定降低复杂性，只需几行 JSON 即可配置整个项目依赖，执行脚本的顺序结构。

#### 浏览器中的配置文件

生成构建配置文件并将其导入 Chrome 或 Edge 以了解哪些任务花费的时间最长。

## 参考链接 🔗

<LinkCard desc="前端工程Monorepo项目管理方式" link="https://www.jb51.net/article/254801.htm"></LinkCard>

<LinkCard desc="前端工程Monorepo项目管理方式" link="https://www.jb51.net/article/254801.htm"></LinkCard>
