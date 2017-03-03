# React Native入门 
## React相关知识点
### 什么是React
用来构建**交互页面**的高效、灵活的js库

### 横向对比（Angular1、Angular2、Ember...）
没什么可比性，React自己更多负责的是View层的事情，独自不能被称为“前端框架”。加上诸如react-router、redux等第三方工具，才算是组成较为完整的前端框架
### React的优点
- 高效
- 灵活
- 清晰
- 可复用性高

### React有什么不一样
JSX语法可能会让刚刚从其他技术栈转过来的同学不太适应，也因为它的写法让很多码友吐槽“四不像”。React写起来像是将js和html做了合并，页面和控制代码放在一起，原来的前端三大样HTML、CSS和JS现在变成了JSX和CSS。

React的数据流是单向的，不像是Angular1中的数据双向绑定。比如同样在Angular1中可以给input绑定一个值a，input中输入内容a就会改变；同样改变a，input中的值也会改变。在React中，在input中绑定a，会将a显示在input中。但是在input中输入一个值，a并不会自动改变，而是需要人为写一个方法去获取输入信息赋值给a，再将改变后的a显示出来。（这一点在一开始入手时可能会觉得比较烦人）

### React知识点
- 每个组件都必须实现render方法，并且返回相应的“页面”代码。可以为null
- 组件的[lifecycle](https://facebook.github.io/react/docs/react-component.html)
	- constructor(props)
	- componentWillMount()
	- componentDidMount()
	- componentWillReceiveProps(nextProps)
	- shouldComponentUpdate(nextProps, nextState)
	- componentWillUpdate(nextProps, nextState)
	- componentWillUnmount()
- 重要的方法
	- setState(nextState, callback)
- 重要的两个对象
	- props（调用者传入，组件本身不应该维护这个值，只拿来使用）
	- state（自身维护，最好放跟页面显示有关的数据。不能直接改变，应该使用setState方法设置。）
- 项目中组件最好大致分为两种
	1. 显示类组件：该类型组件尽可能少的加入业务逻辑代码和自身维护的state值（或者说业务数据），给什么数据显示什么数据，主要用来显示样式。自身逻辑少了利于组件的复用，不会被这样那样的小差别而加入很多的if...else...数据由调用组件传入。该类组件除了显示样式和传入数据外，如有必要还需要提供触发事件。比如一个<Button/>组件，最起码要提供一个onClick方法，让外层可以在点击时处理需要的逻辑
	2. 数据逻辑类组件（自己瞎起的名字）：该类型组件尽可能少的实现样式，主要功能是拿到数据，处理业务逻辑，把显示类组件组合起来，满足样式设计样式要求。
- 组件尽可能小，有的时候重复代码比逻辑复杂更有优势。
- 组件嵌套尽可能浅，最好就是一个逻辑组件包在一些平行的显示组件中，否则传入数据和传出事件会很恶心人

### React项目全家桶
- react
- react-router
- redux
- webpack

## React Native
### 什么是React Native
用React和js构建**原生APP**，注意是原生app，而不是"mobile web app"、"HTML5 app"或者"hybird app"
### 优势
- 对于前端开发人员来说，开发app的门槛降低，上手相对容易
- 开发一次可以用在安卓和IOS两个平台上
- 用好flex布局后，对屏幕的适配程度很高，即便是安卓各种尺寸的屏幕也能较好的适配
- 相对使用webview开发出来的app，能有更好的用户体验
- 可直接与Objective-C、JAVA、Swift原生语言交互，也可作为独立插件嵌入原生应用
- 使用Code Push可做js上线，不改动原生方法的情况下上线新版本更方便
### 劣势
- 调用原生方法步骤相对繁琐，如果需要使用很多原生方法，可能会出现原生代码跟JS代码量差不多的情况
- 如果是纯前端过来写，在封装原生方法时有一定麻烦

### 使用场景
与原生交互较少的页面型app

个人感觉RN写页面和业务逻辑很方便，同时相较H5能提供更好的用户操作体验。但是如果需要大量原生方法，需要慎重使用。
### 常用组件
- View，和html中的div类似。用来布局，与div不同的是View中不可以直接放文字内容，仅仅用来布局
- Text，用来放文字内容。可以使用一些布局样式，但是不推荐，最好各司其职。我个人Text只会使用类似color、fontSize等样式
- Touchable*，RN封装的几个触摸组件，用来写button等可触摸区域
- Image，类似于img，用来展示图片
- ScrollView，滚动布局控件，当显示数据确定不变时使用
- ListView，类似于ScrollView，当数据可变时使用。例如数据列表，分页时加载

## React和React Native
### 不同
- 页面写法不同，React直接用html标签，RN使用类似于原生页面的标签

### 相同
- 除了页面部分不大一样，其他一致，目前没觉得有什么不一致