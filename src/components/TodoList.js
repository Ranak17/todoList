import React, { useState,useEffect } from 'react';

export default function TodoList() {
    const [datak,setData]=useState([])
    const [text,setText]=useState("")
    useEffect(()=>{
        let data=["task 1","task 2","task 3"]
        setData(data);
    },[])

const dele =(id)=>{
    console.log("id=="+id)
let data=datak.filter((ele,index)=>{
    return index!=id;
})
setData(data);
console.log(datak)
}
function edit(index){
    let ele =document.getElementsByClassName('screen')[index];
    let edit_ele=document.getElementsByClassName('edit')[index];
    ele.contentEditable=true;
    document.addEventListener("click",(event)=>{
        
        if(event.target==ele || event.target==edit_ele){
            
        }else{
            ele.contentEditable=false;
            
        }
    })
}

  return (
    <div className="container">
        <h1 id="todo-heading">Todo List</h1>
        <div className="addtask">
            <textarea style={{borderRadius:"0.5rem"}} onChange={(ele)=>{setText(ele.target.value)}}>{text}</textarea>
            <div className='add' onClick={()=>{setData([text,...datak])}}>Add</div>
        </div>
        {datak.map((ele,index)=>
                <div className="todo-item">
                <div className="screen todo-item-comp">{ele}</div>
                <div className="edit todo-item-comp" onClick={()=>{edit(index)}}>Edit</div>
                <div className="delete todo-item-comp" onClick={()=>{dele(index)}}>Delete</div>
            </div>
        )}

        
    </div>
  )
}
