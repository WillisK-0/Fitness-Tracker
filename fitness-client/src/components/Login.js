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
    fetch("http://localhost:3001/user-login", {
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
      });
  };
  const handleGuestLogin = () => {
    fetch("http://localhost:3001/user-login", {
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
      });
  };

  return (
    <>
      <div class="login-div" id="login-container">
        <div class="logo"></div>
        <div class="title">
          Analyze Fit
          <br />
          Take Chances
        </div>
        <div class="sub-title">Don't hesitate to go all out</div>
        <div class="fields">
          <div class="username">
            <input
              name="username"
              onChange={handleOnChange}
              type="text"
              minLength="6"
              required
              title="8 characters minimum"
              type="username"
              class="user-input"
              placeholder="username"
            />
          </div>
          <div class="password">
            <input
              name="password"
              placeholder="Username"
              onChange={handleOnChange}
              type="text"
              minLength="6"
              required
              title="8 characters minimum"
              type="password"
              class="pass-input"
              placeholder="password"
            />
          </div>
        </div>
        <button class="signin-button" id="log-in-btn" onClick={handleOnClick}>
          LOG IN
        </button>

        <NavLink id="sign-up" to="/register">
          <button class="signin-button">Sign Up Here</button>
        </NavLink>
        <button class="signin-button" onClick={handleGuestLogin}>
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
