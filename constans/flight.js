export const flight = [
    {
      "flightNbr": "6E-271",
      "airlineName": "Indigo",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/indigo-logo_0.png",
      "deptTime": "20:00",
      "deptCity": "Mumbai",
      "arivalTime": "22:00",
      "arivalCity": "New Delhi",
      "noOfStops": "0",
      "price": "4355"
    },
    {
      "flightNbr": "6E-272",
      "airlineName": "Indigo",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/indigo-logo_0.png",
      "deptTime": "16:00",
      "deptCity": "Mumbai",
      "arivalTime": "18:00",
      "arivalCity": "New Delhi",
      "noOfStops": "0",
      "price": "6355"
    },
    {
      "flightNbr": "6E-273",
      "airlineName": "Indigo",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/indigo-logo_0.png",
      "deptTime": "15:00",
      "deptCity": "Mumbai",
      "arivalTime": "17:00",
      "arivalCity": "New Delhi",
      "noOfStops": "0",
      "price": "10355"
    },
    {
      "flightNbr": "6E-274",
      "airlineName": "Indigo",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/indigo-logo_0.png",
      "deptTime": "15:00",
      "deptCity": "Mumbai",
      "arivalTime": "17:00",
      "arivalCity": "Kolkata",
      "noOfStops": "1",
      "price": "2522"
    },
    {
      "flightNbr": "AI-275",
      "airlineName": "Air India",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/air-india-logo_0.png",
      "deptTime": "03:00",
      "deptCity": "Mumbai",
      "arivalTime": "05:00",
      "arivalCity": "Jaipur",
      "noOfStops": "0",
      "price": "1500"
    },
    {
      "flightNbr": "AI-276",
      "airlineName": "Air India",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/air-india-logo_0.png",
      "deptTime": "04:00",
      "deptCity": "Mumbai",
      "arivalTime": "06:00",
      "arivalCity": "Bengaluru",
      "noOfStops": "0",
      "price": "3600"
    },
    {
      "flightNbr": "AI-277",
      "airlineName": "Air India",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/air-india-logo_0.png",
      "deptTime": "03:00",
      "deptCity": "Mumbai",
      "arivalTime": "05:00",
      "arivalCity": "Kolkata",
      "noOfStops": "0",
      "price": "1500"
    },
    {
      "flightNbr": "AI-278",
      "airlineName": "Air India",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/air-india-logo_0.png",
      "deptTime": "04:00",
      "deptCity": "Mumbai",
      "arivalTime": "06:00",
      "arivalCity": "Bengaluru",
      "noOfStops": "0",
      "price": "3600"
    },
    {
      "flightNbr": "AI-269",
      "airlineName": "Air India",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/air-india-logo_0.png",
      "deptTime": "04:00",
      "deptCity": "Kolkata",
      "arivalTime": "06:00",
      "arivalCity": "Bengaluru",
      "noOfStops": "0",
      "price": "5988"
    },
    {
      "flightNbr": "6E-280",
      "airlineName": "Indigo",
      "airlineLogo": "https://www.logosurfer.com/wp-content/uploads/2018/03/indigo-logo_0.png",
      "deptTime": "16:00",
      "deptCity": "Kolkata",
      "arivalTime": "22:00",
      "arivalCity": "Mumbai",
      "noOfStops": "2",
      "price": "4355"
    }
  ]

  export const cities =[
    {
      "id": "1",
      "name": "Mumbai",
      "state": "Maharashtra"
    },
    {
      "id": "2",
      "name": "New Delhi",
      "state": "New Delhi"
    },
    {
      "id": "3",
      "name": "Bengaluru",
      "state": "Karnataka"
    },
    {
      "id": "4",
      "name": "Kolkata",
      "state": "West Bengal"
    },
    {
      "id": "5",
      "name": "Ahemdabad",
      "state": "Gujrat"
    },
    {
      "id": "6",
      "name": "Jaipur",
      "state": "Rajasthan"
    },
    {
      "id": "7",
      "name": "Chennai",
      "state": "Tamilnadu"
    }
  ]

  export   const flightRoutes = [
    { destination: 'Chennai', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8bTRCXRhaR-gvCx75fhHq-8eGZ23z-t3Fw&usqp=CAU', viaCities: ['Delhi', 'Mumbai', 'Coimbatore', 'Madurai'] },
    { destination: 'Goa', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGtTC5q8WC14BAfZPX3fZ4knbR9ZxzD4LSA&usqp=CAU', viaCities: ['Delhi', 'Mumbai', 'Bangalore', 'Ahmedabad'] },
    { destination: 'Mumbai', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-281WZihFHhz2Xy9k9N0sDUC-tTwiKeP1AQ&usqp=CAU', viaCities: ['Delhi', 'Bangalore', 'Chennai', 'Ahmedabad'] },
    { destination: 'Hyderabad', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc626YMshmksIQWx_hQNLuVVUx0DXaXxR7Wg&usqp=CAU',  viaCities: ['Chennai', 'Mumbai', 'Bangalore', 'Delhi'] },
    { destination: 'Delhi',  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xbrEXoGlJrbVY2yiyQ58BW8y4-sjsEA9VA&usqp=CAU', viaCities: ['Mumbai', 'Pune', 'Bangalore', 'Chennai'] },
    // { destination: 'Pune', img:'', viaCities: ['Delhi', 'Bangalore', 'Chennai', 'Ahmedabad'] },
    { destination: 'Kolkata', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE5K5Gz5G6KgOPaqTyjbXpQ46ah31vxW_Kg&usqp=CAU', viaCities: ['Delhi', 'Mumbai', 'Bangalore', 'Pune'] },
    { destination: 'Bangalore',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3v3MKxPAKYGx6Dx3ppbVc0Gws0MoNJbM08w&usqp=CAU',  viaCities: ['Delhi', 'Pune', 'Mumbai', 'Kolkata'] },
    { destination: 'Jaipur',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsT5v_zGYYkz4pD_2990ksb-Kk8EpQ42-IQ&usqp=CAU', viaCities: ['Mumbai', 'Delhi', 'Pune', 'Bangalore'] },
  ];
  