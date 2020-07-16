import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../style/profile.css";

function Profile(props) {
  const [userInfo, setUserInfo] = useState([]);
  const [overview, setOverview] = useState(null);
  const [addFood, setAddFood] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchLink, setSearchLink] = useState("");

  const handleOverview = () => {
    if (userInfo.gender == "female") {
      let sedValue = 1.2;
      if (userInfo.Activity == "sedentary") {
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let womenCals =
          655 + 9.6 * convertedWeight + 1.8 * centimeters - 4.7 * userInfo.age;
        let calories = Math.trunc(womenCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.86);
        let wl = Math.trunc(finalValue * 0.73);
        let el = Math.trunc(finalValue * 0.46);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "light") {
        let sedValue = 1.375;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let womenCals =
          655 + 9.6 * convertedWeight + 1.8 * centimeters - 4.7 * userInfo.age;
        let calories = Math.trunc(womenCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.9);
        let wl = Math.trunc(finalValue * 0.79);
        let el = Math.trunc(finalValue * 0.58);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "moderate") {
        let sedValue = 1.55;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let womenCals =
          655 + 9.6 * convertedWeight + 1.8 * centimeters - 4.7 * userInfo.age;
        let calories = Math.trunc(womenCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.9);
        let wl = Math.trunc(finalValue * 0.79);
        let el = Math.trunc(finalValue * 0.58);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "active") {
        let sedValue = 1.7;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let womenCals =
          655 + 9.6 * convertedWeight + 1.8 * centimeters - 4.7 * userInfo.age;
        let calories = Math.trunc(womenCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.9);
        let wl = Math.trunc(finalValue * 0.79);
        let el = Math.trunc(finalValue * 0.58);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      }
    }

    if (userInfo.gender == "male") {
      if (userInfo.Activity == "sedentary") {
        let sedValue = 1.2;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let menCals =
          66 + 13.7 * convertedWeight + 5 * centimeters - 6.8 * userInfo.age;
        let calories = Math.trunc(menCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.86);
        let wl = Math.trunc(finalValue * 0.73);
        let el = Math.trunc(finalValue * 0.46);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "light") {
        let sedValue = 1.375;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let menCals =
          66 + 13.7 * convertedWeight + 5 * centimeters - 6.8 * userInfo.age;
        let calories = Math.trunc(menCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.9);
        let wl = Math.trunc(finalValue * 0.79);
        let el = Math.trunc(finalValue * 0.58);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "moderate") {
        let sedValue = 1.55;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let menCals =
          66 + 13.7 * convertedWeight + 5 * centimeters - 6.8 * userInfo.age;
        let calories = Math.trunc(menCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.89);
        let wl = Math.trunc(finalValue * 0.78);
        let el = Math.trunc(finalValue * 0.57);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      } else if (userInfo.Activity == "active") {
        var sedValue = 1.725;
        let convertedHeight =
          parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
        let centimeters = convertedHeight * 2.54;
        let convertedWeight = userInfo.weight * 0.453592;
        let menCals =
          66 + 13.7 * convertedWeight + 5 * centimeters - 6.8 * userInfo.age;
        let calories = Math.trunc(menCals);
        let newsedValue = calories * sedValue;
        let finalValue = Math.trunc(newsedValue);
        let mwl = Math.trunc(finalValue * 0.9);
        let wl = Math.trunc(finalValue * 0.8);
        let el = Math.trunc(finalValue * 0.59);
        setOverview({
          goal: userInfo.goal,
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      }
    }
  };

  const handleOnChange = (e) => {
    setAddFood({
      ...addFood,
      [e.target.name]: e.target.value,
    });
  };

  const getUserInfo = () => {
    fetch("http://localhost:3001/user-info/" + localStorage.getItem("userid"))
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result);
      });
  };

  const getFoodItems = () => {
    fetch("http://localhost:3001/food-items/" + localStorage.getItem("userid"))
      .then((response) => response.json())
      .then((result) => {
        setFoodItems(result);
      });
  };

  const getRecipes = () => {
    fetch("http://localhost:3001/recipes/" + localStorage.getItem("userid"))
      .then((response) => response.json())
      .then((result) => {
        setRecipes(result);
      });
  };

  useEffect(() => {
    if (overview == null) {
      getFoodItems();
      getUserInfo();
      getRecipes();
    } else if (userInfo.goal == "maintain weight") {
      props.dailyLimit(overview.bmr);
    } else if (userInfo.goal == "gain weight") {
      props.dailyLimit(overview.bmr);
    } else if (userInfo.goal == "lose weight") {
      props.dailyLimit(overview.mwl);
    } else {
      props.overview(overview);
    }
  }, [overview]);

  const handleSignOut = () => {
    props.isNotAuthenticated();
  };

  const handleAddFood = () => {
    fetch("http://localhost:3001/add-food/" + localStorage.getItem("userid"), {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addFood),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
        getFoodItems();
      });
  };

  const handleRemoveFoodItem = (id) => {
    fetch("http://localhost:3001/remove-food-item/" + id, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ delete: "deleted" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
        getFoodItems();
      });
  };

  const handleRemoveDish = (recipeId) => {
    fetch("http://localhost:3001/remove-recipe/" + recipeId, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ delete: "deleted" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        alert(result.message);
        getRecipes();
      });
  };

  const handleSubCal = (calories) => {
    if (props.dailyLimitx <= 0) {
      alert("You have reached your daily limit");
    } else {
      props.subCal(calories);
    }
  };
  const viewRecipe = (dish) => {
    fetch(
      `https://api.edamam.com/search?&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=${dish}`
    )
      .then((r) => r.json())
      .then((result) => props.handleSearchAction(result.hits))
      .then(() => {
        setSearchLink("/search/" + dish);
      });
  };

  return (
    <>
      <h1 className="welcome-user">Welcome {userInfo.username}</h1>
      <button onClick={handleOverview}>Overview</button>
      <NavLink to="/log-in">
        <button onClick={handleSignOut}>Sign Out</button>
      </NavLink>
      <NavLink to="/update">
        <button>Update Profile</button>
      </NavLink>
      {overview !== null ? (
        <div className="userOverview">
          <h1 className="user-goal">Your Goal is to {userInfo.goal}</h1>
          {userInfo.goal == "maintain weight" ? (
            <h2 className="calorie-day-count">
              You have ({props.dailyLimitx}) Calories left for the day
            </h2>
          ) : userInfo.goal == "lose weight" ? (
            <h2 className="calorie-day-count">
              You have ({props.dailyLimitx})cals left for the day
            </h2>
          ) : (
            <h2 className="calorie-day-count">
              You have anything over ({props.dailyLimitx})cals left for the day
            </h2>
          )}
          <p>Anything over your BMR can be used to gain weight</p>
          <div className="calorie-container">
            <p className="calorie-info">Basal Metabolic Rate (BMR)</p>
            <p className="calorie-number">{overview.bmr} Calories/day</p>
          </div>

          <div className="calorie-container">
            <p className="calorie-info">Maintain Currenct Weight</p>
            <p className="calorie-number">{overview.bmr} Calories/day</p>
          </div>

          <div className="calorie-container">
            <p className="calorie-info">Mild Weight Loss(0.5lb/week)</p>
            <p className="calorie-number">{overview.mwl} Calories/day</p>
          </div>

          <div className="calorie-container">
            <p className="calorie-info">Moderate Weight Loss(1 lb/week)</p>
            <p className="calorie-number">{overview.wl} Calories/day</p>
          </div>

          <div className="calorie-container">
            <p className="calorie-info">Extreme Weight Loss(2 lb/week)</p>
            <p className="calorie-number">{overview.el} Calories/day</p>
          </div>
          <hr className="line-sep"></hr>
          <div className="food-container">
            <p className="foods-table">Foods Table</p>
            <p className="foods-table">{props.dailyLimitx}</p>
            <input
              className="input-add-food"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Food"
              name="food"
            ></input>
            <input
              className="input-add-food"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Calories"
              name="calories"
            ></input>

            <button className="add-food-btn" onClick={handleAddFood}>
              Add
            </button>

            <ul className="added-foods">
              {foodItems.map((foodItem, index) => {
                return (
                  <li className="food-li">
                    {foodItem.food}({foodItem.calories})cal
                    <div className="button-container">
                      <button
                        className="ate-button"
                        onClick={() => handleSubCal(foodItem.calories)}
                      >
                        Eat
                      </button>
                      <button onClick={() => handleRemoveFoodItem(foodItem.id)}>
                        <i
                          id="trash-can"
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="recipes-ul">
            {recipes.map((recipe, index) => {
              return (
                <div className="recipe-container">
                  <p className="recipe-table">Your Recipes</p>

                  <li className="recipe-li" key={index}>
                    {recipe.dish}{" "}
                    <NavLink to="/search/results">
                      <button
                        className="ate-button"
                        onClick={() => viewRecipe(recipe.dish)}
                      >
                        View Recipe
                      </button>
                    </NavLink>
                    <button onClick={() => handleRemoveDish(recipe.id)}>
                      <i
                        id="trash-can"
                        class="fa fa-trash"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </li>
                </div>
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
    isNotAuthenticated: () => dispatch({ type: "NOTAUTH", value: false }),
    overview: (overview) => dispatch({ type: "UPDOV", value: overview }),
    dailyLimit: (limit) => dispatch({ type: "LMT", value: limit }),
    subCal: (calories) => dispatch({ type: "SUBCAL", value: -calories }),
    handleSearchAction: (recipes) => {
      dispatch({ type: "SEARCH", recipeSearchList: recipes });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    overview: state.overview,
    dailyLimitx: state.dailyLimit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
