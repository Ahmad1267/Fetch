import React from 'react'
import "./App.css"

function Card({username, obj}) {

  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Smart Watch" />
       <h2>Smart Watch {username} {obj.name} {obj.age}</h2>
        <p className="price">$49.99</p>
      
         <button className="buy-btn">Buy now</button>
          </div> );
}

export default Card
