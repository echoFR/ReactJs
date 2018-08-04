import React from 'react'
import '../css/list.css'
// props list
class List extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        let i=0;
        let list = this.props.list.map((item)=>{
            return <li key={i++} className='list-li'>
                <h3>{item.title}</h3>
                <p>{item.context}</p>
            </li>
        })
        return(
            <div className='list'>
                <h2 className='big-title'>feeling</h2>
                <ul>
                    {list}
                </ul>
                
            </div>
        )
    }
}
export default List