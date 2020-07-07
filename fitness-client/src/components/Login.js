import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

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
        props.onAuthenticated();
        setUserLogin(result.login);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <div id="login-container">
        <input
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleOnChange}
          type="text"
          minLength="6"
          required
          title="8 characters minimum"
        ></input>
        <input
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          type="password"
          minLength="6"
          required
        ></input>
        <button id="log-in-btn" onClick={handleOnClick}>
          LOG IN
        </button>
        <NavLink id="sign-up" to="/register">
          Sign Up Here
        </NavLink>
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
