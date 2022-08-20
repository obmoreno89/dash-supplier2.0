import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function DropdownEditMenuPencil({
  dropdownOpen,
  setDropdownOpen,
  children,
  align,
  ...rest
}) {
  const trigger = useRef(null);
  const dropdown = useRef(null);

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

  return (
    <div {...rest}>
      <button
        ref={trigger}
        className={`bg-white text-slate-400 w-8 h-8 hover:text-slate-500 rounded-full shadow-md flex justify-center items-center ${
          dropdownOpen && 'bg-slate-100 text-slate-500'
        }`}
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}>
        <span className='sr-only'>Pencil</span>
        <svg className='w-5 h-5 fill-current shrink-0' viewBox='0 0 16 16'>
          <path d='M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z' />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag='div'
        className={`origin-top-right z-10 absolute top-full min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter='transition ease-out duration-200 transform'
        enterStart='opacity-0 -translate-y-2'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'>
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}>
          {children}
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownEditMenuPencil;
