import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../style/update.css";

function Update(props) {
  const [user, setUser] = useState([]);
  let currentId = localStorage.getItem("userid");
  //   useEffect(() => {
  //     fetch("https://stormy-thicket-73183.herokuapp.com/user-info/" + localStorage.getItem("userid"))
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setUserInfo(result);
  //       });
  //   }, []);
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    fetch("https://stormy-thicket-73183.herokuapp.com/update/" + currentId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
      });
  };

  return (
    <>
      <div className="update-profile-container">
        <h1>Update Profile</h1>
        {props.isAuthenticated == true ? (
          <form className="form-container">
            <input
              className="input-bars"
              name="username"
              onChange={handleOnChange}
              placeholder="Username"
              type="text"
              minlength="6"
              required
            ></input>

            <input
              className="input-bars"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
              type="password"
              minlength="6"
              required
            ></input>

            <input
              className="input-bars"
              name="feet"
              onChange={handleOnChange}
              placeholder="Height(feet)"
              type="text"
            ></input>
            <input
              className="input-bars"
              name="inches"
              onChange={handleOnChange}
              placeholder="Height(inches)"
              type="text"
            ></input>
            <input
              className="input-bars"
              name="weight"
              onChange={handleOnChange}
              placeholder="Weight"
              type="text"
            ></input>
            <input
              className="input-bars"
              name="age"
              onChange={handleOnChange}
              placeholder="Age"
              type="text"
            ></input>
            <select
              className="dropdowns"
              onChange={handleOnChange}
              name="Activity"
            >
              <option>Activity</option>
              <option value="sedentary">
                Sedentary: Little to no exercise
              </option>
              <option value="light">Light: Exercise 1-3 times per week</option>
              <option value="moderate">
                Moderate: Exercise 3-4 times per week
              </option>
              <option value="active">Active: Daily Exercise</option>
            </select>

            <select
              className="dropdowns"
              onChange={handleOnChange}
              name="goal"
              required
            >
              <option value="">Goals</option>
              <option value="Maintain Weight">Maintain Weight</option>
              <option value="gain weight">Gain Weight</option>
              <option value="lose weight">Lose Weight</option>
            </select>

            <button className="update-btn" onClick={handleUpdate}>
              Update Profile
            </button>
          </form>
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Update);
