import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import HeaderGlobal from '../HeaderGlobal';
import StateContext from '../../context/StateContext';
import PlantUpdateForm from './PlantUpdateForm';
import icons from '../../images/icons';

const PlantUpdate = () => {
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
          headerSubTitle='Editar planta de recolección'
        />

        <main>
          <PlantUpdateForm />
        </main>
      </div>
    </div>
  );
};

export default PlantUpdate;
