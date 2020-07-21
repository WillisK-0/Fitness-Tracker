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
          <NavLink to="/">
            <li className="primary-menu-item">Home</li>
          </NavLink>

          {props.isAuthenticated == true ? (
            <NavLink to="/profile">
              <li>Profile</li>
            </NavLink>
          ) : null}
          <NavLink to="/search">
            <li>Recipes</li>
          </NavLink>
          {props.isAuthenticated == true ? (
            <NavLink to="/workout-log">
              <li>Workout Log</li>
            </NavLink>
          ) : null}
          <NavLink to="/About">
            <li>About Us</li>
          </NavLink>
          {props.isAuthenticated == false ? (
            <NavLink to="/log-in">
              <li>Login</li>
            </NavLink>
          ) : null}
          {props.isAuthenticated == false ? (
            <NavLink to="/register">
              <li>Register</li>
            </NavLink>
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
