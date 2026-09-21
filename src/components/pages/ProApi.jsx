import React, { useEffect, useState } from 'react'
import "./ProApi.css"
import axios from 'axios'
import { Link } from 'react-router'

export default function ProApi() {
    let [category, setCategory] = useState([])
    let [product, setProduct] = useState([])
    let getCategory = ()=>{
        axios.get(`https://dummyjson.com/products/categories`)
        .then((res)=>{
        setCategory(res.data)
        })
    }
     let getProduct = ()=>{
        axios.get(`https://dummyjson.com/products`)
        .then((res)=>{
            let{products} = res.data
            // console.log(products)
            setProduct(products)
        })
    }
    useEffect(()=>{
        getCategory()
    },[])
 useEffect(()=>{
    getProduct()
 },[])

  return (
    <section className='sec'>
        <h1 className='text'>Our Product</h1>
        <div className='div'>
            <aside >
                <h3 className='cat'>Category</h3>
                {
                    category.map((obj, index)=>{
                        return(
                            <li key={index}>{obj.name}</li>
                        )
                    })
                }
            </aside>
            <article className='arti'>
                {product.length>=1 ? (
                product.map((obj, index)=> <ProductCard  data={obj} key={index}/> )
                ) : (<p>No data found</p>)
                }
            </article>
        </div>

    </section>
  )
}

function ProductCard({data}){
    let {title,description,price,category,stock,thumbnail,id}=data
    return(
        <div className='card'>
            <Link to={`/prodetapi/${id}`}>
            <img src={thumbnail} alt="" />
            <div className='bag'>
                <h2>{title}</h2>
                <p>${price}</p>
                <p>{description}</p>
                <h5>{category}</h5>
                <h3>{stock}</h3>
            </div>
            </Link>
        </div>

    )
}