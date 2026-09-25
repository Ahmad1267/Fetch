
import React, {useState } from 'react'
import "./Child.css"



export default function Child() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([])
  const [complete, setComplete] = useState([])

const addTodo = ()=>{
  
setTodo([...todo, input])
setInput("")
}
const completeTodo = (index)=>{
  setComplete([...complete, todo[index]]);
  delTodo(index);
}
// const delTodo = (index)=>{
//   setTodo(todo.filter((_, i)=> i !== index))
// }  
 const delTodo = (index)=>{
        const newtodo = todo.filter((_,i)=>{
            return i !== index;
        })
    setTodo(newtodo)
}
const deleteComplete = (index) => {
  const newComplete = complete.filter((_, i) => {
    return i !== index;
  });

  setComplete(newComplete);
};
  return (
    <div className='app'>
      <h1>Todo list</h1>
      <input type="text"
      value={input}
      placeholder='Enter'
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todo.map((todo,index)=>(
        <div className='todo' key={index}>
        <span>{todo}</span>
      <button onClick={()=>completeTodo(index)}>Complete</button>
      <button onClick={()=>delTodo(index)}>Delete</button>
      </div>
      ))}    
       <h2>Complete</h2>
      {complete.map((todo, index)=>(
        <div className='completed'  key={index}>
          <span>{todo}</span>
          <button onClick={()=>deleteComplete(index)}>Delete</button>
   </div>
   ))}
    </div>
  )
}
