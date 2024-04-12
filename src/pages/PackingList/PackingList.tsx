import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";
import "./PackingList.css"

const PackingList = () => {
  const [packingList, setPackingList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/itemsToPack', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return setPackingList(data)
      })
      .catch(error => console.error(error));
  }, []);

  const findPriorityLevel = (priorityNumber: number) => {
    if(priorityNumber === 1) {
      return "High"
    } 
    if(priorityNumber === 2) {
      return "Medium"
    } 
    if(priorityNumber === 3) {
      return "Low"
    } 
  };

  const findPriorityColor = (priorityNumber: number) => {
    if(priorityNumber === 1) {
      return "#E10000"
    } 
    if(priorityNumber === 2) {
      return "#E17A00"
    } 
    if(priorityNumber === 3) {
      return "#4A4A4A"
    } 
  };
  
  return (
    <>
      <Header />

      <div className="page-content small">
        <PageTitle
          title="Packing List"
          emoji="🧳"
        />
        
        <ul className="packing-list-ul">
          {packingList.map((item: any) => {
            return (
              <li key={item.id} className="packing-list-item">
                <div className="packing-item-inner">
                  <div className="packing-item-input">
                    <input type="checkbox" checked={item.isPacked} id={item.id} />
                    <div className="label-container">
                      <label htmlFor={item.id} className={item.isPacked ? "item-checked" : ""}>{`${item.title}`}</label>
                      <p className="emoji">{item.emoji}</p>
                    </div>
                  </div>
                  <div className="packing-item-priority">
                    <p style={{ color: `${findPriorityColor(item.priority)}`}}>{findPriorityLevel(item.priority)}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default PackingList;