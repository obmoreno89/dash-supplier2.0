import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthDecoration from '../images/auth-decoration.png';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import CreateAccount from '../images/createAccount.jpg';
import logohubsupplier from '../images/logohubsupplier.svg';

function Signup() {
  const { eye, toggleEye, errorMenssage, setErrorMenssage } =
    useContext(StateContext);

  const [reloading, setReloading] = useState(false);

  const number = sessionStorage.getItem('number');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer_type_id: 2,
      user_type_id: 2,
      business_name: '',
      rfc: '',
      country_code: '',
      business_type: '',
      phone_number: number,
    },
  });

  const submit = (data) => console.log(data);

  const cleanLocalStorage = () => {
    sessionStorage.removeItem('code');
    sessionStorage.removeItem('number');
  };

  const navigate = useNavigate();

  async function createAccount(data) {
    return fetch('https://dev.hubmine.mx/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 201) {
          setReloading(true);
          let result = json;
          sessionStorage.setItem('id', result.id);
          sessionStorage.setItem('token', result.token);
          sessionStorage.setItem('first_name', result.first_name);
          setTimeout(() => {
            setReloading(false);
            navigate('/multiStep');
          }, 1500);
        } else {
          setErrorMenssage(true);
          setReloading(true);
          setTimeout(() => {
            setErrorMenssage(false);
            setReloading(false);
          }, 5000);
        }
      });
  }

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <Link
                  className='block'
                  to='/signin'
                  onClick={cleanLocalStorage}>
                  <img src={logohubsupplier} alt='Logo hubmine' />
                </Link>
              </div>
            </div>

            <div className='max-w-sm mx-auto py-8 w-full'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Crea tu cuenta ✨
              </h1>
              <p className='mb-4 text-sm'>
                Vamos a crear una cuenta para que puedas ingresar a nuestro
                sitio, compártenos los siguientes datos.
              </p>
              {/* Form */}
              <form onSubmit={handleSubmit(createAccount)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'>
                      Nombres <span className='text-rose-500'>*</span>
                    </label>
                    <input
                      maxLength='35'
                      autoComplete='off'
                      className='form-input w-full capitalize'
                      type='text'
                      {...register('first_name', {
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
                    {errors.first_name && (
                      <span className='text-red-500 text-sm'>
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  {/* INPUT LAST NAME */}
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Apellidos<span className='text-rose-500'>*</span>
                    </label>
                    <input
                      maxLength='35'
                      className='form-input w-full capitalize'
                      autoComplete='off'
                      type='text'
                      {...register('last_name', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />{' '}
                    {errors.last_name && (
                      <span className='text-red-500 text-sm'>
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                  {/* INPUT PHONE */}
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Numero de telefono<span className='text-rose-500'>*</span>
                    </label>
                    <input
                      disabled
                      className='form-input w-full capitalize disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'
                      autoComplete='off'
                      type='number'
                      {...register('phone_number', {
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

                    {errors.phone_number && (
                      <span className='text-red-500 text-sm'>
                        {errors.phone_number.message}
                      </span>
                    )}
                  </div>
                  {/* EMAIL */}
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Email<span className='text-rose-500'>*</span>
                    </label>
                    <input
                      maxLength='35'
                      className='form-input w-full'
                      autoComplete='off'
                      type='email'
                      {...register('email', {
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
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div className='relative'>
                    <label className='block text-sm font-medium mb-1'>
                      Contraseña<span className='text-rose-500'>*</span>
                    </label>
                    <input
                      className='form-input w-full'
                      type={eye ? 'text' : 'password'}
                      autoComplete='off'
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}
                    />
                    {errors.password && (
                      <span className='text-red-500 text-sm'>
                        {errors.password.message}
                      </span>
                    )}
                    <button
                      onClick={toggleEye}
                      type='button'
                      className='absolute right-0 top-5 mt-3 mr-4'>
                      {eye ? (
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z'
                            fill='#BBC0C9'
                          />
                        </svg>
                      ) : (
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z'
                            fill='#BBC0C9'
                          />
                          <path
                            d='M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z'
                            fill='#BBC0C9'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-center mt-6'>
                  {reloading ? (
                    <LoadingButton />
                  ) : (
                    <>
                      <button
                        type='submit'
                        className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3'>
                        Crear cuenta
                      </button>
                    </>
                  )}
                </div>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6 border-t border-slate-200'>
                <div className='text-sm'>
                  Tienes una cuenta?{' '}
                  <Link
                    className='font-medium text-primary hover:text-slate-500'
                    to='/signin'
                    onClick={cleanLocalStorage}>
                    Iniciar sesión
                  </Link>
                </div>
              </div>
              <div className='mt-5'>
                {errorMenssage && (
                  <div className='bg-red-100 text-red-600 px-3 py-2 rounded'>
                    <svg
                      className='inline w-4 h-4 shrink-0 fill-current mr-2'
                      viewBox='0 0 17 17'>
                      <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                    </svg>
                    <span className='text-sm'>
                      Problemas para crear la cuenta, el email ya existe o el
                      número de teléfono es diferente al que ingresaste al
                      generar el código de verificación.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'>
          <img
            className='object-cover object-center w-full h-full'
            src={CreateAccount}
            width='760'
            height='1024'
            alt='Authentication'
          />
          <img
            className='absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block'
            src={AuthDecoration}
            width='218'
            height='224'
            alt='Authentication decoration'
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
