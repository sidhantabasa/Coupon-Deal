import React from "react";

const Sellpage = () => {
  return (
    <div>
      <div className="bg-blue-300/60 flex items-center justify-center min-h-screen ">
        <form className="bg-gradient-to-tl from-purple-400/60 to-cyan-500/60 h-full max-w-96 p-6 rounded-lg shadow-inner-outer">
          <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
            UPLOAD COUPON
          </h1>
          <div className=" mb-2">
            <label htmlFor="name" className=" text-white font-semibold mb-2">
              Brand Name
            </label>
            <input
              id="brandname"
              autoComplete="off"
              name="brandname"
              type="text"
              placeholder="Enter brand Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className=" mb-2">
            <label htmlFor="offer" className=" text-white font-semibold mb-2">
              Offer
            </label>
            <input
              id="offer"
              autoComplete="off"
              name="offer"
              type="offer"
              placeholder="Enter offer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="Validity"
              className="p-1 text-white font-semibold mb-2"
            >
              Validity
            </label>
            <input
              id="Validity"
              autoComplete="off"
              name="Validity"
              type="Validity"
              placeholder="Enter Validity"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <label
              htmlFor="minimumAmt"
              className="p-1 text-white font-semibold mb-2"
            >
              Minimum Purchase
            </label>
            <input
              id="minimumAmt"
              autoComplete="off"
              name="minimumAmt"
              type="minimumAmt"
              placeholder="Enter Minimum Purchase"
      
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

<label
              htmlFor="minimumAmt"
              className="p-1 text-white font-semibold mb-2"
            >
              Coupon Code
            </label>
            <input
              id="code"
              autoComplete="off"
              name="code"
              type="code"
              placeholder="Enter Coupon Code"
      
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />


          
          <button className="w-full mb-6 h-10 text-center font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
            Upload
          </button>

         
        </form>
      </div>
    </div>
  );
};

export default Sellpage;
