// redux-thunk中间件的用法 2
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
    // 拓展redux-thunk的参数：withExtraArgument

    const store= createStore(reducer,{name: 'fr'},applyMiddleware(reduxThunk.withExtraArgument({default: 'js'})))
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
        return dispatch => {    //这可以接收多个参数：dispath、getState、
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    dispatch(action('action1'));
                    resolve();
                },1000)
            }).then(()=>{
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        dispatch(action('action2'));
                        resolve();
                    },3000)
                })
            }).then(()=>{
                dispatch(action('action3'));                
            })            
        };
    }
    console.log('之前');
    store.dispatch(asyncAction())
    console.log('之后');
}