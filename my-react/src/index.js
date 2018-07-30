import React from 'react';
import ReactDOM from 'react-dom'
import CmtItem from '@/components/CmtItem'
import objcss from '@/css/commentList.css'
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
    render(){
        return(
            <div className='comment-list'>
                {/* <h1 className={objcss.title+' .spans'}>这是评论列表组件</h1> */}
                <h1 className={[objcss.title,'.spans'].join(' ')}>这是评论列表组件</h1>
                {
                    this.state.comments.map((item)=>{
                        return(
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