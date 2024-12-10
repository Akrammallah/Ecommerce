import React from 'react'
import Image from 'next/image'
import img from '@/public/Images/Services (1).png'
import img2 from '@/public/Images/Services (2).png'
import img3 from '@/public/Images/Services.png'

const Sell = () => {
  return (
    <>
    <h3 className="text-red-700 text-left ml-28 mt-12 font-thin text-sm mb-2 border-l-8 border-red-700 pl-2">Catageries</h3>
     <div className=' justify-evenly items-center mt-12 grid-cols-2 sm:flex ml-48 sm:ml-0 '>
      <div className='mb-6 sm:mb-0'>
<Image className='ml-16' src={img} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>FREE AND FAST DELIVERY <br />
<span className='text-sm font-light '>Free delivery for all orders over $140</span></h1>
      </div>
      <div className='mb-6 sm:mb-0'>
<Image className='ml-16' src={img2} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>24/7 CUSTOMER SERVICE <br />
<span className='text-sm font-light ml-6'>Friendly 24/7 customer support</span></h1>
      </div>
      <div className='mb-6 sm:mb-0'>
<Image className='ml-16' src={img3} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>MONEY BACK GUARANTEE<br />
<span className='text-sm font-light ml-6'>We reurn money within 30 days</span></h1>
      </div>
      </div> 
    </>
  )
}

export default Sell
