import { NavLink } from "react-router-dom";
import homes from "../assets/homes.png";
import experiences from "../assets/experiences.png";
import services from "../assets/services.png";
import SearchBar from "./SearchBar";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <div className="searchContainer">
        <SearchBar handleSearch={onSearch} />
      </div>
      <div className="navIconRow">
        <NavLink
          to="/"
          className={({ isActive }) => "navIcon" + (isActive ? " active" : "")}
        >
          <img className="linkIcon" src={homes} alt="homes" />
          <span>Homes</span>
        </NavLink>

        <NavLink
          to="/experiences"
          className={({ isActive }) => "navIcon" + (isActive ? " active" : "")}
        >
          <img className="linkIcon" src={experiences} alt="experiences" />
          <span>Experiences</span>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => "navIcon" + (isActive ? " active" : "")}
        >
          <img className="linkIcon" src={services} alt="services" />
          <span>Services</span>
        </NavLink>
      </div>
    </nav>
  );
}
