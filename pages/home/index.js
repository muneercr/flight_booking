import React, { useState,useEffect } from 'react';
import moment from "moment";
import { flight ,cities,flightRoutes} from '@/constans/flight';
import { useRouter } from 'next/navigation'
import Card from '../fligt';

const commonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";



const Homepage = () => {

      
    const today = new Date();
    const router = useRouter()
    const numberOfDaysToAdd = 3;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
    const defaultValue = new Date(date).toISOString().split('T')[0]
    

    const [depCity, setDepCity] = useState('Mumbai');
    const [ariCity, setAriCity] = useState('New Delhi');
    const [fromdt, setFromdt] = useState('');
    const [retDt, setretDt] = useState(''); 
    const [searchData, setSearchData] = useState(''); 

    const [selectedOption, setSelectedOption] = useState('roundTrip');

    // Function to handle radio option change
    const handleRadioChange = (e) => {
      setSelectedOption(e.target.value);
    };
    

    const onSubmit =async () => {

       const data = {depCity,ariCity,fromdt,retDt}
       const filteredFlights =await flight.filter((flight) => {
        return flight.deptCity === data.depCity && flight.arivalCity === data.ariCity;
      });
           
       console.log("filteredFlights",filteredFlights);
      await setSearchData(filteredFlights)
    }
 
    const onBook =(value) => {
        router.push({
            pathname: '/login',
            query: { value },
        })
    }
    
    return (
        <div className="h-fit gradient-bg-welcome">
             
              <div className="flex flex-1 justify-center items-center flex-col  md:mr-10">
                <h1 className="text-3xl md:text-5xl text-white text_gradient py-1">
                Book your tickets
                </h1>
                {/* <p className="text-left text-white mt-5 font-light md:w-9/12 w-11/12 text-base">
                    Explore the crypto world . Buy and Sell <br/>
                    cryptocurrencies easly on crypto
                </p> */}
                <div class='max-w-md mx-auto flex justify-center'>
                    <div class="relative m-5 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." /> 
                    </div>
                     </div>
                     
                    <div className='bg-white w-4/5   rounded m-5 min-h-96 h-36 '>
                        <div className='flex justify-between'>
                            <div className='m-2 flex gap-2'> 
                            <label className="flex items-center space-x-1">
                            <input type="radio" className="form-radio text-indigo-600" name="radio-example" value="oneWay"
                                checked={selectedOption === 'oneWay'}
                                onChange={handleRadioChange}/>
                            <span className="text-gray-700">One Way</span>
                            </label>

                            <label className="flex items-center space-x-2">
                            <input type="radio" className="form-radio text-indigo-600" name="radio-example"
                            value="roundTrip"
                            checked={selectedOption === 'roundTrip'}
                            onChange={handleRadioChange} />
                            <span className="text-gray-700">Round Trip</span>
                            </label>

                            </div>
                            <div className='m-2 text-2xl md:text-2xl '>
                               Book Flight Tickets
                            </div>

                        </div>
                        <div className='flex justify-around border-y-2'>
                        <div className='border-solid border-2 border h-full'> 
                            <h1 className='font-light   text-base'>From</h1>
                            <div >
                            <select name="" id="" className='text-3xl md:text-2xl block  font-semibold px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' defaultValue={depCity} onChange={(e) => setDepCity(e.target.value)}>
                                {cities?.map((val) => {
                                    return(
                                   <option key={val} value={val?.name}   className='text-center'>{val?.name}</option>
                                    )
                                }) }

                            </select>
                            </div>
                            
                        </div>
                        <div className='border-solid border-2 border'> 
                            <h1 className='font-light text-base'>To</h1>
                            <div >
                            <select name="" id="" className='text-3xl md:text-2xl block  font-semibold px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' defaultValue={ariCity}  onChange={(e) => setAriCity(e.target.value)}>
                                {cities?.map((val) => {
                                    return(
                                   <option key={val} value={val?.name} className='text-center'>{val?.name}</option>
                                    )
                                }) }

                            </select>
                            </div>
                            
                        </div>
                        <div> 
                            <h1 className='font-light text-base'>DEPARTURE</h1>
                            <input type="date" className='font-semibold text-3xl md:text-2xl' onChange={(e) => setFromdt(e.target.value)}  defaultValue={defaultValue} />
                        </div>
                        <div> 
                            <h1 className={`${selectedOption === "roundTrip" ? "font-light text-base" : 'font-light text-base text-gray-500' } `}>RETURN</h1> 
                            <input type="date"  className={`${selectedOption === "roundTrip" ? "font-semibold text-3xl md:text-2xl" : 'font-semibold text-3xl md:text-2xl text-gray-500' } `} disabled={selectedOption === "oneWay"}   onChange={(e) => setretDt(e.target.value)} defaultValue={defaultValue} />
                        </div>
                         <div className='flex   '>               
                         <button className='flex items-center justify-center font-semibold text-3xl md:text-2xl h-10 mt-3 pr-6 w-40 text-white bg-gradient-to-r from-red-500 to-red-800 rounded-lg cursor-pointer hover:bg-[#2546bd] w-full' onClick={() => onSubmit()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            Search
                            </button>

                           

                        </div>
                        </div>
                        <div className='flex justify-between '>
                            
                            <div className="flex flex-row m-1 ml-8 gap-3">
                                <label className="flex justify-center space-x-2">
                                    <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
                                    <span>Direct Flights</span>
                                </label>
                                
                                <label className="flex justify-center  space-x-2">
                                    <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
                                    <span>Defence Fare</span>
                                </label>
                                
                                <label className=" flex justify-center space-x-2">
                                    <input type="checkbox" className="form-checkbox text-[#2952e3] w-5 h-5" />
                                    <span>Student Fare</span>
                                </label>
                                </div> 
                                <div className='flex items-center m-1 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>


                                <h1 className='text-red-700'>Travel update</h1>
                                </div>

                       </div>
                   

                    </div> 
                    <div className="flex justify-evenly md:grid-cols-4 gap-4 w-fit  p-2 m-4">
                    { searchData ? searchData.map((val) => {
                        return(
                       <div  key={val?.flightNbr} className="max-w-md bg-white rounded-lg flex-col m-5 flex justify-start shadow-md p-4 mx-auto">
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
                         <button className="bg-gradient-to-r from-red-500 to-red-800  text-white py-2 px-4 rounded w-full hover:bg-blue-600 focus:outline-none" onClick={() =>onBook(val?.flightNbr)}>
                           Book Now
                         </button>
                       </div>
                        )
                    }) :null
                         
                    } 
                    </div>
                    <div>
                        <div className='text-3xl md:text-5xl text-white text_gradient py-1 flex justify-center m-5'> 
                        <h1>Unlock Lesser-Known Wonders of India</h1>
                        </div>
                        <Card/>
                    </div> 
                   
                 
                </div>  
                
 
          
        </div>
    );
}

export default Homepage;
