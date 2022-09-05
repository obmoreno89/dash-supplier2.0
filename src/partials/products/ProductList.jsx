import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Link } from 'react-router-dom';
import ProductListTable from './ProductListTable';

import PaginationClassic from '../../components/PaginationClassic';
import StateContext from '../../context/StateContext';

const ProductList = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(StateContext);
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          {/* Content */}
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Page header */}
            <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'>
              {/* Left: Title */}
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                  Lista de productos 📦
                </h1>
              </div>

              {/* Right: Actions */}
              <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
                {/* Search form */}
                <div className='relative'>
                  <label htmlFor='action-search' className='sr-only'>
                    Buscar...
                  </label>
                  <input
                    autoComplete='false'
                    id='action-search'
                    className='form-input pl-9 focus:border-primary'
                    type='search'
                    placeholder='Buscar...'
                  />
                  <div
                    className='absolute inset-0 mt-2.5 right-auto group'
                    aria-label='Search'>
                    <svg
                      className='w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
                      <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
                    </svg>
                  </div>
                </div>

                {/* Export button */}
                <Link
                  to='/products/create'
                  className='btn bg-secondary hover:bg-primary text-primary hover:text-white'>
                  Añadir producto
                </Link>
              </div>
            </div>

            {/* Table */}
            <ProductListTable />
            {/* Pagination */}
            {/* <div className='mt-8'>
            <PaginationClassic />
          </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
