import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalAction from '../components/ModalAction';
import StateContext from '../context/StateContext';
import { useForm } from 'react-hook-form';
import LoadingButton from './LoadingButton';

const ModalVerification = () => {
  const { newsletterModalOpen, setNewsletterModalOpen, loading, setLoading } =
    useContext(StateContext);

  const submit = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setNewsletterModalOpen(true);
  }, []);

  async function numberValidation(phone) {
    return fetch('http://dev.hubmine.mx/api/auth/send_register/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(phone),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code) {
          setLoading(true);
          async function codeValidation(code) {
            return fetch('http://dev.hubmine.mx/api/auth/validate/', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(code),
            }).then((response) => {
              if (response.status === 202) {
                setTimeout(() => {
                  setNewsletterModalOpen(false);
                  setLoading(false);
                }, 4000);
              } else {
                setErrorApi(true);
              }
            });
          }
          codeValidation(json);
        }
      });
  }

  return (
    <div className='m-1.5'>
      {/* Start */}

      <ModalAction
        id='newsletter-modal'
        modalOpen={newsletterModalOpen}
        setModalOpen={setNewsletterModalOpen}>
        {/* Modal header */}
        <div className='mb-2 text-center'>
          {/* Icon */}
          <div className='mb-3'>
            <svg
              className='inline-flex w-12 h-12 rounded-full shrink-0 fill-current'
              viewBox='0 0 48 48'>
              <rect
                className='text-indigo-100'
                width='48'
                height='48'
                rx='24'
              />
              <path
                className='text-indigo-300'
                d='M19 16h7a8 8 0 110 16h-7V16z'
              />
              <path className='text-primary' d='M26 24l-7-6v5h-8v2h8v5z' />
            </svg>
          </div>
          <div className='text-lg font-semibold text-slate-800'>Validación</div>
        </div>
        {/* Modal content */}
        <div className='text-center'>
          <div className='text-sm mb-6'>
            Antes de continuar necesitamos validar tu numero de telefono, así
            podras continuar con la operación.
          </div>
          {/* Submit form */}
          <form
            onSubmit={handleSubmit(numberValidation)}
            className='flex max-w-sm m-auto space-x-3'>
            {/* INPUT PHONE */}
            <div className='w-full h-9'>
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
                  minLength: {
                    value: 10,
                    message: 'Debe de tener 10 caracteres',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Debe de tener 10 caracteres',
                  },
                })}
              />{' '}
              {errors.number && (
                <span className='text-red-500 text-sm'>
                  {errors.number.message}
                </span>
              )}
            </div>
            {loading ? (
              <LoadingButton />
            ) : (
              <>
                <button
                  type='submit'
                  className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-1 h-9'>
                  Validar
                </button>
              </>
            )}
          </form>
          <div className='text-xs text-slate-500 italic mt-8'>
            {/* {!errorApi ? (
              <div className='text-sm'>
                ¿Quieres regresar al login?{' '}
                <a
                  className='font-medium text-primary hover:text-secondary'
                  href='/signin'>
                  Regresar
                </a>
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Lo sentimos, al parecer tenemos problemas con nuestro servidor.{' '}
                <a
                  className='btn border-neutral-200 font-medium text-primary hover:text-red-500 '
                  href='/signin'>
                  Regresar
                </a>
              </div>
            )} */}
          </div>
        </div>
      </ModalAction>
      {/* End */}
    </div>
  );
};

export default ModalVerification;
