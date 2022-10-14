import React from 'react';
import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../pages/Logout';

function HeaderGlobal({
  sidebarOpen,
  setSidebarOpen,
  headerTitle,
  icons,
  arrowIcon,
  headerSubTitle,
}) {
  return (
    <header className='sticky top-0 z-30'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 -mb-px'>
          {/* Header: Left side */}
          <div className='flex'>
            {/* Hamburger button */}
            <figure className='flex space-x-3'>
              <img src={icons} alt='Caja' />
              <h5 className='font-semibold text-gray-400 flex space-x-3'>
                {headerTitle}
                <img className='ml-3' src={arrowIcon} alt='Flecha derecha' />
                <p className='text-primary'>{headerSubTitle}</p>
              </h5>
            </figure>
            <button
              className='text-slate-500 hover:text-slate-600 lg:hidden'
              aria-controls='sidebar'
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='4' y='5' width='16' height='2' />
                <rect x='4' y='11' width='16' height='2' />
                <rect x='4' y='17' width='16' height='2' />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className='flex items-center space-x-3'>
            <Help align='right' />
            {/*  Divider */}
            <hr />
            <UserMenu align='right' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderGlobal;
