import React, { useState } from "react";
import logo from "./images/cd_logo.png";
import { BsCart3 } from "react-icons/bs";
import Dropbox from "./Dropbox";
import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";

const Header = () => {

  const[show,setshow]=useState(false)

  const clickhandle = () => {
    setshow(!show);
  };

  return (
    <header className="bg-gradient-to-tl from-cyan-500 to-green-500 pt-3 pb-1 fixed top-0 left-0 w-full z-50 h-24">
      <nav className="flex text-white border-1 mt-0 bg-black/30 rounded-full m-3 items-center justify-between">
        <div className="flex p-2 font-bold items-center">
          <img className="h-14 w-20" src={logo} alt="Logo" />
          <div className="text-xl ml-2">
            <h1>COUPON</h1>
            <h1>DEAL</h1>
          </div>
        </div>
        <div className="md:flex justify-between items-center gap-x-6 text-md p-2 hidden">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cardList"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Coupon
          </NavLink>
          <NavLink
            to="/uploadCoupon"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Sell Coupon
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg font-bold"
                : "text-white hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="md:flex hidden gap-x-2 font-semibold p-4">
          <button className="m-2">
            <BsCart3 className="h-6 w-6" />
          </button>
          <button onClick={clickhandle} className="m-2">
            <i className="fas fa-user"></i>
          </button>
        </div>
        <div className="mr-4 md:hidden">
          <Dropbox />
        </div>
        {show && <UserInfo/>}
      </nav>
    
    </header>
  );
};

export default Header;
