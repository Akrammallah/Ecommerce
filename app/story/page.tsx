"use client"
import React from 'react'
import Image from 'next/image'
import img from "@/public/Images/story.png"
import img1 from "@/public/Images/Services (4).png"
import img2 from "@/public/Images/Services (5).png"
import img3 from "@/public/Images/Services (6).png"
import img4 from "@/public/Images/Frame 874.png"
import img5 from "@/public/Images/Frame 875.png"
import img6 from "@/public/Images/Frame 876.png"
import img7 from "@/public/Images/icon-instagram.png"
import img8 from "@/public/Images/Icon-Twitter.png"
import img9 from "@/public/Images/Icon-Linkedin.png"
import Link from 'next/link'

 export const story = () => {
  return (
    <>

    <p>Home/About</p>
    <div className='  grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-between ' id="story">
      <div className='mt-8 sm:p-10 p-6 mr-36 sm:mr-0'>
        <h1 className='text-5xl font-bold mb-6'>Our Story</h1>
        <p className='text-justify'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br />
        <br />
        
        Exclusive has more than 1 Million products to offer, growing at  very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <div>
        <Image className='rounded-md w-[' src={img} alt='' width={705} height={609}/>
      </div>
    </div>
    <div className='sm:flex sm:justify-evenly items-center grid grid-cols-2 mt-12 mb-12'>
      <div className='border-1 border-gray-400 hover:bg-red-800 p-4 rounded-md'><Image className='ml-7' src={img1} alt=''/>
      <p className='mt-4 ml-12'>10.5k </p>
      <p className=''>Sallers active our site</p>
</div>
<div className='border-1 border-gray-400 hover:bg-red-800 p-4 rounded-md'><Image className='ml-8' src={img2} alt=''/>
      <p className='sm:text-center text-start ml-14 sm:ml-0 mt-4 '>10.5k </p>
      <p className='sm:text-center text-start  '>Sallers active our site</p>
</div>
<div className='border-1 border-gray-400 hover:bg-red-800 p-4 rounded-md'><Image className='ml-8' src={img3} alt=''/>
      <p className='sm:text-center text-start ml-14 sm:ml-0 mt-4'>10.5k </p>
      <p className='sm:text-center'>Sallers active our site</p>
</div>
<div className='border-1 border-gray-400 hover:bg-red-800 p-4 rounded-md'><Image className='ml-7' src={img2} alt=''/>
      <p className='sm:text-center text-start ml-14 sm:ml-0 mt-4'>10.5k </p>
      <p className='sm:text-center'>Sallers active our site</p>
</div>
    </div>
    <div className='mb-12 flex justify-between items-center  mr-36 sm:mr-0'>
      <div className='hidden sm:block'>
        <Image src={img4} alt='' width={370} height={430}/>
        <h1 className='text-center mt-4'>Tom Cruise</h1>
        <p className='text-center'>Founder & Chairman</p>
        <div className='flex justify-center items-center mt-2 mr-9'>
          <Link href='#'><Image className='ml-8' src={img7} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img8} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img9} alt=''/></Link>
        </div>
      </div>
      <div>
        <Image src={img5} alt='' width={370} height={430}/>
        <h1 className='text-center mt-4'>Tom Cruise</h1>
        <p className='text-center'>Founder & Chairman</p>
        <div className='flex justify-center items-center mt-2 mr-9'>
          <Link href='#'><Image className='ml-8' src={img7} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img8} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img9} alt=''/></Link>
        </div>
      </div>
      <div>
        <Image src={img6} alt='' width={370} height={430}/>
        <h1 className='text-center mt-4'>Tom Cruise</h1>
        <p className='text-center'>Founder & Chairman</p>
        <div className='flex justify-center items-center mt-2 mr-9'>
          <Link href='#'><Image className='ml-8' src={img7} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img8} alt=''/></Link>
          <Link href='#'><Image className='ml-8' src={img9} alt=''/></Link>
        </div>
      </div>
    </div>
    <div className='flex justify-evenly items-center mt-12 mr-24 sm:mr-0'>
      <div>
<Image className='ml-16' src={img2} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>FREE AND FAST DELIVERY <br />
<span className='text-sm font-light '>Free delivery for all orders over $140</span></h1>
      </div>
      <div className='hidden sm:block'>
<Image className='ml-16' src={img2} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>24/7 CUSTOMER SERVICE <br />
<span className='text-sm font-light ml-6'>Friendly 24/7 customer support</span></h1>
      </div>
      <div>
<Image className='ml-16' src={img3} alt='img'/>
<h1 className='font-bold mt-4 text-lg'>MONEY BACK GUARANTEE<br />
<span className='text-sm font-light ml-6'>We reurn money within 30 days</span></h1>
      </div>
      </div>
    

      
    </>
  )
}

export default story;
