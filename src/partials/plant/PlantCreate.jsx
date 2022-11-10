import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import HeaderGlobal from '../HeaderGlobal';
import PlantCreateForm from './PlantCreateForm';
import icons from '../../images/icons';

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
        <HeaderGlobal
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerTitle='Plantas'
          icons={icons.plants}
          arrowIcon={icons.smallArrowDown}
          headerSubTitle='Crear planta de recolección'
        />

        <main>
          <PlantCreateForm />
        </main>
      </div>
    </div>
  );
};

export default PlantCreate;
