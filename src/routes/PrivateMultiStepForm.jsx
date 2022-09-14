import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateMultistepForm = ({ children }) => {
  let id = sessionStorage.getItem('id');

  if (!id) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateMultistepForm;
