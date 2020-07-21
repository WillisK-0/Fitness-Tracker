import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/recipeSearchResultsDetails.css";

function RecipeSearchResultsDetials(props) {
  let index = props.match.params.index;
  let recipe = props.recipeSearchList[index];
  console.log(recipe.recipe);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleAddRecipe = (dish) => {
    fetch(
      "https://stormy-thicket-73183.herokuapp.com/add-recipe/" + localStorage.getItem("userid"),
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ dish: dish }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
      });
  };

  return (
    <>
      <div className="content-wrapper">
        <h2>{recipe.recipe.label}</h2>
        <img src={recipe.recipe.image}></img>
        <h4>Nutrition</h4>
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
          {props.isAuthenticated == true ? (
            <div className="save-recipe-container">
              <button
                className="save-this-recipe"
                onClick={() => handleAddRecipe(recipe.recipe.label)}
              >
                Save this Recipe
              </button>
            </div>
          ) : null}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    recipeSearchList: state.recipeSearchList,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(RecipeSearchResultsDetials);
