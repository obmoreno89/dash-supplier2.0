import React, { useEffect, useState, useContext } from 'react';
import Sinlogo from '../../images/Sinlogo.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import LoadingButton from '../../helpers/LoadingButton';
import Banner from '../../components/Banner';

function ProfilePanel() {
  const [logoSupplier, setLogoSupplier] = useState('');
  const [supplierData, setSupplierData] = useState([]);
  const [preview, setPreview] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const {
    requiredFile,
    setRequiredFile,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
  } = useContext(StateContext);

  const handleLogo = (event) => {
    const change = event.target.value;
    return setLogoSupplier(change);
  };

  //FUNCTION PREVIEW IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(file);
      setPreview(reader.result);
    };
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);

  const supplierId = localStorage.getItem('supplier_id');

  const changeLogo = async () => {
    const files = document.getElementById('image').value
      ? document.getElementById('image').files[0]
      : '';
    let formData = new FormData();

    formData.append('logo', files);

    fetch(
      `http://supplier.hubmine.mx/api/suppliers/upload-logo/${supplierId}/`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((response) => response.json());
  };

  const getDetailsSupplier = async () => {
    fetch(
      `http://supplier.hubmine.mx/api/suppliers/details?supplier-id=${supplierId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setSupplierData(json[0].bussiness_logo);
        setValue('commercial_brand', json[0].commercial_brand);
        setValue('bussiness_email', json[0].bussiness_email);
        setValue('bussiness_phone', json[0].bussiness_phone);
        setValue('rfc', json[0].rfc);
        setValue('social_reason', json[0].social_reason);
      });
  };

  useEffect(() => {
    getDetailsSupplier();
  }, []);

  const profileUpdate = async (data) => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/update/${supplierId}/`, {
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
          navigate('/');
        }, 3000);
      } else {
        setLoading(true);
        setBannerErrorOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerErrorOpen(false);
        }, 5000);
      }
    });
  };

  return (
    <div className='grow'>
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
            {supplierData.length ? (
              <div className='mr-1'>
                <img
                  name='img_product'
                  className='w-20 h-20 rounded-full'
                  src={supplierData}
                  width='80'
                  height='80'
                  alt='User upload'
                />
              </div>
            ) : (
              <div className='mr-1'>
                <img
                  name='img_product'
                  className='w-20 h-20 rounded-full'
                  src={Sinlogo}
                  width='80'
                  height='80'
                  alt='User upload'
                />
              </div>
            )}

            {preview && (
              <div className='mr-1'>
                <img
                  name='img_product'
                  className='w-20 h-20 rounded-full'
                  src={preview}
                  width='80'
                  height='80'
                  alt='User upload'
                  onChange={handleImageChange}
                />
              </div>
            )}
            <div>
              <label
                htmlFor='image'
                className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3'>
                Cambiar
              </label>
              <input
                accept='.jpg,.png'
                id='image'
                type='file'
                onChange={handleLogo}
              />
              {requiredFile && (
                <span className='text-red-500 text-sm'>
                  El campo es requerido
                </span>
              )}
            </div>
          </div>
        </section>
      </div>
      <form onSubmit={handleSubmit(profileUpdate)}>
        <div className='p-6 space-y-6'>
          {/* Business Profile */}
          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-1'>
              Perfil del negocio
            </h2>
            <p className='text-sm'>Editas los datos de tu compañia.</p>
            <div className='sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5'>
              <div className='sm:w-1/3'>
                {/* COMERCIAL BRAND */}
                <label className='block text-sm font-medium mb-1'>
                  Nombre de la empresa<span className='text-rose-500'>*</span>
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
                <label className='block text-sm font-medium mb-1'>
                  Teléfono
                  <span className='text-rose-500'>*</span>
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
                {errors.bussiness_phone && (
                  <span className='text-red-500 text-sm'>
                    {errors.bussiness_phone.message}
                  </span>
                )}
              </div>
              {/* INPUT RFC */}
              <div className='sm:w-1/3'>
                <label className='block text-sm font-medium mb-1'>
                  RFC<span className='text-rose-500'>*</span>
                </label>
                <input
                  maxLength='13'
                  className='uppercase form-input w-full '
                  autoComplete='off'
                  type='text'
                  {...register('rfc', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                    minLength: {
                      value: 13,
                      message: 'El RFC debe de tener 13 caracteres',
                    },
                  })}
                />{' '}
                {errors.rfc && (
                  <span className='text-red-500 text-sm'>
                    {errors.rfc.message}
                  </span>
                )}
              </div>
            </div>
          </section>
          {/* Email */}
          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-1'>
              Correo electrónico
            </h2>
            <div className='text-sm'>
              Edita el correo electrónico de tu compañia.
            </div>
            {/* EMAIL */}
            <div className='sm:w-1/3 mt-5'>
              <label className='block text-sm font-medium mb-1'>
                Email<span className='text-rose-500'>*</span>
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
          {/* reason social */}
          <section>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-1'>
              Razón social
            </h2>
            <p className='text-sm'>Edita la razón social de tu compañia.</p>
            <div className='sm:w-1/3 mt-5'>
              {/* SOCIAL REASON */}
              <label className='block text-sm font-medium mb-1'>
                Razón social<span className='text-rose-500'>*</span>
              </label>
              <input
                maxLength='30'
                className='form-input w-full uppercase'
                autoComplete='off'
                type='text'
                {...register('social_reason', {
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
              {errors.social_reason && (
                <span className='text-red-500 text-sm'>
                  {errors.social_reason.message}
                </span>
              )}
            </div>
          </section>

          {/* Panel footer */}
          <footer>
            <div className='flex flex-col px-6 py-5 border-t border-slate-200'>
              <div className='flex self-end space-x-3'>
                <Link
                  to='/'
                  className='btn border-slate-200 hover:border-slate-300 text-slate-600'>
                  Salir
                </Link>
                {loading ? (
                  <LoadingButton />
                ) : (
                  <>
                    <button
                      onClick={changeLogo}
                      type='submit'
                      className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3'>
                      Guardar cambios
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
