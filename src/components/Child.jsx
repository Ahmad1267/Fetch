import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import React, {useState } from 'react'
import "./Child.css"


export default function Child() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [complete, setComplete] = useState([]);
  const [edit, setEdit] = useState(null);

const addTodo = ()=>{
if(input === "") return;
if(edit !== null){

  // edit after add
  if(edit.type === "todo"){
    todo[edit.index] = input;
    setTodo([...todo]);
  }
    // edit after complete
  if(edit.type === "complete"){
    complete[edit.index] = input;
    setComplete([...complete]);
  }
// edit ho gaya
  setEdit(null);
}else{
  setTodo([...todo, input])
}
setInput("")
}
const completeTodo = (index)=>{
    if (edit !== null) return;
  setComplete([...complete, todo[index]]);
  delTodo(index);
}
const editTodo = (index)=>{
  setInput(todo[index])
  setEdit({type: "todo", index: index})
}
// const delTodo = (index)=>{
//   setTodo(todo.filter((_, i)=> i !== index))
// }  
 const delTodo = (index)=>{
    if (edit !== null) return;
        const newtodo = todo.filter((_,i)=>{
            return i !== index;
        })
    setTodo(newtodo)
}
const editComplete = (index)=>{
  setInput(complete[index])
  setEdit({ type: "complete", index: index })
  
}
const deleteComplete = (index) => {
    if (edit !== null) return;
  const newComplete = complete.filter((_, i) => {
    return i !== index;
  });
     setComplete(newComplete);
};
  return (
    <div className="app">
      <h1 className="h1">Todo list</h1>
      <input className="input" type="text"
      value={input}
      placeholder='Enter'
      onChange={(e)=>setInput(e.target.value)}
      onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTodo()
     }
     }} />
      <button className="btn1" onClick={addTodo}>{edit !== null ? "Update"  :  "Add"}</button>
      {todo.map((todo,index)=>(
        <div className="todo" key={index}>
        <span>{todo}</span>
        <div className="setbtn">
        <button className="editbtn" onClick={()=>editTodo(index)}><MdEdit /></button>
      <button className="combtn"onClick={()=>completeTodo(index)}><TiTick /></button>
      <button className="delbtn" onClick={()=>delTodo(index)}><MdDelete /></button>
        </div>
      </div>
      ))}    
      {todo.map((todo, index)=>{
  <div className="edit" key={index}>
    <span >{todo}</span>
  </div>
})}
         <h1 className="h2">Complete</h1>
      {complete.map((todo, index)=>(
        <div className="completed"  key={index}>
          <span>{todo}</span>
          <div className="btn23">
            <button className="btn2" onClick={()=>editComplete(index)}><MdEdit /></button>
          <button className="btn3" onClick={()=>deleteComplete(index)}><MdDelete /></button>
          </div>
   </div>
   ))}
    </div>
  )
}
