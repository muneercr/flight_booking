
// import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="container mx-auto flex flex-wrap justify-around items-center rounded-lg m-5 p-5 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
         
         <div className="w-full md:w-1/4 text-center text-white md:text-left mb-4 md:mb-0">
         <h2 className="text-2xl font-bold">Why MakeMyTrip?</h2>
          <p className="mt-2">
            Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers.
          </p>
         </div>
         <div className="w-full md:w-1/4 text-white text-center md:text-left mb-4 md:mb-0">
           <h2 className="text-xl font-semibold">Booking Flights with MakeMyTrip</h2>
           <p className="mt-2">
             At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience.
           </p>
         </div>
         <div className="w-full md:w-1/4 text-white text-center md:text-left">
           <h2 className="text-xl font-semibold">Domestic Flights with MakeMyTrip</h2>
           <p className="mt-2">
             MakeMyTrip is India s leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds, and rebook options, price comparisons, and many more interesting features.
           </p>
         </div>
       </div>
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          {/* <img src={logo} alt="logo" className="w-32" /> */}
        </div>
         
      </div>
  
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-white text-sm text-center font-medium mt-2">info@akbartravals.com</p>
      </div>
  
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
  
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@akbartravals</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
  
  export default Footer;
  