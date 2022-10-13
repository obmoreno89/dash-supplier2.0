import React from 'react';
import { Link } from 'react-router-dom';
import constructionCrane from '../images/constructionCrane.png';
import icons from '../images/icons';

const MultiStepFormEnd = () => {
  return (
    <main className='bg-white'>
      <div className='relative flex'>
        {/* Content */}
        <div className='w-full md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            <div className='flex-1'>
              {/* Header */}
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-32'>
                {/* Logo */}
                <figure className='block'>
                  <img src={icons.logoSupplier} alt='Logo hubmine' />
                </figure>
              </div>
            </div>
            <div className='px-4 py-8'>
              <div className='max-w-md mx-auto'>
                <section className='flex flex-col justify-center items-center'>
                  <img src={icons.check} alt='Palomita simbolo' />
                  <h1 className='text-3xl text-slate-800 font-bold mb-3 mt-6 text-center'>
                    ¡Ya estas registradro en Hubmine Supplier System!
                    <p className='font-normal text-gray-500 text-sm mt-3'>
                      Ya puedes crear tus plantas de recolección, cargar y ver
                      el stock de tus productos y mucho más
                    </p>
                  </h1>
                  <Link
                    className='button-login flex justify-center items-center'
                    to='/products/list'>
                    Ingresar al Panel de proveedores
                  </Link>
                </section>
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
            src={constructionCrane}
            width='760'
            height='1024'
            alt='Onboarding'
          />
        </div>
      </div>
    </main>
  );
};

export default MultiStepFormEnd;
