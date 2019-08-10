import React from "react";

import Home from "./components/Pages/home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import LoginForm from "./components/Authentication/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { isPattern } from "@babel/types";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={LoginForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
