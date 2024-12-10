import React from 'react'
import Image from 'next/image';
import img from '@/public/Images/Category-Camera.png'
import img2 from '@/public/Images/Category-Computer.png'
import img3 from '@/public/Images/Category-Headphone.png'
import img4 from '@/public/Images/Category-Phone (1).png'
import img5 from '@/public/Images/Category-SmartWatch.png'
import { CiCamera } from "react-icons/ci";
import { FaMobileScreenButton } from "react-icons/fa6";



const Products = () => {
  return (
    <>
    <h3 className="text-red-700 text-left ml-[8vw]  font-thin text-sm mb-6 border-l-8 border-red-700 pl-2 mt-6 ">Categories</h3>
    <h1 className='text-left ml-20 font-bold text-2xl mb-6  pl-2 mt-6'>Browse By Category</h1>
      <div className='sm:flex justify-evenly items-center mb-12 hidden '>
        <div className='border-2 border-gray-400 p-6 hover:bg-red-600'>
          <span className='text-6xl'><CiCamera />
          </span>
       {/* <Image className=' rounded-full' src={img} alt=''/> */}
        </div>
        <div className='border-2 border-gray-400 p-6 hover:bg-red-600'>
       <Image src={img2} alt=''/>
        </div>
        <div className='border-2 border-gray-400 p-6 hover:bg-red-600'>
       <Image src={img3} alt=''/>
        </div>
        <div className='border-2 border-gray-400 p-6 hover:bg-red-600'>
          <span className='text-6xl'><FaMobileScreenButton />
          </span>
       {/* <Image src={img3} alt=''/> */}
        </div>
        <div className='border-2 border-gray-400 p-6 hover:bg-red-600'>
       <Image src={img5} alt=''/>
        </div>
      </div>
    </>
  )
}

export default Products
