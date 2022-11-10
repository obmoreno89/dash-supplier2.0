import React, { useContext } from 'react';
import ModalPlantDelete from './helpers/ModalPlantDelete';
import StateContext from '../../context/StateContext';
import { Link } from 'react-router-dom';
import icons from '../../images/icons';

const PlantListTableItem = (props) => {
  const { setDangerModalOpen } = useContext(StateContext);
  return (
    <>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
          <div className='flex items-center'>
            <article className='capitalize flex space-x-1'>
              <p className='font-semibold text-slate-800'>{props.name}</p>
            </article>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left font-semibold '>{props.phone_contact}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left'>{props.type_place}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center font-semibold'>{props.country}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center font-semibold'>{props.state}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>{props.city}</p>
        </td>
        <td className='px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
          <div className='flex justify-center items-center space-x-2'>
            <Link
              to={`/plant/update/${props.id}`}
              className='font-semibold text-slate-600 hover:border-b-2 border-slate-500'>
              <img className='w-42' src={icons.pencil} alt='Lapiz' />
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDangerModalOpen(true);
              }}
              className='font-semibold text-red-400 hover:border-b-2 border-slate-500'>
              <img className='w-42' src={icons.trash} alt='bote basura' />
            </button>
          </div>
          {/* {MODAL DELETE PLANT} */}
          <ModalPlantDelete id={props.id} />
        </td>
      </tr>
    </>
  );
};

export default PlantListTableItem;
