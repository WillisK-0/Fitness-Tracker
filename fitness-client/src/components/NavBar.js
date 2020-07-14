import React from "react";
import { NavLink, Redirect } from "react-router-dom";

import "../style/navBar.css";
import { connect } from "react-redux";
function NavBar(props) {
  return (
    <>
      <div className="header">
        <h1>AnalyzeFit</h1>
      </div>
      <nav role="navigation" className="primary-navigation">
        <ul className="primary-menu-items">
          <li class="input" className="primary-menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="input">
            <NavLink to="/search">Recipes</NavLink>
          </li>
          <li class="input">
            <NavLink to="/">About</NavLink>
          </li>
          {props.isAuthenticated == false ? (
            <li class="input">
              <NavLink to="/log-in">Login</NavLink>
            </li>
          ) : null}
          <li class="input">
            <NavLink to="/">Exercise</NavLink>
          </li>
          {props.isAuthenticated == true ? (
            <li class="input">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(NavBar);