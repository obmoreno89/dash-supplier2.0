import React from 'react';

const PrivateMultistepForm = ({ children }) => {
  const msg = localStorage.getItem('msg');

  if (!msg || !token) {
    return <Navigate to='/signin' />;
  }
  return children;
};

export default PrivateMultistepForm;
