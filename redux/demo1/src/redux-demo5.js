// 中间件的简单原理
import {createStore} from 'redux'
export default function(){
    const reducer=function(state,action){
        switch(action.type){
            case 'changeName':
                return Object.assign({},state,{name: action.name})
            default:
                return state
        }
    }
    let store= createStore(reducer,{name: 'fr'})
    store.subscribe(()=>{
        console.log(store.getState());
    })
    const action={
        type: 'changeName',
        name: 'fz'
    }
    let next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action);
        next(action);
        console.log('next state', store.getState());
    }
    store.dispatch(action);
}