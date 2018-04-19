import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          FityMit
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" || window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li className={window.location.pathname === "/discover" ? "active" : ""}>
          <Link to="/discover">Meet a Mentor</Link>
        </li>
        <li className={window.location.pathname === "/create" ? "active" : ""}>
          <Link to="/create">Become a Mentor</Link>
        </li>
        
        <li>
          <Login />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;