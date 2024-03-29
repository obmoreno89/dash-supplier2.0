import React, { useContext } from 'react';
import ModalBlank from '../../../../src/components/ModalBlank';
import { useNavigate } from 'react-router-dom';
import StateContext from '../../../context/StateContext';

const ModalConfirmAndReturn = () => {
  const { dangerModalOpen, setDangerModalOpen } = useContext(StateContext);

  const navigate = useNavigate();

  const backPage = () => {
    navigate('/products/list');
    setDangerModalOpen(false);
  };

  return (
    <div className='m-1.5'>
      {/* Start */}
      <ModalBlank
        id='danger-modal'
        modalOpen={dangerModalOpen}
        setModalOpen={setDangerModalOpen}>
        <div className='p-5 flex space-x-4'>
          {/* Icon */}
          <div className='w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100'>
            <svg
              className='w-4 h-4 shrink-0 fill-current text-rose-500'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z' />
            </svg>
          </div>
          {/* Content */}
          <div>
            {/* Modal header */}
            <div className='mb-2'>
              <div className='text-lg font-semibold text-slate-800'>
                ¿Seguro que quieres dejar esta página?
              </div>
            </div>
            {/* Modal content */}
            <div className='text-sm mb-10'>
              <div className='space-y-2'>
                <p>
                  Se perderán todos los datos capturados y no podrás
                  recuperarlos.
                </p>
              </div>
            </div>
            {/* Modal footer */}
            <div className='flex flex-wrap justify-end space-x-2'>
              <button
                className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
                onClick={(e) => {
                  e.stopPropagation();
                  setDangerModalOpen(false);
                }}>
                Continuar con la captura
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  backPage();
                }}
                type='button'
                className='btn-sm bg-rose-500 hover:bg-rose-600 text-white'>
                Sí, quiero salir
              </button>
            </div>
          </div>
        </div>
      </ModalBlank>
      {/* End */}
    </div>
  );
};

export default ModalConfirmAndReturn;
