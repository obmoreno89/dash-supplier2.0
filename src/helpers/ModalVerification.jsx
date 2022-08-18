import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalAction from '../components/ModalAction';
import StateContext from '../context/StateContext';
import { useForm } from 'react-hook-form';

const ModalVerification = () => {
  const { newsletterModalOpen, setNewsletterModalOpen } =
    useContext(StateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setNewsletterModalOpen(true);
  }, []);

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
          <div className='text-lg font-semibold text-slate-800'>
            Validación de datos
          </div>
        </div>
        {/* Modal content */}
        <div className='text-center'>
          <div className='text-sm mb-6'>
            Antes de continuar necesitamos validar tu numero de telefono, así
            podras continuar con la operación.
          </div>
          {/* Submit form */}
          <form className='flex max-w-sm m-auto'>
            <div className='grow mr-2'>
              <label htmlFor='subscribe-form' className='sr-only'>
                Leave your Email
              </label>
              <input
                maxLength='10'
                id='subscribe-form'
                className='form-input w-full px-2 py-1'
                type='email'
                {...register('phone_number', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /[0-9]/,
                    message: 'El formato no es correcto',
                  },
                  minLength: {
                    value: 13,
                    message: 'debe de tener 10 caracteres',
                  },
                  maxLength: {
                    value: 13,
                    message: 'debe de tener 10 caracteres',
                  },
                })}
              />{' '}
              {errors.phone_number && (
                <span className='text-red-500 text-sm'>
                  {errors.phone_number.message}
                </span>
              )}
            </div>
            <button
              type='submit'
              className='btn-sm bg-primary hover:bg-indigo-600 text-white whitespace-nowrap'>
              Validar
            </button>
          </form>
          <div className='text-xs text-slate-500 italic mt-3'>
            <div className='text-sm'>
              Quieres regresar al login?{' '}
              <a
                className='font-medium text-primary hover:text-secondary'
                href='/signin'>
                Regresar
              </a>
            </div>
          </div>
        </div>
      </ModalAction>
      {/* End */}
    </div>
  );
};

export default ModalVerification;
