import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  const token2 = sessionStorage.getItem('token');

  if (!token && !token2) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateRoute;
