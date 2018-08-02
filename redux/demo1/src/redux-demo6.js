// redux-thunk中间件的用法
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
    
    let asyncAction=function(name){
        let action={
            type: 'changeName',
            name
        }
        return (dispatch,getState,api) => {    //这可以接收多个参数：dispath、getState、
            // if(getState().name === 'fr') return
            console.log(api);
            setTimeout(() => {
              dispatch(action);
            }, 1000);
        };
    }
    console.log('之前');
    store.dispatch(asyncAction('fzzzzzz'))
    console.log('之后');
}