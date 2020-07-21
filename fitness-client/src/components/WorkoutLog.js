import React, { useState, useEffect } from "react";

import "../style/workoutLog.css";

function WorkoutLog() {
  const [date, setDate] = useState("");
  const [addExercise, setAddExercise] = useState({});
  const [exerciseItems, setExerciseItems] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [allExercises, setAllExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(null);

  const handleOnChange = (e) => {
    setAddExercise({
      ...addExercise,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExercise = () => {
    fetch(
      "https://stormy-thicket-73183.herokuapp.com/add-exercise/" + localStorage.getItem("userid"),
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ exercise: addExercise, date: date }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
        getExerciseItems();
      });
  };
  const getExerciseItems = () => {
    fetch(
      "https://stormy-thicket-73183.herokuapp.com/exercise-items/" + localStorage.getItem("userid")
    )
      .then((response) => response.json())
      .then((result) => {
        setExerciseItems(result);
      });
  };

  const getDateItems = () => {
    fetch(
      "https://stormy-thicket-73183.herokuapp.com/exercise-items-filter/" +
        localStorage.getItem("userid")
    )
      .then((res) => res.json())
      .then((result) => {
        const dateArray = result.map((res) => res.date);
        const date = [...new Set(dateArray)];
        setAllExercises(result);

        setDateArray(date);
      });
  };

  useEffect(() => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    setDate(today);
    getDateItems();
    getExerciseItems();
    performFilter();
  }, [selectedDate]);

  const handleOptions = (e) => {
    setSelectedDate({
      [e.target.name]: e.target.value,
    });
  };

  const performFilter = () => {
    let filteredExerciseByDate = allExercises.filter((x) => {
      return selectedDate.date == x.date;
    });
    setFilteredExercises(filteredExerciseByDate);
  };

  const handleToday = () => {
    setFilteredExercises(null);
  };

  return (
    <>
      <div className="workout-log-header">
        <hr className="solid"></hr>
        <h1>Workout Log</h1>
        <hr className="solid"></hr>
      </div>
      <div className="input-wrapper">
        <div class="logo-workout-log"></div>
        <input
          type="number"
          placeholder="Sets"
          name="sets"
          onChange={handleOnChange}
        ></input>
        <input
          type="text"
          name="exercise"
          placeholder="Exercise"
          onChange={handleOnChange}
        ></input>
        <input
          type="number"
          placeholder="Weight"
          name="weight"
          onChange={handleOnChange}
        ></input>
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>

      <div className="right-side-wrapper">
        <div className="select">
          <select name="date" onChange={handleOptions}>
            <option>Sort by Date</option>
            {dateArray.map((item) => {
              return <option>{item}</option>;
            })}
          </select>
        </div>
        <div className="filter-button-wrapper">
          <button className="filter-button" onClick={handleToday}>
            View Today{" "}
          </button>
        </div>

        <div className="exercise-content-wrapper">
          {filteredExercises != null ? (
            <ul className="exercise-items">
              <h2>{selectedDate.date}</h2>
              {filteredExercises.map((res) => {
                return (
                  <li className="exercise-item">
                    {res.sets} Sets of {res.exercise.toUpperCase()} at{" "}
                    {res.weight}lbs.
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="exercise-content-wrapper">
              <h2>Today {date}</h2>
              <ul className="exercise-items">
                {exerciseItems.map((res) => {
                  return (
                    <li className="exercise-item">
                      {res.sets} Sets of {res.exercise.toUpperCase()} at{" "}
                      {res.weight}lbs
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WorkoutLog;
