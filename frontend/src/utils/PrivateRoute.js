import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoutes = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      {user ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Route path='*' element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default PrivateRoutes;
