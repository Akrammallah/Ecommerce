import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";





const Navbar = () => {
  return (
    <>
     <div className='flex justify-evenly items-center sm:w-[1170px] w-full mt-6 border-b-2 border-b-slate-400'>
      <div>
        <Link className='text-2xl text-black font-bold' href={'/'}>Exclusive</Link>
      </div>
      <div className='hidden sm:block' >
        <Link className='mr-6' href={'/home'}>Home</Link>
        <Link className='mr-6' href={'/story'}>About</Link>
        <Link className='mr-6' href={'/contact'}>Contact</Link>
        <Link className='mr-6' href={'/signup'}>Sign Up</Link>
      </div>
      <div className='flex text-center items-center sm:space-x-6 mr-60 sm:mr-0'>
<input type="text" placeholder='what are you looking for...'  /><span ><CiSearch /></span>
<span className='hidden sm:block'><IoMdHeartEmpty /></span>
<Link href={'/cart'}><span className='hidden sm:block'><TiShoppingCart /></span></Link>
      </div>
      
    </div> 
    </>
  )
}

export default Navbar
