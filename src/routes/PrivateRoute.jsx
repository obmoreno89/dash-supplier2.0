import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  const err = sessionStorage.getItem('err');
  console.log(err);

  if (!token && !err) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateRoute;
