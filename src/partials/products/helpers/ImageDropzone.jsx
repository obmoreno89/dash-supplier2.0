import React, { useCallback, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 4,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
  cursor: 'pointer',
  width: '100%',
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

function ImageDropzone({ files, setFiles }) {
  console.log(files);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
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
    accept: 'image/*',
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

  const thumbs = files.map((file) => (
    <div className='mt-5' key={file.name}>
      <p className='mt-3 font-semibold text-center'>Vista previa</p>
      <img className='w-44 mt-2' src={file.preview} alt={file.name} />
      <p className='text-center'>{file.name}</p>
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <section className='flex flex-col justify-center items-center w-full'>
      <label {...getRootProps({ style })}>
        <div className='flex flex-col justify-center items-center pt-5 pb-6'>
          <svg
            aria-hidden='true'
            className='mb-3 w-10 h-10 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
          </svg>
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold'>
            Click para cargar imagen o arrastra y suelta
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            Puedes cambiar tu imagen haciendo las mismas indicaciones
          </p>
        </div>
        <input {...getInputProps()} />
      </label>

      <aside>{thumbs}</aside>
    </section>
  );
}

export default ImageDropzone;
