import React from "react";
import { useState, useEffect } from "react";

function Profile(props) {
  const [userInfo, setUserInfo] = useState([]);
  const [overview, setOverview] = useState(null);

  const handleOverview = () => {
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
          bmr: finalValue,
          mwl: mwl,
          wl: wl,
          el: el,
        });
      }
    } else {
      alert("YOU MUST BE A MAN");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/user-info/" + localStorage.getItem("userid"))
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result);
      });
  }, []);

  return (
    <>
      <h1>Welcome {userInfo.username}</h1>
      <button onClick={handleOverview}>Overview</button>
      {overview !== null ? (
        <div className="userOverview">
          <h1>
            Your BMR is ({overview.bmr}) cals/day to maintain current weight
          </h1>
          <h1>Mild weight loss will be {overview.mwl} cals/day</h1>
          <h1>Weight loss will be {overview.wl} cals/day</h1>
          <h1>Extreme weight loss will be {overview.el}cals/day</h1>
        </div>
      ) : null}
    </>
  );
}

export default Profile;
