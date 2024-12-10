import Home from "@/app/Componants/Home"
import React from 'react';
import Timer from "./Componants/Timer";

import Sell from "./Componants/Sell";
import Products from "./Componants/Catogery";
import Credit from "./Componants/Credit";
import Services from "./Componants/OurProducts";
import SellingProducts from "./Componants/Month";
// import LogIn from "./logIn/page";
import Eco from "./Componants/Eco";
// import Footer from "./Componants/Footer";

// import Story from "./Componants/Story";
// import Account from "./account/page";

// import FlashSaleCards from "./Componants/Card";

 

const page = () => {
  return (
    <div>
      <Home/>
      <Timer/>
      <Credit/>
      <Products/>
      <SellingProducts/>
      <Services/>
      <Eco/>
      {/* <Hero/> */}
      <Sell/>
      {/* <Footer/> */}
      
      {/* <Story/> */}
      
      {/* <SellProducts/> */}
      {/* <Account/> */}
      {/* <LogIn/> */}
      
      
      {/* <FlashSaleCards/> */}
    </div>
  )
}

export default page
