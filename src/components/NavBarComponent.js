import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-2 shadow  bg-white rounded">
        <h5 className="navbar-brand border ">
          <NavLink to={`/`}>Asset Management App</NavLink>
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse row" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item nav-link px-3">
              <NavLink to={`/homeRedirect`}>Home</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col">
              <NavLink to={`/login`}>Login</NavLink>
            </li>
            <li className="nav-item nav-link px-3 ">
              <NavLink to={`/signout`}>Sign Out</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
