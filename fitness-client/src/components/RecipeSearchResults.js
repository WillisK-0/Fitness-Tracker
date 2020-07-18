import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/recipeSearchResults.css";

function RecipeSearchResults(props) {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="results-wrapper">
        <ul className="result-ul">
          {props.recipeSearchList.slice(0, 8).map((item, index) => {
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    recipeSearchList: state.recipeSearchList,
  };
};

export default connect(mapStateToProps)(RecipeSearchResults);
