import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../images/question.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import { useForm } from 'react-hook-form';
import LoadingButton from '../helpers/LoadingButton';
import StateContext from '../context/StateContext';
import logohubmine from '../images/logohubsupplier.svg';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const submit = (data) => console.log(data);

  const navigate = useNavigate();

  let userId = sessionStorage.getItem('id');

  const { loading, setLoading, errorMenssage, setErrorMenssage } =
    useContext(StateContext);

  const completeFormStep = () => {
    setStep((cur) => cur + 1);
  };

  const previousFormStep = () => {
    setStep((cur) => cur - 1);
  };

  const cleanLocalStorage = () => {
    localStorage.removeItem('code');
    localStorage.removeItem('number');
    localStorage.removeItem('msg');
  };

  const renderButton = () => {
    if (step > 2) {
      return undefined;
    } else if (step === 2) {
      return (
        <div>
          {loading ? (
            <LoadingButton />
          ) : (
            <button
              type='button'
              disabled={!isValid}
              onClick={handleSubmit(userQuestion)}
              className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'>
              Finalizar -&gt;
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <button
            disabled={!isValid}
            type='button'
            onClick={completeFormStep}
            className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'>
            Siguiente paso -&gt;
          </button>
        </div>
      );
    }
  };

  async function userQuestion(dataMulti) {
    return fetch(`https://dev.hubmine.mx/api/suppliers/create/${userId}/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataMulti),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 201) {
          setLoading(true);
          localStorage.setItem('first_name', json.first_name);
          localStorage.setItem('supplier_id', json.supplier_id);
          localStorage.setItem('token', json.token);
          setTimeout(() => {
            setLoading(false);
            navigate('/multiStep/end');
          }, 1500);
        } else {
          setErrorMenssage(true);
          setTimeout(() => {
            setErrorMenssage(false);
          }, 3000);
        }
      });
  }
  return (
    <main className='bg-white'>
      <div className='relative flex'>
        {/* Content */}
        <div className='w-full md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            <div className='flex-1'>
              {/* Header */}
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <div className='block'>
                  <img src={logohubmine} alt='Logo hubmine' />
                </div>
              </div>
            </div>

            <div className='px-4 py-8'>
              <div className='max-w-md mx-auto'>
                {/* Form */}
                <form>
                  {step === 0 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Cuéntanos sobre tu empresa ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
                        {/* Company Name */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Marca comercial (Nombre){' '}
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            autoComplete='off'
                            className='form-input w-full capitalize'
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
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Datos fiscales ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
                        {/* SOCIAL REASON */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Razón social{' '}
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            autoComplete='off'
                            className='form-input w-full uppercase'
                            type='text'
                            {...register('legal_entity_name', {
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
                          {errors.legal_entity_name && (
                            <span className='text-red-500 text-sm'>
                              {errors.legal_entity_name.message}
                            </span>
                          )}
                        </div>
                        {/* INPUT NIF */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            RFC<span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='13'
                            className='uppercase form-input w-full '
                            autoComplete='off'
                            type='text'
                            {...register('nif', {
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
                          {errors.nif && (
                            <span className='text-red-500 text-sm'>
                              {errors.nif.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold  bg-primary text-white'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Datos de contacto comercial ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
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
                            {...register('bussiness_phone', {
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
                          {errors.bussiness_phone && (
                            <span className='text-red-500 text-sm'>
                              {errors.bussiness_phone.message}
                            </span>
                          )}
                        </div>
                        {/* EMAIL */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Email del contacto
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            className='form-input w-full'
                            autoComplete='off'
                            type='email'
                            {...register('bussiness_email', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'El formato no es correcto',
                              },
                            })}
                          />{' '}
                          {errors.bussiness_email && (
                            <span className='text-red-500 text-sm'>
                              {errors.bussiness_email.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className='flex items-center justify-between'>
                    {step > 0 && (
                      <div>
                        <button
                          type='button'
                          onClick={previousFormStep}
                          className='text-sm underline hover:no-underline  '>
                          &lt;- Regresar
                        </button>
                      </div>
                    )}
                    {renderButton()}
                  </div>
                </form>
                {errorMenssage && (
                  <div className='mt-5'>
                    <div className='bg-red-100 text-red-600 px-3 py-2 rounded'>
                      <svg
                        className='inline w-4 h-4 shrink-0 fill-current mr-2'
                        viewBox='0 0 17 17'>
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className='text-sm'>
                        Lo sentimos, al parecer tenemos problemas con nuestro
                        servidor.
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
            src={Question}
            width='760'
            height='1024'
            alt='Onboarding'
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
};

export default MultiStepForm;
