import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import Topic from './Topic'
class Topics extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div className='topics'>
                <h1>这是主题列表</h1>
                <ul>
                    <li>
                        {/* this.props.match.path */}
                        <Link to={`${this.props.match.url}/topic1`}>topic1</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/topic2`}>topic2</Link>                        
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/topic3`}>topic3</Link>                        
                    </li>
                </ul>
                <div>
                    <Route path={`${this.props.match.url}/:topicId`} component={Topic}></Route>
                </div>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题id</h3>
                )}/>
            </div>
        )
    }
}
export default Topics;