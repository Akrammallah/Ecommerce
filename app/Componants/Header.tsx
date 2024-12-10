import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Header = () => {
  return (
    <>
     <div className=' flex sm:justify-evenly w-full  text-white bg-black p-4'>
      
      <div className='text-center pt-1 ml-12 mt-1'>
        <h4 className='hidden sm:block'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-bold ml-3 border-b-2 border-blue-100'>ShopNow</span></h4></div>
      <div className='bg-transparent text-white border-none '><NavigationMenu className='bg-transparent'>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className='bg-transparent text-center '>English</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Urdu</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
 </div>
      </div> 
    </>
  )
}

export default Header
