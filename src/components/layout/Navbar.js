import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary justify-content-around">
      <Link to="/" className="navbar-brand">
        Crud With Fake Api
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/addContact" className="nav-link" href="#">
            Add Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
