import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateMultistepForm = ({ children }) => {
  const number = localStorage.getItem('number');
  const token = localStorage.getItem('token');
  if (!number) {
    return <Navigate to='/signin' />;
  } else if (!token) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateMultistepForm;
