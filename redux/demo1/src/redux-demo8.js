// redux-promise中间件的用法 
import {createStore,applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'
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

    const store= createStore(reducer,{name: 'fr'},applyMiddleware(reduxPromise))
    store.subscribe(()=>{
        console.log(store.getState());
    })
    
    function action(name){
        return{
            type: 'changeName',
            name
        }
    }
    let asyncAction=function(name){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    // dispatch(action('action1'));
                    resolve(action(name));
                },2000)
            })          
    }
    console.log('之前');
    store.dispatch(asyncAction('fzzzzzzz'))
    console.log('之后');
}