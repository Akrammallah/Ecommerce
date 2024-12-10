import React from 'react';
import Image from 'next/image';
import img from "@/public/Images/71RdoeXxtrL 1.png"
import img1 from "@/public/Images/Frame 604.png"
import img2 from "@/public/Images/Frame 604 (1).png"
import img3 from "@/public/Images/Frame 706.png"
import img4 from "@/public/Images/Frame 608 (1).png"
import img5 from "@/public/Images/Frame 608 (2).png"
import img6 from "@/public/Images/Frame 608 (3).png"
import img7 from "@/public/Images/Frame 608.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";


const Services = () => {
  return (
    <>
    
    <h3 className="text-red-700 text-left ml-[8vw]  font-thin text-sm mb-6 border-l-8 border-red-700 pl-2 mt-6 ">Our Products</h3>
    <h1 className='text-left ml-20 font-bold text-2xl mb-6  pl-2 mt-6'>Explore Our Products</h1>
     <div className='container m-auto grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 justify-evenly items-center mt-6 mb-4'>
      <div className=' p-4 transform transition hover:scale-105 relative  '>
        <Image className=' rounded-t-xl ml-14 sm:ml-10 sm:w-40 w-[80vw]  ' src={img} alt=''width={120}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Gaming Mouse</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$99 <span className='text-gray-500 line-through'>$120</span></p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        
        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img1} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Camera</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$89 <span className='text-gray-500 line-through'>$110</span></p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
        <button className='bg-black text-white sm:p-1 p-3 sm:w-[80%] w-[96vw] absolute bottom-16'>Add to Cart</button>

        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img2} alt='' width={270} height={250}/>
        <h1 className='text-5xl sm:text-2xl   sm:ml-0 text-center font-bold'>Laptop</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$299 <span className='text-gray-500 line-through'>$399</span></p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>

        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img3} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Perfume</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$99 <span className='text-gray-500 line-through'>$140</span></p>
        {/* <span className=' top-1 right-1 absolute'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>
         */}
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img4} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Gaming Mouse</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center mr-12 text-red-600 font-bold'>Price:$99 <span className='text-gray-500 line-through'>$120</span></p>
        <button className='bg-green-600 text-white px-3 py-2 rounded-md absolute top-0 left-0'>New</button>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>

      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img5} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Shoes</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$50 <span className='text-gray-500 line-through'>$100</span></p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>

        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img6} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Kids car</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$199 <span className='text-gray-500 line-through'>$250</span></p>
        <button className='bg-green-600 text-white px-3 py-2 rounded-md absolute top-0 left-2'>New</button>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>

        
      </div>
      <div className=' p-4 transform transition hover:scale-105 relative'>
        <Image className='bg-gray-300 rounded-t-xl w-[96vw] ' src={img7} alt='' width={270} height={250}/>
        <h1 className='text-4xl sm:text-2xl   sm:ml-0 text-center font-bold'>Jacket</h1>
        <p className='text-center text-3xl sm:text-[1.5vw]  sm:mr-0'>Best selling</p>
        <p className='text-center text-2xl sm:text-[1.5vw]  sm:mr-0 text-red-600 font-bold'>Price:$150 <span className='text-gray-500 line-through'>$180</span></p>
        <span className=' top-6 right-8 absolute text-xl'><IoMdHeartEmpty/>
        <br />
        <span><FiEye /></span>
        </span>

        
      </div>
      </div> 
    </>
  )
}

export default Services
