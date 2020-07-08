import React from "react";
import logo from "./logo.svg";

import NavBar from "./components/NavBar";
import CalorieTracker from "./components/CalorieTracker";

import "./App.css";

function App(props) {
  return (
    <div>
      <NavBar />
       {props.children}
      <CalorieTracker />
      
    </div>
  );

}

export default App;