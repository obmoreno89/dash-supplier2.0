import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import AuthImage from '../images/AuthImage.jpg';
import icons from '../images/icons';

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
          <div className='bg-amber-50 text-gray-600 px-2 py-2 rounded-2xl flex space-x-1'>
            <figure>
              <img className='w-9' src={icons.alert} alt='Alerta' />
            </figure>
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
          <div className='bg-amber-50 text-gray-600 px-2 py-2 rounded-2xl flex space-x-1'>
            <figure>
              <img className='w-9' src={icons.alert} alt='Alerta' />
            </figure>
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
          <div className='bg-red-50 text-red-600 px-3 py-2 rounded-2xl'>
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
    return fetch('https://dev.hubmine.mx/api/auth/login/', {
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
              `https://dev.hubmine.mx/api/suppliers/validate/${supplierId}/`,
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
                  navigate('/products/list');
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
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-28'>
                <div className='block'>
                  <img src={icons.logoSupplier} alt='Logo' />
                </div>
              </div>
            </div>

            <div className='max-w-lg mx-auto px-4 py-8'>
              <article>
                <div className='mb-6'>
                  <h1 className='text-3xl text-slate-800 font-bold'>
                    Hola de nuevo
                  </h1>
                  <p className='text-sm'>
                    Inicia sesión para empezar a vender en Hubmine
                  </p>
                </div>
              </article>

              <form onSubmit={handleSubmit(loginUser)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-semibold mb-1  '
                      htmlFor='email'>
                      Correo:
                    </label>
                    <div className='relative focus-within:text-primary '>
                      <input
                        maxLength='35'
                        autoComplete='off'
                        className='form-input w-full pl-10'
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
                      <div className='absolute inset-3 right-0 flex items-center pointer-events-none '>
                        <svg class='w-5 h-5 fill-current' viewBox='0 0 20 20'>
                          <path d='M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z'></path>
                        </svg>
                      </div>
                    </div>
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='relative'>
                    <label
                      className='block text-sm font-semibold mb-1'
                      htmlFor='password'>
                      Contraseña:
                    </label>

                    <div className='focus-within:text-primary '>
                      <input
                        maxLength='35'
                        className='form-input w-full pl-10 '
                        type={eye ? 'text' : 'password'}
                        autoComplete='off'
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'El campo es requerido',
                          },
                        })}
                      />

                      <section className='relative '>
                        <figure className='absolute inset-2 -top-10 right-0 flex items-center pointer-events-none'>
                          <svg class='w-6 h-6 fill-current' viewBox='0 0 24 24'>
                            <path d='M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z' />
                            <path d='M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z'></path>
                          </svg>
                        </figure>
                        <button
                          type='button'
                          className='absolute inset-2 -top-10 left-auto flex items-center '>
                          {eye ? (
                            <img
                              onClick={toggleEye}
                              src={icons.openEye}
                              alt='Ojo abierto'
                            />
                          ) : (
                            <img
                              onClick={toggleEye}
                              src={icons.closedEye}
                              alt='Ojo cerrado'
                            />
                          )}
                        </button>
                      </section>
                    </div>
                    {errors.password && (
                      <span className='text-red-500 text-sm'>
                        {errors.password.message}
                      </span>
                    )}
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
                    <LoadingButton name='Iniciando sesión' />
                  ) : (
                    <>
                      <button type='submit' className='button-login'>
                        Iniciar sesión
                      </button>
                    </>
                  )}
                </div>
              </form>

              <footer className='pt-5'>
                <section className='text-sm font-bold flex justify-center space-x-1'>
                  <p> ¿No tienes cuenta?</p>
                  <div>
                    <Link
                      className='font-bold text-primary hover:text-slate-500'
                      to='/code/generator'>
                      Regístrate
                    </Link>
                  </div>
                </section>
                {warningAccount()}
              </footer>
            </div>
          </div>
        </div>
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
