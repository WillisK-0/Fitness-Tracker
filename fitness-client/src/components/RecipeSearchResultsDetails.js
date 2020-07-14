import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/recipeSearchResultsDetails.css";

function RecipeSearchResultsDetials(props) {
  let index = props.match.params.index;
  let recipe = props.recipeSearchList[index];

  return (
    <>
      <div className="content-wrapper">
        <h2>{recipe.recipe.label}</h2>
        <img src={recipe.recipe.image}></img>
        <h4>Nutrition:</h4>
        <ul className="nutrients-items">
          <li className="nutrients-item">
            Calories: {parseInt(recipe.recipe.calories)}
          </li>
          <li className="nutrients-item">
            Fat: {parseInt(recipe.recipe.totalNutrients.PROCNT.quantity)}
          </li>
          <li className="nutrients-item">
            Protein: {parseInt(recipe.recipe.totalNutrients.PROCNT.quantity)}
          </li>
          <li className="nutrients-item">
            Carbs: {parseInt(recipe.recipe.totalNutrients.CHOCDF.quantity)}
          </li>
          <li className="nutrients-item">
            Sugar: {parseInt(recipe.recipe.totalNutrients.SUGAR.quantity)}
          </li>
          <li className="nutrients-item">
            Fiber: {parseInt(recipe.recipe.totalNutrients.FIBTG.quantity)}
          </li>
        </ul>
        <h4>Ingredients</h4>
        <ul className="ingredients-items">
          {recipe.recipe.ingredientLines.map((ing, index) => {
            return <li className="ingredients-item">{ing}</li>;
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

export default connect(mapStateToProps)(RecipeSearchResultsDetials);
