import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import "./ProDetApi.css"

export default function ProDetApi() {
    let [data, setData] = useState(null)
    let {pid} = useParams()
    let getProDet=()=>{
        axios.get(`https://dummyjson.com/products/${pid}`)
        .then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        if(pid){
           getProDet() 
        }
    },[pid])
  return (
    <div className='page'>
          {
            data &&
            <div className='title'>
                <h1>{data.title}</h1>
                <div className='Card'>
                    <figure className='box'>
                        <img src={data.thumbnail} alt="" />
                    </figure>
                        <p className='descrip'>{data.description}</p>
                    <h5 className='price'>${data.price}</h5>
                </div>
            </div>
          }
    </div>
  )
}