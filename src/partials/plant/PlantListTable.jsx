import React, { useContext } from 'react';
import PlantListTableItem from './PlantListTableItem';
import StateContext from '../../context/StateContext';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import NoTable from './helpers/NoTable';
import icons from '../../images/icons';
import SearchAndFilterPlants from './helpers/SearchAndFilterPlants';

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
          <SearchAndFilterPlants />
          <div className='overflow-x-auto rounded-xl border'>
            <table className='table-auto w-full'>
              {/* Table header */}
              <thead className='text-xs font-semibold text-slate-500 border-t border-b border-slate-200'>
                <tr>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      Nombre de la planta
                    </div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-left'>Teléfono</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-left'>Tipo de lugar</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Pais</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Estado</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Ciudad</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Opciones</p>
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
                    type_place={plant.type_place.type_place}
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
        <>
          <NoTable
            icon={icons.figureFrame}
            noticeTitle='Añade la primera planta de recolección'
            noticeSubTitle='Crea las plantas, las cuales implementaran la logística de entrega.'
          />
          <section className='flex justify-center items-start'>
            <Link
              to='/plant/create'
              className='flex justify-center items-center w-1/2'>
              <button className='mt-3 w-1/2 h-12 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:text-primary flex justify-center items-center'>
                <img src={icons.symbolPlus} alt='Simbolo de suma' />
                <span className='ml-2'>Añadir planta</span>
              </button>
            </Link>
          </section>
        </>
      )}
    </div>
  );
};

export default PlantListTable;
