import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import reduxThunk from 'redux-thunk'
const store= createStore(reducer,applyMiddleware(reduxThunk))
// const store= createStore(reducer,{list:[{title: '测试', context: '我是测试！'}],info:{user:null,password:null},logined:false})

export default store