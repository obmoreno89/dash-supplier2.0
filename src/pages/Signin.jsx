import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import AuthImage from '../images/AuthImage.jpg';
import logohubsupplier from '../images/logohubsupplier.svg';

function Signin() {
  const [locked, setLocked] = useState(false);
  const [accountValidate, setAccountValidate] = useState(false);

  const submit = (data) => console.log(data);

  const { loading, eye, setLoading, toggleEye } = useContext(StateContext);

  const navigate = useNavigate();

  const warningAccount = () => {
    if (!locked) {
      return (
        <div className='mt-5'>
          <div className='bg-amber-100 text-amber-600 px-3 py-2 rounded'>
            <svg
              className='inline w-4 h-4 shrink-0 fill-current mr-2'
              viewBox='0 0 17 17'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z' />
            </svg>
            <span className='text-sm'>
              Este sitio es de uso exclusivo para proveedores de Hubmine, si
              usted es comprador, inicie sesión desde la aplicación.
            </span>
          </div>
        </div>
      );
    } else if (accountValidate) {
      return (
        <div className='mt-5'>
          <div className='bg-amber-100 text-amber-600 px-3 py-2 rounded'>
            <svg
              className='inline w-4 h-4 shrink-0 fill-current mr-2'
              viewBox='0 0 17 17'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z' />
            </svg>
            <span className='text-sm'>
              Este sitio es de uso exclusivo para proveedores de Hubmine, si
              usted es comprador, inicie sesión desde la aplicación.
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='mt-5'>
          <div className='bg-red-100 text-red-600 px-3 py-2 rounded'>
            <svg
              className='inline w-4 h-4 shrink-0 fill-current mr-2'
              viewBox='0 0 17 17'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
            </svg>
            <span className='text-sm'>
              Se ha producido un problema al iniciar sesión. Comprueba el correo
              electrónico y la contraseña. Si usted es comprador no puede
              acceder al sitio.
            </span>
          </div>
        </div>
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //FUNCTION FOR LOGIN SUPPLIER
  async function loginUser(credentials) {
    return fetch('http://supplier.hubmine.mx/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.customer_type_id === 2) {
          setLoading(true);
          let result = json;
          let supplierId = json.id;
          let supplierToken = { token: json.token };
          localStorage.setItem('token', result.token);
          sessionStorage.setItem('token', result.token);
          localStorage.setItem('first_name', result.first_name);
          localStorage.setItem('email', result.email);
          localStorage.setItem('supplier_id', result.supplier_id);
          localStorage.setItem('id', result.id);

          async function codeValidation() {
            return fetch(
              `http://supplier.hubmine.mx/api/suppliers/validate/${supplierId}/`,
              {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(supplierToken),
              }
            ).then((response) => {
              if (response.status === 202) {
                setTimeout(() => {
                  navigate('/');
                  setLoading(false);
                }, 1500);
              }
            });
          }
          codeValidation(json);
        } else if (json.customer_type_id === 1) {
          setLoading(true);
          setLocked(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        } else if (json.code === 401) {
          setLoading(true);
          setTimeout(() => {
            setLocked(true);
            setLoading(false);
          }, 1500);
        } else if (json.code === 403) {
          setLoading(true);
          setAccountValidate(true);
          setLocked(true);
          setTimeout(() => {
            sessionStorage.setItem('id', json.id);
            setLocked(false);
            navigate('/multiStep');
            setLoading(false);
          }, 1500);
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
                <div className='block'>
                  <img src={logohubsupplier} alt='' />
                </div>
              </div>
            </div>

            <div className='max-w-lg mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Hola de nuevo ✨
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(loginUser)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'>
                      Correo electrónico
                    </label>
                    <input
                      maxLength='35'
                      autoComplete='off'
                      className='form-input w-full'
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
                    />
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='relative'>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='password'>
                      Contraseña
                    </label>
                    <input
                      maxLength='35'
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
                <div className='flex items-center mt-6'>
                  <div>
                    {/* <Link
                      className='text-sm underline hover:no-underline'
                      to='/reset-password'>
                      ¿Olvidaste tu contraseña?
                    </Link> */}
                  </div>
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <>
                      <button
                        type='submit'
                        className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                        Iniciar sesión
                      </button>
                    </>
                  )}
                </div>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6 border-t border-slate-200'>
                {/* Warning */}
                <div className='text-sm'>
                  ¿No tienes cuenta?{' '}
                  <Link
                    className='font-medium text-primary hover:text-slate-500'
                    to='/code/generator'>
                    Registrate
                  </Link>
                </div>
                {warningAccount()}
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
            src={AuthImage}
            width='760'
            height='1024'
            alt='Authentication'
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
