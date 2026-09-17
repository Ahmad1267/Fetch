import  { useState } from 'react'
export default function Hook() {
     let [count, setCount] = useState(1)
    let changeCount = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>Celebration for men {count}</h2>
  <button onClick={changeCount}>Change Count</button>      
    </div>
  )

    
}

// import React from 'react'
// export default function Hook() {
//     let count = 1

//     let changeCount = ()=>{
//         alert("Hello")
//     }
//     let addData = (num1, num2)=>{
//         alert(num1 + num2)
//     }
//   return (
//     <div>
//         <h2>Celebration for men {count}</h2>
//         function call without parameter
//   <button onClick={changeCount}>Change Count</button>  
//   function call with parameter 
//   <button onClick={()=>addData(12,13)}>Add Data</button>     
//     </div>
//   )
// } 