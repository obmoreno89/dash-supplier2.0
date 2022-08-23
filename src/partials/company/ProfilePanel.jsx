import React, { useState } from 'react';
import Image from '../../images/user-avatar-80.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ProfilePanel() {
  const [sync, setSync] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className='grow'>
      {/* Panel body */}
      <div className='p-6 space-y-6'>
        <h2 className='text-2xl text-slate-800 font-bold mb-5'>Mi Perfil</h2>
        {/* Picture */}
        <section>
          <div className='flex items-center'>
            <div className='mr-4'>
              <img
                className='w-20 h-20 rounded-full'
                src={Image}
                width='80'
                height='80'
                alt='User upload'
              />
            </div>
            <button className='btn-sm bg-secondary hover:bg-primary hover:text-white text-primary'>
              Change
            </button>
          </div>
        </section>
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
                {...register('name', {
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
              {errors.name && (
                <span className='text-red-500 text-sm'>
                  {errors.name.message}
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
              {errors.phone_contact && (
                <span className='text-red-500 text-sm'>
                  {errors.phone_contact.message}
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
        </section>

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
              {...register('name', {
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
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>
        </section>
      </div>
      {/* Panel footer */}
      <footer>
        <div className='flex flex-col px-6 py-5 border-t border-slate-200'>
          <div className='flex self-end'>
            <Link
              to='/'
              className='btn border-slate-200 hover:border-slate-300 text-slate-600'>
              Salir
            </Link>
            <button className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3'>
              Guardar cambios
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProfilePanel;
