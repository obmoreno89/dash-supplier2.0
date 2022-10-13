import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthDecoration from '../images/auth-decoration.png';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import CreateAccount from '../images/createAccount.jpg';
import logohubsupplier from '../images/logohubsupplier.svg';
import icons from '../images/icons';

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
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-44'>
                <Link
                  className='block'
                  to='/signin'
                  onClick={cleanLocalStorage}>
                  <img src={logohubsupplier} alt='Logo' />
                </Link>
              </div>
            </div>

            <div className='max-w-sm mx-auto py-8 w-full mt-8'>
              <h1 className='text-3xl text-slate-800 font-bold'>
                Crea tu cuenta
              </h1>
              <p className='mb-4 text-sm'>
                Llena los siguientes datos para entrar en Hubmine
              </p>
              <form onSubmit={handleSubmit(createAccount)}>
                <div className='space-y-4'>
                  <div className='relative'>
                    <label
                      className='block text-sm mb-1 font-semibold'
                      htmlFor='email'>
                      Nombre
                    </label>
                    <input
                      maxLength='35'
                      autoComplete='off'
                      className='form-input w-full capitalize pl-9'
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
                    <section className='relative'>
                      <figure className='absolute -top-9 inset-3 right-0 flex items-center pointer-events-none'>
                        <img src={icons.user} alt='Usuario' />
                      </figure>
                    </section>
                    {errors.first_name && (
                      <span className='text-red-500 text-sm'>
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  {/* INPUT LAST NAME */}
                  <div className='relative'>
                    <label className='block text-sm font-semibold mb-1'>
                      Apellidos
                    </label>
                    <input
                      maxLength='35'
                      className='form-input w-full capitalize pl-9'
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
                    />
                    <section className='relative'>
                      <figure className='absolute -top-9 inset-3 right-0 flex items-center pointer-events-none'>
                        <img src={icons.user} alt='Usuario' />
                      </figure>
                    </section>
                    {errors.last_name && (
                      <span className='text-red-500 text-sm'>
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                  {/* INPUT PHONE */}
                  <div>
                    <label className='block text-sm font-semibold mb-1'>
                      Número de telefono
                    </label>
                    <input
                      disabled
                      className='form-input w-full capitalize disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'
                      autoComplete='off'
                      type='text'
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
                  <div className='relative'>
                    <label className='block text-sm font-semibold mb-1'>
                      Correo electrónico
                    </label>
                    <input
                      maxLength='35'
                      className='form-input w-full pl-9'
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
                    />
                    <section className='relative'>
                      <figure className='absolute -top-9 inset-3 right-0 flex items-center pointer-events-none'>
                        <img src={icons.aquaEmail} alt='Email' />
                      </figure>
                    </section>
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div className='relative'>
                    <label className='block text-sm font-semibold mb-1'>
                      Contraseña
                    </label>
                    <input
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
                      <figure className='absolute -top-9 inset-3 right-0 flex items-center pointer-events-none'>
                        <img src={icons.aquaLock} alt='Candado' />
                      </figure>
                      <button
                        type='button'
                        className='absolute inset-3 -top-9 left-auto flex items-center'>
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
                <div className='mt-3'>
                  {reloading ? (
                    <LoadingButton name='Creando cuenta' />
                  ) : (
                    <>
                      <button type='submit' className='button-login'>
                        Crear cuenta
                      </button>
                    </>
                  )}
                </div>
              </form>
              <section className='pt-5 mt-2 text-center'>
                <div className='text-sm font-semibold text-gray-900'>
                  ¿Tienes una cuenta?{' '}
                  <Link
                    className='font-semibold text-primary hover:text-slate-500'
                    to='/signin'
                    onClick={cleanLocalStorage}>
                    Iniciar sesión aquí
                  </Link>
                </div>
              </section>
              <div className='mt-5'>
                {errorMenssage && (
                  <div className='bg-red-50 text-red-600 px-3 py-2 rounded-2xl'>
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
        <figure
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'>
          <img
            className='object-cover object-center w-full h-full'
            src={CreateAccount}
            width='760'
            height='1024'
            alt='Imagen de fondo'
          />
        </figure>
      </div>
    </main>
  );
}

export default Signup;
