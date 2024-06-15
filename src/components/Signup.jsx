import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the necessary Firebase auth functions
import { auth } from "../firebase";

// Define auth if not already defined

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        createUserWithEmailAndPassword(auth, values.email, values.password) // Call createUserWithEmailAndPassword here
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
             
            console.log("Signed up successfully:",user);
            action.resetForm();
          })
          .catch((error) => {
            console.error("Signup error:", error);
          });
      },
    });

  return (
    <>
      <div className="bg-[#181e24] flex items-center justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tl from-cyan-500 to-green-500  h-full max-w-96 p-6 rounded-lg shadow-inner-outer"
        >
          <h1 className="flex font-bold text-white  text-2xl drop-shadow-lg justify-center p-4">
            SIGN UP
          </h1>
          <div className=" mb-2">
            <label htmlFor="name" className=" text-white font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              autoComplete="off"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && touched.name ? (
              <p className="text-white">{errors.name}</p>
            ) : null}
          </div>
          <div className=" mb-2">
            <label htmlFor="email" className=" text-white font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && touched.email ? (
              <p className="text-white">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="p-1 text-white font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              autoComplete="off"
              name="password"
              type="password"
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
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="p-1 text-white font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              autoComplete="off"
              name="confirmpassword"
              type="confirmpassword"
              placeholder="Confirm Password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-white">{errors.confirmpassword}</p>
            ) : null}
          </div>
          <button className="w-full h-10 text-center  text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700   ">
            Sign Up
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
            <h1 className="flex justify-center tracking-wider text-black p-2 mt-4">
              Already User? <b>Login Now</b>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
