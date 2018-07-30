import React from 'react'
class Topics extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        console.log(this.props);
        
        return(
            <div className='topics'>
                这是Topics
                <h1>这是主题列表</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
export default Topics;