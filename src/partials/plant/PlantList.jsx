import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import HeaderGlobal from '../HeaderGlobal';
import { Link } from 'react-router-dom';
import PlantListTable from './PlantListTable';
import PaginationClassic from '../../components/PaginationClassic';
import StateContext from '../../context/StateContext';
import icons from '../../images/icons';

const PlantList = () => {
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
          headerSubTitle='Lista de plantas'
        />

        <main>
          {/* Content */}
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Page header */}
            <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'>
              {/* Left: Title */}
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                  Lista de Plantas
                </h1>
              </div>
            </div>

            {/* Table */}
            <PlantListTable />
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

export default PlantList;
