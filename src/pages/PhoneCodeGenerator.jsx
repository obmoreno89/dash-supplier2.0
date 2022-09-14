import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import AuthImage from '../images/AuthImage.jpg';
import 'react-phone-input-2/lib/style.css';
import './customPhoneNumberInput.css';
import logohubsupplier from '../images/logohubsupplier.svg';

function PhoneCodeGenerator() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const { loading, codeGenerator, errorApi } = useContext(StateContext);

  const submit = (data) => console.log(data);

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
                <Link to='/signin' className='block'>
                  <img src={logohubsupplier} alt='logo hubmine' />
                </Link>
              </div>
            </div>

            <div className='max-w-lg mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Solicita un código ✨
              </h1>
              <div>
                <p className='text-sm'>
                  Introduce un número de teléfono para que puedas generar un
                  código de verificación.
                </p>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit(codeGenerator)}>
                <div className='space-y-4 mt-10'>
                  {/* INPUT PHONE */}
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Numero de telefono del contacto
                      <span className='text-rose-500'>*</span>
                    </label>
                    <input
                      className='form-input w-full capitalize'
                      autoComplete='off'
                      type='number'
                      {...register('number', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />{' '}
                    {errors.number && (
                      <span className='text-red-500 text-sm'>
                        {errors.number.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className='flex items-center justify-start mt-6'>
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <>
                      <button
                        type='submit'
                        className='btn bg-secondary hover:bg-primary hover:text-white text-primary  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'>
                        Generar código
                      </button>
                    </>
                  )}
                </div>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6 '>
                {/* Warning */}
                <div className='text-sm'>
                  ¿Tienes cuenta?{' '}
                  <Link
                    className='font-medium text-primary hover:text-slate-500'
                    to='/signin'>
                    Iniciar sesión
                  </Link>
                </div>

                {errorApi && (
                  <div className='mt-5'>
                    <div className='bg-red-100 text-red-600 px-3 py-2 rounded'>
                      <svg
                        className='inline w-4 h-4 shrink-0 fill-current mr-2'
                        viewBox='0 0 17 17'>
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className='text-sm'>
                        Lo sentimos, al parecer tenemos problemas con nuestro
                        servidor, vuelva a intentar más tarde.
                      </span>
                    </div>
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

export default PhoneCodeGenerator;
