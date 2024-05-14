import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const FlightInfoPage = () => {

  const [FlightInfoPage, setAllFlightInfoPage] = useState([])

useEffect(() =>{
  fetch('http://localhost:3000/FlightInfoPage',{
    method: "GET"
  }).then( response => {
    return response.json();
  }).then(data =>{
    console.log("data", data)
    return setAllFlightInfoPage(data)
  })

},[])
  console.log("allFlightInfo", FlightInfoPage)
  if (FlightInfoPage.length > 0){
    return (
      <>
        <Header />
  
        <div className="page-content">
          <h1>🛩️Flights</h1>
          <div>
            <p> {FlightInfoPage[0].departureDate}</p>
          </div>
  
          <p>This is an example page. Use this example to create your own pages</p>
        </div>
      </>
    )
  }

  }
  

export default FlightInfoPage;