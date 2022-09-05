import React, { useContext } from 'react';
import StateContext from '../../context/StateContext';

import ModalProductDelete from './helpers/ModalProductDelete';

const ProductListTableItem = (props) => {
  const { setDangerModalOpen } = useContext(StateContext);

  const statusColor = (status) => {
    switch (status) {
      case 'Estado Borrador':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  const hasStock = () => {
    if (props.has_stock === true) {
      return <span>Disponible</span>;
    } else {
      return <span>Sin producto</span>;
    }
  };

  return (
    <>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2'>
          <div className='flex items-center'>
            <div className='bg-no-repeat bg-cover w-14 h-14 shrink-0 mr-2 sm:mr-3 flex justify-center items-center'>
              <div className='space-y-3'>
                {props.image.length ? (
                  <img
                    className='rounded-md '
                    src={props.image}
                    width='72'
                    height='72'
                    alt='foto de perfil'
                  />
                ) : (
                  <div className='uppercase rounded-full bg-primary w-10 h-10 flex justify-center items-center text-2xl text-white font-bold'>
                    📦{' '}
                  </div>
                )}
              </div>
            </div>
            <article className='capitalize flex space-x-1'>
              <div className='font-medium text-slate-800'>{props.name}</div>
            </article>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-center'>{props.category}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.mark}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>{props.short_description}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-center'>{props.currency_badge}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>${props.price}</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-left'>
            <div
              className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${statusColor(
                props.state_publication
              )}`}>
              {props.state_publication}
            </div>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='text-center'>{hasStock()}</div>
        </td>
        <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
          <div className='flex justify-center items-center'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDangerModalOpen(true);
              }}
              className='font-semibold text-red-400 hover:border-b-2 border-slate-500'>
              Eliminar
            </button>
            {/* {MODAL DELETE PRODUCT} */}
            <ModalProductDelete id={props.id} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListTableItem;
