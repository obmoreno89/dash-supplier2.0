import React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import './styles.css';

import * as S from './styles';

const validationSchema = Yup.object().shape({
  file: Yup.mixed(),
  name: Yup.string().required(),
});

export default function App() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [submitedString, setSubmitedString] = React.useState('');
  const { register, errors, handleSubmit, control, setValue } = useForm({
    validationSchema,
  });
  const { acceptedFiles, getRootProps, getInputProps, isDragAccept } =
    useDropzone({
      onDrop: (files) => {
        setValue('file', files);
      },
    });

  React.useEffect(() => {
    register({ name: 'file' });
  }, []);

  React.useEffect(() => {
    setSelectedFile(acceptedFiles[0]);
  }, [acceptedFiles]);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitedString(JSON.stringify(data));
  };

  return (
    <div className='App'>
      <h1>React Hook Form With React Dropzone</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selectedFile && (
          <S.SelectedFileContainer>
            <S.ClearFile
              onClick={() => setSelectedFile(null)}
              title='Remove file'
            />
            <S.SelectedFile>{selectedFile.path}</S.SelectedFile>
          </S.SelectedFileContainer>
        )}

        {!selectedFile && (
          <>
            <S.Dropzone
              isDragAccept={isDragAccept}
              {...getRootProps({ onClick: (e) => e.preventDefault() })}>
              <p>Drag 'n' drop file here, or click to select file</p>
              {/* <Controller
                as={<input />}
                type="file"
                name="file"
                control={control}
                {...getInputProps()}
              /> */}
              <input
                type='file'
                name='file'
                // onChange={e => changeFile(e)}
                {...getInputProps()}
              />
            </S.Dropzone>
            {errors.file && (
              <S.ErrorMessage>{errors.file.message}</S.ErrorMessage>
            )}
          </>
        )}

        <S.Input
          type='text'
          name='name'
          placeholder='File name'
          ref={register}
        />
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
        <S.Button type='submit'>SEND</S.Button>
      </form>
      <p style={{ marginTop: '30px' }}>{submitedString}</p>
    </div>
  );
}
