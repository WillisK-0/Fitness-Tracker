import React from "react";
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
            <a href="#">Home</a>
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
