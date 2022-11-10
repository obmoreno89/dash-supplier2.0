import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import icons from '../../../images/icons';

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

  const thumbs = files.map((file) => (
    <div
      className='mt-5 flex flex-col justify-center items-center'
      key={file.name}>
      <p className='mt-1 font-semibold text-center'>Vista previa</p>
      <img className='w-24 mt-2 ' src={file.preview} alt={file.name} />
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
        <figure className='flex flex-col justify-center items-center pt-5 pb-6'>
          <img
            src={icons.upload}
            className='mb-2 w-10 h-10'
            alt='Cargar archivo'
          />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold'>
            Click para cargar imagen o arrastra y suelta
          </p>
          <br />
          <aside>{thumbs}</aside>
        </figure>
        <input {...getInputProps()} />
      </label>
    </section>
  );
}

export default ImageDropzone;
