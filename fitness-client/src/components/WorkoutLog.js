import React, { useState, useEffect } from "react";

import "../style/workoutLog.css";

function WorkoutLog() {
  const [date, setDate] = useState("");
  const [addExercise, setAddExercise] = useState({});
  const [exerciseItems, setExerciseItems] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const handleOnChange = (e) => {
    setAddExercise({
      ...addExercise,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExercise = () => {
    fetch(
      "http://localhost:3001/add-exercise/" + localStorage.getItem("userid"),
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
      "http://localhost:3001/exercise-items/" + localStorage.getItem("userid")
    )
      .then((response) => response.json())
      .then((result) => {
        setExerciseItems(result);
      });
  };

  //   const getDateItems = () => {
  //     fetch(
  //       "http://localhost:3001/exercise-items-filter/" +
  //         localStorage.getItem("userid")
  //     )
  //       .then((res) => res.json())
  //       .then((result) => result.filter(()=>{
  //         return( )
  //       }));
  //   };

  useEffect(() => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    setDate(today);
    getDateItems();
    getExerciseItems();
  }, []);

  return (
    <>
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

      <div>
        <select>
          <option>Sort by Date</option>
          {dateArray.filter((item) => {
            return <option>{item.date}</option>;
          })}
        </select>
      </div>

      <div>
        <h2>{date}</h2>
        <ul>
          {exerciseItems.map((res) => {
            return (
              <li>
                {res.sets} - {res.exercise} - {res.weight}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default WorkoutLog;
