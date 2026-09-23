import React, { useState } from 'react'
import Card from './components/Card'

export default function App() {
 let obj ={
  name:"Ali",
  age :5
 };
  return (
    <div>
      <h1>This is Practical</h1>
      <Card  username="John" obj={obj}/>
    </div>
  )
}
