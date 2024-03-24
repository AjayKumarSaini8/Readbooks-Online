import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
  const authenticated = false;
  return (
    authenticated ?
      <Route {...rest}>{children}</Route> : <Navigate to="/login" replace />
  );
};

export default PrivateRoutes;
