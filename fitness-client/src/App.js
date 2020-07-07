import React from "react";
import React, { useContext } from 'react';
import logo from "./logo.svg";
import RecipeList from 'fitness-client/src/components/RecipeList';
import { RecipeContext } from './context/index'
import NavBar from "./components/NavBar";
import CalorieTracker from "./components/CalorieTracker";

import "./App.css";

function App(props) {
  const appContext = useContext(RecipeContext)
  const { loading, search } = appContext
  return (
    <div>
      <NavBar />
    {props.children}
     
    </div>
    <div>
    {loading ? <h1 className="text-center">...fetching {search} recipe</h1> :
      <RecipeList />}
  </div>
  );

}

export default App;
