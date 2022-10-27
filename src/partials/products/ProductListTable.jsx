import React, { useContext } from 'react';
import ProductListTableItem from './ProductListTableItem';
import StateContext from '../../context/StateContext';
import Banner from '../../components/Banner';
import NoTable from '../plant/helpers/NoTable';
import icons from '../../images/icons';
import SearchAndFilterProducts from './helpers/SearchAndFilterProducts';
import { Link } from 'react-router-dom';

const ProductListTable = () => {
  const {
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    productList,
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
      {productList.length ? (
        <div className=' mt-24 '>
          <SearchAndFilterProducts />
          <div className='overflow-x-auto rounded-xl border'>
            <table className='table-auto w-full'>
              {/* Table header */}
              <thead className='text-xs font-semibold capitalize text-slate-500 border-b border-slate-200'>
                <tr>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Producto</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Marca</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Descripción</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Moneda</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Precio</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Estado</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Stock</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Opciones</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-slate-200 border-b border-slate-200'>
                {productList.map((product) => (
                  <ProductListTableItem
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    category={product.category}
                    mark={product.mark}
                    short_description={product.short_description}
                    currency_badge={product.currency.badge}
                    price={product.price}
                    state_publication={product.state_publication}
                    has_stock={product.has_stock}
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
            noticeTitle='No tienes productos para mostrar'
            noticeSubTitle='Añade tus productos haciendo click aquí debajo'
          />
          <section className='flex justify-center items-start'>
            <Link
              to='/products/create'
              className='flex justify-center items-center w-1/2'>
              <button className='mt-3 w-1/2 h-12 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:text-primary flex justify-center items-center'>
                <img src={icons.symbolPlus} alt='Simbolo de suma' />
                <span className='ml-2'>Añadir producto</span>
              </button>
            </Link>
          </section>
        </>
      )}
    </div>
  );
};

export default ProductListTable;
