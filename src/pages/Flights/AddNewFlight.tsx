import { useState } from "react";
import { IFlight } from "./Flights";

const getRandomId = () => `${Math.random()}`;

const getDefaultFlight = () => (
  {
    id: getRandomId(),
    airline: "",
    departureAirport: "",
    departureCity: "",
    arrivalAirport: "",
    arrivalCity: "",
    departureDateTime: "",
    arrivalDateTime: "",
    flightNumber: ""
  }
)

const AddNewFlight = ({ onSubmitNewItem }: {onSubmitNewItem: (newItem: IFlight) => void}) => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [newFlight, setNewFlight] = useState<IFlight>(getDefaultFlight())

  const handleTextChange = (value: string, key: string) => {
    const editItem: IFlight = {...newFlight};
    editItem[key as keyof IFlight] = value;
    setNewFlight(editItem);
  }

  // const handlePriorityTextChange = (value: string) => {
  //   if(value.length && +value > 3) return;  
  //   const editItem: IFlight = {...newFlight};
  //   editItem.priority = +value;
  //   setNewFlight(editItem);
  // }

  // const handleEmojiTextChange = (value: string) => {
  //   const editItem: IFlight = {...newFlight};
  //   editItem.emoji = value;
  //   setNewFlight(editItem);
  // }

  const onSubmitClick = () => {
    onSubmitNewItem(newFlight);
    setNewFlight(getDefaultFlight());
    setShowAddNewForm(false);
  }

  return (
    <div className="add-new-container">
      <button className="primary" disabled={showAddNewForm} onClick={() => setShowAddNewForm(true)}>Add New Flight</button>

      {showAddNewForm &&
        <div className="add-new-form">
          <div className="inputs-container">
            <div className="input-item">
              <label htmlFor="departureCity" className="input-label">Departure City</label>
              <input
                type="text"
                id="departureCity"
                value={newFlight.departureCity}
                onChange={(event) => handleTextChange(event.target.value, "departureCity")}
              />
            </div>
            <div className="input-item">
              <label htmlFor="departureAirport" className="input-label">Departure Airport</label>
              <input
                type="text"
                id="departureAirport"
                value={newFlight.departureAirport}
                onChange={(event) => handleTextChange(event.target.value, "departureAirport")}
              />
            </div>
            <div className="input-item">
              <label htmlFor="departureDateTime" className="input-label">Departure Date & Time</label>
              <input
                type="text"
                id="departureDateTime"
                value={newFlight.departureDateTime}
                onChange={(event) => handleTextChange(event.target.value, "departureDateTime")}
              />
            </div>
            <div className="input-item">
              <label htmlFor="arrivalCity" className="input-label">Arrival City</label>
              <input
                type="text"
                id="arrivalCity"
                value={newFlight.arrivalCity}
                onChange={(event) => handleTextChange(event.target.value, "arrivalCity")}
              />
            </div>
            <div className="input-item">
              <label htmlFor="arrivalAirport" className="input-label">Arrival Airport</label>
              <input
                type="text"
                id="arrivalAirport"
                value={newFlight.arrivalAirport}
                onChange={() => null} // bug 🐛
              />
            </div>
            <div className="input-item">
              <label htmlFor="arrivalDateTime" className="input-label">Arrival Date & Time</label>
              <input
                type="text"
                id="arrivalDateTime"
                value={newFlight.arrivalDateTime}
                onChange={(event) => handleTextChange(event.target.value, "arrivalDateTime")}
              />
            </div>
            <div className="input-item">
              <label htmlFor="airline" className="input-label">Airline</label>
              <input
                type="text"
                id="airline"
                value={newFlight.airline}
                onChange={(event) => handleTextChange(event.target.value, "airline")}
              />
            </div>
          </div>

          <div className="add-new-button-container">
            <button className="secondary" onClick={() => setShowAddNewForm(false)}>Cancel</button>
            <button className="primary" onClick={onSubmitClick}>Add</button>
          </div>
        </div>
      }
    </div>
  )
}

export default AddNewFlight;