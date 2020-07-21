import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../style/login-div.css";

function Login(props) {
  const [login, setLogin] = useState([]);
  const [userLogin, setUserLogin] = useState(null);
  const handleOnChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    fetch("https://stormy-thicket-73183.herokuapp.com/user-login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        localStorage.setItem("userid", result.id);

        setUserLogin(result.login);
        if (result.login == true) {
          props.onAuthenticated();
        }
      })
      .then(window.scrollTo(0, 0));
  };
  const handleGuestLogin = () => {
    fetch("https://stormy-thicket-73183.herokuapp.com/user-login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: "guest", password: "guest" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        localStorage.setItem("userid", result.id);

        setUserLogin(result.login);
        if (result.login == true) {
          props.onAuthenticated();
        }
      })
      .then(window.scrollTo(0, 0));
  };

  return (
    <>
      <div className="login-div" id="login-container">
        <div className="logo"></div>
        <div className="title">
          Analyze Fit
          <br />
          Take Chances
        </div>
        <div className="sub-title">Don't hesitate to go all out</div>
        <h1 className="register-title">Login</h1>
        <hr className="login-hr"></hr>

        <div className="fields">
          <div className="username">
            <input
              name="username"
              onChange={handleOnChange}
              type="text"
              minLength="6"
              required
              title="8 characters minimum"
              type="username"
              className="user-input"
              placeholder="username"
            />
          </div>
          <div className="password">
            <input
              name="password"
              placeholder="Username"
              onChange={handleOnChange}
              type="text"
              minLength="6"
              required
              title="8 characters minimum"
              type="password"
              className="pass-input"
              placeholder="password"
            />
          </div>
        </div>
        <button
          className="signin-button"
          id="log-in-btn"
          onClick={handleOnClick}
        >
          LOG IN
        </button>

        <NavLink id="sign-up" to="/register">
          <button className="signin-button">SIGN UP</button>
        </NavLink>
        <button className="signin-button" onClick={handleGuestLogin}>
          LOG IN AS GUEST
        </button>
        {userLogin !== null && userLogin == true ? <Redirect to="/" /> : null}
        {userLogin !== null && userLogin == false ? (
          <h1 id="incorrect">Login Incorrect</h1>
        ) : null}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch({ type: "AUTH", value: true }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
