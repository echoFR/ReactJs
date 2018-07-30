import React from 'react'
// const itemStyle={border: '1px dashed #ccc',margin:'10px',padding:'10px'}
// const userStyle={fontSize: '15px'}
// const contentStyle={fontSize:'12px'}

const styles={
    itemStyle: {border: '1px dashed #ccc',margin:'10px',padding:'10px'},
    userStyle: {fontSize: '15px'},
    contentStyle:{fontSize:'12px'}
}
// import '@/css/item.css'
export default function CmtItem(props){
    return(
        // <div key={props.CItem.id}>
        // <h1>评论人: {props.CItem.user}</h1>
        // <p>评论内容：{props.CItem.content}</p>
        // <div key={props.id} style={styles.itemStyle}>
        // <h1 style={styles.userStyle}>评论人: {props.user}</h1>
        // <p style={styles.contentStyle}>评论内容：{props.content}</p>
        <div key={props.id}>
        <h1 className='item-title'>评论人: {props.user}</h1>
        <p className='spans'>评论内容：{props.content}</p>
    </div>
    )
}