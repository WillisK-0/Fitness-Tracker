import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "../style/recipeSearch.css";

function RecipeSearch(props) {
  window.scrollTo(0, 0);
  const [search, setSearch] = useState("");
  const [searchLink, setSearchLink] = useState("");
  const [displayRecipes, setDisplayRecipes] = useState(null);
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
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=beef`
    )
      .then((response) => response.json())
      .then((result) => {
        setDisplayRecipes(result.hits);
      });
  }, [displayRecipes]);
  return (
    <>
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

      <hr className="hr-search"></hr>
      {displayRecipes != null ? (
        <div className="results-wrapper">
          <ul className="result-ul">
            {displayRecipes.slice(0, 4).map((item, index) => {
              return (
                <NavLink to={"results/" + index}>
                  <li className="results-li">
                    <div className="food-card">
                      <img
                        className="food-image"
                        src={item.recipe.image}
                        id="food-image"
                      ></img>
                      <p className="healthy-recipes">Healthy Recipes</p>

                      <div className="recipe-name">{item.recipe.label}</div>

                      <input type="hidden" value={index}></input>
                    </div>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      ) : null}
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
