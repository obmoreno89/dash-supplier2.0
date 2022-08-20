import StateContext from './StateContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StateProvider = ({ children }) => {
  const navigate = useNavigate();
  //STATE FOR SIDEBAR
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);
  //STATE VALIDATION OF IMAGE
  const [formatInvalid, setFormatInvalid] = useState(false);
  const [sizeInvalid, setSizeInvalid] = useState(false);
  //STATE BANNER ERROR
  const [bannerErrorOpen, setBannerErrorOpen] = useState(true);
  //STATE BANNER SUCCESS
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  //STATE FOR EYES
  const [eye, setEye] = useState(false);
  //STATE FOR OPEN MODAL VERIFICATION
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  //STATE MODAL DANGER
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  //STATE FOR ERROR MENSSAGE
  const [errorMenssage, setErrorMenssage] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  //STATE SAVE JSON CODE GENERATOR
  const [savedCode, setSavedCode] = useState([]);
  //STATE FOR UPDATE STATE
  const [productReload, setProductReload] = useState(false);

  //FUNCTION FOR EYES
  const toggleEye = (prevState) => {
    setEye((prevState) => !prevState);
  };

  //FUNCTION DELETE LOCAL STORAGE
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('code');
    localStorage.removeItem('msg');

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
          }, 5000);
        }
      });
  }

  //FUNCTION FOR IMAGE VALIDATION
  const valid = (x) => {
    let imagen = document.getElementById('archivo').files;

    if (imagen.length) {
      for (x = 0; x < imagen.length; x++) {
        if (imagen[x].type != 'image/png' && imagen[x].type != 'image/jpg') {
          setFormatInvalid(true);

          setTimeout(() => {
            setFormatInvalid(false);
          }, 2000);
          return;
        }

        if (imagen[x].size > 1024 * 1024 * 1) {
          setSizeInvalid(true);
          setTimeout(() => {
            setSizeInvalid(false);
          }, 2000);
          return;
        }
      }
    }
  };

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
        sidebarOpen,
        setSidebarOpen,
        formatInvalid,
        setFormatInvalid,
        sizeInvalid,
        setSizeInvalid,
        bannerErrorOpen,
        setBannerErrorOpen,
        bannerSuccessOpen,
        setBannerSuccessOpen,
        dangerModalOpen,
        setDangerModalOpen,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
