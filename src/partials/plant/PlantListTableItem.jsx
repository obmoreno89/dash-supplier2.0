import React, { useContext } from 'react';
import EditMenu from '../../components/DropdownEditMenu';
import { Link, useNavigate } from 'react-router-dom';
import StateContext from '../../context/StateContext';

const PlantListTableItem = () => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2'>
          <div className='flex items-center'>
            <div className='bg-no-repeat bg-cover w-10 h-10 shrink-0 mr-2 sm:mr-3'>
              <div className='space-y-3'>
                {/* ? */}
                {/* <img
                    className='rounded-full '
                    src={props.picture}
                    width='40'
                    height='40'
                    alt='foto de perfil'
                  /> */}
                {/* : */}
                <div className='uppercase rounded-full bg-primary w-10 h-10 flex justify-center items-center text-2xl text-white font-bold'>
                  📦
                </div>
              </div>
            </div>
            <article className='capitalize flex space-x-1'>
              <div className='font-medium text-slate-800'>Hubmine</div>
            </article>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>2721194323</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>ventas@hubmine.com</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Planta mochis</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Mexico</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Monterrey</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
          <div className='flex justify-center items-center'>
            <EditMenu align='right' className='relative inline-flex shrink-0'>
              <li>
                <button
                  onClick={() => navigate('/plant/update')}
                  type='button'
                  className='font-medium text-sm text-slate-600  hover:text-primary flex py-1 px-3'>
                  Editar planta
                </button>
                <button
                  type='button'
                  className='font-medium text-sm text-slate-600  hover:text-red-500 flex py-1 px-3'>
                  Eliminar planta
                </button>
              </li>
            </EditMenu>
          </div>
        </td>
      </tr>
    </>
  );
};

export default PlantListTableItem;
