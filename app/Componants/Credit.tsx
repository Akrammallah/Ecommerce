import React from 'react';
import Image from 'next/image';
import img from "@/public/Images/Frame 611.png"
import img1 from "@/public/Images/Frame 610.png"
import img2 from "@/public/Images/Frame 612.png"
import img3 from "@/public/Images/Frame 613.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";


const Credit = () => {
  return (
    <>
     <div className='container m-auto grid grid-cols-1 sm:grid-cols-4 justify-between items-center mt-6 mb-4'>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] sm:*:  ' src={img} alt='' width={270} height={250}/>
        <h1 className=' text-4xl sm:text-2xl  sm:ml-0 text-center font-bold '>Gaming Mouse</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$99</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-600 rounded-t-xl w-[96vw] sm:*: ' src={img1} alt='' width={270} height={250}/>
        <h1 className=' text-[8.5vw] sm:text-2xl  sm:ml-0 text-center font-bold '>Speaker</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$199</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] sm:*: ' src={img2} alt='' width={270} height={250}/>
        <h1 className=' text-4xl sm:text-2xl  sm:ml-0 text-center font-bold '>Light KeyBoard</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$399</p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-100 rounded-t-xl w-[96vw] sm:*: ' src={img3} alt='' width={270} height={250}/>
        <h1 className=' text-[8.5vw] sm:text-2xl  sm:ml-0 text-center font-bold '>Laptop</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$499</p>
        <span className=' top-6 right-3 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
      </div>
      </div> 
    </>
  )
}

export default Credit
