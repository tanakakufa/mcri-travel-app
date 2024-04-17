import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";
import "./Resources.css";
import AddNewResource from "./AddNewResource";

export interface IResource {
  id: string;
  name: string;
  url: string;
}

const Resources = () => {
  const [resourceLinks, setResourceLinks] = useState<IResource[]>([])

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

  const onSubmitNewItem = (newItem: IResource) => {
    const listToEdit = [...resourceLinks];
    listToEdit.push(newItem);
    setResourceLinks(listToEdit);
  }

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
                {/* bug 🐛 */}
                <a href={link.id === "4003" ? "" : link.url} target="_blank">{link.name}</a>
                <p>🔗</p>
              </div>
            )
          })}
        </div>

        <AddNewResource onSubmitNewItem={onSubmitNewItem} />
      </div>
    </>
  )
}

export default Resources;