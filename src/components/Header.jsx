import React from "react";
import logo from "./images/cd_logo.png";
import { BsCart3} from 'react-icons/bs';
import Dropbox from "./Dropbox";

const Header = () => {
  return (
    <div className="bg-gradient-to-tl from-cyan-500 to-green-500  pt-3 pb-1 ">
      <nav className="flex text-white border-1 mt-0 bg-black/30 rounded-full m-3 items-center justify-between">
        <logo className="flex  p-2 font-bold items-center justify-between">
          <img className="h-14 w-20" src={logo} alt="" />
          <div className="text-xl">
            <h1>COUPON</h1>
            <h1>DEAL</h1>
          </div>
        </logo>
        <menu className=" md:flex justify-between gap-x-6 text-md p-2 hidden">
          <h2>HOME</h2>
          <h2>COUPONS</h2>
          <h2>STORE</h2>
          <h2>SELL COUPON</h2>
          <h2>ABOUT</h2>
        </menu>
        <div className="md:flex hidden gap-x-2 font-semibold p-4">
          <button className="m-2">
            <BsCart3 className='h-6 w-6' />
          </button>
          <button className="m-2">
            <i class="fas fa-user"></i>
          </button>
        </div>
        <div className="mr-4 md:hidden ">
         <Dropbox/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
