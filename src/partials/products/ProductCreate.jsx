import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import HeaderGlobal from '../HeaderGlobal';
import CreateProductForm from './CreateProductForm';
import StateContext from '../../context/StateContext';
import icons from '../../images/icons';

const ProductCreate = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(StateContext);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white'>
        {/*  Site header */}
        <HeaderGlobal
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerTitle='Productos'
          icons={icons.box}
          arrowIcon={icons.smallArrowDown}
          headerSubTitle='Crear producto'
        />

        <main>
          <CreateProductForm />
        </main>
      </div>
    </div>
  );
};

export default ProductCreate;
