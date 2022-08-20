import React, { useContext } from 'react';
import EditMenu from '../../components/DropdownEditMenu';
import { Link } from 'react-router-dom';
import StateContext from '../../context/StateContext';

const ProductListTableItem = (props) => {
  const statusColor = (status) => {
    switch (status) {
      case '':
        return 'bg-emerald-100 text-emerald-600';
      case 'Freelancer':
        return 'bg-violet-100 text-red-500';
      case 'Entrevistado':
        return 'bg-yellow-100 text-yellow-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };
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
              <div className='font-medium text-slate-800'>Piedra</div>
            </article>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Agregados</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Piedras amarillas</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Piedra para construcción</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>Piedra para construcción</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>MXN</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>$120.00</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>
            <div
              className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${statusColor(
                status
              )}`}>
              Aprobado
            </div>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
          <div className='flex justify-center items-center'>
            <EditMenu align='right' className='relative inline-flex shrink-0'>
              <li>
                <button
                  type='button'
                  className='font-medium text-sm text-slate-600  hover:text-primary flex py-1 px-3'>
                  Editar producto
                </button>
                <button
                  type='button'
                  className='font-medium text-sm text-slate-600  hover:text-red-500 flex py-1 px-3'>
                  Eliminar producto
                </button>
              </li>
            </EditMenu>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListTableItem;
