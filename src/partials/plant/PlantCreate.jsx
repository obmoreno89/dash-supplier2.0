import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import PlantCreateForm from './PlantCreateForm';

import StateContext from '../../context/StateContext';
const PlantCreate = () => {
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
          <PlantCreateForm />
        </main>
      </div>
    </div>
  );
};

export default PlantCreate;
