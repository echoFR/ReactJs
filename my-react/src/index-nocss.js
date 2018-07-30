import React from 'react';
import ReactDOM from 'react-dom'

// function CmtItem(props){
//     return(
//         // <div key={props.CItem.id}>
//         // <h1>评论人: {props.CItem.user}</h1>
//         // <p>评论内容：{props.CItem.content}</p>
//         <div key={props.id}>
//         <h1>评论人: {props.user}</h1>
//         <p>评论内容：{props.content}</p>
//     </div>
//     )
// }
import CmtItem from '../src/components/CmtItem.jsx'

class CommentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:[
                {id: 1, user: '张三', content: '我张三的评论'},
                {id: 2, user: '李四', content: '我李四的评论'},
                {id: 3, user: '王五', content: '我王五的评论'},
                {id: 4, user: '小二', content: '我小二的评论'},                
            ]
        }
    }
    // key
    render(){
        return(
            <div className='comment-list'>
            {/* 在jsx中设置行内样式，style要写成 style={{color: 'red'}} */}
            {/* 在行内样式中 如果是数值，不用引号，字符串必须引号   驼峰写法 */}
                <h1 style={{color: 'red',fontSize: '35px'}}>这是评论列表组件</h1>
                {/* {
                    this.state.comments.map((item)=>{
                        return(
                            <div key={item.id}>
                                <h1>评论人: {item.user}</h1>
                                <p>评论内容：{item.content}</p>
                            </div>
                        )
                    })
                } */}
                {
                    this.state.comments.map((item)=>{
                        return(
                            // <CmtItem CItem={item} key={item.id}></CmtItem>
                            <CmtItem {...item} key={item.id}></CmtItem>                            
                        )
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(
    <CommentList />,
    document.getElementById('app')
)