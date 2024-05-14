import{_ as s,o as a,c as n,O as l}from"./chunks/framework.61b111ec.js";const o="/myblog/assets/sapLoadimg.afaf58b1.png",p="/myblog/assets/sourceLoad.41c67845.png",u=JSON.parse('{"title":"前端监控平台","description":"","frontmatter":{},"headers":[],"relativePath":"artworks/jiankong.md","filePath":"artworks/jiankong.md"}'),t={name:"artworks/jiankong.md"},e=l('<h1 id="前端监控平台" tabindex="-1">前端监控平台 <a class="header-anchor" href="#前端监控平台" aria-label="Permalink to &quot;前端监控平台&quot;">​</a></h1><h2 id="埋点" tabindex="-1">埋点 <a class="header-anchor" href="#埋点" aria-label="Permalink to &quot;埋点&quot;">​</a></h2><p>使用第三方或自己开发相应的数据系统，进行用户行为数据或其它信息数据的收集。说白点，就是通过技术手段偷偷的监控用户在我们产品上的行为</p><h3 id="埋点方式" tabindex="-1">埋点方式 <a class="header-anchor" href="#埋点方式" aria-label="Permalink to &quot;埋点方式&quot;">​</a></h3><h4 id="无埋点" tabindex="-1">无埋点 <a class="header-anchor" href="#无埋点" aria-label="Permalink to &quot;无埋点&quot;">​</a></h4><p>在产品中植入SDK,通过界面配置的方式对关键的行为进行定义，完成埋点采集，一般都是通过第三方统计工具，如：友盟、神策、百度统计、诸葛IO等。</p><h4 id="前端代码埋点" tabindex="-1">前端代码埋点 <a class="header-anchor" href="#前端代码埋点" aria-label="Permalink to &quot;前端代码埋点&quot;">​</a></h4><p>前端埋点与全埋点类似，也需要嵌入SDK，不同的是对于每个事件行为都需要调用SDK代码，传入必要的事件名，属性参数等等，然后发到后台数据服务器。 前端埋点适用于：其他非关键业务量或不需要请求服务器的行为，能记录用户绝大多数的操作行为</p><h3 id="埋点实现" tabindex="-1">埋点实现 <a class="header-anchor" href="#埋点实现" aria-label="Permalink to &quot;埋点实现&quot;">​</a></h3><p>实例：<a href="https://blog.csdn.net/luoluoxx0115/article/details/120714272" target="_blank" rel="noreferrer">https://blog.csdn.net/luoluoxx0115/article/details/120714272</a></p><h2 id="性能数据采集" tabindex="-1">性能数据采集 <a class="header-anchor" href="#性能数据采集" aria-label="Permalink to &quot;性能数据采集&quot;">​</a></h2><p>SAP页面加载模型 <img src="'+o+`" alt="Alt text"> 最初我们可以使用window。performance.timing来获取加载过程中模型的各个阶段的消耗时间。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// window.performance.timing 各字段说明</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">navigationStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 同一个浏览器上下文中，上一个文档结束时的时间戳。如果没有上一个文档，这个值会和 fetchStart 相同。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">unloadEventStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 上一个文档 unload 事件触发时的时间戳。如果没有上一个文档，为 0。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">unloadEventEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 上一个文档 unload 事件结束时的时间戳。如果没有上一个文档，为 0。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">redirectStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示第一个 http 重定向开始时的时间戳。如果没有重定向或者有一个非同源的重定向，为 0。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">redirectEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示最后一个 http 重定向结束时的时间戳。如果没有重定向或者有一个非同源的重定向，为 0。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fetchStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器准备好使用 http 请求来获取文档的时间戳。这个时间点会在检查任何缓存之前。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domainLookupStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 域名查询开始的时间戳。如果使用了持久连接或者本地有缓存，这个值会和 fetchStart 相同。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domainLookupEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 域名查询结束的时间戳。如果使用了持久连接或者本地有缓存，这个值会和 fetchStart 相同。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">connectStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// http 请求向服务器发送连接请求时的时间戳。如果使用了持久连接，这个值会和 fetchStart 相同。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">connectEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 浏览器和服务器之前建立连接的时间戳，所有握手和认证过程全部结束。如果使用了持久连接，这个值会和 fetchStart 相同。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">secureConnectionStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 浏览器与服务器开始安全链接的握手时的时间戳。如果当前网页不要求安全连接，返回 0。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">requestStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 浏览器向服务器发起 http 请求(或者读取本地缓存)时的时间戳，即获取 html 文档。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">responseStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 浏览器从服务器接收到第一个字节时的时间戳。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">responseEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 浏览器从服务器接受到最后一个字节时的时间戳。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domLoading</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// dom 结构开始解析的时间戳，document.readyState 的值为 loading。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domInteractive</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// dom 结构解析结束，开始加载内嵌资源的时间戳，document.readyState 的状态为 interactive。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domContentLoadedEventStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// DOMContentLoaded 事件触发时的时间戳，所有需要执行的脚本执行完毕。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domContentLoadedEventEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// DOMContentLoaded 事件结束时的时间戳</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">domComplete</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// dom 文档完成解析的时间戳， document.readyState 的值为 complete。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">loadEventStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// load 事件触发的时间。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">loadEventEnd</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// load 时间结束时的时间。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>后来window.performance.timing被废除，通过PerfomanceObserve来获取。</p><h2 id="用户行为数据采集" tabindex="-1">用户行为数据采集 <a class="header-anchor" href="#用户行为数据采集" aria-label="Permalink to &quot;用户行为数据采集&quot;">​</a></h2><p>用户行为：页面路有变化，鼠标点击，资源加载，接口调用，代码报错等</p><h3 id="设计类" tabindex="-1">设计类 <a class="header-anchor" href="#设计类" aria-label="Permalink to &quot;设计类&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建用户行为类</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Breadcrumb</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// maxBreadcrumbs控制上报用户行为的最大条数</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">maxBreadcrumbs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// stack 存储用户行为</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stack</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 添加用户行为栈</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">maxBreadcrumbs</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 超出则删除第一条</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 按照时间排序</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> breadcrumb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Breadcrumb</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加一条页面跳转的行为，从home页面跳转到about页面</span></span>
<span class="line"><span style="color:#A6ACCD;">breadcrumb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Route</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  url: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000/index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1668759320435</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加一条用户点击行为</span></span>
<span class="line"><span style="color:#A6ACCD;">breadcrumb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;button id=&#39;btn&#39;&gt;按钮&lt;/button&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1668759620485</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加一条调用接口行为</span></span>
<span class="line"><span style="color:#A6ACCD;">breadcrumb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Xhr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://10.105.10.12/monitor/open/pushData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1668760485550</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 上报用户行为</span></span>
<span class="line"><span style="color:#82AAFF;">reportData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a6481683-6d2e-4bd8-bba1-64819d8cce8c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> breadcrumb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getStack</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span></code></pre></div><h3 id="页面跳转" tabindex="-1">页面跳转 <a class="header-anchor" href="#页面跳转" aria-label="Permalink to &quot;页面跳转&quot;">​</a></h3><p>在vue中的两种路由模式history和hash模式，history模式通过pushState和replaceState方法来改变路由还可以通过popState事件监听，hash模式是通过hashChange事件来监听url变化。所以改写以上两个方法或者监听hashChange事件进行上报。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// lastHref 前一个页面的路由</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> lastHref </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">historyReplace</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">historyReplaceFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">originalHistoryFn</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">from</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastHref</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">lastHref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 上报路由变化</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">reportData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">routeChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">to</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">originalHistoryFn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 重写pushState事件</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">replaceAop</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pushState</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">historyReplaceFn</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 重写replaceState事件</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">replaceAop</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">replaceState</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">historyReplaceFn</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">replaceAop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">original</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wrapped</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">original</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wrapped</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wrapped</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="资源加载" tabindex="-1">资源加载 <a class="header-anchor" href="#资源加载" aria-label="Permalink to &quot;资源加载&quot;">​</a></h3><p><img src="`+p+`" alt="Alt text"> 瀑布图展现了浏览器为渲染网页而加载的所有的资源，包括加载的顺序和每个资源的加载时间</p><p>分析这些资源是如何加载的, 可以帮助我们了解究竟是什么原因拖慢了网页，从而采取对应的措施来提升网页速度</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// PerformanceResourceTiming 各字段说明</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">connectEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器完成建立与服务器的连接以检索资源之后的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">connectStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器开始建立与服务器的连接以检索资源之前的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">decodedBodySize</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示在删除任何应用的内容编码之后，从*消息主体*的请求（HTTP 或缓存）中接收到的大小（以八位字节为单位）</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">domainLookupEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器完成资源的域名查找之后的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">domainLookupStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示在浏览器立即开始资源的域名查找之前的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">duration</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 返回一个timestamp，即 responseEnd 和 startTime 属性的差值</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">encodedBodySize</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示在删除任何应用的内容编码之前，从*有效内容主体*的请求（HTTP 或缓存）中接收到的大小（以八位字节为单位）</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">entryType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 返回 &quot;resource&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fetchStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器即将开始获取资源之前的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">initiatorType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 代表启动性能条目的资源的类型，如 PerformanceResourceTiming.initiatorType 中所指定</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 返回资源 URL</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">nextHopProtocol</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 代表用于获取资源的网络协议</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">redirectEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示收到上一次重定向响应的发送最后一个字节时的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">redirectStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示上一次重定向开始的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">requestStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器开始向服务器请求资源之前的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">responseEnd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示在浏览器接收到资源的最后一个字节之后或在传输连接关闭之前（以先到者为准）的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">responseStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器从服务器接收到响应的第一个字节后的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">secureConnectionStart</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示浏览器即将开始握手过程以保护当前连接之前的时间</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">serverTiming</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 一个 PerformanceServerTiming 数组，包含服务器计时指标的PerformanceServerTiming 条目</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">startTime</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 表示资源获取开始的时间。该值等效于 PerformanceEntry.fetchStart</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">transferSize</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 代表所获取资源的大小（以八位字节为单位）。该大小包括响应标头字段以及响应有效内容主体</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">workerStart</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 如果服务 Worker 线程已经在运行，则返回在分派 FetchEvent 之前的时间戳，如果尚未运行，则返回在启动 Service Worker 线程之前的时间戳。如果服务 Worker 未拦截该资源，则该属性将始终返回 0。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果我们只关注首页资源，我们可以在window.onload事件中去收集。 如果要收集所有的资源，需要通过定时器反复地去收集，并且在一轮收集结束后，通过调用 clearResourceTimings 将 performance entries 里的信息清空，避免在下一轮收集时取到重复的资源</p><h2 id="个性化指标" tabindex="-1">个性化指标 <a class="header-anchor" href="#个性化指标" aria-label="Permalink to &quot;个性化指标&quot;">​</a></h2><h3 id="long-task" tabindex="-1">long task <a class="header-anchor" href="#long-task" aria-label="Permalink to &quot;long task&quot;">​</a></h3><h3 id="memory内存" tabindex="-1">memory内存 <a class="header-anchor" href="#memory内存" aria-label="Permalink to &quot;memory内存&quot;">​</a></h3><p>performance.memory 可以显示此刻内存占用情况，它是一个动态值，其中：</p><p>jsHeapSizeLimit 该属性代表的含义是：内存大小的限制。 totalJSHeapSize 表示总内存的大小。 usedJSHeapSize 表示可使用的内存的大小。</p><p>通常，usedJSHeapSize 不能大于 totalJSHeapSize，如果大于，有可能出现了内存泄漏</p><h3 id="首屏加载时间" tabindex="-1">首屏加载时间 <a class="header-anchor" href="#首屏加载时间" aria-label="Permalink to &quot;首屏加载时间&quot;">​</a></h3><p>计算： 1）利用MutationObserver监听document对象，每当dom变化时触发该事件 2）判断监听的dom是否在首屏内，如果在首屏内，将该dom放到指定的数组中，记录下当前dom变化的时间点 3）在MutationObserver的callback函数中，通过防抖函数，监听document.readyState状态的变化 4）当document.readyState === &#39;complete&#39;，停止定时器和 取消对document的监听 5）遍历存放dom的数组，找出最后变化节点的时间，用该时间点减去performance.timing.navigationStart 得出首屏的加载时间</p>`,34),c=[e];function r(y,F,D,i,A,C){return a(),n("div",null,c)}const h=s(t,[["render",r]]);export{u as __pageData,h as default};
