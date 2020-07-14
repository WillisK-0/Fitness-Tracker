import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/recipeSearchResults.css";

function RecipeSearchResults(props) {
  return (
    <>
      <div className="results-wrapper">
        <ul className="results-items">
          {props.recipeSearchList.map((item, index) => {
            return (
              <li className="results-item">
                <NavLink to={"results/" + index}>
                  <div className="food-card">
                    <img src={item.recipe.image} id="food-image"></img>
                    <figcaption>{item.recipe.label}</figcaption>
                    <input type="hidden" value={index}></input>
                  </div>
                </NavLink>
              </li>
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
