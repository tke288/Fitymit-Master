import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login";
import Logo from "../../Images/Logo.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img src={Logo} id="logo"/>
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li >
          <Link id="NavLink" to="/">About</Link>
        </li>
        <li>
          <Link id="NavLink" to="/discover">Meet a Mentor</Link>
        </li>
        <li>
          <Link id="NavLink" to="/create">Become a Mentor</Link>
        </li>
      </ul>
      <div>
      <Login />
      </div>
    </div>
  </nav>
);

export default Navbar;