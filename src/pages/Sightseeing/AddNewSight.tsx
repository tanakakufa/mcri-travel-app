import { useState } from "react";
import { ISightToSee } from "./Sightseeing";

const getRandomId = () => `${Math.random()}`;

const getDefaultSight = () => (
  {
    id: getRandomId(),
    name: "",
    type: "",
    intensity: 1,
    image: "",
    address: "",
  }
)

const AddNewSight = ({ onSubmitNewItem }: {onSubmitNewItem: (newItem: ISightToSee) => void}) => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [newSight, setNewSight] = useState<ISightToSee>(getDefaultSight())

  const handleNameTextChange = (value: string) => {
    const editItem: ISightToSee = {...newSight};
    editItem.name = value;
    setNewSight(editItem);
  }

  const handleAddressTextChange = (value: string) => {
    const editItem: ISightToSee = {...newSight};
    editItem.address = value;
    setNewSight(editItem);
  }

  const handleImageTextChange = (value: string) => {
    const editItem: ISightToSee = {...newSight};
    editItem.image = value;
    setNewSight(editItem);
  }

  const handleIntensityTextChange = (value: string) => {
    const editItem: ISightToSee = {...newSight};
    editItem.intensity = +value;
    setNewSight(editItem);
  }

  const handleTypeTextChange = (value: string) => {
    const editItem: ISightToSee = {...newSight};
    editItem.type = value;
    setNewSight(editItem);
  }

  // const handleNumberChange = (value: string) => {
  //   if(value.length && +value > 3) return;  
  //   const editItem: ISightToSee = {...newSight};
  //   editItem.priority = +value;
  //   setNewSight(editItem);
  // }

  const onSubmitClick = () => {
    onSubmitNewItem(newSight);
    setNewSight(getDefaultSight());
    setShowAddNewForm(false);
  }

  return (
    <div className="add-new-container">
      <button className="primary" disabled={showAddNewForm} onClick={() => setShowAddNewForm(true)}>Add New Activity</button>

      {showAddNewForm &&
        <div className="add-new-form">
          <div className="inputs-container">
            <div className="input-item">
              <label htmlFor="name" className="input-label">Name</label>
              <input
                type="text"
                id="name"
                value={newSight.name}
                onChange={(event) => handleNameTextChange(event.target.value)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="address" className="input-label">Address</label>
              <input
                type="text"
                id="address"
                value={newSight.address}
                onChange={(event) => handleAddressTextChange(event.target.value)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="image" className="input-label">Image (URL)</label>
              <input
                type="text"
                id="image"
                value={newSight.image}
                onChange={(event) => handleImageTextChange(event.target.value)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="intensity" className="input-label">Intensity</label>
              <input
                type="number"
                max={5}
                min={1}
                id="intensity"
                value={newSight.intensity}
                onChange={(event) => handleIntensityTextChange(event.target.value)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="type" className="input-label">Type</label>
              <input
                type="text"
                id="type"
                value={newSight.type}
                onChange={(event) => handleTypeTextChange(event.target.value)}
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

export default AddNewSight;