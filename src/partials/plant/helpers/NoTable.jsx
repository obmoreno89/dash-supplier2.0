import React from 'react';
import { Link } from 'react-router-dom';

function NoTable({ icon, noticeTitle, noticeSubTitle }) {
  return (
    <section className='mt-40'>
      <section className='max-w-2xl m-auto mt-16'>
        <div className='text-center px-4'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4'>
            <img src={icon} alt='Cubo' />
          </div>
          <h2 className='text-2xl text-slate-800 font-bold mb-2'>
            {noticeTitle}
          </h2>
          <div className='mb-6'>{noticeSubTitle}</div>
        </div>
      </section>
    </section>
  );
}

export default NoTable;
