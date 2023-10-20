import React from 'react';

const AirplaneTicket = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between">
        <img src="airline-logo.png" alt="Airline Logo" className="w-12 h-12" />
        <div className="text-right">
          <p className="text-sm text-gray-500">Flight Number</p>
          <p className="text-lg font-bold">ABC 123</p>
        </div>
      </div>
      
      <hr className="my-4 border-gray-300" />

      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500">Departure</p>
          <p className="text-lg font-bold">New York</p>
          <p className="text-xs text-gray-500">JFK</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Arrival</p>
          <p className="text-lg font-bold">Los Angeles</p>
          <p className="text-xs text-gray-500">LAX</p>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="text-center">
        <p className="text-sm text-gray-500">Departure Date</p>
        <p className="text-lg font-bold">Oct 30, 2023</p>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="text-center">
        <p className="text-sm text-gray-500">Seat</p>
        <p className="text-lg font-bold">22A</p>
      </div>
    </div>
  );
};

export default AirplaneTicket;
