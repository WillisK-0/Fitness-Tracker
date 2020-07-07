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
            <a href="#">Work &#x25BE;</a>
            <ul className="dropdown" className="drop-menu-items">
              <li classname="drop-menu-item">
                <a href="#">Web Development</a>
              </li>
              <li classname="drop-menu-item">
                <a href="#">Web Design</a>
              </li>
              <li classname="drop-menu-item">
                <a href="#">Illustration</a>
              </li>
              <li classname="drop-menu-item">
                <a href="#">Iconography</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <NavLink to="/log-in">Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
