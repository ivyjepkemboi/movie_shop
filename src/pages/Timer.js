import React, { useState, useEffect } from 'react';
import { useTitle } from '../hooks/Title';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
useTitle('countdown')
  
 
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0; // Stop the timer at 0
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
    // Cleanup function to clear the interval when the component unmounts or when seconds reach 0
    return () => clearInterval(timer);
  }, []); // Run effect only once after initial render

   // Return null when seconds reach 0 to unmount the component
   if (seconds === 0) {
    return null;
  }

  return (
    <div className="p-4 h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        

<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium">Your Card Details</label>
    <input class="text-sm rounded-lg  block w-full p-2.5 "  />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium">Card Holder Name</label>
    <input class="text-sm rounded-lg  block w-full p-2.5 "  />
  </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click to pay</button>
</form>

        <h1 className="text-3xl font-bold mb-4 text-center">Pay half price if you make a payment within one minute!!!</h1>
        <div className="text-6xl font-bold text-center">{seconds}</div>
      </div>
    </div>
  );
};

export default Timer;