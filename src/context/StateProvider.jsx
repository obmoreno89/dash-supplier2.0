import StateContext from './StateContext';
import React, { useState } from 'react';

const StateProvider = ({ children }) => {
  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);
  //STATE FOR EYES
  const [eye, setEye] = useState(false);
  const toggleEye = (prevState) => {
    setEye((prevState) => !prevState);
  };
  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        eye,
        setEye,
        toggleEye,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
