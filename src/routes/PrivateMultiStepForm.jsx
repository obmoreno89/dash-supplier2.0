import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateMultistepForm = ({ children }) => {
  const number = localStorage.getItem('number');

  if (!number) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateMultistepForm;
