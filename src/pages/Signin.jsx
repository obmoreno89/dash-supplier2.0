import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import AuthImage from '../images/AuthImage.jpg';
import icons from '../images/icons';
import { SmoothCorners } from 'react-smooth-corners';

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

  const Button = () => {
    return (
      <SmoothCorners
        corners='12, 3'
        borderRadius='12px'
        style={{ padding: '10px 30px', background: 'blue' }}
        as='button'>
        Click to view
      </SmoothCorners>
    );
  };
  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-28'>
                {/* Logo */}
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
              <div className=''>
                <SmoothCorners
                  corners='50, 3'
                  style={{
                    padding: '0px 0px',
                    width: '100%',
                    borderRadius: '12px',
                    border: '1px solid black',
                  }}
                  as='div'>
                  <input
                    placeholder='ingresa tu email'
                    type='text'
                    className='bg-transparent border-0 focus:ring-0 w-full rounded-none'
                  />
                </SmoothCorners>
              </div>
              <form onSubmit={handleSubmit(loginUser)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-semibold mb-1'
                      htmlFor='email'>
                      Correo:
                    </label>
                    <div className='relative'>
                      <input
                        maxLength='35'
                        autoComplete='off'
                        className='form-input w-full pl-9'
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
                      <div className='absolute inset-3 right-0 flex items-center pointer-events-none'>
                        <img src={icons.email} alt='Correo' />
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
                    <input
                      maxLength='35'
                      className='form-input w-full pl-9'
                      type={eye ? 'text' : 'password'}
                      autoComplete='off'
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}
                    />
                    <section className='relative'>
                      <figure className='absolute inset-2 -top-10 right-0 flex items-center pointer-events-none'>
                        <img src={icons.lock} alt='Candado' />
                      </figure>
                      <button
                        type='button'
                        className='absolute inset-2 -top-10 left-auto flex items-center'>
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
                {/* Warning */}
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
