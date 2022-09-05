import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ModalConfirmAndReturn from './helpers/ModalConfirmAndReturn';
import Banner from '../../components/Banner';
import LoadingButton from '../../helpers/LoadingButton';
import StateContext from '../../context/StateContext';
import ImageDropzone from './helpers/ImageDropzone';

const CreateProductForm = () => {
  const [preview, setPreview] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const supplierId = localStorage.getItem('supplier_id');

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      img_product: files,
    },
  });

  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    setProductReload,
    requiredFile,
    setRequiredFile,
  } = useContext(StateContext);

  const submit = (data) => console.log(data);

  const newProduct = async (data) => {
    let formData = new FormData();
    formData.append('category_id ', data.category_id);
    formData.append('unity_id', data.unity_id);
    formData.append('name', data.name);
    formData.append('short_description', data.short_description);
    formData.append('description ', data.description);
    formData.append('mark ', data.mark);
    formData.append('currency_id ', data.currency_id);
    formData.append('price ', data.price);
    formData.append('img_product', files[0]);

    fetch(
      `http://supplier.hubmine.mx/api/suppliers/product/create/${supplierId}/`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((response) => {
      if (response.status === 201) {
        setBannerSuccessOpen(true);

        setLoading(true);
        setTimeout(() => {
          setBannerSuccessOpen(false);
          setLoading(false);
          navigate('/products/list');
        }, 1500);
      } else {
        setRequiredFile(true);
        setBannerErrorOpen(true);
        setLoading(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
          setLoading(false);
          setRequiredFile(false);
        }, 1500);
      }
      setProductReload(true);
    });
  };

  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Page header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Añadir Productos 📦
          </h1>
        </div>
        {/* BANNER SUCCESS AND ERROR */}
        {bannerSuccessOpen ? (
          <div className='space-y-3'>
            <Banner
              type='success'
              open={bannerSuccessOpen}
              setOpen={setBannerSuccessOpen}>
              Operación exitosa. Redirigiendo...
            </Banner>
          </div>
        ) : bannerErrorOpen ? (
          <div className='space-y-3'>
            <Banner
              type='error'
              open={bannerErrorOpen}
              setOpen={setBannerErrorOpen}>
              Debe de cargar una imagen del producto.
            </Banner>
          </div>
        ) : null}

        <div className='border-t border-slate-200'></div>
        <div className='space-y-8 mt-8'>
          <article className='mt-10'>
            <h2 className='text-2xl text-slate-800 font-bold mb-6'>
              Datos del producto
            </h2>
            <div className='border-t border-slate-200'></div>
          </article>
          <form onSubmit={handleSubmit(newProduct)}>
            <section className='grid gap-5 md:grid-cols-3'>
              <div>
                {/* PRODUCT NAME */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Nombre del producto<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    maxLength='30'
                    className='form-input w-full '
                    autoComplete='off'
                    type='text'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />
                  {errors.name && (
                    <span className='text-red-500 text-sm'>
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* CATEGORY PRODUCT */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Categoria del producto
                    <span className='text-rose-500'>*</span>
                  </label>
                  <select
                    className='form-select w-full'
                    {...register('category_id', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}>
                    <option value=''>Selecciona</option>
                    <option value='1'>Agregado</option>
                    <option value='2'>Cemento</option>
                    <option value='3'>Concreto</option>
                    <option value='4'>Maquinaria</option>
                    <option value='5'>Prefabricados</option>
                    <option value='6'>Sanitarios</option>
                    <option value='7'>Lavados</option>
                    <option value='8'>Pisos</option>
                    <option value='9'>Acero</option>
                  </select>
                  {errors.category_id && (
                    <span className='text-red-500 text-sm'>
                      {errors.category_id.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* SHORT DESCRIPTION */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Breve descripción<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    maxLength='35'
                    className='form-input w-full'
                    autoComplete='off'
                    type='text'
                    {...register('short_description', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />{' '}
                  {errors.short_description && (
                    <span className='text-red-500 text-sm'>
                      {errors.short_description.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <article className='mt-10'>
              <h2 className='text-2xl text-slate-800 font-bold mb-6'>
                Precio y marca
              </h2>
              <div className='border-t border-slate-200'></div>
            </article>
            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              {/* CURRENCY TYPE */}
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Moneda
                  <span className='text-rose-500'>*</span>
                </label>
                <select
                  className='form-select w-full'
                  {...register('currency_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}>
                  <option value=''>Selecciona</option>
                  <option value='1'>Peso mexicano</option>
                </select>
                {errors.currency_id && (
                  <span className='text-red-500 text-sm'>
                    {errors.currency_id.message}
                  </span>
                )}
              </div>
              <div>
                {/* PRODUCT PRICE */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Precio del producto<span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      maxLength='10'
                      autoComplete='off'
                      className='form-input w-full pl-8'
                      type='text'
                      {...register('price', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9/]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    <div className='absolute inset-0 right-auto flex items-center pointer-events-none'>
                      <span className='text-sm text-slate-400 font-medium px-3'>
                        $
                      </span>
                    </div>
                  </div>
                </div>
                {errors.price && (
                  <span className='text-red-500 text-sm'>
                    {errors.price.message}
                  </span>
                )}
              </div>
              {/* PRODUCT MARK */}
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Marca del producto<span className='text-rose-500'>*</span>
                </label>
                <input
                  maxLength='35'
                  className='form-input w-full'
                  autoComplete='off'
                  type='text'
                  {...register('mark', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />{' '}
                {errors.mark && (
                  <span className='text-red-500 text-sm'>
                    {errors.mark.message}
                  </span>
                )}
              </div>

              {/* UNITY PRODUCT */}
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Unidad de medida
                  <span className='text-rose-500'>*</span>
                </label>
                <select
                  className='form-select w-full'
                  {...register('unity_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}>
                  <option value=''>Selecciona</option>
                  <option value='1'>Tonelada</option>
                  <option value='2'>Metro cúbico</option>
                  <option value='3'>Unidad</option>
                  <option value='4'>Kilogramo</option>
                </select>
                {errors.unity_id && (
                  <span className='text-red-500 text-sm'>
                    {errors.unity_id.message}
                  </span>
                )}
              </div>
            </section>

            <article className='mt-10'>
              <h2 className='text-2xl text-slate-800 font-bold mb-6'>
                Descripción e Imagen
              </h2>
              <div className='border-t border-slate-200'></div>
            </article>
            <section className='mt-8'>
              <div>
                {/* SHORT DESCRIPTION */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Descripción del producto (función, objetivo, etc)
                    <span className='text-rose-500'>*</span>
                  </label>
                  <textarea
                    maxLength='150'
                    className='form-input w-full'
                    type='text'
                    autoComplete='off'
                    {...register('description', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      maxLength: {
                        value: 150,
                        message: 'soló se permiten 150 caracteres',
                      },
                    })}
                  />
                  {errors.description && (
                    <span className='text-red-500 text-sm'>
                      {errors.description.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <section>
              {/* INPUT SUBMIT FILE */}
              <div className='mt-8 w-full'>
                <ImageDropzone
                  files={files}
                  setFiles={setFiles}
                  {...register('img_product', {
                    required: {
                      value: false,
                      message: 'El campo es requerido',
                    },
                  })}
                  onChange={setValue('img_product', files)}
                />
              </div>
            </section>
            <section className='w-full flex space-x-6 justify-center items-center mt-10'>
              <div className='m-1.5'>
                {loading ? (
                  <LoadingButton />
                ) : (
                  <>
                    <button
                      type='submit'
                      className='btn bg-emerald-500 hover:bg-emerald-600 text-white'>
                      Guardar
                    </button>
                  </>
                )}
              </div>
              <div className='m-1.5'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDangerModalOpen(true);
                    cleanProductImage();
                  }}
                  type='button'
                  className='btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50'>
                  Cancelar
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      {/* MODAL CONFIRM */}
      <ModalConfirmAndReturn />
    </>
  );
};

export default CreateProductForm;
