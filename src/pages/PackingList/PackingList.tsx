import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

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

  console.log("packingList:", packingList)
  
  return (
    <>
      <Header />

      <div className="page-content">
        <h1>Packing List</h1>
        
      </div>
    </>
  )
}

export default PackingList;