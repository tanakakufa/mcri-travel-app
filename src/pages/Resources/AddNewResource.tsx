import { useState } from "react";
import { IResource } from "./Resources";


const getRandomId = () => `${Math.random()}`;

const getDefaultResource = () => (
  {
    id: getRandomId(),
    name: "",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
)

const AddNewResource = ({ onSubmitNewItem }: {onSubmitNewItem: (newItem: IResource) => void}) => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [newResource, setNewResource] = useState<IResource>(getDefaultResource())

  const handleNameTextChange = (value: string) => {
    const editItem: IResource = {...newResource};
    editItem.name = value;
    setNewResource(editItem);
  }

  const onSubmitClick = () => {
    onSubmitNewItem(newResource);
    setNewResource(getDefaultResource());
    setShowAddNewForm(false);
  }

  return (
    <div className="add-new-container">
      <button className="primary" disabled={showAddNewForm} onClick={() => setShowAddNewForm(true)}>Add New Resource</button>

      {showAddNewForm &&
        <div className="add-new-form">
          <div className="inputs-container">
            <div className="input-item">
              <label htmlFor="name" className="input-label">Display Name</label>
              <input
                type="text"
                id="name"
                value={newResource.name}
                onChange={(event) => handleNameTextChange(event.target.value)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="url" className="input-label">URL</label>
              <input
                type="text"
                id="url"
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

export default AddNewResource;