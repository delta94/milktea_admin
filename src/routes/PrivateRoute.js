import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, path, ...props }) => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = user !== null ? true : false;
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  return <Route {...props} path={path} element={<Component />} />;
};

export default PrivateRoute;
