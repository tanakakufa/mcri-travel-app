import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <NavLink to={"/"} className="link home-link">MCRI Travel App</NavLink>
      </div>

      <div>
        <ul className="nav-list">
          <li>
            {/* https://reactrouter.com/en/main/components/nav-link#navlink */}
            <NavLink to={"/example"} className="link">Example Page</NavLink>
          </li>
          <li>
            Packing List
          </li>
          <li>
            Flights
          </li>
          <li>
            Sightseeing
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;