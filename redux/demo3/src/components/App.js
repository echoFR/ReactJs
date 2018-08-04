import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from './List'
import Editor from './Editor'
import Login from './Login'
import Signout from './Signout'
import actions from '../actions'
// import * as actions from '../actions'
import '../css/app.css'
class App extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        this.props.init();
    }
    render(){
        return(
            <div className='app'>
                {this.props.logined?<Signout signout={this.props.signout}></Signout>:<Login login={this.props.login}></Login>}
                <Editor submit={this.props.submit}></Editor>
                <List list={this.props.list}></List>
                {/* <Editor submit={this.props.actions.submit}></Editor>                 */}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
    // return{
    //     actions: bindActionCreators(actions,dispatch)
    // }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)