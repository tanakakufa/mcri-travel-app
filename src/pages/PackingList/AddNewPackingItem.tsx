import { useState } from "react";
import { IPackingItem } from "./PackingList";

const getRandomId = () => `${Math.random()}`;

const getDefaultPackingItem = () => (
  {
    id: getRandomId(),
    title: "",
    details: "",
    emoji: "",
    priority: 1,
    isPacked: false,
  }
)

const AddNewPackingItem = ({ onSubmitNewItem }: {onSubmitNewItem: (newItem: IPackingItem) => void}) => {
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [newItem, setNewItem] = useState<IPackingItem>(getDefaultPackingItem())

  const handleTitleTextChange = (value: string) => {
    const editItem: IPackingItem = {...newItem};
    editItem.title = value;
    setNewItem(editItem);
  }

  const handlePriorityTextChange = (value: string) => {
    if(value.length && +value > 3) return;  
    const editItem: IPackingItem = {...newItem};
    editItem.priority = +value;
    setNewItem(editItem);
  }

  const handleEmojiTextChange = (value: string) => {
    const editItem: IPackingItem = {...newItem};
    editItem.emoji = value;
    setNewItem(editItem);
  }

  const onSubmitClick = () => {
    onSubmitNewItem(newItem);
    setNewItem(getDefaultPackingItem());
    setShowAddNewForm(false);
  }

  return (
    <div className="add-new-container">
      <button className="primary" disabled={showAddNewForm} onClick={() => setShowAddNewForm(true)}>Add New Item</button>

      {showAddNewForm &&
        <div className="add-new-form">
          <div className="inputs-container">
            <div className="input-item">
              <label htmlFor="item-name" className="input-label">Item Name</label>
              <input
                type="text"
                id="item-name"
                value={newItem.title}
                onChange={(event) => handleTitleTextChange(event.target.value)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="priority" className="input-label">Priority</label>
              <input
                type="number"
                id="priority"
                max={3}
                min={0}
                value={newItem.priority}
                onChange={(event) => handlePriorityTextChange(event.target.value)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="emoji" className="input-label">Emoji</label>
              <input
                type="text"
                id="emoji"
                value={newItem.emoji}
                onChange={(event) => handleEmojiTextChange(event.target.value)}
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

export default AddNewPackingItem;