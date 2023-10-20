import React from 'react';
import { flightRoutes } from '@/constans/flight';
const Card = () => {
  return (
    <div className="gradient-bg-welcome  flex-wrap flex items-center justify-center">
    {flightRoutes.map((val) => {
      return(
        <div key={val} className="bg-white p-6 rounded-lg shadow-lg m-4 max-w-xs">
        <img src={val?.img} alt="Travel Destination" className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-semibold mt-2">{val?.destination}</h2>
        <p className="text-gray-600">Description of the destination.</p>
        <button className="bg-[#2952e3] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#2546bd]">Book Now</button>
      </div>
      )
    })
     }

  </div>
  
  );
};

export default Card;
