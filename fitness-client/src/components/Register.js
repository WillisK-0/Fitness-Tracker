import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../style/register.css";

function Register(props) {
  const [User, setUser] = useState([]);
  const handleCreateUser = () => {
    fetch("https://stormy-thicket-73183.herokuapp.com/user-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
      });
  };

  const handleOnChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="register-wrapper">
        <div class="logo"></div>
        <div class="title">
          Analyze Fit
          <br />
          Take Chances
        </div>
        <div class="sub-title">Don't hesitate to go all out</div>

        <h1 className="register-title">Register</h1>
        <hr className="solid"></hr>

        <div className="register-fields">
          <form id="register-container">
            <input
              id="username"
              name="username"
              onChange={handleOnChange}
              placeholder="Username"
              type="text"
              minLength="6"
              required
              class="register-input"
            ></input>

            <input
              id="password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              type="password"
              minLength="6"
              required
            ></input>

            <input
              id="feet"
              name="feet"
              onChange={handleOnChange}
              placeholder="Height(feet)"
              type="text"
            ></input>
            <input
              id="inches"
              name="inches"
              onChange={handleOnChange}
              placeholder="Height(inches)"
              type="text"
            ></input>
            <input
              id="weight"
              name="weight"
              onChange={handleOnChange}
              placeholder="Weight"
              type="text"
            ></input>
            <input
              id="age"
              name="age"
              onChange={handleOnChange}
              placeholder="Age"
              type="text"
            ></input>
            <div className="register-select">
              <select onChange={handleOnChange} name="gender" required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="register-select">
              <select
                onChange={handleOnChange}
                name="Activity"
                id="activity-selector"
              >
                <option>Activity</option>
                <option value="sedentary">
                  Sedentary: Little to no exercise
                </option>
                <option value="light">
                  Light: Exercise 1-3 times per week
                </option>
                <option value="moderate">
                  Moderate: Exercise 3-4 times per week
                </option>
                <option value="active">Active: Daily Exercise</option>
              </select>
            </div>
            <div className="register-select">
              <select
                onChange={handleOnChange}
                name="goal"
                required
                id="goals-selector"
              >
                <option value="">Goals</option>
                <option value=""></option>
                <option value="gain weight">Gain Weight</option>
                <option value="lose weight">Lose Weight</option>
              </select>
            </div>
            <hr className="solid"></hr>

            <button className="signin-button" onClick={handleCreateUser}>
              SIGN UP
            </button>
            <NavLink to="/log-in">
              <button className="signin-button">LOG IN</button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
