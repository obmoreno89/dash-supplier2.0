import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateCodeValidation({ children }) {
  const code = localStorage.getItem('code');

  if (!code) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateCodeValidation;
