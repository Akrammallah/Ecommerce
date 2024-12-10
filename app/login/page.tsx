import React from "react";
import Image from "next/image";
import img from "@/public/Images/dl.beatsnoop 1.png";
// import img1 from "@/public/Images/google.png";

 export const login = () => {
  return (
    <>
      <div className="flex mt-12" id="login">
        <div className="w-[50%]">
          <Image src={img} alt="" />
        </div>
        <div className="w-[50%] ml-40">
          <form className="leading-10 mt-4 w-full">
            <h1 className="text-2xl font-bold">Log in to Exclusive</h1>
            <h4>Enter your details below</h4>
            <br />
            <input
              className="border-b-2 border-gray-600 flex-col items-center w-72"
              type="text"
              placeholder="Name"
            />
            <div>
              <input
                className="border-b-2 min-w-72 border-gray-600"
                type="email"
                placeholder="Email"
              />
            </div>
                      </form>
          <div className="flex space-x-12">
            <button className="bg-red-700 text-white p-2 py-2 w-28  mt-6  hover:bg-red-800 transition duration-300">
              Log In
            </button>
            <div className="mt-7">
              <h3 className="text-red-600">Forgot Password ?</h3>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
