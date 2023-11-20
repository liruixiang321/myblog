import{_ as s,o as n,c as a,O as p}from"./chunks/framework.34ecc14f.js";const l="/myblog/assets/actions.163d4fae.png",o="/myblog/assets/secrets.588b8453.png",h=JSON.parse('{"title":"vitepress建站过程","description":"","frontmatter":{},"headers":[],"relativePath":"artworks/vitepressblog.md","filePath":"artworks/vitepressblog.md"}'),e={name:"artworks/vitepressblog.md"},t=p(`<h1 id="vitepress建站过程" tabindex="-1">vitepress建站过程 <a class="header-anchor" href="#vitepress建站过程" aria-label="Permalink to &quot;vitepress建站过程&quot;">​</a></h1><p>作为一个github小白😅，在这里记录一下本站的建站过程，主要是使用vitepress+github pages+自动化部署</p><h2 id="为什么使用vitepress" tabindex="-1">为什么使用vitepress <a class="header-anchor" href="#为什么使用vitepress" aria-label="Permalink to &quot;为什么使用vitepress&quot;">​</a></h2><blockquote><p>我们喜爱<code>VuePress</code>，但是它是基于 Webpack 构建。为了一个只有几个简单页面的简单文档站点启动开发服务器所需的时间正变得让人难以忍受。即使是<code>HMR</code>热更新也需要几秒钟的时间才能在浏览器中显示出来。</p><p>作为参考，<a href="https://github.com/vuejs/composition-api-rfc" target="_blank" rel="noreferrer">Composition API RFC repo</a>仅只有两个页面，但是它花费了 4 秒来启动服务器，并且任何修改都需要将近 2 秒钟的时间才能在浏览器中显示出来。</p><p>从根本上说，这是因为 VuePress 是 webpack 的一个应用程序。即使只有两页，这也是一个完整的 webpack 项目(包括所有的主题源文件)正在编译。当项目有很多页面时，情况会变得更糟：每个页面都必须先完全编译，然后服务器才能显示内容！</p><p>顺便说一句，Vite 很好地解决了这些问题：几乎立即启动服务器，只按需编译正在服务的页面，以及闪电般的快速 hmr。另外，随着时间的推移，我在 VuePress 中注意到了一些额外的设计问题，但是由于重构的数量，我从来没有时间去修复它。</p><p>现在，使用 Vite 和 Vue 3，是时候重新考虑“Vue 驱动的静态站点生成器”到底能是什么了。</p></blockquote><p>::⚠️ VuePress 需要 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js (opens new window)</a>&gt;= 8.6</p><h2 id="vitepress本地搭建" tabindex="-1">vitepress本地搭建 <a class="header-anchor" href="#vitepress本地搭建" aria-label="Permalink to &quot;vitepress本地搭建&quot;">​</a></h2><p>这里直接参考vitepress官网中的<a href="https://vitejs.cn/vitepress/guide/getting-started.html" target="_blank" rel="noreferrer">快速入门</a>，将整个项目的基本框架先搭建起来。搭建起来的项目docs目录是这样的</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ package.json</span></span></code></pre></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>这一部分参考vitepress官网给出的<a href="https://vitejs.cn/vitepress/config/homepage.html" target="_blank" rel="noreferrer">文档</a>和<a href="https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5" target="_blank" rel="noreferrer">vuepress文档</a>共同食用，项目搭建起来之后，需要对config文件进行配置，这是我当前的配置</p><p>config文件</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lrx&#39;s Blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/myblog/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">logo</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/1.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">作品集</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/artworks/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">基础知识</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/base/html/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/base/css/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/base/js/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/base/ts/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">              ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vue3/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">需求杂症</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/xuqiuzazhen/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">每周总结</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/weeks/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Leetcode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/leetcode/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// sideber以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">collapsable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//是否折叠</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/artworks/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的博客</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">建站记录</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/artworks/vitepressblog</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的开源项目</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/work/opensource</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>主页配置index.md</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">hero</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lrx&#39;s的前端旅途</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">努力努力再努力💪！</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/1.png</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">让我康康</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alt</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">View on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/vuejs/vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">features</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🙋‍</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">前端基础知识</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Typescript 前端工程化...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">📚</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">前端工作日常</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">开发工具使用 踩坑记录...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🛠️</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">学习总结</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vue3 leetcode...</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :root {</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-name-color: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f55a3e, #7c9eb7);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-image-background-image: linear-gradient( -45deg, #f55a3e 50%, #7c9eb7 50% );</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-image-filter: blur(40px);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><h2 id="创建工作流" tabindex="-1">创建工作流 <a class="header-anchor" href="#创建工作流" aria-label="Permalink to &quot;创建工作流&quot;">​</a></h2><p>在根目录中创建/workflows/blank.yml文件或者通过github中的action进行创建如下图</p><p><img src="`+l+`" alt="github创建工作流"></p><p>具体文件内容如下：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">on: # 触发条件</span></span>
<span class="line"><span style="color:#89DDFF;">  # </span><span style="color:#FFCB6B;">每当 push 到 master 分支时触发部署</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches: </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  # </span><span style="color:#FFCB6B;">是否手动触发部署</span></span>
<span class="line"><span style="color:#A6ACCD;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  docs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest # 指定运行所需要的虚拟机环境（必填）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="color:#A6ACCD;">          fetch-depth: 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Setup Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          # 选择要使用的 node 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: &quot;14&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      # 缓存 node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Cache dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/cache@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: yarn-cache</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          path: |</span></span>
<span class="line"><span style="color:#A6ACCD;">            **/node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">          key: \${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          restore-keys: |</span></span>
<span class="line"><span style="color:#A6ACCD;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      # 如果缓存没有命中，安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: yarn --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      # 运行构建脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build VuePress site</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      # 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="color:#A6ACCD;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: \${{ secrets.ACTION_SECRET }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          # 部署到 gh-pages 分支</span></span>
<span class="line"><span style="color:#A6ACCD;">          target_branch: gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">          # 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="color:#A6ACCD;">          build_dir: docs/.vitepress/dist</span></span></code></pre></div><p>之后将本地仓库推送到远程仓库，推送成功后，会自动执行这个工作流进行部署。需要注意的是这里需要创建Repository secrets</p><p><img src="`+o+'" alt=""></p><p>需要注意的是secret的值是personal access token</p><p>而这个pat我也是第一次设置，创建pat后密钥只会显示一次，所以只能复制这一次，之后就看不到他的值了。</p><p>复制到ACTION_SECRET.</p><p>再重新执行项目的action就好了。</p><p>2023/10/25</p><p>后续我再进行push并执行action时，会报密码和用户名错误，remote: Invalid username or password. fatal: Authentication failed for <code>https://github.com</code>...,后来发现原因时token过时了，所以解决方法是：</p><ul><li>去<code>github -&gt; setting -&gt; developer settings -&gt; personal access token</code>.</li><li>生成一个新的token 生成新的token,可以自定义他的有效期。</li><li>复制token，在需要输入密码的位置，粘贴token即可。</li></ul>',28),c=[t];function r(D,y,F,C,A,i){return n(),a("div",null,c)}const u=s(e,[["render",r]]);export{h as __pageData,u as default};
