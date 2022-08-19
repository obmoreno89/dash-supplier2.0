import StateContext from './StateContext';
import React, { useState } from 'react';

const StateProvider = ({ children }) => {
  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);
  //STATE FOR EYES
  const [eye, setEye] = useState(false);
  //STATE FOR OPEN MODAL VERIFICATION
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  //STATE FOR ERROR MENSSAGE
  const [errorMenssage, setErrorMenssage] = useState(false);

  //FUNCTION FOR EYES
  const toggleEye = (prevState) => {
    setEye((prevState) => !prevState);
  };

  //FUNCTION DELETE LOCAL STORAGE
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    navigate('/signin');
  }

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        eye,
        setEye,
        toggleEye,
        newsletterModalOpen,
        setNewsletterModalOpen,
        errorMenssage,
        setErrorMenssage,
        logout,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
