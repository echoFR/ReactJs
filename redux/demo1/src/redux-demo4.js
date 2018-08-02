// action的创建方式
import {createStore} from 'redux'
export default function(){
    //创建store
    let store = createStore((state,action)=>{
        switch(action.type){
            case 'changeName' :
                return Object.assign({},state,{name: action.name})
            default:
                return state
        }
    });
    //state变化时候 
    store.subscribe(()=>{
        console.log(store.getState());
    })

    // 第一种方式 
    store.dispatch({type: 'changeName',name: 'fr'}) 
    
    // 第二种 action creator
    // function actionCreator(name){
    //     return{
    //         type: 'changeName',
    //         name   
    //     }
    // }
    // console.log(actionCreator('fr'));

    // 第三种
    // function createAction(action,dispatch){
    //     return function(opt){
    //         action = Object.assign({},action,opt,{type: action.type})
    //         dispatch(action);
    //     }
    // }
    // var action= createAction({type: 'changeName', name: 'fr'}, store.dispatch)
    // action();
    // action({name:'zzzz'})

    // 第四种   redux.bindActionCreators   
    // 对action和dispath的封装
    // function a(name){
    //     return{
    //         type: 'a',
    //         name
    //     }
    // }
    // function b(name,id){
    // }
    // let actions= bindActionCreators({a,b},store.dispatch)
    // actions.b('fr','id1997');
}