import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

const PrivateRoute = ({
  component: RouteComponent,
  currentUser,
  ...rest
}) => {
  if (currentUser)
    return (
      <Route
        {...rest}
        render={routeProps => <RouteComponent {...routeProps} />}
      />
    );
    else return <Redirect to="/" />
};

export default PrivateRoute;
