import React from 'react'
class Login extends React.Component{
    constructor(){
        super()
        this.state={}
        this.login=this.login.bind(this)
    }
    login(){
        let user= this.refs.user.value;
        let password= this.refs.password.value;
        this.props.login({
            user: user,
            password: password
        })
    }
    render(){
        return(
            <div className='login'>
                <p>user:fr password: 19971005 测试</p>
                用户名：<input type='text' ref='user'/>
                密码：<input type='password' ref='password'/>
                <button onClick={this.login}>登录</button>                
            </div>
        )
    }
}

export default Login