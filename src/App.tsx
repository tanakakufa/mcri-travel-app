import './App.css';
import Header from './reusables/Header/Header';
import TravelSVG from './assets/images/undraw_stranded_traveler.svg';

function App() {

  return (
    <>
      <Header />

      <div className="page-content homepage">
        <h1>Welcome to the Travel App</h1>

        <p>Here you will find suggestions on what to pack, what to see, and your flight information</p>

        <p>Hope you have a great time!</p>

        <img src={TravelSVG} width={475} style={{marginTop: 75}} />
        
      </div>
    </>
  )
}

export default App
