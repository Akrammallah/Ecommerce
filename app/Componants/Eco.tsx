import React from 'react';
import Image from 'next/image';
import img from "@/public/Images/ps5-slim-goedkope-playstation_large 1.png"
import img1 from "@/public/Images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import img2 from "@/public/Images/attractive-woman-wearing-hat-posing-black-background 1.png";
import img3 from "@/public/Images/Frame 706.png"

const Eco = () => {
  return (
    <>
      <div className=' container m-auto grid sm:grid-cols-2 grid-cols-1 mb-6 ml-5 sm:ml-0 relative'>
        <div className='bg-black mr-12 rounded-md'><Image src={img} alt='eco' width={570} height={600} /></div>
        <div className='p-2 sm:p-0'>
          <p className='text-white absolute top-32 text-2xl mr-6 ml-4'>Women’s Collections <br />
          <span className='text-sm'>Featured woman collections that <br /> give you another vibe.</span><br /><span className='mt-2 border-b-2 border-blue-100 text-lg'>Shop Now</span></p>
        <div className='w-full mt-4 sm:mt-0'><Image src={img2} alt='speaker' width={570} height={284}/></div>
          
          <div className='flex sm:space-x-10 space-x-2 mt-8 '>
            
          <div className='bg-black p-4'><Image src={img1} alt=''
          width={270} height={284}/></div>
              
              <div className='bg-black p-4' ><Image src={img3} alt='' width={270} height={284}/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eco
