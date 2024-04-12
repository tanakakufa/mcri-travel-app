import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";

const Flights = () => {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/flights', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return setFlights(data)
      })
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <Header />

      <div className="page-content small">
        <PageTitle
          title="Flights"
          emoji="✈️"
        />

        <div>
          {flights.map((flight: any) => {
            return (
              <div>
                <div>
                  <p>Departure</p>
                  <p>{flight.departureDateTime}</p>
                  <p>{flight.departureCity}</p>
                  <p>{flight.departureAirport}</p>
                </div>
                <div>
                  <p>flight time</p>
                  <p>{flight.airline}</p>
                </div>
                <div>
                  <p>Arrival</p>
                  <p>{flight.arrivalDateTime}</p>
                  <p>{flight.arrivalCity}</p>
                  <p>{flight.arrivalAirport}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Flights;