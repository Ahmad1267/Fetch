import React, { useState } from 'react'

function App() {
    const [input,setInput]= useState("")
    const [todo, setTodo] = useState([])
    
    const add=()=>{
        setTodo([...todo, input])
        setInput("")
    }
    const delTodo = ()=>{
        const newtodo = todo.filter((todo, index)=>{
            return i !== index
        })
    setTodo(newtodo)
}
  return (
    <div>
      <h1>todo list</h1>
      <input type="text"
       value={input}
       placeholder='Enter'
       onChange={(e)=>setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      {todo.map((todo, index)=>{
        <div key={index}>
         <button onClick={()=>setInput(delTodo)}></button>   
        </div>
      })}
    </div>
  )
}

export default App