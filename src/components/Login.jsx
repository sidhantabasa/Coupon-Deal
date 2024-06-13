import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div>
      <div className="bg-[#181e24]flex items-center justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tl from-purple-400/60  to-cyan-500/60 h- max-w-96 p-6 rounded-lg shadow-inner-outer"
        >
          <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
            LOGIN
          </h1>
          <div className=" mb-4">
            <label htmlFor="email" className=" text-white  shadow-lg font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Registered Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && touched.email ? (
              <p className="text-white">{errors.email}</p>
            ) : null}
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
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.password && touched.password ? (
              <p className="text-white">{errors.password}</p>
            ) : null}
          </div>
          <button className="w-full h-10 text-center mt-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
            Login
          </button>
          {/* <hr className="mt-3 mx-10"></hr>
          <div className="flex justify-around bg-slate-300/30 hover:bg-slate-800/40 hover:text-white border rounded-xl m-4">
            <button className="flex">
              <img
                className=" h-6"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="google"
              />
              Continue with Google
            </button>
          </div> */}
          <hr className="mt-5 mx-10"></hr>
          <div>
            <h1 className="text-black p-2 mt-4">
              New in CouponDeal? <b>Register Now</b>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
