import StateContext from './StateContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StateProvider = ({ children }) => {
  const navigate = useNavigate();

  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);
  //STATE FOR EYES
  const [eye, setEye] = useState(false);
  //STATE FOR OPEN MODAL VERIFICATION
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  //STATE FOR ERROR MENSSAGE
  const [errorMenssage, setErrorMenssage] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  //STATE SAVE JSON CODE GENERATOR
  const [savedCode, setSavedCode] = useState([]);

  //FUNCTION FOR EYES
  const toggleEye = (prevState) => {
    setEye((prevState) => !prevState);
  };

  //FUNCTION DELETE LOCAL STORAGE
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('code');

    navigate('/signin');
  }

  //API FOR CODE GENERATOR WITH PHONE
  async function codeGenerator(phone) {
    return fetch('http://supplier.hubmine.mx/api/auth/send_register/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(phone),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code) {
          setSavedCode(json);
          let result = json;
          localStorage.setItem('code', result.code);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate('/code/validation');
          }, 3000);
        } else {
          setErrorApi(true);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setErrorApi(false);
          }, timeout);
        }
      });
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
        savedCode,
        setSavedCode,
        codeGenerator,
        errorApi,
        setErrorApi,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
