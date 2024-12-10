import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const contact = () => {
  return (
    <>
    <div className="sm:flex justify-evenly items-center grid grid-cols-1">
      <div className=" mt-32 sm:w-[340] sm:h-[457] w-[96vw]  border-r-2 border-black " id="contact">
        <div className="mb-6 border-b-2 border-black text-center sm:text-start">
          <h1 className="flex mb-6 font-bold justify-center sm:justify-start">
            <span className="mr-12 bg-red-700
            p-2 rounded-full">
              <FaPhoneAlt />
              </span>
              Call To Us
          </h1>
          <h3 className="mb-4 font-semibold">We are available 24/7, 7 days a week.</h3>
          <h3 className="mb-4 font-semibold">Phone: +8801611112222</h3>
        </div>
        <div className="text-center sm:text-start">
          <h1 className="flex mb-6 font-bold justify-center sm:justify-start">
            <span className="mr-12 bg-red-700
            p-2 rounded-full">
            <AiOutlineMail />
            </span>
            Write To US
          </h1>
          <h3 className="mb-4 font-semibold">Fill out our form and we will contact <br /> you within 24 hours.</h3>
          <h3 className="mb-4 font-semibold">Emails: customer@exclusive.com</h3>
          <h3 className="font-semibold">Emails: support@exclusive.com</h3>
        </div>
      </div>

      <div className="mt-24 flex sm:w-[800] sm:h-[457] w-[80vw] ml-16  ">
        <form >
          <input 
            type="text"
            placeholder="Your Name"
            className="p-4 w-full border-b-2 border-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 w-full border-b-2 border-black  mt-4"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="p-4 w-full border-b-2 border-black  mt-4"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 w-full border-b-2 border-black  mt-4"
          />
          <button
            type="submit"
            className="w-full p-4 text-white bg-red-700  mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default contact;
