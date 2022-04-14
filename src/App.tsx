import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./app/components/PrivateRoute";
import { history } from "./helpers/history";
import { LoginPage, DynamicFormPage, Dashboard, Signup } from "./app/pages";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/dynamic-form" component={DynamicFormPage} />
        <PrivateRoute exact path="/">
          <Redirect to={{ pathname: "/dashboard" }} />
        </PrivateRoute>
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
