import React, { useState,useEffect } from 'react';
import moment from "moment";
import { flight ,cities,flightRoutes} from '@/constans/flight';
import { useRouter } from 'next/navigation'
import Card from '../fligt';



const Homepage = () => {

      
    // Initial date setup
  const today = new Date();
  const numberOfDaysToAdd = 3;
  const date = new Date(today.setDate(today.getDate() + numberOfDaysToAdd));
  const defaultValue = date.toISOString().split('T')[0];

  // State variables
  const [depCity, setDepCity] = useState('Mumbai');
  const [ariCity, setAriCity] = useState('New Delhi');
  const [fromdt, setFromdt] = useState('');
  const [retDt, setRetDt] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('roundTrip');

  // Radio option handler
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Search flight data
  const onSubmit = async () => {
    const data = { depCity, ariCity, fromdt, retDt };
    const filteredFlights = flight.filter((flight) => {
      return flight.deptCity === data.depCity && flight.arivalCity === data.ariCity;
    });

    console.log("filteredFlights", filteredFlights);
    setSearchData(filteredFlights);
  }

  // Redirect to booking page
  const router = useRouter();
  const onBook = (value) => {
    router.push({
      pathname: '/login',
      query: { value },
    });
  }

    
    return (
        <div className="h-fit">
  <div className="flex flex-1 justify-center items-center flex-col md:mr-10">
    <h1 className="text-3xl md:text-5xl text-white text-gradient py-1">
      Book your tickets
    </h1>
    {/* 
    <p className="text-left text-white mt-5 font-light md:w-9/12 w-11/12 text-base">
      Explore the crypto world. Buy and Sell <br />
      cryptocurrencies easily on crypto
    </p> 
    */}
    <div class="max-w-md mx-auto bg-white m-3 rounded-xl shadow-md overflow-hidden md:max-w-2xl col-sm-2">
      <div class="relative m-3 sm:m-5 flex items-center w-full h-12 sm:h-8 m-5 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-10 sm:w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          class="peer h-full w-full outline-none text-sm sm:text-base text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something..."
        />
      </div>
    </div>

    <div>
      {/* Additional content */}
    </div>

    <div className="bg-white w-4/5 rounded m-5">
      <div className="flex flex-col">
        <div className="flex m-2 sm:flex sm:flex-between gap-2">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio-example"
              value="oneWay"
              checked={selectedOption === "oneWay"}
              onChange={handleRadioChange}
            />
            <span className="text-gray-700">One Way</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio-example"
              value="roundTrip"
              checked={selectedOption === "roundTrip"}
              onChange={handleRadioChange}
            />
            <span className="text-gray-700">Round Trip</span>
          </label>
        </div>
      </div>

      <div className="border-y-2 m-2 sm:flex sm:justify-between">
        <div className="sm:w-1/4">
          <h1 className="font-light text-base sm:text-xl">From</h1>
          <select
            name=""
            id=""
            className="block w-full p-2 text-xl sm:text-3xl font-semibold bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 dark:text-gray-400 dark:border-gray-700"
            defaultValue={depCity}
            onChange={(e) => setDepCity(e.target.value)}
          >
            {cities?.map((val) => (
              <option key={val} value={val?.name} className="text-center">
                {val?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-1/4">
          <h1 className="font-light text-base sm:text-xl">To</h1>
          <select
            name=""
            id=""
            className="block w-full p-2 text-xl sm:text-3xl font-semibold bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 dark:text-gray-400 dark:border-gray-700"
            defaultValue={ariCity}
            onChange={(e) => setAriCity(e.target.value)}
          >
            {cities?.map((val) => (
              <option key={val} value={val?.name} className="text-center">
                {val?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-1/4">
          <h1 className="font-light text-base sm:text-xl">DEPARTURE</h1>
          <input
            type="date"
            className="font-semibold text-xl sm:text-3xl p-2 w-full"
            onChange={(e) => setFromdt(e.target.value)}
            defaultValue={defaultValue}
          />
        </div>
        <div className="sm:w-1/4">
          <h1 className={`${selectedOption === "roundTrip" ? "font-light text-base sm:text-xl" : "font-light text-base text-gray-500 sm:text-xl"}`}>
            RETURN
          </h1>
          <input
            type="date"
            className={`${selectedOption === "roundTrip" ? "font-semibold text-xl sm:text-3xl p-2 w-full" : "font-semibold text-xl sm:text-3xl text-gray-500 p-2 w-full"}`}
            disabled={selectedOption === "oneWay"}
            onChange={(e) => setRetDt(e.target.value)}
            defaultValue={defaultValue}
          />
        </div>
        <div className="sm:w-1/4 mt-3">
          <button className="flex items-center mt-3 justify-center font-semibold text-xl sm:text-3xl h-10 p-2 w-40 text-white bg-gradient-to-r from-red-500 to-red-800 rounded-lg cursor-pointer hover:bg-[#2546bd] w-full" onClick={() => onSubmit()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-row m-1 ml-8 gap-3">
          <label className="flex justify-center space-x-2">
            <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
            <span>Direct Flights</span>
          </label>

          <label className="flex justify-center space-x-2">
            <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
            <span>Defence Fare</span>
          </label>

          <label className="flex justify-center space-x-2">
            <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
            <span>Student Fare</span>
          </label>
        </div>
        <div className="flex invisible items-center m-1 mr-4 sm:visible">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <h1 className="text-red-700">Travel update</h1>
        </div>
      </div>
    </div>

    <div className="flex justify-evenly md:grid-cols-4 gap-4 w-fit p-2 m-4">
      {searchData
        ? searchData.map((val) => (
            <div key={val?.flightNbr} className="max-w-md bg-white rounded-lg flex-col m-5 flex justify-start shadow-md p-4 mx-auto">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{val?.airlineName}</h2>
                <p className="text-sm">{val?.flightNbr}</p>
              </div>
              <div className="flex items-center justify-between gap-10 mb-4">
                <div>
                  <p className="text-2xl font-semibold">{val?.deptTime}</p>
                  <p className="text-gray-500">{val?.deptCity}</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">{val?.arivalTime}</p>
                  <p className="text-gray-500">{val?.arivalCity}</p>
                </div>
              </div>
              <div className="mb-4">
                <p>03 h 05 m</p>
                <p>Non stop</p>
                <p>+ 1 DAY</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-semibold">${val?.price}</p>
                <p className="text-gray-500">per adult</p>
              </div>
              <button className="bg-gradient-to-r from-red-500 to-red-800 text-white py-2 px-4 rounded w-full hover-bg-blue-600 focus:outline-none" onClick={() => onBook(val?.flightNbr)}>
                Book Now
              </button>
            </div>
          ))
        : null}
    </div>

    <div>
      <div className="text-3xl md:text-5xl text-white text-gradient py-1 flex justify-center m-5">
        <h1>Unlock Lesser-Known Wonders of India</h1>
      </div>
      <Card />
    </div>
  </div>
</div>

    );
}

export default Homepage;
