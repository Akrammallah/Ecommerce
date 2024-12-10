"use client"
import { useState, useEffect } from "react";

export default function Timer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date().setHours(72, 0, 0, 0); // Target: 3 Days from now
    const now:any = new Date();
    const difference:any = targetDate - now;

    let timeLeft:any = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <h3 className="text-red-700 text-left ml-40 font-thin mt-6 sm:text-sm text=lg mb-2 border-l-8 border-red-700 pl-2">Today's</h3>
    <div className=" container m-auto justify-evenly sm:space-x-10 flex ">
     
      <h2 className=" text-xl sm:text-4xl text-left font-bold mt-6  ">Flash Sales</h2>
      <div className="flex justify-center space-x-4 mr-12 sm:mr-0 font-bold">
        <div>
          <p className="text-4xl">{timeLeft.days || "0"}</p>
          <span>Days</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.hours || "0"}</p>
          <span>Hours</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.minutes || "0"}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.seconds || "0"}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
 </>
  );
}
