import React from "react";

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Exam Modules
        </a>
        <ul className="navbar-nav flex-row gap-2">
          <NavItem refa="table" name="Table" />
          <NavItem refa="form" name="Form" />
        </ul>
      </div>
    </nav>
  );
}

// Componenete para reutilizar codigo
const NavItem = ({ refa = "", name = "Link" }) => {
  return (
    <li className="nav-item">
      <a className="nav-link btn btn-light px-2" href={`/${refa}`}>
        {name}
      </a>
    </li>
  );
};

export default Navbar;
