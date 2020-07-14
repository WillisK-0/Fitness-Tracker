import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Profile(props) {
  const [userInfo, setUserInfo] = useState([]);
  const [overview, setOverview] = useState(null);
  const [addFood, setAddFood] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

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

  useEffect(() => {
    if (overview == null) {
      getFoodItems();
      getUserInfo();
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

  const handleSubCal = (calories) => {
    if (props.dailyLimitx <= 0) {
      alert("You have reached your daily limit");
    } else {
      props.subCal(calories);
    }
  };

  return (
    <>
      <h1>Welcome {userInfo.username}</h1>
      <button onClick={handleOverview}>Overview</button>
      <NavLink to="/log-in">
        <button onClick={handleSignOut}>Sign Out</button>
      </NavLink>
      <NavLink to="/update">
        <button>Update Profile</button>
      </NavLink>
      {overview !== null ? (
        <div className="userOverview">
          <h1>Your Goal is to {userInfo.goal}</h1>
          {userInfo.goal == "maintain weight" ? (
            <h2>You have ({props.dailyLimitx})cals left for the day</h2>
          ) : userInfo.goal == "lose weight" ? (
            <h2>You have ({props.dailyLimitx})cals left for the day</h2>
          ) : (
            <h2>
              You have anything over ({props.dailyLimitx})cals left for the day
            </h2>
          )}
          <p>
            Your BMR is ({overview.bmr}) cals/day to maintain current weight
          </p>
          <p>Anything over your BMR can be used to gain weight</p>
          <p>Mild weight loss will be {overview.mwl} cals/day</p>
          <p>Moderate Weight loss will be {overview.wl} cals/day</p>
          <p>Extreme weight loss will be {overview.el}cals/day</p>
        </div>
      ) : null}
      <div>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="Enter Food"
          name="food"
        ></input>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="Enter Calories"
          name="calories"
        ></input>

        <button onClick={handleAddFood}>Add</button>
      </div>

      <ul>
        {foodItems.map((foodItem, index) => {
          return (
            <li>
              {foodItem.food} - {foodItem.calories}cal
              <button onClick={() => handleSubCal(foodItem.calories)}>
                I Ate This
              </button>
              <button onClick={() => handleRemoveFoodItem(foodItem.id)}>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    isNotAuthenticated: () => dispatch({ type: "NOTAUTH", value: false }),
    overview: (overview) => dispatch({ type: "UPDOV", value: overview }),
    dailyLimit: (limit) => dispatch({ type: "LMT", value: limit }),
    subCal: (calories) => dispatch({ type: "SUBCAL", value: -calories }),
  };
};

const mapStateToProps = (state) => {
  return {
    overview: state.overview,
    dailyLimitx: state.dailyLimit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
