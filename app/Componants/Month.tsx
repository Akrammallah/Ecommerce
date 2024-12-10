import React from 'react';
import Image from 'next/image';
import img from "@/public/Images/Cart.png"
import img1 from "@/public/Images/Frame 606.png"
import img2 from "@/public/Images/Frame 612.png"
import img3 from "@/public/Images/Frame 610.png"
import img4 from "@/public/Images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";



const SellingProducts = () => {
  return (
    <>
    
    <h3 className="text-red-700 text-left ml-[8vw]  font-thin text-sm mb-6 border-l-8 border-red-700 pl-2 mt-6 ">This Month</h3>
    <div className='flex justify-between items-center'><h1 className='text-left ml-20 font-bold text-2xl mb-6  pl-2 mt-6'>Best Selling Products</h1>
    <button className='bg-red-700 text-white px-4 py-2 rounded-md mr-24'>View All</button></div>
     <div className='container m-auto grid grid-cols-1 sm:grid-cols-4 justify-between items-center mt-6 mb-4'>
      <div className=' p-4 transform transition hover:scale-105 relative '>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] ' src={img} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl  sm:ml-0 text-center font-bold'>Jacket</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$59</p>
        <button className='bg-green-600 text-white px-3 py-2 rounded-md absolute top-0 left-2'>New</button>
        
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] ' src={img1} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl  sm:ml-0 text-center font-bold'>Purse</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$299</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] ' src={img2} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl  sm:ml-0 text-center font-bold'>Light KeyBoard</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$399</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] ' src={img3} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl  sm:ml-0 text-center font-bold'>Speaker</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$499</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      </div>
      <div className=' container m-auto bg-black grid sm:grid-cols-2 grid-cols-1 sm:p-12'>
        <div className='p-8 leading-8'>
          <h5 className='text-green-500 font-bold'>Catagories</h5>
          <h1 className='text-5xl text-white mt-4 mb-4'>Enhance Your <br /> Music Experience</h1>
          <button className='px-6 py-2 bg-green-500 rounded-md'>Buy Now</button>
        </div>
        <div> <Image  src={img4} alt=''/>
        </div>
               </div> 
    </>
  )
}

export default SellingProducts;
