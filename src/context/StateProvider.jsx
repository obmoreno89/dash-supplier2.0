import StateContext from './StateContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StateProvider = ({ children }) => {
  const navigate = useNavigate();
  //STATE FOR SIDEBAR
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //STATE LOADING BUTTON
  const [loading, setLoading] = useState(false);
  //STATE FOR IMAGE MENU
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //STATE VALIDATION OF IMAGE
  const [formatInvalid, setFormatInvalid] = useState(false);
  const [sizeInvalid, setSizeInvalid] = useState(false);
  //STATE BANNER ERROR
  const [bannerErrorOpen, setBannerErrorOpen] = useState(false);
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
  const [plantReload, setPlantReload] = useState(false);
  //STATE SAVE JSON PRODUCT LIST
  const [productList, setProductList] = useState([]);
  //STATE SAVE COUNTRY ID
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState('');
  //STATE SAVE STATE ID
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState('');
  //STATE SAVE CITY LIST
  const [city, setCity] = useState([]);
  //STATE FOR DISABLE INPUT COMPONENT FORM PLANT
  const [stateEnable, setStateEnable] = useState(true);
  const [cityEnable, setCityEnable] = useState(true);
  //STATE SAVED TYPE PLACES FORM PLANT
  const [placeList, setPlaceList] = useState([]);
  //STATE SAVE PLANT LIST
  const [plantList, setPlantList] = useState([]);
  //STATE FOR REQUIRED FILE
  const [requiredFile, setRequiredFile] = useState(false);
  //STATE SAVE LAT, LONG AND ADDRESS AT MAP
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [mapAddress, setMapAddress] = useState(null);
  //STATE FOR SAVE PRODUCT CATEGORIES
  const [categories, setCategories] = useState([]);

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

  //VARIABLE FOR SUPPLIER ID
  const supplierId = localStorage.getItem('supplier_id');

  //API FOR CODE GENERATOR WITH PHONE
  async function codeGenerator(phone) {
    return fetch('https://dev.hubmine.mx/api/auth/send_register/', {
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
          sessionStorage.setItem('code', result.code);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate('/code/validation');
          }, 1500);
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

  //List all products by supplier

  const getProductList = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/product/list?supplier-id=${supplierId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
      });
    setProductReload(false);
  };

  useEffect(() => {
    getProductList();
  }, [productReload, supplierId]);

  //FUNCTION FOR SAVE CHANGE STATE COUNTRY
  const handleCountry = (event) => {
    const getCountryId = event.target.value;
    return setCountryId(getCountryId);
  };

  //FUNCTION FOR SAVE CHANGE STATE STATE
  const handleState = (event) => {
    const getStateId = event.target.value;
    return setStateId(getStateId);
  };

  // LIST ALL COUNTRY
  const getCountry = async () => {
    fetch(`https://dev.hubmine.mx/api/suppliers/list-countries`)
      .then((response) => response.json())
      .then((json) => setCountry(json));
  };

  useEffect(() => {
    getCountry();
  }, []);

  //LIST ALL STATE WAIT ID COUNTRY
  const getState = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/list-states?country-id=${countryId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setState(json);
        setStateEnable(false);
      });
  };

  useEffect(() => {
    getState();
  }, [countryId, stateEnable]);

  //LIST ALL CITY WAIT ID STATE
  const getCity = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/list-cities?state-id=${stateId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setCity(json);
        setCityEnable(false);
      });
  };

  useEffect(() => {
    getCity();
  }, [stateId, cityEnable]);

  //LIST ALL PLACE
  const getPlaceList = async () => {
    fetch(`https://dev.hubmine.mx/api/suppliers/plant/list/type-places/`)
      .then((response) => response.json())
      .then((json) => setPlaceList(json));
  };

  useEffect(() => {
    getPlaceList();
  }, []);

  //FUNCTION FOR ALL PLANTS
  const getPlantList = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/plant/list?supplier-id=${supplierId}`
    )
      .then((response) => response.json())
      .then((json) => setPlantList(json));
    setPlantReload(false);
  };

  useEffect(() => {
    getPlantList();
  }, [plantReload, supplierId]);

  const getCategories = () => {
    fetch(`https://dev.hubmine.mx/api/suppliers/product/list-categories/`)
      .then((response) => response.json())
      .then((json) => setCategories(json));
  };

  useEffect(() => {
    getCategories();
  }, []);

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
        productReload,
        setProductReload,
        plantReload,
        setPlantReload,
        productList,
        country,
        handleCountry,
        state,
        handleState,
        city,
        stateEnable,
        setStateEnable,
        cityEnable,
        setCityEnable,
        placeList,
        supplierId,
        plantList,
        dropdownOpen,
        setDropdownOpen,
        requiredFile,
        setRequiredFile,
        lng,
        setLng,
        lat,
        setLat,
        mapAddress,
        setMapAddress,
        categories,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
