# ECMAScript
- 简短历史:
  - 早期为验证简单的表单而需要大量与服务器的往返通信成为用户的痛点, 客户端脚本语言的需求越来越强烈
  - 1995, 网景公司一位名叫 Brendan Eich 的工程师, 为 Netscape Navigator 2 开发脚本语言LiveScript(后来改为 JavaScript)
  - 1997, JavaScript 1.1 作为提案被提交给欧洲计算机制造商协会ECMA, 数月时间打造出 ECMA-262
  - 1998, 国际标准化组织(ISO)和国际电工委员会(IEC)也将 ECMAScript 采纳为标准(ISO/IEC-16262)
- ECMAScript 定义的语言不只局限于 Web 浏览器, 只要提供宿主环境即可运行
  - 宿主环境: 提供 ECMAScript 的基准实现和与环境自身交互必需的扩展, 比如Node.js 与 Adobe Flash
  - 基准实现: 语法, 类型, 语句, 关键字, 保留字, 操作符, 全局对象
  - 必须拓展: DOM 文档对象模型, BOM 浏览器对象模型
- ECMAScript 符合性 
  - 支持 ECMA-262 中描述的所有"类型, 值, 对象, 属性, 函数, 以及程序语法与语义"
  - 支持 Unicode 字符标准

# DOM
- DOM 通过创建表示文档的树, 让开发者可以随心所欲地控制网页的内容和结构, 使用 DOM API, 可以轻松地删除、添加、替换、修改节点
- 1998, DOM Level 1 成为 W3C 的推荐标准, 规范由两个模块组成: DOM Core 和 DOM HTML
  - DOM Core 提供了一种映射 XML 文档, 从而方便访问和操作文档任意部分的方式
  - DOM HTML 扩展了前者, 并增加了特定于 HTML 的对象和方法
- 2000, DOM Level 2 增加了下述接口
  - DOM 视图: 追踪文档不同视图的接口
  - DOM 事件: 事件及事件处理的接口
  - DOM 样式: 处理元素 CSS 样式的接口
  - DOM 遍历和范围: 遍历和操作 DOM 树的接口

# BOM
- BOM用于支持访问和操作浏览器的窗口, 开发者可以操控浏览器显示页面之外的部分, 人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内
  - 弹出新浏览器窗口的能力
  - 移动、缩放和关闭浏览器窗口的能力
  - navigator对象, 提供关于浏览器的详尽信息
  - location 对象, 提供浏览器加载页面的详尽信息
  - screen对象, 提供关于用户屏幕分辨率的详尽信息
  - performance 对象, 提供浏览器内存占用、导航行为和时间统计的详尽信息
  - 对 cookie 的支持
  - 其他自定义对象, 如 XMLHttpRequest和 IE 的 ActiveXObject
- HTML5 正式规范的形式涵盖了尽可能多的 BOM 特性
