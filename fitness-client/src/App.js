import NavBar from "./components/NavBar";
import "./App.css";
import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import { NeuButton } from 'neumorphic-ui';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsf36fMLHkGOzZFfJ9a4ChnqX-7DznOws",
  authDomain: "analyze-fit.firebaseapp.com",
  databaseURL: "https://analyze-fit.firebaseio.com",
  projectId: "analyze-fit",
  storageBucket: "analyze-fit.appspot.com",
  messagingSenderId: "1022340894520",
  appId: "1:1022340894520:web:535df9876bc4ce36de7bcd",
  measurementId: "G-D1GFJX9XT4"
};

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App(props) {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <NavBar></NavBar>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={ NeuButton, Home } layout={LayoutDefault} />
          </Switch>
        )}
      />
      <div>{props.children}</div>
    </>
  );
}

export default App;
