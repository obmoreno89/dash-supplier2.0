import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateSignup = ({ children }) => {
  let number = sessionStorage.getItem('number');

  if (!number) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateSignup;
