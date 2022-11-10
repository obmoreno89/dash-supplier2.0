import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import HeaderGlobal from '../HeaderGlobal';
import SettingsSidebar from './SettingsSidebar';
import ProfilePanel from './ProfilePanel';
import StateContext from '../../context/StateContext';
import icons from '../../images/icons';

const Profile = () => {
  const { sidebarOpen, setSidebarOpen, companyName } = useContext(StateContext);

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
          headerTitle='Mi compañia'
          icons={icons.myCompany}
          arrowIcon={icons.smallArrowDown}
          headerSubTitle={companyName}
        />

        <main className='bg-white'>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Page header */}
            <div className='mb-8'>
              {/* Title */}
              <h1 className='capitalize text-2xl md:text-3xl text-slate-800 font-bold'>
                {companyName}
              </h1>
            </div>

            {/* Content */}
            <div className='bg-white rounded-sm mb-8'>
              <div className='flex flex-col md:flex-row md:-mr-px space-x-3'>
                <SettingsSidebar />
                <ProfilePanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
