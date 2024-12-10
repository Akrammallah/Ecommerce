import React from 'react'
import Image from 'next/image';
import img from "@/public/Images/Frame 613.png"

const cart = () => {
  return (
    <>
    <p>Home/cart</p>
      <div id='cart'>
        <div className='flex justify-evenly items-center'>
          <h5>Products</h5>
          <h5>Price</h5>
          <h5>quantity</h5>
          <h5>subtotal</h5>
        </div>
        <div className='flex justify-evenly items-center'>
          <h5 className='flex space-x-4'><Image className='ml-4' src={img} alt='' width={20} height={20}/><span>Lcd Moniter</span></h5>
          <h5 className='mr-8'>Price</h5>
          
          <h5 className='mr-12' >subtotal</h5>
        </div>
        <div className='flex justify-evenly items-center'>
          <h5 className='mr-6'>Products</h5>
          <h5 className='mr-6'>Price</h5>
          <h5 className='mr-6'>quantity</h5>
          <h5>subtotal</h5>
        </div>
      </div>
    </>
  )
}

export default cart
