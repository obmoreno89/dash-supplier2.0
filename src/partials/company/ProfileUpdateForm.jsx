import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import ModalCorfirmAndReturnProfile from './helpers/ModalCorfirmAndReturnProfile';
import Banner from '../../components/Banner';
import LoadingButton from '../../helpers/LoadingButton';
import StateContext from '../../context/StateContext';

const ProfileUpdateForm = () => {
  const submit = (data) => console.log(data);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    formatInvalid,
    sizeInvalid,
    valid,
    setPlantReload,
  } = useContext(StateContext);
  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Page header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Editar perfil 👷🏻‍♀️👷🏻‍♂️
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

        <div className='border-t border-slate-200'></div>
        <div className='space-y-8 mt-8'>
          <article className='mt-10'>
            <h2 className='text-2xl text-slate-800 font-bold mb-6'>
              Datos del proveedor
            </h2>
            {/* IMAGE PROFILE */}
            <div className='flex justify-center items-center'>
              <div className='relative inline-flex items-start mr-5 mt-5 mb-8'>
                {/* AQUI VA MAP CON OPERACION TERNARIA */}

                {/* <>
                   
                    <EditMenuPencil
                      setDropdownOpen={setDropdownOpen}
                      dropdownOpen={dropdownOpen}
                      align='right'
                      className='absolute shadow-md rounded-full'>
                      <li>
                        <button
                          onClick={handleDelete}
                          type='button'
                          className='font-medium text-sm text-rose-400 hover:text-rose-600 flex py-1 px-3'>
                          Eliminar
                        </button>
                      </li>
                    </EditMenuPencil>
                  </> */}

                <>
                  <div className='uppercase rounded-full bg-primary w-24 h-24 flex justify-center items-center text-5xl text-white font-bold'>
                    O
                  </div>
                </>
              </div>
            </div>
          </article>
          <form onSubmit={handleSubmit(submit)}>
            <section className='grid gap-5 md:grid-cols-3'>
              <div>
                {/* PRODUCT NAME */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Nombre <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    maxLength='30'
                    className='form-input w-full capitalize'
                    autoComplete='off'
                    type='text'
                    {...register('commercial_brand', {
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
                  {errors.commercial_brand && (
                    <span className='text-red-500 text-sm'>
                      {errors.commercial_brand.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* PHONE */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Teléfono
                    <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full'
                    autoComplete='off'
                    type='bussiness_phone'
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
                  {errors.bussiness_phone && (
                    <span className='text-red-500 text-sm'>
                      {errors.bussiness_phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* EMAIL */}
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Correo electrónico
                    </label>
                    <input
                      maxLength='35'
                      autoComplete='off'
                      className='form-input w-full'
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
                    />
                    {errors.bussiness_email && (
                      <span className='text-red-500 text-sm'>
                        {errors.bussiness_email.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              {/* SOCIAL REASON */}
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Razón social <span className='text-rose-500'>*</span>
                </label>
                <input
                  maxLength='30'
                  className='form-input w-full capitalize'
                  autoComplete='off'
                  type='text'
                  {...register('social_reason', {
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
                {errors.social_reason && (
                  <span className='text-red-500 text-sm'>
                    {errors.social_reason.message}
                  </span>
                )}
              </div>
              {/* INPUT RFC */}
              <div>
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
            </section>

            <section className='w-full flex space-x-6 justify-center items-center mt-10'>
              <div className='m-1.5'>
                {loading ? (
                  <LoadingButton />
                ) : (
                  <>
                    <button
                      type='submit'
                      className='btn bg-emerald-500 hover:bg-emerald-600 text-white'>
                      Guardar
                    </button>
                  </>
                )}
              </div>
              <div className='m-1.5'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDangerModalOpen(true);
                  }}
                  type='button'
                  className='btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50'>
                  Cancelar
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      {/* MODAL CONFIRM */}
      <ModalCorfirmAndReturnProfile />
    </>
  );
};

export default ProfileUpdateForm;
