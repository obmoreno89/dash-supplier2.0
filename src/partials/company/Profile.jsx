import React, { useContext } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import StateContext from '../../context/StateContext';
import ProfileUpdateForm from './ProfileUpdateForm';

const Profile = () => {
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
          <ProfileUpdateForm />
        </main>
      </div>
    </div>
  );
};

export default Profile;
