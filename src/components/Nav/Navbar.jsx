import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="" className="navbar-brand">
          Exam Modules
        </NavLink>
        <ul className="navbar-nav flex-row gap-2">
          <NavItem refa="table" name="Table" />
          <NavItem refa="" name="Form" />
        </ul>
      </div>
    </nav>
  );
}

// Componenete para reutilizar codigo
const NavItem = ({ refa = "", name = "Link" }) => {
  return (
    <li className="nav-item">
      <NavLink to={`/${refa}`} className="nav-link btn btn-light px-2">
        {name}
      </NavLink>
    </li>
  );
};

export default Navbar;
