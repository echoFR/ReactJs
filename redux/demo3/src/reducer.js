export default function reducer(state,action){
    if(typeof state === 'undefined') return {list: []}
    switch(action.type){
        case 'login':
            if(action.error){
                //登录错误
                alert('用户名或密码不正确')
                return Object.assign({},state,{loginError: action.payload,logined:false,info: null})
            }else{
                return Object.assign({},state,{loginError: null,logined:true,info:action.payload})
            }
        case 'signout':
            return Object.assign({},state,{logined:false})
        case 'init': 
            return action.payload
        case 'submit':
            let list= state.list.concat(action.payload)
            return Object.assign({},state,{list})
        default:
            return state
    }
}