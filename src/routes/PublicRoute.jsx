import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to='/products/list' />;
  }
  return children;
}

export default PublicRoute;
