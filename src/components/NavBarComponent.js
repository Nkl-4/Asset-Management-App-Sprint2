import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
        <h5 className="navbar-brand">Asset Management App</h5>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link px-3 col">
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col">
              <NavLink to={`/login`}>Login</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col">
              <NavLink to={`/register`}>Register</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col">
              <NavLink to={`/usersList`}>UserDB</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col9">
              <NavLink to={`/report`}>Report</NavLink>
            </li>
            <li className="nav-item nav-link px-3 col9">
              <NavLink to={`/signout`}>Sign Out</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
