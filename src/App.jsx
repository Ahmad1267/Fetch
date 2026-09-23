import React, { useState } from 'react'
import "./App.css"


export default function App() {
 let [color, setColor] = useState("gray")
  return (
    <div className='home' style={{backgroundColor : color}}>
   <div className='bottom'>
    <div className='bar'>
      <button className="red" onClick={()=>setColor("red")} style={{backgroundColor : "red"}}>Red</button>
      <button className="red" onClick={()=>setColor("black")} style={{backgroundColor : "black"}}>balck</button>
      <button className="red" onClick={()=>setColor("green")} style={{backgroundColor : "green"}}>green</button>
      <button className="red" onClick={()=>setColor("blue")} style={{backgroundColor : "blue"}}>blue</button>
      <button className="red" onClick={()=>setColor("purple")} style={{backgroundColor : "orange"}}>orange</button>
      <button className="red" onClick={()=>setColor("brown")} style={{backgroundColor : "Brown"}}>Brown</button>

    </div>
   </div>
    </div>
  )
}
