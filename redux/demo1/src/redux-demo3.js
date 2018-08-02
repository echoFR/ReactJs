// reducer的拆分
import {createStore,combineReducers} from 'redux'
// state={a:[],b:[],c:{name:'',group:[]}}
// actionA: {type, data(String)}
// actionA: {type, name, item}

// 每个reducer只处理自己对应那一部分的 state
export default function(){
    function AReducer(state,action){
        if(typeof state === 'undefined') return [];
        // 使用 combineReducers的时候
        // 注意此处 return []  / null / ''
        switch(action.type){
            case 'a': 
                return state.concat([action.payload.data])
            default:
                return state
        }
    }
    function BReducer(state,action){
        if(typeof state === 'undefined') return [];        
        switch(action.type){
            case 'b': 
                return state.concat([action.data])
            default:
                return state
        }
    }
    function CNameReducer(state,action){
        if(typeof state === 'undefined') return '';        
        switch(action.type){
            case 'c': 
                return action.name
            default:
                return state
        }
    }
    function CGroupReducer(state,action){
        if(typeof state === 'undefined') return [];        
        switch(action.type){
            case 'c': 
                return state.concat(action.item)
            default:
                return state
        }
    }
    function CReducer(state,action){
        if(typeof state === 'undefined') return {name: '', group: []};        
        switch(action.type){
            case 'c': 
                return combineReducers({name: CNameReducer,group: CGroupReducer})(state,action)
            default:
                return state
        }
    }
    const reducer=combineReducers({
        a: AReducer,
        b: BReducer,
        c: CReducer
    })
    
    const store=createStore(reducer,{a:[111],b:[222],c:{name:'',group:[]}});
    
    store.subscribe(()=>{
        console.log('current state',store.getState());
    })
    
    let actionA={
        type: 'a',
        // data: 'fr'
        payload:{   //action标准化
            data: 'fr'
        }
    }
    let actionB={
        type: 'b',
        data: '19971005'
    }
    let actionC={
        type: 'c',
        name: 'fr19971005',
        item: '3g'
    }
    store.dispatch(actionA)
    store.dispatch(actionB)
    store.dispatch(actionC)

    // store.dispatch({
    //     type: 'changeName',
    //     payload:{
    //         name,group
    //     }
    // })
    
    // store.dispatch({
    //     type: 'changeName',
    //     payload: new Error(),
    //     error: true,
    // })
}
