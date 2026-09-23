import React, { useState } from 'react'

export default function App() {
  let [counter, setCounter] = useState(5)
  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      setCounter(counter =>counter + 1)
      setCounter(counter =>counter + 1)
      setCounter(counter =>counter + 1)
      setCounter(counter =>counter + 1)
      setCounter(counter =>counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      // setCounter(counter - 1)
      setCounter(counter =>counter - 1)
      setCounter(counter =>counter - 1)
      setCounter(counter =>counter - 1)
    }
  }
  return (
    <div>
      <button onClick={addValue}>Add Value {counter}</button>
      <h1>This is a buttons</h1>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </div>
  )
}
