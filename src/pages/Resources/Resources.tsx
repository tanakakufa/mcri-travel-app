import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";
import "./Resources.css";

const Resources = () => {
  const [resourceLinks, setResourceLinks] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/resources', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return setResourceLinks(data)
      })
      .catch(error => console.error(error));
  }, []);

  
  return (
    <>
      <Header />

      <div className="page-content small">
        <PageTitle
          title="Resources"
          emoji="🖥️"
        />

        <div className="all-links-container">
          {resourceLinks.map((link: any) => {
            return (
              <div className="link-card" key={link.id}>
                <a href={link.id === "4003" ? "" : link.url} target="_blank">{link.name}</a>
                <p>🔗</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Resources;