import React from "react";
import logo from "./images/cd_logo.png";

// import Dropdown from "./Dropdown";
const Header = () => {
  return (
    <div className="bg-gradient-to-tl from-purple-400/60  to-cyan-500/60  pt-3 pb-1 ">
      <nav className="flex text-white border-1 mt-0 bg-black/30 rounded-full m-3 items-center justify-between">
        <logo className="flex  p-2 font-bold items-center justify-between">
          <img className="h-14 w-20" src={logo} alt="" />
          <div className="text-xl">
            <h1>COUPON</h1>
            <h1>DEAL</h1>
          </div>
        </logo>
        <menu className=" md:flex justify-between gap-x-6 text-md p-2 hidden">
          <h2>
            <i class="fas fa-home"></i> HOME
          </h2>
          <h2>
          <i class="fas fa-receipt"></i> COUPONS
          </h2>
          <h2>
            <i class="fas fa-store"></i> STORE
          </h2>
          <h2>
          <i class="fas fa-upload"></i> SELL COUPON
          </h2>
          <h2>
            <i class="fas fa-eye"></i> ABOUT
            
          </h2>
        </menu>
        <div className="md:flex hidden gap-x-2 font-semibold p-4">
          <button className="m-2">
            <i class="fas fa-heart"></i>
          </button>
          <button className="m-2">
            <i class="fas fa-user"></i>
          </button>
          {/* <div className=" m-2 md:block">
            <button><i class="fas fa-bars"></i></button>
          <Dropdown/>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
