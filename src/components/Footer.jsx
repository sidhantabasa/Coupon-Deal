import React from 'react'
import logo from './images/cd_logo.png'
const Footer = () => {
  return (
    <div>
    <div className='h-screen'>

    </div>
    <footer className=" bg-slate-900  text-white">
    <div className=" flex items-center justify-around ">
      <div>

        <logo className='flex p-2 font-bold items-center justify-between'>
          <img className=' w-28'
            src={logo}
            alt=''
          />
          <div className='text-3xl'>
            <h1>COUPON </h1>
            <h1>DEAL</h1>
          </div>
        </logo>

      </div>
      <div className="hover:cursor-pointer">
          <h1>KNOW MORE</h1>
          <h1>FAQ</h1>
          <h1>CONTACT US</h1>
          <h1>SUPPORT</h1>
        </div>
      <div>
       

        <div className="space-x-5 flex justify-center">
          <button>fb</button><button>insta</button><button>twiter</button>
        </div>

        <div className=" items-center flex flex-col ">
          <h1>GIVE US SUGGESTION</h1>
          <input
              type="text"
              id="input-text"
              placeholder="Type something..."
              className="px-4 py-1 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
          />
             <button
                  type="button"
                  className=" py-1 m-1 w-24  text-white bg-blue-500 rounded-md shadow-sm hover:bg-green-600  focus:ring-2 focus:ring-green-500 "
              >
                  Submit
              </button>
        </div>
      </div>
    
    </div>

    <div className="bg-gradient-to-r from-green-500 to-cyan-500  text-center border-t-[1px]  mt-2">
        <h1>All Rights Reserved | Copyright © 2024 CouponDeal.</h1>
      </div>
    </footer></div>
  )
}

export default Footer