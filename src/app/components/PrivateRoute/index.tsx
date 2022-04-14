import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../../store";

export const PrivateRoute = ({ component, ...rest }: any) => {
  const {
    auth: { isLoggedIn },
  } = useSelector((state: RootState) => state);
  const routeComponent = (props: any) =>
    isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
