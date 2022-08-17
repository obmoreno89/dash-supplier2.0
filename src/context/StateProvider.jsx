import StateContext from './StateContext';
import React, { useState } from 'react';

const StateProvider = ({ children }) => {
  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
