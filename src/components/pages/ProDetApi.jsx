import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

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
    <div>
          {
            data &&
            <div>
                <h1>{data.title}</h1>
                <div>
                    <figure>
                        <img src={data.thumbnail} alt="" />
                    </figure>
                    <article>
                        <h3>{data.description}</h3>
                    </article>
                    <h5>${data.price}</h5>
                </div>
            </div>
          }
    </div>
  )
}