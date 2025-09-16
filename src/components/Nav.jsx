import { NavLink } from "react-router-dom";
import homes from "../assets/homes.png";
import experiences from "../assets/experiences.png";
import services from "../assets/services.png";
import bell from "../assets/notificationBell.png";
import cellBars from "../assets/cellBars.png";
import wifi from "../assets/wifi.png";
import battery from "../assets/battery.png";
import SearchBar from "./SearchBar";
import Time from "./Time";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <div className="phoneIconsContainer">
        <div className="phoneIconsSubContainer">
          <Time />
          <img className="phoneIcons" src={bell} alt="notification bell" />
        </div>
        <div className="phoneIconsSubContainer">
          <img className="phoneIcons" src={cellBars} alt="cell bars" />
          <img className="phoneIcons" src={wifi} alt="wifi" />
          <img className="phoneIcons" src={battery} alt="battery" />
        </div>
      </div>
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
