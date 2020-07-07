import React, { useState } from "react";

function CalorieTracker(props) {
  const [search, setSearch] = useState("");

  function handleSearchPress() {
    fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${search}&app_id=cd426a44&app_key=e63d36e76c606ab70e154dc41b7389e8`
    )
      .then((r) => r.json())
      .then((result) => console.log(result));
  }

  return (
    <>
      <div className="calorie-tracker-wrapper">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearchPress}>Search</button>
      </div>
    </>
  );
}

export default CalorieTracker;
