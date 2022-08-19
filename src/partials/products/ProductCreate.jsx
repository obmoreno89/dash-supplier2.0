import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import CreateProductForm from './CreateProductForm';

import StateContext from '../../context/StateContext';

const ProductCreate = () => {
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
          <CreateProductForm />
        </main>
      </div>
    </div>
  );
};

export default ProductCreate;
