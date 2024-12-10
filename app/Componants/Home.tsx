import React from 'react'
import Image from 'next/image'
import img from '../../public/Images/Frame 560.jpg'
import img1 from '../../public/Images/DropDown.png'



const Home = () => {
  return (
    <>
      <div className=' container m-auto mt-6 flex justify-center sm:space-x-24 items-center' id='home'>
        <div>
        
      
      <div className='text-black mb-16 ml-14 w-full leading-8 border-r-2 border-r-gray-400 hidden sm:block' >
        <h5 className='flex '>Woman’s Fashion <span className='text-center mt-2 ml-4'><Image src={img1} alt='src' width={20}/></span></h5>
        <h5 className='flex'>Men’s Fashion <span className='text-center mt-2 ml-4'><Image src={img1} alt='src' width={20}/></span></h5>
        <h5 className='te'>Electronics</h5>
        <h5>Lifestyle</h5>
        <h5>Medicine</h5>
        <h5>Outdoor</h5>
        <h5>Baby’s & Toys</h5>
        <h5>Groceries & Pets</h5>
        <h5>Health & Beauty</h5>
      </div>
        
      
      
    
        </div>
        <div className='sm:w-[892] sm:h-[344]   mt-4 '>
          <Image   src={img} alt="Hero" width={700} height={200} />
        </div>
      </div>
    </>
  )
}

export default Home
