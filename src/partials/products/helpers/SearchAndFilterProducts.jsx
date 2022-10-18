import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../images/icons';

function SearchAndFilterProducts() {
  return (
    <>
      <section className='mb-7'>
        <form className='flex justify-between'>
          <section className='flex space-x-4'>
            <div>
              <label className='block text-sm font-semibold mb-1'>
                Buscar Producto:
              </label>
              <input
                autoComplete='false'
                id='action-search'
                className='form-input focus:border-primary'
                type='search'
                placeholder='Nombre o categoria'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-1'>
                Estado:
              </label>
              <select className='form-select focus:border-primary w-full'>
                <option>Borrador</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-semibold mb-1'>Stock:</label>
              <select className='form-select focus:border-primary w-full'>
                <option>Disponible</option>
              </select>
            </div>
          </section>
          <section>
            <Link
              to='products/create'
              className='button-login w-52 flex justify-center items-center space-x-2'>
              <img src={icons.symbolPlus} alt='Simbolo de mas' />
              <span>Añadir Producto</span>
            </Link>
          </section>
        </form>
      </section>
    </>
  );
}

export default SearchAndFilterProducts;
