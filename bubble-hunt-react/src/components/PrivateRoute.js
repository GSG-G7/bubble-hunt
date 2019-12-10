import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, currentUser, ...rest }) =>
  currentUser ? (
    <Route {...rest} render={RouteComponent} />
  ) : (
    <Redirect to="/" />
  );

export default PrivateRoute;
