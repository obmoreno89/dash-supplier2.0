import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sinlogo from '../images/Sinlogo.png';
import Transition from '../utils/Transition';
import icons from '../images/icons';

const Logout = ({ align }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const trigger = useRef(null);
  const dropdown = useRef(null);

  let username = localStorage.getItem('first_name');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('first_name');
    localStorage.removeItem('email');
    localStorage.removeItem('supplier_id');
    sessionStorage.clear();

    navigate('/signin');
  }

  return (
    <div className='relative inline-flex'>
      <button
        ref={trigger}
        className='inline-flex justify-center items-center group'
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}>
        <img
          className='w-8 h-8 rounded-full'
          src={Sinlogo}
          width='32'
          height='32'
          alt='User nidata'
        />

        <div className='flex items-center truncate space-x-4'>
          <span className='capitalize truncate ml-2 text-sm font-bold group-hover:text-slate-800'>
            {username}
          </span>
          <img src={icons.smallArrowDown} alt='Flecha abajo' />
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter='transition ease-out duration-200 transform'
        enterStart='opacity-0 -translate-y-2'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}>
          <div className='pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200'>
            <div className='font-medium text-slate-800 capitalize'>
              {username}
            </div>
            <div className='text-xs text-slate-500 italic'>Administrador</div>
          </div>
          <ul>
            <li>
              <Link
                className='font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3'
                to='/company/profile'
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                Mi perfil
              </Link>
            </li>
            <li>
              <button
                className='font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3'
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  Logout();
                }}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default Logout;
