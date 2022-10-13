import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StateContext from '../context/StateContext';
import LoadingButton from '../helpers/LoadingButton';
import CreateAccount from '../images/createAccount.jpg';
import icons from '../images/icons';

const ValidationCode = () => {
  const navigate = useNavigate();
  const { errorApi, setErrorApi, savedCode, codeGenerator } =
    useContext(StateContext);

  const [otp, setOtp] = useState(new Array(5).fill(''));
  const [counter, setCounter] = useState(59);
  const [containerChange, setContainerChange] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const deleteCodeLocalStorage = () => sessionStorage.removeItem('code');

  useEffect(() => {
    if (counter) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else if (counter === 0) {
      setContainerChange(true);
    }
  }, [counter]);

  const codeValue = { code: otp.join(''), number: `${savedCode.number}` };

  const phoneUser = savedCode.number;
  const newCode = { number: phoneUser };

  const code = savedCode.code;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  async function codeValidation() {
    return fetch('https://dev.hubmine.mx/api/auth/validate/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(codeValue),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.msg === 'Ok') {
          setButtonLoading(true);
          let result = json;
          sessionStorage.setItem('number', result.number);
          setTimeout(() => {
            setButtonLoading(false);
            navigate('/signup');
          }, 1500);
        } else {
          setErrorApi(true);
          setButtonLoading(true);
          setTimeout(() => {
            setErrorApi(false);
            setButtonLoading(false);
          }, 5000);
        }
      });
  }

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-28'>
                {/* Logo */}
                <Link
                  to='/signin'
                  className='block'
                  onClick={deleteCodeLocalStorage}>
                  <img src={icons.logoSupplier} alt='Logo' />
                </Link>
              </div>
            </div>

            <div className='max-w-lg mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold w-2/3'>
                Escribe el código de verificación
              </h1>
              <div className=' mb-6 text-start flex flex-col'>
                <h5 className='text-md text-slate-800'>
                  Hemos enviado un código a{' '}
                  <span className='text-primary font-bold'>{phoneUser}</span>
                </h5>
                <span className='text-red-500 font-bold'>{code}</span>
              </div>
              <form>
                <div className='space-x-10 mt-5 flex justify-center items-center'>
                  {otp.map((data, index) => {
                    return (
                      <input
                        className='form-input w-12 text-xl text-center'
                        type='text'
                        name='otp'
                        maxLength='1'
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>
                <article className='mt-6 flex flex-col justify-center items-center'>
                  <p className='text-gray-400 text-sm'>¿No lo recibiste?</p>
                  {!containerChange ? (
                    <p className='text-center text-gray-400 font-semibold'>
                      Tu código vence en: {counter} segundos
                    </p>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          codeGenerator(newCode);
                          setContainerChange(false);
                          setCounter(10);
                        }}
                        className='text-sm font-semibold text-primary hover:text-slate-500'>
                        Solicitar código nuevo
                      </button>
                    </div>
                  )}
                </article>
                <div>
                  {buttonLoading ? (
                    <LoadingButton name='Validando código' />
                  ) : (
                    <>
                      <button
                        onClick={codeValidation}
                        type='button'
                        className='button-login'>
                        Validar código
                      </button>
                    </>
                  )}
                </div>
              </form>

              <footer className='pt-5 space-y-6 '>
                <div className='text-sm text-center text-gray-900 font-semibold'>
                  ¿Tienes una cuenta?{' '}
                  <Link
                    onClick={deleteCodeLocalStorage}
                    className='font-semibold text-primary hover:text-secondary'
                    to='/signin'>
                    Inicia sesión aquí
                  </Link>
                </div>
                {errorApi && (
                  <div className='mt-5'>
                    <div className='bg-red-50 text-red-600 px-2 py-2 rounded-2xl'>
                      <svg
                        className='inline w-4 h-4 shrink-0 fill-current mr-2'
                        viewBox='0 0 17 17'>
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className='text-sm'>
                        Código incorrecto, verifica que tu código que te llego
                        en un mensaje SMS sea el correspondiente.
                      </span>
                    </div>
                  </div>
                )}
              </footer>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'>
          <img
            className='object-cover object-center w-full h-full'
            src={CreateAccount}
            width='760'
            height='1024'
            alt='Imagen de fondo'
          />
        </div>
      </div>
    </main>
  );
};

export default ValidationCode;
