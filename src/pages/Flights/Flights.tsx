import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";

const Flights = () => {
  
  return (
    <>
      <Header />

      <div className="page-content small">
        <PageTitle
          title="Flights"
          emoji="✈️"
        />
      </div>
    </>
  )
}

export default Flights;