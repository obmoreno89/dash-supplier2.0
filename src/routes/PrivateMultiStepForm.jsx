import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateMultistepForm = ({ children }) => {
  let token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateMultistepForm;
