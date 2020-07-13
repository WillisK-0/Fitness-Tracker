import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function RecipeSearchResultsDetials(props) {
  let index = props.match.params.index;
  let recipe = props.recipeSearchList[index];

  return (
    <>
      <div>
        <h2>{recipe.recipe.label}</h2>
        <img src={recipe.recipe.image}></img>
        <h4>Nutrition:</h4>
        <ul>
          <li>Calories: {parseInt(recipe.recipe.calories)}</li>
          <li>Fat: {parseInt(recipe.recipe.totalNutrients.PROCNT.quantity)}</li>
          <li>
            Protein: {parseInt(recipe.recipe.totalNutrients.PROCNT.quantity)}
          </li>
          <li>
            Carbs: {parseInt(recipe.recipe.totalNutrients.CHOCDF.quantity)}
          </li>
          <li>
            Sugar: {parseInt(recipe.recipe.totalNutrients.SUGAR.quantity)}
          </li>
          <li>
            Fiber: {parseInt(recipe.recipe.totalNutrients.FIBTG.quantity)}
          </li>
        </ul>
        <h4>Ingredients</h4>
        <ul>
          {recipe.recipe.ingredientLines.map((ing, index) => {
            return <li>{ing}</li>;
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
