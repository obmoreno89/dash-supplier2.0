import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed∏
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}

        
        {sidebarExpanded ?   <NavLink end to="/" className="block">
            
            <svg width="143" height="32" viewBox="0 0 143 32" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z" fill="#0DB1AC"/>
 <path d="M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z" fill="white"/>
 <path d="M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z" fill="#D8F6F0"/>
 <path d="M39.8646 25.0601V7.77038H43.5201V14.9041H50.9408V7.77038H54.5879V25.0601H50.9408V17.9179H43.5201V25.0601H39.8646ZM65.8498 19.5388V12.0928H69.4462V25.0601H65.9934V22.7046H65.8583C65.5656 23.4645 65.0788 24.0752 64.3978 24.5366C63.7224 24.9981 62.8978 25.2288 61.9242 25.2288C61.0574 25.2288 60.2948 25.0319 59.6364 24.6379C58.9779 24.244 58.4629 23.684 58.0914 22.958C57.7255 22.2319 57.5398 21.3624 57.5342 20.3492V12.0928H61.1305V19.7076C61.1362 20.4731 61.3416 21.0781 61.7469 21.5227C62.1521 21.9674 62.6952 22.1897 63.3762 22.1897C63.8097 22.1897 64.2149 22.0912 64.5919 21.8942C64.969 21.6916 65.2729 21.3933 65.5036 20.9993C65.7401 20.6053 65.8555 20.1185 65.8498 19.5388ZM72.3904 25.0601V7.77038H75.9868V14.2709H76.0965C76.2542 13.922 76.482 13.5674 76.7804 13.2072C77.0843 12.8414 77.4783 12.5375 77.9623 12.2954C78.4519 12.0477 79.0598 11.924 79.7859 11.924C80.7314 11.924 81.6037 12.1716 82.4029 12.6669C83.2021 13.1565 83.8409 13.8966 84.3193 14.8872C84.7977 15.8721 85.0369 17.1075 85.0369 18.5933C85.0369 20.0398 84.8034 21.2611 84.3362 22.2572C83.8747 23.2477 83.2444 23.9991 82.4452 24.5113C81.6515 25.0178 80.7623 25.2711 79.7774 25.2711C79.0795 25.2711 78.4857 25.1557 77.9961 24.9249C77.5121 24.6942 77.1153 24.4044 76.8057 24.0554C76.4962 23.7009 76.2598 23.3435 76.0965 22.9833H75.9362V25.0601H72.3904ZM75.9108 18.5764C75.9108 19.3475 76.0178 20.02 76.2316 20.5941C76.4454 21.1682 76.755 21.6156 77.1602 21.9364C77.5656 22.2516 78.0579 22.4092 78.6377 22.4092C79.223 22.4092 79.7182 22.2487 80.1236 21.9281C80.5288 21.6016 80.8355 21.1513 81.0437 20.5772C81.2576 19.9975 81.3645 19.3305 81.3645 18.5764C81.3645 17.8278 81.2603 17.1694 81.0522 16.601C80.8439 16.0325 80.5372 15.5878 80.1319 15.267C79.7267 14.9462 79.2286 14.7859 78.6377 14.7859C78.0524 14.7859 77.5571 14.9407 77.1519 15.2501C76.7523 15.5597 76.4454 15.9987 76.2316 16.5672C76.0178 17.1356 75.9108 17.8054 75.9108 18.5764Z" fill="white"/>
 <path d="M87.4367 25.0601V12.0928H90.8642V14.3807H91.0162C91.2863 13.6209 91.7365 13.0214 92.3669 12.5825C92.9973 12.1435 93.7515 11.924 94.6295 11.924C95.5188 11.924 96.2757 12.1463 96.9004 12.5908C97.5252 13.0298 97.9416 13.6264 98.1499 14.3807H98.2849C98.5494 13.6378 99.0278 13.044 99.7202 12.5993C100.418 12.149 101.243 11.924 102.194 11.924C103.404 11.924 104.386 12.3095 105.14 13.0806C105.9 13.8459 106.28 14.9322 106.28 16.3392V25.0601H102.692V17.0483C102.692 16.328 102.5 15.7877 102.118 15.4275C101.735 15.0672 101.257 14.8872 100.683 14.8872C100.03 14.8872 99.5203 15.0955 99.1545 15.5119C98.7886 15.9228 98.6057 16.4659 98.6057 17.1413V25.0601H95.1191V16.9724C95.1191 16.3365 94.9362 15.8299 94.5703 15.4529C94.2102 15.0757 93.7346 14.8872 93.1437 14.8872C92.744 14.8872 92.3838 14.9885 92.063 15.1911C91.7479 15.388 91.4974 15.6667 91.3117 16.0269C91.126 16.3815 91.0331 16.7979 91.0331 17.2763V25.0601H87.4367ZM109.121 25.0601V12.0928H112.717V25.0601H109.121ZM110.927 10.4213C110.393 10.4213 109.934 10.244 109.551 9.88939C109.174 9.52923 108.986 9.09866 108.986 8.59771C108.986 8.10243 109.174 7.67755 109.551 7.32293C109.934 6.96276 110.393 6.78261 110.927 6.78261C111.462 6.78261 111.918 6.96276 112.295 7.32293C112.678 7.67755 112.869 8.10243 112.869 8.59771C112.869 9.09866 112.678 9.52923 112.295 9.88939C111.918 10.244 111.462 10.4213 110.927 10.4213ZM119.194 17.5634V25.0601H115.598V12.0928H119.025V14.3807H119.177C119.464 13.6264 119.946 13.0298 120.621 12.5908C121.296 12.1463 122.115 11.924 123.078 11.924C123.978 11.924 124.763 12.1209 125.433 12.5149C126.103 12.9089 126.623 13.4718 126.995 14.2033C127.366 14.9293 127.552 15.7961 127.552 16.8036V25.0601H123.956V17.4452C123.961 16.6516 123.759 16.0325 123.348 15.5879C122.937 15.1376 122.371 14.9126 121.651 14.9126C121.167 14.9126 120.739 15.0166 120.368 15.2249C120.002 15.4331 119.715 15.7371 119.507 16.1366C119.304 16.5306 119.2 17.0062 119.194 17.5634ZM136.296 25.3134C134.962 25.3134 133.814 25.0432 132.852 24.5029C131.895 23.957 131.158 23.1859 130.64 22.1897C130.122 21.1879 129.863 20.0032 129.863 18.6356C129.863 17.3016 130.122 16.1309 130.64 15.1236C131.158 14.1162 131.886 13.331 132.826 12.7682C133.772 12.2053 134.881 11.924 136.153 11.924C137.008 11.924 137.804 12.0619 138.542 12.3376C139.285 12.6077 139.932 13.0158 140.483 13.5617C141.041 14.1077 141.474 14.7944 141.784 15.6217C142.093 16.4434 142.248 17.4057 142.248 18.5089V19.4966L133.417 19.505V17.2678H138.863C138.863 16.7501 138.75 16.2914 138.525 15.8918C138.3 15.4922 137.987 15.1799 137.588 14.9547C137.194 14.724 136.735 14.6085 136.212 14.6085C135.666 14.6085 135.182 14.7352 134.76 14.9885C134.343 15.2361 134.017 15.5709 133.78 15.9931C133.544 16.4096 133.423 16.7557 133.417 17.2678V19.505C133.417 20.1467 133.535 20.7011 133.772 21.1682C134.014 21.6354 134.354 21.9956 134.793 22.2487C135.232 22.5021 135.753 22.6287 136.355 22.6287C136.755 22.6287 137.121 22.5725 137.453 22.4598C137.785 22.3473 138.069 22.1785 138.305 21.9533C138.542 21.7282 138.722 21.4525 138.846 21.126L142.172 21.3455C142.003 22.1447 141.657 22.8425 141.134 23.4391C140.616 24.0302 139.946 24.4916 139.124 24.8237C138.308 25.1501 137.365 25.3134 136.296 25.3134Z" fill="white"/>
 </svg>
 
           </NavLink>: <NavLink end to="/" className="block">
           <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z" fill="#0DB1AC"/>
<path d="M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z" fill="white"/>
<path d="M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z" fill="#D8F6F0"/>
</svg>

           </NavLink> }
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                          (pathname === '/' || pathname.includes('dashboard')) && 'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current text-slate-400 ${
                                  (pathname === '/' || pathname.includes('dashboard')) && '!text-primary'
                                }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${(pathname === '/' || pathname.includes('dashboard')) && 'text-secondary'}`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${(pathname === '/' || pathname.includes('dashboard')) && 'text-white'}`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'transform rotate-180'}`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/"
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                General
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
                 {/* Campaigns */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('campaigns') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/campaigns"
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes('campaigns') && 'hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current text-slate-600 ${pathname.includes('campaigns') && 'text-indigo-500'}`}
                        d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                      />
                      <path
                        className={`fill-current text-slate-400 ${pathname.includes('campaigns') && 'text-indigo-300'}`}
                        d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      One option
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;