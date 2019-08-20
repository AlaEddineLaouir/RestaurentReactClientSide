import React from "react";

import Home from "./components/Pages/home";
import LoginForm from "./components/Authentication/LoginForm";
import SignInForm from "./components/Authentication/SignInForm";
import UserSpace from "./components/User Space/UserSpace";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={LoginForm} />
          <Route exact path="/SignIn" component={SignInForm} />
          <Route exact path="/EspaceClient" component={UserSpace} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
