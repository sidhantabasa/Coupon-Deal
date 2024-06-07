import React from "react";

const Login = () => {
return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-gradient-to-r from-green-500 to-cyan-500 h- max-w-96 p-6 rounded-lg shadow-2xl">
          <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">LOGIN</h1>
          <div className=" mb-4">
            <label
              htmlFor="email"
              className=" text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="p-1 text-white font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="w-full h-10 text-center  text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
            Login
          </button>
          <hr className="mt-3 mx-10"></hr>
          <div className="flex justify-around bg-slate-300/30 hover:bg-slate-800/40 hover:text-white border rounded-xl m-4">
            <button className="flex">
              <img
                className=" h-6"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="google"
              />
              Continue with Google
            </button>
          </div>
          <hr className="mt-3 mx-10"></hr>
          <div>
            <h1 className="text-white p-2 mt-4">New in CouponDeal? <b>Register Now</b></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
