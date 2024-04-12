import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <NavLink to={"/"} className="link home-link">MCRI Travel App</NavLink>
      </div>

      <div>
        {/* https://reactrouter.com/en/main/components/nav-link#navlink */}
        <ul className="nav-list">
          <li>
            <NavLink to={"/packing"} className="link">Packing List</NavLink>
          </li>
          <li>
            <NavLink to={"/flights"} className="link">Flights</NavLink>
          </li>
          <li>
            <NavLink to={"/sightseeing"} className="link">Sightseeing</NavLink>
          </li>
          <li>
            <NavLink to={"/sightseeing"} className="link">Resources</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;