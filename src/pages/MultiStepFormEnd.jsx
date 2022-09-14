import React from 'react';
import { Link } from 'react-router-dom';
import Question from '../images/question.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import logohubsupplier from '../images/logohubsupplier.svg';

const MultiStepFormEnd = () => {
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
                  <img src={logohubsupplier} alt='Logo hubmine' />
                </div>
              </div>

              {/* Progress bar */}
              <div className='px-4 pt-12 pb-8'>
                <div className='max-w-md mx-auto w-full'>
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
                        <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                          3
                        </div>
                      </div>
                      <div>
                        <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                          4
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <div className='px-4 py-8'>
              <div className='max-w-md mx-auto'>
                <div className='text-center'>
                  <svg
                    className='inline-flex w-16 h-16 fill-current mb-6'
                    viewBox='0 0 64 64'>
                    <circle
                      className='text-emerald-100'
                      cx='32'
                      cy='32'
                      r='32'
                    />
                    <path
                      className='text-emerald-500'
                      d='m28.5 41-8-8 3-3 5 5 12-12 3 3z'
                    />
                  </svg>
                  <h1 className='text-3xl text-slate-800 font-bold mb-8'>
                    Ya estás registrado en Hubmine supplier system
                    <p className='font-normal text-lg '>
                      Ya puedes crear tus plantas de recolección, cargar, ver el
                      sock de tus productos y mucho más.
                    </p>
                  </h1>

                  <Link
                    className='btn bg-secondary hover:bg-primary hover:text-white text-primary'
                    to='/'>
                    Ingresar a proveedores -&gt;
                  </Link>
                </div>
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

export default MultiStepFormEnd;
