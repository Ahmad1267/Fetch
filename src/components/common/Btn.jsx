import React from 'react'

export default function Btn(props) {
    console.log(props)
  return (
    <button style={{background :props.color, padding:"10px  25px"}}>
        {props.value}
    </button>
  )
}
