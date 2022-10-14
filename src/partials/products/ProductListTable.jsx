import React, { useContext } from 'react';
import ProductListTableItem from './ProductListTableItem';
import StateContext from '../../context/StateContext';
import Banner from '../../components/Banner';
import NoTable from './helpers/NoTable';
import icons from '../../images/icons';

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
      {!productList.length ? (
        <div className=' mt-24 '>
          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              {/* Table header */}
              <thead className='text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200'>
                <tr>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      Nombre del producto
                    </div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Categoria</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Marca</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Descripción</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      Tipo de moneda
                    </div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Precio</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-center'>Estado</div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <div className='font-semibold text-left'>¿Con stock?</div>
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
        <NoTable
          icon={icons.figureFrame}
          noticeTitle='No tienes productos para mostrar'
          noticeSubTitle='Añade tus productos haciendo click aquí debajo'
          buttonTitle='Añadir Producto'
          symbol={icons.symbolPlus}
        />
      )}
    </div>
  );
};

export default ProductListTable;
