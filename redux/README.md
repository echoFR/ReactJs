
# Redux笔记
[笔记相关的代码](https://note.youdao.com/)
## redux基础

- 如果单独使用Redux
```
npm install redux -S
```

- 在React中使用Redux还需要
```
npm install react-redux -S
```
- 开发工具
> 1. react-devtools
> 2. redux-devtools    

### 基本使用
让我们先来看一看基本用法，再去看下面的API，看完记得上来整理一下思路哦。

```
import {createStore} from 'redux'
export default function(){
    //定义计算规则 reducer
    const counter=function(state=0,action){
        switch (action.type){
            case 'INCREMENT':
                return state+1
            case 'DECREMENT':
                return state-1
            default:
                return state
        }
    }
    //根据计算规则 创建store
    let store = createStore(counter);
    //state变化时候 
    store.subscribe(()=>{
        console.log('fn1-> current state',store.getState());
    })
    //定义state变化之后的派发规则
    store.subscribe(()=>{
        console.log('fn2-> current state',store.getState());
    })
    //触发state变化
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'DECREMENT'})    
}
```
### API
#### Store
Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。

Redux 提供 **createStore** 这个函数，用来生成 Store。

```
import { createStore } from 'redux';
const store = createStore(fn);

//createStore函数接受一个函数作为参数
//返回新生成的store对象
```
ps: createStore还可以接受第二个参数，表示state的最初状态，这通常是服务器给出的

```
let store = createStore(todoApp, window.STATE_FROM_SERVER)

//window.STATE_FROM_SERVER就是整个应用的状态初始值。
//如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值。
```
> - store.getState()
> - store.dispatch()
> - store.subscribe()

#### State
Store对象包含所有数据，规定一个state对应一个view，只要state相同，view就相同    
可以通过 **store.getState()** 获得当前时刻的state

```
import { createStore } from 'redux';
const store = createStore(fn);
const state = store.getState();
```
#### Action
action用来描述state的变化    
是一个**对象**，其中 **type** 属性是必须的，其他属性可以自由设置

```
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

// action的名称是ADD_TODO
// 携带的信息是字符串Learn Redux
```
#### ==Action Creator==
可以定义一个**函数**来生成多种 Action

```
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
// store.dispatch(addTodo('Learn Redux'));

// addTodo就是一个 Action Creator
// 该函数用于返回action
```
- action还有其他的一些创建方式：见demo4
- 另外redux还提供了 **bindActionCreators**用来创建action
#### store.dispatch()
发出action的唯一方法，用于触发state的改变(reducer)，接受一个action对象作为参数

```
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});

// store.dispatch(addTodo('Learn Redux'));
```
#### Reducer
##### 定义
dispath发送action后，必须给一个新的state，view才会发生变化，而计算新的state的过程就是reducer    
是一个**纯函数**，接受**之前的state**和**action**作为参数，返回新的state

```
const reducer = function (state, action) {
  // ...
  return new_state;
};
```
最开始：
```
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});
```
实际应用中，reducer不用这样手动调用，**store.dispatch**方法会触发Reducer的自动执行。为此，Store 需要知道 Reducer 函数，只需要在生成 Store 的时候，**将 Reducer传入createStore方法**。

```
import { createStore } from 'redux';
const store = createStore(reducer);
```
##### 纯函数
reducer是一个纯函数，保证了相同的state，必定有相同的view，所以在reducer里面不能改变state，必须返回一个全新的state或者返回之前的state
#### store.subscribe()
- Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

```
import { createStore } from 'redux';
const store = createStore(reducer);
store.subscribe(listener);
// listener 是一个函数
```
只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染

- store.subscribe方法返回一个函数，调用这个函数就可以解除监听。

```
let unsubscribe = store.subscribe(() =>
  console.log('current state： ',store.getState())
);
unsubscribe();
```
### Reducer的拆分
- reducer负责生成新的state，项目大的时候state会很大，reducer函数自然也会很大，所以对它进行拆分，不同的函数负责不同的state属性，最终把它们合并成为一个大的Reducer
- Redux 提供了一个==combineReducers==方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
> 拆分原理：state的顶级有多少个key，就拆分为相同个数且与key名相同的reducer

eg:1.
```
// state={ a:[], b:[] }
const reducers={
    a: function(state,action){},
    b: function(state,action){}
}
const reducer= combineReducers(reducers);

```
2.
```
import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  // reducer片段
  chatLog,
  statusMessage,
  userName
})
// State的属性名与子Reducer同名
```
- 你可以把所有子 Reducer 放在一个文件里面，然后统一引入。

```
import { combineReducers } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
```
- 使用combineReducers时需要注意的地方：
> - 每个reducer只处理自己对应那一部分的state
> - 所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。
> - 永远不能返回 undefined。当过早return时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。
> - 如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。可以使用 ES6 的默认参数值语法来设置初始 state，也可以手动检查第一个参数是否为 undefined。
> -         if(typeof state === 'undefined') return [] / '' /null;


一个大概的过程就是：
1. 首先用户发出action：***store.dispatch(action);***
2. store自动调用reducer，并且传入之前的state和action最为参数，reducer返回新的state
3. State 一旦有变化，Store 就会调用监听函数：***store.subscribe(listener);*** 
4. listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。

```
function listerner() {
  let newState = store.getState();
  component.setState(newState);   
}
```
## redux中间件
### 中间件的概念
中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
类似：
```
let next = store.dispatch;
// 对store.dispatch 进行重定义 
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
}
```
### 中间件的用法

```
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

// redux-logger 提供一个生成器createLogger
// 将生成的logger放到applyMiddleware中传入createStore方法
// 就完成了dispatch的增强
```
- createStore方法可以接受整个应用的初始状态作为参数，这样applyMiddleware就是第三个参数
- 中间件的次序有讲究。
> 比如logger就一定要放在最后，否则输出结果会不正确；异步中间件一般放在第一位
### applyMiddlewares()
### 异步操作的基本思路
### [redux-thunk 中间件](https://github.com/reduxjs/redux-thunk) 
1. npm install redux-thunk -S
```
import ReduxThunk from 'redux-thunk' 
```
2. 简单用法：

```
import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
export default function(){
    function reducer(state,action){
        if(typeof state === 'undefined') return {}
        switch(action.type){
            case 'changeName': 
                return {name: action.name}
            default: 
                return state
        }
    }
    const store= createStore(reducer,{name: 'fr'},applyMiddleware(reduxThunk))
    store.subscribe(()=>{
        console.log(store.getState());
    })
    let asyncAction=function(name){
        let action={
            type: 'changeName',
            name
        }
        return (dispatch,getState) => {    //这可以接收多个参数：dispath、getState、
            // if(getState().name === 'fr') return  
            setTimeout(() => {
              dispatch(action);
            }, 1000);
        };
    }
    console.log('之前');
    store.dispatch(asyncAction('fzzzzzz'))
    console.log('之后');
}
```
3. 还可以给它拓展参数：

```
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

// later
function fetchUser(id) {
  return (dispatch, getState, api) => {
    // you can use api here
  }
}
```
[参考博客](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html) 
## 在react项目中使用redux
### UI组件
1. React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。
2. UI 组件有以下几个特征：
- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用this.state这个变量）
- 所有数据都由参数（this.props）提供
- 不使用任何 Redux 的 API
### 容器组件
- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API
> 如果一个组件既有UI又有业务逻辑，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。    
React-Redux 规定，所有的UI组件都由用户提供，容器组件则是由React-Redux自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。 

### connect()
React-Redux 提供connect方法，用于从UI组件生成容器组件，将两个组件连起来

```
import {connect} from 'react-redux'
const listContainer = connect()(listUI)

// listUI是UI组件
// listContainer是react-redux通过connect方法自动生成的容器组件
```

上面的容器组件只是UI组件的一个单纯的包装层，为了定义业务逻辑，需给出一下两个信息：
> 1. 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
> 2. 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。    

所以connect完整AIP：

```
import {connect} from 'react-redux'
const listContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(listUI)

// mapStateToProps将state映射到UI组件的props
// mapDispatchToProps将用户对UI组件的操作映射成action
```
### mapStateToProps()       
展开props添加到UI组件中
  内部不会监听state的变化
### mapDispatchToProps()

### <Provider> 组件
React-Redux 提供Provider组件，可以让容器组件拿到state。

```
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store= createStore(todoApp);

render(){
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('root')
}

// Provider在跟组件外面包了一层，
// 这样，APP的所有子组件都默认可以拿到 state
```
[参考博客](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)