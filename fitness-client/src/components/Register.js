import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Register(props) {
  const [User, setUser] = useState([]);
  const handleCreateUser = () => {
    fetch("http://localhost:3001/user-registration", {
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
      <h1>Register</h1>
      <form id="register-container">
        <input
          id="username"
          name="username"
          onChange={handleOnChange}
          placeholder="Username"
          type="text"
          minlength="6"
          required
        ></input>

        <input
          id="password"
          name="password"
          onChange={handleOnChange}
          placeholder="Password"
          type="password"
          minlength="6"
          required
        ></input>
        <select onChange={handleOnChange} name="gender" required>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
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
        <select onChange={handleOnChange} name="Activity">
          <option>Activity</option>
          <option value="sedentary">Sedentary: Little to no exercise</option>
          <option value="light">Light: Exercise 1-3 times per week</option>
          <option value="moderate">
            Moderate: Exercise 3-4 times per week
          </option>
          <option value="active">Active: Daily Exercise</option>
        </select>
        <input
          id="age"
          name="age"
          onChange={handleOnChange}
          placeholder="Age"
          type="text"
        ></input>
        <select onChange={handleOnChange} name="goal" required>
          <option value="">Goals</option>
          <option value="maintain weight">Maintain Weight</option>
          <option value="gain weight">Gain Weight</option>
          <option value="lose weight">Lose Weight</option>
        </select>

        <button id="log-in-btn" onClick={handleCreateUser}>
          SIGN UP
        </button>
        <NavLink to="/">Login</NavLink>
      </form>
    </>
  );
}

export default Register;
