import React from "react";
import Image from "next/image";
import img from "@/public/Images/dl.beatsnoop 1.png";
import img1 from "@/public/Images/google.png";

 export const signup =()=>{
  return (
    <>
      <div className="sm:flex grid grid-cols-1"id="signup">
        <div className="sm:w-[50%] w-[100%]">
          <Image src={img} alt="" />
        </div>
        <div className="sm:w-[50%] w-[100%] sm:ml-40 ml-48">
          <form className="leading-10 mt-4 w-full">
            <h1 className="sm:text-2xl text-4xl font-bold">Create an account</h1>
            <h4 className="text-xl sm:text-justify mt-2">Enter your details below</h4>
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
            <input
              className="border-b-2 border-gray-600 w-72"
              type="password"
              placeholder="Password"
            />
          </form>
          <div>
            <button className="bg-red-700 text-white p-2 py-2 w-72  mt-6  hover:bg-red-800 transition duration-300">
              Sign Up
            </button>
            <div className="w-72 text-center mt-2 border-2 border-gray-400 p-2 flex">
            <span className="text-center mr-12 mt-1"><Image src={img1} alt="" width={20}/></span>
            <p > Sign up with Google</p>
            </div>
            <p className="ml-12">
             Already have account? <span>Log In</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
