import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "../style/recipeSearch.css";

function RecipeSearch(props) {
  const [search, setSearch] = useState("");
  const [searchLink, setSearchLink] = useState("");

  function handleSearchPress() {
    fetch(
      `https://api.edamam.com/search?&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=${search}`
    )
      .then((r) => r.json())
      .then((result) => props.handleSearchAction(result.hits))
      .then(() => {
        setSearchLink("/search/" + search);
      });
  }

  return (
    <>
      <div>
        <h3 class="recipeIntro">
          <p>
            {" "}
            Feel free to search for a recipe! Users can save recipes to their
            own profile page to come back and view another time.
          </p>
        </h3>
        <div className="calorie-tracker-wrapper">
          <h2>Recipe Search</h2>

          <input
            className="search-text-box"
            type="text"
            placeholder="What are you looking for ?"
            onChange={(e) => setSearch(e.target.value)}
          ></input>

          <NavLink to="/search/results">
            <button
              className="search-recipe-btn"
              onClick={() => handleSearchPress(search)}
            >
              Search
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchAction: (recipes) => {
      dispatch({ type: "SEARCH", recipeSearchList: recipes });
    },
  };
};
export default connect(null, mapDispatchToProps)(RecipeSearch);
