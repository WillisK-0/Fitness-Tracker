import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function RecipeSearchResults(props) {
  return (
    <>
      <div>
        <ul>
          {props.recipeSearchList.map((item, index) => {
            return (
              <li>
                <NavLink to={"results/" + index}>
                  <div className="food-card">
                    <img src={item.recipe.image}></img>
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
