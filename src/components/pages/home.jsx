import "./Home.css"
import Btn from "../common/Btn";
import React from 'react'
import { product } from "../../data/Product";


export default function Home() {

    // array mein ager object ho to wo represent kerne ke leye map used kerte hai 
  let a = 10;
  let b = 20;
  let  c = [20, 30, "Apple",]
  let arr1 = [
    {name : "Ali", age : 21, gender : "male"},
    {name : "John", age : 22, gender : "male"},
    {name : "Sara", age : 23, gender : "female"},
    {name : "Smih", age : 24, gender : "male"},
    {name : "Zoi", age : 25, gender : "female"}
  ]
  let user = arr1.map((obj, index)=><h1>{index} {obj.name} {obj.age} {obj.gender}</h1>)

  let status = true
  return (
    <>
    {c}
    {user}
    {arr1.map((obj, index)=>{
      return(
        <h2>{obj.name} {obj.age} {obj.gender}</h2>
      )
    })}
    {
      arr1.map((obj, index)=><h3>{index+1} {obj.name} {obj.age} {obj.gender}</h3>)
    }
    {status ? <p>Welcome</p> : ''}
    <section>
      <h1>My first component {a + b}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima, placeat itaque temporibus atque soluta exercitationem aut porro nemo ipsum! Architecto autem ea animi voluptatem recusandae nostrum. Vitae, exercitationem cupiditate!</p>
    <Btn value = {"read more"} color = "blue"/>
     </section>
    <section className="productSection">
        <h2>Our Product</h2>
        <div className="productMid">
          {
            product.map((obj, index)=><Product props = {obj}/>)
          }
          
        </div>
    </section>
    </>
  )
}
function Product({props}){
  return(
    <div className="productItem">
      <h1>{props.id}</h1>
            <img src={props.thumbnail} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
            <h5>{props.category}</h5>
            <h6>{props.rating}</h6>
            <Btn value = {"Read detail"} color = "green"/>
          </div>
  )
}
