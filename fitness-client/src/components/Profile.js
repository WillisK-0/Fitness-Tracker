import React from "react";
import { useState, useEffect } from "react";

function Profile(props) {
  const [userInfo, setUserInfo] = useState([]);
  const [overview, setOverview] = useState(null);

  const handleOverview = () => {
    if (userInfo.Activity == "light") {
      let convertedHeight =
        parseInt(userInfo.feet) * 12 + parseInt(userInfo.inches);
      let centimeters = convertedHeight * 2.54;
      let convertedWeight = userInfo.weight * 0.453592;
      let menCals =
        66 + 13.7 * convertedWeight + 5 * centimeters - 6.8 * userInfo.age;
      let x = Math.trunc(menCals);
      setOverview(x);
    } else {
      alert("sorry nope");
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
        <h1>Your daily calorie intake to reach your goal is ({overview})</h1>
      ) : null}
    </>
  );
}

export default Profile;
