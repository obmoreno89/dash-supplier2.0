import React, { useContext } from 'react';
import PlantListTableItem from './PlantListTableItem';
import StateContext from '../../context/StateContext';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';

const PlantListTable = () => {
  const {
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    plantList,
  } = useContext(StateContext);

  return (
    <div className='bg-white'>
      {bannerSuccessOpen ? (
        <div className='space-y-3'>
          <Banner
            type='success'
            open={bannerSuccessOpen}
            setOpen={setBannerSuccessOpen}>
            operación exitosa. El producto se eliminó.
          </Banner>
        </div>
      ) : bannerErrorOpen ? (
        <div className='space-y-3'>
          <Banner
            type='error'
            open={bannerErrorOpen}
            setOpen={setBannerErrorOpen}>
            Lo sentimos, al parecer tenemos problemas con el servidor vuelva a
            intentar más tarde.
          </Banner>
        </div>
      ) : null}
      {plantList.length ? (
        <div className='mt-24'>
          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              {/* Table header */}
              <thead className='text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200'>
                <tr>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      Nombre de la planta
                    </div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Teléfono</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Tipo de lugar</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Pais</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Estado</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Ciudad</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Opciones</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className='text-sm divide-y divide-slate-200 border-b border-slate-200'>
                {plantList.map((plant) => (
                  <PlantListTableItem
                    key={plant.id}
                    id={plant.id}
                    name={plant.name}
                    phone_contact={plant.phone_contact}
                    type_place={plant.type_place}
                    country={plant.location.country}
                    state={plant.location.state}
                    city={plant.location.city}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='border-t border-slate-200'>
          <div className='max-w-2xl m-auto mt-16'>
            <div className='text-center px-4'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4'>
                <svg className='w-5 h-6 fill-current' viewBox='0 0 20 24'>
                  <path
                    className='text-slate-500'
                    d='M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z'
                  />
                  <path
                    className='text-slate-300'
                    d='M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z'
                  />
                  <path
                    className='text-slate-400'
                    d='M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl text-slate-800 font-bold mb-2'>
                Añade la primera planta de recolección
              </h2>
              <div className='mb-6'>
                Crea las plantas, las cuales implementaran la logística de
                entrega.
              </div>
              <Link to='/products/create'>
                <button className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                  <svg
                    className='w-4 h-4 fill-current opacity-50 shrink-0'
                    viewBox='0 0 16 16'>
                    <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                  </svg>
                  <span className='ml-2'>Añadir Planta</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantListTable;
