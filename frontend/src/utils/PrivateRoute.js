import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Booklist from '../pages/BookList';

const PrivateRoutes = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      {user ? (
        <>
          <Route {...rest}>{children}</Route>
          <Route path="/booklist" element={<Booklist />} />
        </>
      ) : (
        <Route path='*' element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default PrivateRoutes;