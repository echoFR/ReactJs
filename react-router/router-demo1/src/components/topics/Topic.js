import React from 'react'
class Topic extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                A Topic id: {this.props.match.params.topicId}
            </div>
        )
    }
}
export default Topic;