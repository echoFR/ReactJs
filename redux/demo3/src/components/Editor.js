import React from 'react'
import ReactDOM from 'react-dom'
import {FormControl} from 'react-bootstrap'
import '../css/editor.css'
// props  action add
class Editor extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.add= this.add.bind(this)
        // this.textarea = React.createRef();
    }
    add(){
        let title = ReactDOM.findDOMNode(this.refs.title) //找到原始的html 得到值
        let context = ReactDOM.findDOMNode(this.refs.context)   
        if(title.value.trim()!=='' && context.value.trim()!==''){
           this.props.submit({
               title: title.value,
               context: context.value
           }); 
        }
        title.value=''
        context.value=''
    }
    render(){
        return(
            <div className='editor'>
                <FormControl type="text" ref='title' placeholder='输入标题' className='title'/><br/>
                <FormControl componentClass="textarea" ref='context' placeholder='输入内容' className='context'/><br/>
                <div onClick={this.add} className='add-btn'>添加</div>
                {/* 点击添加  dispatch触发一个 action 自动调用reducer  更改state */}
            </div>
        )
    }
}
export default Editor