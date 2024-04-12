import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";

const Sightseeing = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/thingsToSee', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return setActivities(data)
      })
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <Header />

      <div className="page-content large">
        <PageTitle
          title="Sightseeing"
          emoji="🗺️"
        />

        <div>
          {activities.map((activity: any) => {
            return (
              <div>
                <div>
                  <img src={activity.image} />
                </div>
                <p>{activity.name}</p>
                <p>{activity.address}</p>
                <p><b>Intensity level:</b><span>{activity.intensity}</span></p>

                <div>
                  <p>{activity.type}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sightseeing;