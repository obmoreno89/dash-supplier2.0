import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../images/icons';

function SearchAndFilterPlants() {
  return (
    <section className='mb-7'>
      <form className='flex justify-between'>
        <section className='flex space-x-4'>
          <div>
            <label className='block text-sm font-semibold mb-1'>
              Buscar Planta:
            </label>
            <input
              autoComplete='false'
              id='action-search'
              className='form-input focus:border-primary'
              type='search'
              placeholder='Nombre de la planta'
            />
          </div>
        </section>
        <section>
          <Link
            to='/products/create'
            className='button-login w-52 flex justify-center items-center space-x-2'>
            <img src={icons.symbolPlus} alt='Simbolo de mas' />
            <span>Añadir planta</span>
          </Link>
        </section>
      </form>
    </section>
  );
}

export default SearchAndFilterPlants;
