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
          <li className="primary-menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          {props.isAuthenticated == true ? (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          ) : null}
          <li>
            <NavLink to="/search">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/">Exercise</NavLink>
          </li>
          <li>
            <NavLink to="/About">About Us</NavLink>
          </li>
          {props.isAuthenticated == false ? (
            <li>
              <NavLink to="/log-in">Login</NavLink>
            </li>
          ) : null}
          {props.isAuthenticated == false ? (
            <li>
              <NavLink to="/register">Register</NavLink>
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
