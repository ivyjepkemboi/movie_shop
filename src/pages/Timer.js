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
        <h1 className="text-3xl font-bold mb-4 text-center">Pay half price if you make a payment before this countdown ends!!!</h1>
        <div className="text-6xl font-bold text-center">{seconds}</div>
      </div>
    </div>
  );
};

export default Timer;