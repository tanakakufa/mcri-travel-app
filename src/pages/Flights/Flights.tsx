import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";
import "./Flights.css";
import AddNewFlight from "./AddNewFlight";

export interface IFlight {
  id: string,
  airline: string,
  departureAirport: string,
  departureCity: string,
  arrivalAirport: string,
  arrivalCity: string,
  departureDateTime: string,
  arrivalDateTime: string,
  flightNumber: string
}

const Flights = () => {
  const [flights, setFlights] = useState<IFlight[]>([])

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

  const onSubmitNewItem = (newItem: IFlight) => {
    const listToEdit = [...flights];
    listToEdit.push(newItem);
    setFlights(listToEdit);
  }
  
  return (
    <>
      <Header />

      <div className="page-content small">
        <PageTitle
          title="Flights"
          emoji="✈️"
        />

        <div className="all-flights-container">
          {flights.map((flight: any) => {
            return (
              <div className="flight-card">
                <div>
                  <p className="bold-title">Departure 🛫</p>
                  <p>{flight.departureDateTime}</p>
                  <p>{flight.departureCity}</p>
                  <p>{flight.departureAirport}</p>
                </div>
                <div className="align-center">
                  <p className="bold-title">17h 15m</p>
                  <p className="small-text">{flight.airline}</p>
                </div>
                <div className="align-right">
                  <p className="bold-title">🛬 Arrival</p>
                  <p>{flight.arrivalDateTime}</p>
                  <p>{flight.arrivalCity}</p>
                  <p>{flight.arrivalAirport}</p>
                </div>
              </div>
            )
          })}
        </div>

        <AddNewFlight onSubmitNewItem={onSubmitNewItem} />
      </div>
    </>
  )
}

export default Flights;