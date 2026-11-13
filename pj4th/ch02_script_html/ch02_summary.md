# script 标签
- async: 表示立即下载脚本, 但不阻止其他页面动作, 只对外部脚本文件有效
- charset: 指定代码字符集
- crossorigin: 配置请求的 CORS(跨源资源共享)设置, 默认不使用 CORS
- defer: 表示脚本可以延迟到文档完全被解析和显示之后再执行, 只对外部脚本文件有效
- integrity: 比对接收资源和指定加密签名以验证子资源完整性(SRI, Subresource Integrity) 确保 CDN 不会提供恶意内容
- src: 表示包含要执行的代码的外部文件
- type: 表示代码块中脚本语言的内容类型(MIME 类型) 
  - "text/javascript" 默认指定
  - "text/ecmascript" 废弃
  - "application/x-javascript" JavaScript MIME 类型
  - "application/javascript" 特定
  - "application/ecmascript" 特定
  - "module" 代码被当成 ES6 模块, 此时代码中才能出现 import 和 export 关键字
 
# 引用方式
- 外部引用: `<script src="example.js"></script>`
- 行内引用: `<script> ... </script>`
- 如果两者都提供的话, 则浏览器只会下载并执行脚本文件, 从而忽略行内代码
- 如果引用外部链接: 
  - 浏览器析这个资源时, 会发送一个 GET 请求, 不受 CORS 影响, 但返回并被执行的 JavaScript 则受 CORS 限制
  - integrity 属性确保资源完整性

# 位置与执行
- 浏览器按照 <script> 在页面中出现的顺序依次解释它们, 在解释执行完成后, 页面的其余内容不会被加载, 也不会被显示
- 通常将所有 <scirpt> 放在 <body> 元素中的页面内容后面, 页面会在处理代码之前完全渲染页面
- defer: script 会推迟到 DOMContentLoaded 事件之前执行, 按顺序 (HTML5 规定)执行
- async: script 会保证在页面的 load 事件前执行, 但可能会在 DOMContentLoaded 之前或之后

# 动态加载脚本
- 预加载器生命
- 创建 script DOM 节点
- 设置属性
- 加入到 head 后

# 文档模式
- 浏览器如何解析和呈现 HTML 文档的模式, 影响着 JavaScript 的行为, CSS 的解析以及 DOM 的处理
- 标准模式 `<!DOCTYPE html>`

# noscript
- noscript 元素可以包含任何可以出现在<body>中的 HTML 元素, 渲染条件
  - 浏览器不支持脚本
  - 浏览器对脚本的支持被关闭
