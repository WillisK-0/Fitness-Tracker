import React from "react";
import { NavLink, Redirect } from "react-router-dom";

import "../style/navBar.css";
function NavBar() {
  return (
    <>
      <div className="header">
        <h1>AnalyzeFit</h1>
      </div>
      <nav role="navigation" className="primary-navigation">
        <ul className="primary-menu-items">
          <li className="primary-menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Work &#x25BE;</NavLink>
            <ul className="dropdown" className="drop-menu-items">
              <li className="drop-menu-item">
                <NavLink className="links" to="/">
                  Web Development
                </NavLink>
              </li>
              <li className="drop-menu-item">
                <NavLink className="links" to="/">
                  Web Design
                </NavLink>
              </li>

              <li className="drop-menu-item">
                <NavLink className="links" to="/">
                  Illustration
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
