import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ currentUser, ...rest }) =>
  // eslint-disable-next-line react/jsx-props-no-spreading
  currentUser ? <Route {...rest} /> : <Redirect to="/login" />;

export default PrivateRoute;
