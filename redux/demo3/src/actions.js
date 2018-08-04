// list:[{title:'',context:''}]
// info: {user, password}
// login:  true/false

// list:[{title:'',context:''}]
// loginError:  '登录失败'
// payload: info

const actions= {//actions 是一个对象  该对象的每个值都是各个action对应的function
    login(info){//传入state的key
        if(info.user==='fr' && info.password==='19971005'){
            return{
                type: 'login',
                error: false,
                payload: info
            }
        }else{
            return{
                type: 'login',
                error: true,
                payload: new Error('登录失败')
            }
        }
    },
    signout(){
        return{
            type: 'signout',
        }
    },
    // 通过redux-thunk 异步请求获取数据
    init(){
        return(dispatch)=>{
                fetch('list.json').then((res)=>{
                    return res.json()
                }).then((data)=>{
                    dispatch({
                        type: 'init',
                        payload: data
                    })
                })
        }
    },
    submit(list){
        return{
            type: 'submit',
            payload: list
        }
    },
}

export default actions






// export function submit(value){
//     return{
//         type: 'submit',
//         value
//     }
// }

// export function delect(){
//     return{
//         type: 'delect'
//     }
// }