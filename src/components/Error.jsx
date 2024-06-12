/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

const Error = () => {
  //     const error = useRouteError();
  //     if(error.status === 404){
  return <>
    <div className="grid min-h-[100vh] place-items-center bg-blue-300/60 px-8 ">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-8 ">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 ">Go back home</div>
      </div>
    </div>
    </>
};

export default Error;
