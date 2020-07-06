import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
// import Home from "./components/Home";
// import reducer from "./store/Reducer.js";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <App>
        <Switch>
          <Route component={Login} path="/" exact></Route>
          <Route component={Register} path="/register" exact></Route>
          {/* <Route component={Home} path="/home" exact></Route> */}
        </Switch>
      </App>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
