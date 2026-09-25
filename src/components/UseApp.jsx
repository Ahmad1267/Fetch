import React, { useCallback, useState } from 'react'
import Child from './child'


export default function UseApp() {
     let [count, setCount] = useState(0)
    let [add, setAdd] = useState(0)
    let Learning = useCallback(()=>{

    },[count])
  return (
    <div>
        <Child Learning={Learning} count={count}/>
        <h1>Count</h1>
       <button onClick={()=>setCount(count + 1)}>Count {count}</button>
       <h1>Addition</h1>
        <button onClick={()=>setAdd(add + 1)}>Add {add}</button>
    </div>
  )
}
