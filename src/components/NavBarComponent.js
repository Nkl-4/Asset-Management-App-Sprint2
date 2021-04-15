import React from 'react'
import { Link } from "react-router-dom";

export default function NavBarComponent() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
        <div className="collapse navbar-collapse row">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link px-3 col">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-item nav-link px-3 col">
              <Link to={`/login`}>Login</Link>
            </li>
            <li className="nav-item nav-link px-3 col">
              <Link to={`/register`}>Register</Link>
            </li>
            <li className="nav-item nav-link px-3 col-4">
              <Link to={`/usersList`}>UserDB</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
