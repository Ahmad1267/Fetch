
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([])
  let getCompany = () => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        setData(res.data.products)
        console.log("getCompany")
      })
  }
  useEffect(() => {
    getCompany()
  }, [])
  console.log(data,"data")
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-gray-800">Fetch Data</h1>
      <div className="w-full flex flex-wrap justify-center gap-6 mt-7">
        {
          data.map((obj, index) => <Card data={obj} key={index} />) 
        }
      </div>
    </div>
  )
}

export default App

function Card({ data }) {
  return (
    <div className="w-[350px] bg-white rounded-2xl  hover:shadow-xl transition duration-300">

            <span className="w-[130px] text-left text-sm text-gray-700 ml-3 ml-66 ">
              {data.stock} available
            </span>
      {/* Image */}
        <img
          src={data.thumbnail}
          alt={data.title}
          className="hover:scale-105 transition-transform duration-500"
        />
        {/* Content */}
      <div className="px-5 pb-1">

        {/* Title */}
        <h1 className="min-h-[50px] text-xl font-bold text-gray-800 mb-4 leading-tight ml-3">
          {data.title}
        </h1>
        <h3 className="mt-auto  font-[Montserrat] text-sm font-semibold text-gray-800 ml-3 mb-2">{data.brand}</h3>

        {/* Product Details */}
        <div className="flex flex-col gap-2">
            <p className="line-clamp-1 ml-3 font-[Inter] text-sm text-gray-600 truncate text-m">{data.description}</p>

            <span className="w-[130px] text-left text-sm text-gray-700 capitalize ml-3">
              {data.category}
            </span>
               
          {/* Price */}
          
          <div className="mt-1 pt-2 border-t border-gray-200 flex items-center justify-between px-3">
            <span className=" font-semibold text-gray-500  text-m">
              Price
            </span>
            <span className=" text-m text-gray-500 mr-auto  ">
              ${data.price}
            </span>
             <button className="bg-black text-white py-2 px-5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition duration-300" >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
