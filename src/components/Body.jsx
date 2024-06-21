import React from "react";
import Marquee from "react-fast-marquee";
import cs from "./images/cbg.png"
import sid from "./images/mobileBG.png";
import slogan from "./images/tagline.png";

// import Card from "./Card";
// import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <div className="bg-[#181e24] font-custom">
      <body>
        <div className="relative w-full pt-24 flex flex-col md:flex-row items-center">
          <img
            src={slogan}
            alt="slogan"
            className="ml-4 md:ml-24 mt-4 md:mt-12 border-r-2 max-w-full md:max-w-[700px] h-auto"
          />
          <p className="font-custom text-white text-left p-6 md:p-10 text-xl md:text-3xl tracking-wide leading-normal md:leading-normal">
            <span className="bg-gradient-to-tl from-cyan-500 to-green-500 bg-clip-text text-transparent font-bold">
              CouponDeal
            </span>{" "}
            is a platform where you can sell your unused coupons and purchase
            useful discounts according to your needs at reasonable prices.
          </p>
        </div>

       

        <div className="bg-[#181e24] ">
          <h1 className="text-center mt-12 font-extrabold text-3xl p-2 bg-[#181e24] shadow-xl text-white">
            RECENT COUPONS{" "}
          </h1>

          <div className="bg-[#181e24] h-auto m-8 max-w-xl"></div>

          <h1 className="text-center font-extrabold text-4xl mt-2 p-1 shadow-xl  text-white">
            ABOUT COUPONDEAL{" "}
          </h1>
          {/* 
          <h2 className="text-center font-bold text-5xl mt-3 text-white ">
            INTRODUCTION
          </h2> */}
          <p className="px-40 pl-44 text-white  py-4 ">
            Welcome to CouponDeal , your ultimate destination for the best
            e-coupon and deals online ! Our platform is dedicated to helping to
            you to buy or sell yours coupons whether you're looking for discount
            on fashion , electronics , groceries or travel , we have a wide
            range of exclusive offer to cater to your need . Join our community
            , explore , save and enjoy !
          </p>

          <h2 className="text-center font-bold text-3xl mt-3 box-shadoq-lg  text-white">
            WHAT WE OFFER
          </h2>

          <div className="px-40 py-4 mb-16  grid grid-rows-2 grid-cols-3  ">
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
          </div>

          <h2 className="text-center font-bold text-4xl mt-3 text-white ">
            TEAM MEMBER
          </h2>

          <div className="flex justify-center">
            <div className="px-24 py-4 ">
              <div className=" w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg text-white mt-3 font-bold">
                  SIDHANTA BASA
                </h3>
                <p className="text-center">CEO</p>
                <button className="px-5">fb</button>
                <button className="px-5">insta</button>
                <button className="px-5">x</button>
              </div>
            </div>
            <div className="px-24 py-4 ">
              <div className="h-56 w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg font-bold">SIDHANTA BASA</h3>
                <p className="text-center">CEO</p>
                <button className="px-5">fb</button>
                <button className="px-5">insta</button>
                <button className="px-5">x</button>
              </div>
            </div>
            <div className="px-24 py-4 ">
              <div className="h-56 w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg font-bold">SIDHANTA BASA</h3>
                <p className="text-center">CEO</p>
                <button className="px-5">fb</button>
                <button className="px-5">insta</button>
                <button className="px-5">x</button>
              </div>
            </div>
          </div>
          <div>
            

          </div>
          {/* How Its Work Section */}

          <div className="flex overflow-x-auto scrollbar-hide" >
              <img src={cs} alt="cs" />
              <img src={cs} alt="cs" />
              <img src={cs} alt="cs" />
            </div>
          <h2 className="text-center font-bold text-4xl tracking-wide my-6 text-white ">
            TOP BRANDS
          </h2>

          <div className=" relative mx-40 space-y-3 ">
            <div className="flex">
              <div className="absolute h inset-0 z-40  bg-gradient-to-r from-[#181e24] via-transparent to-[#181e24]  "></div>
              {/* <div className="absolute ml-[1090px] w-[20px] inset-0 z-40 bg-[#181e24]  "></div> */}
            </div>
            

            <Marquee direction="right " className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
            </Marquee>
            <Marquee direction="left" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
            </Marquee>
            <Marquee direction="right" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
            </Marquee>
            <Marquee direction="left" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
            </Marquee>
            <Marquee direction="right" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
            </Marquee>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Body;
