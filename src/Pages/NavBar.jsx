import { Link  , NavLink} from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <ul className="nav-links">
        <NavLink to="/" className={({isActive}) => (isActive ? "active":"nav-item")}>
          <li>Home</li>
        </NavLink>

        <NavLink to="/about" className={({isActive}) => (isActive ? "active":"nav-item")}>
          <li>About</li>
        </NavLink>

        <NavLink to="/contact" className={({isActive}) => (isActive ? "active":"nav-item")}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;