
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
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-gray-800">Fetch Data</h1>
      <div className="w-full flex flex-wrap justify-center gap-6">
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
    <div className="w-[350px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-center">

      {/* Image */}
      <div className="w-full h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full object-contain hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-4">

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {data.title}
        </h1>

        {/* Product Details */}
        <div className="flex flex-col gap-2">

          {/* Type */}
          <div className="flex items-center justify-center">
            <span className="w-[55px] text-left text-sm font-semibold text-gray-500">
              Type
            </span>

            <span className="w-[130px] text-left text-sm text-gray-700 capitalize">
              {data.category}
            </span>
          </div>

          {/* Stock */}
          <div className="flex items-center justify-center">
            <span className="w-[55px] text-left text-sm font-semibold text-gray-500">
              Stock
            </span>

            <span className="w-[130px] text-left text-sm text-gray-700">
              {data.stock} available
            </span>
          </div>

          {/* Price */}
          <div className="mt-1 pt-2 border-t border-gray-200 flex items-center justify-center">
            <span className="w-[55px] text-left text-sm font-semibold text-gray-500">
              Price
            </span>

            <span className="w-[130px] text-left text-2xl font-bold text-green-600">
              ${data.price}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
