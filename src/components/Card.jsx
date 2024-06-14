import React from "react";
import logo from "./images/cd_logo.png";

const Card = () => {
  return (
    <div className="bg-[#181e24] h-80 w-64 p-1 items-center">
      <div className="bg-[#2a323c] p-2 pl-5 text-white   w-56 mx-4 rounded-t-lg ">
        <div className="flex mt-5 ">
          <img
            src={logo}
            alt="bg"
            className="object-cover h-10 w-14  rounded-md"
          />
          <div>
            <h1 className="font-bold">Offer {} off</h1>
            <h1 className="text-sm">on{}</h1>
          </div>
        </div>
        <hr className="mt-3 w-40 ml-3" />
        <div className="mt-3 text-sm">
          <h1 className="font-medium">Terms and conditions</h1>
          <ol className=" mt-2 mr-3 text-xs">
            <li>1. Offer Valid on offcial sites only</li>
            <li>2. This offer cannot be clubbed with any other offer </li>
            <li>3. Minimum spend {}</li>
            <li>4. Validity {}</li>
          </ol>
        </div>
      </div>

      <div className="flex w-[248px]  bg-[#2a323c] rounded-full mx-1 ">
        <div className="bg-[#181e24] h-8 w-8 rounded-full"></div>
        <div className="text-white text-center w-48">
          ----------------------
        </div>
        <div className="bg-[#181e24] h-8 w-8  rounded-full items-end "></div>
      </div>

      <div className="bg-[#2a323c] h-16 w-56 ml-4 rounded-b-lg py-2 px-12 ">
        <button
          type="button"
          className="py-2 px-3 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-green-500"
        >
          Reedem Now
        </button>
      </div>
    </div>
  );
};

export default Card;
