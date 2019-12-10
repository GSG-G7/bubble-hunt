import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, currentUser, ...rest }) =>
  // eslint-disable-next-line react/jsx-props-no-spreading
  currentUser ? <Route {...rest} render={RouteComponent} /> : <Redirect to="/" />;

export default PrivateRoute;
