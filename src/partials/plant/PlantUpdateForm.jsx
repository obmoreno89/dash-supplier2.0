import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ModalCorfirmAndReturnPlant from './helpers/ModalCorfirmAndReturnPlant';
import Banner from '../../components/Banner';
import LoadingButton from '../../helpers/LoadingButton';
import StateContext from '../../context/StateContext';
import MyMap from './helpers/MyMap';
import icons from '../../images/icons';

const PlantUpdateForm = () => {
  const [dataPlant, setDataPlant] = useState([]);

  const submit = (data) => console.log(data);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    setPlantReload,
    placeList,
    handleCountry,
    handleState,
    country,
    state,
    city,
    stateEnable,
    cityEnable,
    mapAddress,
    setMapAddress,
    lat,
    lng,
    setLat,
    setLng,
  } = useContext(StateContext);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const getPlantDetails = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/plant/list/details?plant-id=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setValue('name', json[0].name);
        setValue('phone_contact', json[0].phone_contact);
        setValue('type_place', json[0].type_place.type_place);
        setValue('type_place_id', json[0].type_place.type_place_id);
        setValue('country', json[0].location.country);
        setValue('country_id', json[0].location.country_id);
        setValue('state', json[0].location.state);
        setValue('state_id', json[0].location.state_id);
        setValue('city', json[0].location.city);
        setValue('city_id', json[0].location.city_id);
        setValue('observations', json[0].location.observations);
        setValue('latitude', json[0].location.latitude);
        setValue('longitude', json[0].location.longitude);
        setValue('address', json[0].location.address);
        setDataPlant(json);
        setMapAddress(json[0].location.address);
        setLng(json[0].location.longitude);
        setLat(json[0].location.latitude);
      });
  };

  useEffect(() => {
    getPlantDetails();
  }, []);

  const plantUpdate = async (data) => {
    fetch(`https://dev.hubmine.mx/api/suppliers/plant/update/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setLoading(true);
        setBannerSuccessOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerSuccessOpen(false);
          navigate('/plant/list');
        }, 1500);
      } else {
        setLoading(true);
        setBannerErrorOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerErrorOpen(false);
        }, 1500);
      }
      setPlantReload(true);
    });
  };

  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Page header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Editar planta de recolección
          </h1>
        </div>
        {/* BANNER SUCCESS AND ERROR */}
        {bannerSuccessOpen ? (
          <div className='space-y-3'>
            <Banner
              type='success'
              open={bannerSuccessOpen}
              setOpen={setBannerSuccessOpen}>
              operación exitosa. Redirigiendo...
            </Banner>
          </div>
        ) : bannerErrorOpen ? (
          <div className='space-y-3'>
            <Banner
              type='error'
              open={bannerErrorOpen}
              setOpen={setBannerErrorOpen}>
              Lo sentimos, al parecer tenemos problema con nuestro servidor,
              vuelva a intentar más tarde.
            </Banner>
          </div>
        ) : null}

        <div className='space-y-8 mt-8'>
          <article className='mt-2'>
            <h2 className='text-xl text-slate-800 font-bold mb-6'>
              Datos de la planta
            </h2>
          </article>
          <form onSubmit={handleSubmit(plantUpdate)}>
            <section className='grid gap-5 md:grid-cols-3'>
              <div>
                {/* PRODUCT NAME */}
                <div>
                  <label className='block text-sm font-semibold mb-1'>
                    Nombre de la planta <span className='text-gray-700'>*</span>
                  </label>
                  <input
                    placeholder='Escribe el nombre de la planta'
                    maxLength='30'
                    className='form-input w-full '
                    autoComplete='off'
                    type='text'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />
                  {errors.name && (
                    <span className='text-red-500 text-sm'>
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* PHONE */}
                <div>
                  <label className='block text-sm font-semibold mb-1'>
                    Teléfono <span className='text-gray-700'>*</span>
                  </label>
                  <input
                    placeholder='Teléfono'
                    className='form-input w-full'
                    autoComplete='off'
                    type='number'
                    {...register('phone_contact', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'El formato no es correcto',
                      },
                      minLength: {
                        value: 10,
                        message: 'Debe de tener 10 caracteres',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Debe de tener 10 caracteres',
                      },
                    })}
                  />
                  {errors.phone_contact && (
                    <span className='text-red-500 text-sm'>
                      {errors.phone_contact.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* TYPE PLACE */}
                <div>
                  <label className='block text-sm font-semibold mb-1'>
                    Tipo de lugar <span className='text-gray-700'>*</span>
                  </label>
                  <select
                    className='form-select w-full'
                    {...register('type_place_id', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}>
                    {dataPlant.map((place) => (
                      <option
                        key={place.id}
                        value={place.type_place.type_place_id}>
                        {place.type_place.type_place}
                      </option>
                    ))}
                    <option disabled>--Selecciona el tipo de lugar--</option>
                    {placeList.map((place) => (
                      <option key={place.id} value={place.id}>
                        {place.type_place}
                      </option>
                    ))}
                  </select>
                  {errors.type_place_id && (
                    <span className='text-red-500 text-sm'>
                      {errors.type_place_id.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <article className='mt-10'>
              <h2 className='text-xl text-slate-800 font-bold mb-6'>
                Ubicación
              </h2>
            </article>
            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              {/* COUNTRY */}
              <div>
                <label className='block text-sm font-semibold mb-1'>
                  pais <span className='text-gray-700'>*</span>
                </label>
                <select
                  className='form-select w-full'
                  {...register('country_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}
                  onChange={(e) => handleCountry(e)}>
                  {dataPlant.map((countryDetails) => (
                    <option
                      key={countryDetails.id}
                      value={countryDetails.location.country_id}>
                      {countryDetails.location.country}
                    </option>
                  ))}
                  <option disabled>--Selecciona el pais--</option>
                  {country.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.country}
                    </option>
                  ))}
                </select>
                {errors.country_id && (
                  <span className='text-red-500 text-sm'>
                    {errors.country_id.message}
                  </span>
                )}
              </div>
              <div>
                {/* STATE */}
                <div>
                  <label className='block text-sm font-semibold mb-1'>
                    Estado <span className='text-gray-700'>*</span>
                  </label>
                  <select
                    disabled={stateEnable}
                    className='form-select w-full'
                    {...register('state_id', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                    onChange={(e) => handleState(e)}>
                    {dataPlant.map((stateDetails) => (
                      <option
                        key={stateDetails.id}
                        value={stateDetails.location.state_id}>
                        {stateDetails.location.state}
                      </option>
                    ))}
                    <option disabled>--Selecciona el estado--</option>
                    {state.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                  {errors.state_id && (
                    <span className='text-red-500 text-sm'>
                      {errors.state_id.message}
                    </span>
                  )}
                </div>
              </div>
              {/* CITY */}
              <div>
                <label className='block text-sm font-semibold mb-1'>
                  Ciudad <span className='text-gray-700'>*</span>
                </label>
                <select
                  disabled={cityEnable}
                  className='form-select w-full'
                  {...register('city_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}>
                  {dataPlant.map((cityDetails) => (
                    <option
                      key={cityDetails.id}
                      value={cityDetails.location.city_id}>
                      {cityDetails.location.city}
                    </option>
                  ))}
                  <option disabled>--Selecciona la ciudad--</option>
                  {city.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.city}
                    </option>
                  ))}
                </select>
                {errors.city_id && (
                  <span className='text-red-500 text-sm'>
                    {errors.city_id.message}
                  </span>
                )}
              </div>
            </section>
            {/* MAP */}
            <section className='mt-8'>
              <MyMap />
            </section>
            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              {/* ADDRESS */}
              <div className='mt-5'>
                <label className='block text-sm font-semibold mb-1'>
                  Dirección <span className='text-gray-700'>*</span>
                </label>
                <input
                  placeholder='Dirección de la planta'
                  onChange={setValue('address', mapAddress)}
                  className='form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed pl-9'
                  autoComplete='off'
                  type='text'
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                <section className='relative'>
                  <figure className='absolute -top-9 inset-3 right-0 flex items-center pointer-events-none'>
                    <img src={icons.location} alt='Ubicación' />
                  </figure>
                </section>
                {errors.address && (
                  <span className='text-red-500 text-sm'>
                    {errors.address.message}
                  </span>
                )}
              </div>
              {/* longitude */}
              <div className='mt-5'>
                <label className='block text-sm font-semibold mb-1'>
                  Longitud <span className='text-gray-700'>*</span>
                </label>
                <input
                  placeholder='Longitud'
                  disabled
                  onChange={setValue('longitude', lng)}
                  maxLength='35'
                  className='form-input w-full  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed '
                  autoComplete='off'
                  type='text'
                  {...register('longitude', {
                    required: {
                      value: false,
                      message: 'El campo es requerido',
                    },
                  })}
                />
                {errors.longitude && (
                  <span className='text-red-500 text-sm'>
                    {errors.longitude.message}
                  </span>
                )}
              </div>
              {/* latitude */}
              <div className='mt-5'>
                <label className='block text-sm font-semibold mb-1'>
                  latitud <span className='text-gray-700'>*</span>
                </label>
                <input
                  placeholder='Latitud'
                  disabled
                  onChange={setValue('latitude', lat)}
                  maxLength='35'
                  className='form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed'
                  autoComplete='off'
                  type='text'
                  {...register('latitude', {
                    required: {
                      value: false,
                      message: 'El campo es requerido',
                    },
                  })}
                />
                {errors.latitude && (
                  <span className='text-red-500 text-sm'>
                    {errors.latitude.message}
                  </span>
                )}
              </div>
            </section>
            <article className='mt-10'>
              <h2 className='text-xl text-slate-800 font-bold mb-6'>
                Observaciones
              </h2>
            </article>
            <section className='mt-8'>
              <div>
                {/* OBSERVATIONS */}
                <div>
                  <label className='block text-sm font-semibold mb-1'>
                    Referencia de como llegar a la planta{' '}
                    <span className='text-gray-700'>*</span>
                  </label>
                  <textarea
                    placeholder='Referencia'
                    maxLength='150'
                    className='form-input w-full h-32'
                    type='text'
                    autoComplete='off'
                    {...register('observations', {
                      required: {
                        value: false,
                        message: 'El campo es requerido',
                      },
                      maxLength: {
                        value: 150,
                        message: 'soló se permiten 150 caracteres',
                      },
                    })}
                  />
                  {errors.observations && (
                    <span className='text-red-500 text-sm'>
                      {errors.observations.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <section className='w-full flex space-x-6 justify-center items-center mt-10'>
              <div className='m-1.5'>
                {loading ? (
                  <LoadingButton name='Editando planta' />
                ) : (
                  <>
                    <button type='submit' className='button-login w-52'>
                      Guardar
                    </button>
                  </>
                )}
              </div>
              {/* <div className='m-1.5'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDangerModalOpen(true);
                  }}
                  type='button'
                  className='btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50'>
                  Cancelar
                </button>
              </div> */}
            </section>
          </form>
        </div>
      </div>
      {/* MODAL CONFIRM */}
      <ModalCorfirmAndReturnPlant />
    </>
  );
};

export default PlantUpdateForm;
