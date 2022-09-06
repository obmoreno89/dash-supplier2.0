import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import sinLogo from '../../../images/Sinlogo.png';

const baseStyle = {
  padding: '20px',
  width: '80px',
  height: '10px',
  borderRadius: 4,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#D8F6F0',
  color: '#0DB1AC',
  transition: 'border .3s ease-in-out',
  cursor: 'pointer',
};

const activeStyle = {
  borderColor: '#0DB1AC',
};

const acceptStyle = {
  borderColor: '#0DB1AC',
};

const rejectStyle = {
  borderColor: '#0DB1AC',
};

function LogoDropzone({ logo, setLogo, supplierData }) {
  const onDrop = useCallback((acceptedFiles) => {
    setLogo(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    multiple: false,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = logo.map((file) => (
    <div key={file.name}>
      <img
        className='rounded-full w-20 h-20 bg-no-repeat bg-cover'
        src={file.preview}
        alt='Logo'
      />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      logo.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [logo]
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const containerLogo = () => {
    if (logo.length) {
      return <aside>{thumbs}</aside>;
    } else if (supplierData) {
      return (
        <div className='mr-1'>
          <img
            name='img_product'
            className='w-20 h-20 rounded-full'
            src={supplierData}
            width='80'
            height='80'
            alt='User upload'
          />
        </div>
      );
    } else {
      return (
        <div className='mr-1'>
          <img
            name='img_product'
            className='w-20 h-20 rounded-full'
            src={sinLogo}
            width='80'
            height='80'
            alt='User upload'
          />
        </div>
      );
    }
  };

  return (
    <section className='flex flex-row-reverse justify-end items-center'>
      <div
        className='flex justify-center items-center ml-5'
        {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className='text-sm font-semibold'>Cambiar</p>
      </div>
      <div>
        <div>{containerLogo()}</div>
      </div>
    </section>
  );
}

export default LogoDropzone;