import React, { useState } from "react";
import couponCategories from "../resources/CouponCategory";

const Sellpage = () => {
  const CouponCategories = couponCategories;

  const category = Object.keys(couponCategories);

  const [brandname, setbrandname] = useState(""); //FOR INPUT BOX FILL WITH SUGGETION
  const [categoryName, setcetagoryName] = useState(); //for all catGORY
  const [isDisable, setisDisable] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const Brands = CouponCategories[categoryName];

  // const handleClick = (brand) => {
  //     // setbrandname(brand);
  //     setShowSuggestions(false);
  //     console.log(brandname);

  // };
  console.log(brandname);

  return (
    <div>
      <div className="bg-[#181e24] pt-24 flex items-center justify-center min-h-screen ">
        <form className="bg-gradient-to-tl from-cyan-500 to-green-500  h-full max-w-96 p-6 rounded-lg shadow-inner-outer">
          <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
            UPLOAD COUPON
          </h1>
          <div className=" mb-2">
            <label htmlFor="name" className=" text-white font-semibold mb-2">
              Brand Name
            </label>

            <select
              className="mx-3 my-1 rounded-md w-36  text-center"
              value={categoryName}
              onChange={(e) => {
                setcetagoryName(e.target.value);
                setisDisable(false);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              {category.map((name, index) => (
                <option key={index} value={name} className="text-left">
                  {name}
                </option>
              ))}
            </select>
            <input
              disabled={isDisable}
              id="brandname"
              autoComplete="off"
              name="brandname"
              type="text"
              value={brandname}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onChange={(e) => {
                setbrandname(e.target.value);
              }}
              placeholder="Enter brand Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {showSuggestions ? (
              <div className=" absolute ml-4 bg-white shadow-lg rounded-lg border border-gray-200">
                <ul
                  onClick={(e) => {
                    setbrandname(e.target.value);
                  }}
                >
                  {Brands.filter((item) => {
                    const search = brandname.toLowerCase();
                    const b = item.toLowerCase();
                    return search && b.includes(search);
                  }).map((s) => (
                    <div
                      key={s}
                      className="py-2 px-3 shadow-sm cursor-pointer hover:bg-slate-200"
                    >
                      {s}
                    </div>
                  ))}
                </ul>
              </div>
            ) : null}
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
