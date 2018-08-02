import {createStore} from 'redux'
export default function(){
    const reducer=function(state,action){
        switch(action.type){
            case 'changeName':
                // return {name: action.name}
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
    store.dispatch(action)
}