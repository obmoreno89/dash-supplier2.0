import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import LoadingButton from '../../helpers/LoadingButton';
import Banner from '../../components/Banner';
import LogoDropzone from './helpers/LogoDropzone';

function ProfilePanel() {
  const [supplierData, setSupplierData] = useState([]);
  const [logo, setLogo] = useState([]);
  const [companyRefresh, setCompanyRefresh] = useState(false);

  const navigate = useNavigate();

  const {
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    setCompanyName,
  } = useContext(StateContext);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);

  const supplierId = localStorage.getItem('supplier_id');

  const changeLogo = async () => {
    let formData = new FormData();

    formData.append('logo', logo[0]);

    fetch(`https://dev.hubmine.mx/api/suppliers/upload-logo/${supplierId}/`, {
      method: 'POST',
      body: formData,
    }).then((response) => response.json());
  };

  const getDetailsSupplier = async () => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/details?supplier-id=${supplierId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setSupplierData(json[0].bussiness_logo);
        setCompanyName(json[0].commercial_brand);
        setValue('commercial_brand', json[0].commercial_brand);
        setValue('bussiness_email', json[0].bussiness_email);
        setValue('bussiness_phone', json[0].bussiness_phone);
        setValue('nif', json[0].nif);
        setValue('legal_entity_name', json[0].legal_entity_name);
      });
    setCompanyRefresh(false);
  };

  useEffect(() => {
    getDetailsSupplier();
  }, [companyRefresh]);

  const profileUpdate = async (data) => {
    fetch(`https://dev.hubmine.mx/api/suppliers/update/${supplierId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } else {
        setLoading(true);
        setBannerErrorOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerErrorOpen(false);
        }, 1500);
      }
    });
    setCompanyRefresh(true);
  };

  return (
    <div className='grow border rounded-xl'>
      {/* Panel body */}
      <div className='p-6 space-y-6'>
        <h2 className='text-xl text-slate-800 font-bold mb-5'>
          Logo de la compañia
        </h2>

        {/* Picture */}
        {/* BANNER SUCCESS AND ERROR */}
        {bannerErrorOpen && (
          <div className='space-y-3'>
            <Banner
              type='error'
              open={bannerErrorOpen}
              setOpen={setBannerErrorOpen}>
              Lo sentimos, al parecer tenemos problema con nuestro servidor,
              vuelva a intentar más tarde.
            </Banner>
          </div>
        )}

        <section>
          <div className='flex items-center'>
            <LogoDropzone
              supplierData={supplierData}
              logo={logo}
              setLogo={setLogo}
            />
          </div>
        </section>
      </div>
      <form onSubmit={handleSubmit(profileUpdate)}>
        <div className='p-6 space-y-6'>
          {/* Business Profile */}
          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold '>
              Perfil del negocio
            </h2>
            <p className='text-sm'>Editas los datos de tu compañia</p>
            <div className='sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5'>
              <div className='sm:w-1/3'>
                {/* COMERCIAL BRAND */}
                <label className='block text-sm font-semibold mb-1'>
                  Nombre de la empresa <span className='text-gray-700'>*</span>
                </label>
                <input
                  maxLength='30'
                  className='form-input w-full '
                  autoComplete='off'
                  type='text'
                  {...register('commercial_brand', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.commercial_brand && (
                  <span className='text-red-500 text-sm'>
                    {errors.commercial_brand.message}
                  </span>
                )}
              </div>
              {/* PHONE */}
              <div className='sm:w-1/3'>
                <label className='block text-sm font-semibold mb-1'>
                  Numero de teléfono <span className='text-gray-700'>*</span>
                </label>
                <input
                  className='form-input w-full'
                  autoComplete='off'
                  type='number'
                  {...register('bussiness_phone', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.bussiness_phone && (
                  <span className='text-red-500 text-sm'>
                    {errors.bussiness_phone.message}
                  </span>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-1'>
              Datos fiscales
            </h2>
            <div className='text-sm'>Edita la razón social de tu compañia.</div>
            <section className='flex  items-center mt-5 space-x-4'>
              <div className='sm:w-1/3 lg:w-1/2'>
                {/* SOCIAL REASON */}
                <label className='block text-sm font-semibold mb-1'>
                  Nombre legal de la empresa{' '}
                  <span className='text-gray-700'>*</span>
                </label>
                <input
                  maxLength='30'
                  className='form-input w-full uppercase'
                  autoComplete='off'
                  type='text'
                  {...register('legal_entity_name', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.legal_entity_name && (
                  <span className='text-red-500 text-sm'>
                    {errors.legal_entity_name.message}
                  </span>
                )}
              </div>
              {/* INPUT RFC */}
              <div className='sm:w-1/3 lg:w-1/2'>
                <label className='block text-sm font-semibold mb-1'>
                  RUT <span className='text-gray-700'>*</span>
                </label>
                <input
                  maxLength='11'
                  className='uppercase form-input w-full '
                  autoComplete='off'
                  type='text'
                  {...register('nif', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                    minLength: {
                      value: 11,
                      message: 'El RUT debe de tener 11 caracteres',
                    },
                  })}
                />{' '}
                {errors.nif && (
                  <span className='text-red-500 text-sm'>
                    {errors.nif.message}
                  </span>
                )}
              </div>
            </section>
          </section>
          {/* reason social */}
          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold '>
              Correo electrónico
            </h2>
            <p className='text-sm'>
              Edita el correo electrónico de tu compañia
            </p>
            {/* EMAIL */}
            <div className='sm:w-1/3 mt-5'>
              <label className='block text-sm font-semibold mb-1'>
                Email <span className='text-gray-700'>*</span>
              </label>
              <input
                maxLength='35'
                className='form-input w-full'
                autoComplete='off'
                type='email'
                {...register('bussiness_email', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato no es correcto',
                  },
                })}
              />{' '}
              {errors.bussiness_email && (
                <span className='text-red-500 text-sm'>
                  {errors.bussiness_email.message}
                </span>
              )}
            </div>
          </section>

          {/* Panel footer */}
          <footer>
            <div className='flex flex-col px-6 py-5'>
              <div className='flex justify-center space-x-3'>
                {loading ? (
                  <div className='w-52'>
                    <LoadingButton name='Guardando cambios' />
                  </div>
                ) : (
                  <>
                    <button
                      onClick={changeLogo}
                      type='submit'
                      className='button-login w-52'>
                      Guardar
                    </button>
                  </>
                )}
              </div>
            </div>
          </footer>
        </div>
      </form>
    </div>
  );
}

export default ProfilePanel;
