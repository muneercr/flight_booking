import React, { useState } from 'react';
import { flight } from '@/constans/flight';
import { useRouter } from 'next/router'
import Nav from '@/components/nav';

const UserDetailsForm = () => {
    const router = useRouter() 
    const [ticket, setTicket] = useState(true);
    const [filterData, setfilterData] = useState();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = flight?.filter((val) => {
        return  val?.flightNbr === router.query.value} )
    // You can process and submit the user data here
    setfilterData(filter)
    setTicket(false)
    console.log("data",e.target.value);
  };

  return (
    <div className=' gradient-bg-welcome'>
      <Nav/>
    <div className="min-h-screen flex items-center justify-center gradient-bg-welcome "> 
      {!filterData  ?
        <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600 text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600 text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300 h-24"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-red-800 text-white py-2 px-4 rounded w-full hover:bg-indigo-600 focus:outline-none"
          >
            BookTickt
          </button>
        </form>
      </div> :
      filterData.map((val) => {
        return(
            <div key={val} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between">
            <div className=" ">
                <p className="text-sm text-gray-500">Passenger Name</p>
                <p className=" font-bold">{formData.firstName + ' ' + formData.lastName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Flight Number</p>
                <p className="text-lg font-bold">{val?.flightNbr}</p>
              </div>
            </div>
            
            <hr className="my-4 border-gray-300" />
      
            <div className="flex justify-between">
              <div className='m-5'>
                <p className="text-sm text-gray-500">Departure</p>
                <p className="text-lg font-bold">{val?.deptCity}</p>
                <p className="text-xs text-gray-500">{val?.deptTime}</p>
              </div>
              <div className='m-5'>
                <p className="text-sm text-gray-500">Arrival</p>
                <p className="text-lg font-bold">{val?.arivalCity}</p>
                <p className="text-xs text-gray-500">{val?.arivalTime}</p>
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
        )
      })
       }
    </div>
    </div>
  );
};

export default UserDetailsForm;
