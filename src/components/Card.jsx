import React from 'react'
import logo from "./images/cd_logo.png";

const Card = () => {
  return (
    <div>
    <div className="bg-slate-300 rounded-xl m-3 absolute h-80 w-64 hover:bg-slate-400 hover:shadow-lg transition-all duration-300">
        <img src={logo} className="h-36 w-[240px] rounded-lg relative m-2" alt="Logo" />
        <div>
          <p className="pl-6 font-bold">Offer 50% off</p>
          <ul className="list-disc list-inside pl-2 pb-3">
            <li>minimum</li>
            <li>validity</li>
          </ul>
          <hr className="w-52 mx-5" />
          <div className="flex flex-col items-center">
            <h2 className="text-center pt-1">Price: 300</h2>
            <button
              type="button"
              className="py-1 m-1 w-24 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 hover:ease-in-out duration-200 focus:ring-2 focus:ring-green-500"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card