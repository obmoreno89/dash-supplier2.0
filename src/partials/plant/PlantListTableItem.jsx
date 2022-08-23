import React, { useContext } from 'react';

import StateContext from '../../context/StateContext';

const PlantListTableItem = (props) => {
  return (
    <>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2'>
          <div className='flex items-center'>
            <article className='capitalize flex space-x-1'>
              <div className='font-medium text-slate-800'>{props.name}</div>
            </article>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.phone_contact}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.type_place}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.country}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.state}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.city}</div>
        </td>
        <td className='px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
          <div className='flex justify-center items-center space-x-1'>
            <button className='font-semibold text-slate-600 hover:border-b-2 border-slate-500'>
              Editar
            </button>
            <div>|</div>
            <button className='font-semibold text-red-400 hover:border-b-2 border-slate-500'>
              Eliminar
            </button>
            {/* {MODAL DELETE PLANT} */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default PlantListTableItem;
