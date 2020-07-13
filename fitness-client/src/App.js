import React from "react";
import NavBar from "./components/NavBar";

import "./App.css";

function App(props) {
  return (
    <>
      <NavBar></NavBar>
      <div>{props.children}</div>
    </>
  );
}

export default App;
