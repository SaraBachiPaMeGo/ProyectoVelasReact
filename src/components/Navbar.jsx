import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          Produkte ▾

          {openMenu && (
            <ul className="dropdown-menu">
              <li>Dessertkerzen</li>
              <li>Figurenkerzen</li>
              <li>Kerzen im Glas</li>
              <li>Spiralkerzen </li>
              <li>Zubehör</li>
            </ul>
          )}
        </li>

        <li>Über uns</li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;