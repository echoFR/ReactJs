import React from 'react'
import '../css/signout.css'
class SignOut extends React.Component{
    constructor(){
        super()
        this.state={}
        this.signOut=this.signOut.bind(this)
    }
    signOut(){
        this.props.signout()
    }
    render(){
        return(
            <div className='sign-out'>
                <div>您已经已经登录了！</div>
                <div className='out-btn' onClick={this.signOut}>点击退出</div>
            </div>
        )
        
    }
}
export default SignOut