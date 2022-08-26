import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Question from '../images/question.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import { useForm } from 'react-hook-form';
import LoadingButton from '../helpers/LoadingButton';
import StateContext from '../context/StateContext';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const submit = (data) => console.log(data);

  const navigate = useNavigate();

  let userId = localStorage.getItem('id');

  const { loading, setLoading, errorMenssage, setErrorMenssage, logout } =
    useContext(StateContext);

  const completeFormStep = () => {
    setStep((cur) => cur + 1);
  };

  const previousFormStep = () => {
    setStep((cur) => cur - 1);
  };

  const cleanLocalStorage = () => {
    localStorage.removeItem('code');
    localStorage.removeItem('number');
    localStorage.removeItem('msg');
  };

  const renderButton = () => {
    if (step > 2) {
      return undefined;
    } else if (step === 2) {
      return (
        <div>
          {loading ? (
            <LoadingButton />
          ) : (
            <button
              type='button'
              disabled={!isValid}
              onClick={handleSubmit(userQuestion)}
              className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'>
              Finalizar -&gt;
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <button
            disabled={!isValid}
            type='button'
            onClick={completeFormStep}
            className='btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none'>
            Siguiente paso -&gt;
          </button>
        </div>
      );
    }
  };

  async function userQuestion(dataMulti) {
    return fetch(`http://supplier.hubmine.mx/api/suppliers/create/${userId}/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataMulti),
    }).then((response) => {
      if (response.status === 201) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/multiStep/end');
        }, 3000);
      } else {
        setErrorMenssage(true);
        setTimeout(() => {
          setErrorMenssage(false);
        }, 3000);
      }
    });
  }
  return (
    <main className='bg-white'>
      <div className='relative flex'>
        {/* Content */}
        <div className='w-full md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            <div className='flex-1'>
              {/* Header */}
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <div className='block'>
                  <svg
                    width='143'
                    height='33'
                    viewBox='0 0 143 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M26.5922 33H5.47462C2.4507 33 0 30.5542 0 27.5363V6.46366C0 3.44579 2.4507 0.99998 5.47462 0.99998H26.5894C29.6134 0.99998 32.0641 3.44579 32.0641 6.46366V27.5363C32.0641 30.5542 29.6134 33 26.5922 33Z'
                      fill='#0DB1AC'
                    />
                    <path
                      d='M24.4351 23.2469H14.2003C12.3865 23.2469 11.2566 21.3538 12.1732 19.8476L17.2906 11.4352C18.1962 9.94556 20.4364 9.94556 21.3447 11.4352L26.4621 19.8476C27.3787 21.3538 26.2489 23.2469 24.4351 23.2469Z'
                      fill='white'
                    />
                    <path
                      d='M17.4347 23.5951H7.54878C5.79867 23.5951 4.70762 21.7656 5.59098 20.3119L10.5339 12.1896C11.409 10.7498 13.5717 10.7498 14.4467 12.1896L19.3897 20.3119C20.2758 21.7683 19.1848 23.5951 17.4347 23.5951Z'
                      fill='#D8F6F0'
                    />
                    <path
                      d='M39.8646 19.06V1.77036H43.5201V8.90407H50.9408V1.77036H54.5879V19.06H50.9408V11.9179H43.5201V19.06H39.8646ZM65.8498 13.5388V6.09274H69.4462V19.06H65.9934V16.7046H65.8583C65.5656 17.4644 65.0788 18.0752 64.3978 18.5366C63.7224 18.9981 62.8978 19.2288 61.9242 19.2288C61.0574 19.2288 60.2948 19.0319 59.6364 18.6379C58.9779 18.244 58.4629 17.684 58.0914 16.9579C57.7255 16.2319 57.5398 15.3624 57.5342 14.3492V6.09274H61.1305V13.7076C61.1362 14.4731 61.3416 15.0781 61.7469 15.5227C62.1521 15.9674 62.6952 16.1897 63.3762 16.1897C63.8097 16.1897 64.2149 16.0911 64.5919 15.8942C64.969 15.6916 65.2729 15.3933 65.5036 14.9993C65.7401 14.6053 65.8555 14.1185 65.8498 13.5388ZM72.3904 19.06V1.77036H75.9868V8.27091H76.0965C76.2542 7.92197 76.482 7.56735 76.7804 7.20718C77.0843 6.84134 77.4783 6.53743 77.9623 6.29534C78.4519 6.0477 79.0598 5.92395 79.7859 5.92395C80.7314 5.92395 81.6037 6.17159 82.4029 6.66687C83.2021 7.15647 83.8409 7.89661 84.3193 8.88717C84.7977 9.87204 85.0369 11.1075 85.0369 12.5933C85.0369 14.0398 84.8034 15.2611 84.3362 16.2572C83.8747 17.2477 83.2444 17.9991 82.4452 18.5113C81.6515 19.0178 80.7623 19.2711 79.7774 19.2711C79.0795 19.2711 78.4857 19.1557 77.9961 18.9249C77.5121 18.6942 77.1153 18.4044 76.8057 18.0553C76.4962 17.7009 76.2598 17.3435 76.0965 16.9833H75.9362V19.06H72.3904ZM75.9108 12.5764C75.9108 13.3474 76.0178 14.02 76.2316 14.5941C76.4454 15.1682 76.755 15.6155 77.1602 15.9364C77.5656 16.2516 78.0579 16.4092 78.6377 16.4092C79.223 16.4092 79.7182 16.2487 80.1236 15.928C80.5288 15.6015 80.8355 15.1513 81.0437 14.5772C81.2576 13.9975 81.3645 13.3305 81.3645 12.5764C81.3645 11.8278 81.2603 11.1694 81.0522 10.601C80.8439 10.0325 80.5372 9.58782 80.1319 9.26701C79.7267 8.9462 79.2286 8.78586 78.6377 8.78586C78.0524 8.78586 77.5571 8.94065 77.1519 9.2501C76.7523 9.55969 76.4454 9.9987 76.2316 10.5671C76.0178 11.1356 75.9108 11.8053 75.9108 12.5764Z'
                      fill='#2D3139'
                    />
                    <path
                      d='M87.4367 19.0601V6.09276H90.8642V8.38068H91.0162C91.2863 7.62086 91.7365 7.02137 92.3669 6.58249C92.9973 6.14348 93.7515 5.92397 94.6295 5.92397C95.5188 5.92397 96.2757 6.14625 96.9004 6.59081C97.5252 7.02982 97.9416 7.6264 98.1499 8.38068H98.2849C98.5494 7.63776 99.0278 7.04396 99.7202 6.59927C100.418 6.14903 101.243 5.92397 102.194 5.92397C103.404 5.92397 104.386 6.30949 105.14 7.08054C105.9 7.84591 106.28 8.93222 106.28 10.3392V19.0601H102.692V11.0483C102.692 10.328 102.5 9.78766 102.118 9.4275C101.735 9.0672 101.257 8.88718 100.683 8.88718C100.03 8.88718 99.5203 9.09546 99.1545 9.51189C98.7886 9.92277 98.6057 10.4659 98.6057 11.1413V19.0601H95.1191V10.9724C95.1191 10.3364 94.9362 9.82993 94.5703 9.45286C94.2102 9.07565 93.7346 8.88718 93.1437 8.88718C92.744 8.88718 92.3838 8.98848 92.063 9.19109C91.7479 9.38801 91.4974 9.66668 91.3117 10.0269C91.126 10.3815 91.0331 10.7979 91.0331 11.2763V19.0601H87.4367ZM109.121 19.0601V6.09276H112.717V19.0601H109.121ZM110.927 4.42123C110.393 4.42123 109.934 4.24399 109.551 3.88937C109.174 3.52921 108.986 3.09864 108.986 2.59769C108.986 2.10241 109.174 1.67753 109.551 1.32291C109.934 0.962742 110.393 0.782593 110.927 0.782593C111.462 0.782593 111.918 0.962742 112.295 1.32291C112.678 1.67753 112.869 2.10241 112.869 2.59769C112.869 3.09864 112.678 3.52921 112.295 3.88937C111.918 4.24399 111.462 4.42123 110.927 4.42123ZM119.194 11.5634V19.0601H115.598V6.09276H119.025V8.38068H119.177C119.464 7.6264 119.946 7.02982 120.621 6.59081C121.296 6.14625 122.115 5.92397 123.078 5.92397C123.978 5.92397 124.763 6.12089 125.433 6.51487C126.103 6.90885 126.623 7.47175 126.995 8.2033C127.366 8.92931 127.552 9.79611 127.552 10.8036V19.0601H123.956V11.4452C123.961 10.6516 123.759 10.0325 123.348 9.58784C122.937 9.1376 122.371 8.91254 121.651 8.91254C121.167 8.91254 120.739 9.01661 120.368 9.22489C120.002 9.43304 119.715 9.73708 119.507 10.1366C119.304 10.5306 119.2 11.0062 119.194 11.5634ZM136.296 19.3134C134.962 19.3134 133.814 19.0431 132.852 18.5028C131.895 17.957 131.158 17.1859 130.64 16.1897C130.122 15.1879 129.863 14.0032 129.863 12.6356C129.863 11.3016 130.122 10.1309 130.64 9.12359C131.158 8.11613 131.886 7.33095 132.826 6.76819C133.772 6.20529 134.881 5.92397 136.153 5.92397C137.008 5.92397 137.804 6.06185 138.542 6.33763C139.285 6.60772 139.932 7.01583 140.483 7.56169C141.041 8.10768 141.474 8.79433 141.784 9.62164C142.093 10.4434 142.248 11.4057 142.248 12.5089V13.4966L133.417 13.505V11.2678H138.863C138.863 10.7501 138.75 10.2914 138.525 9.89174C138.3 9.49221 137.987 9.17986 137.588 8.95467C137.194 8.72394 136.735 8.60851 136.212 8.60851C135.666 8.60851 135.182 8.73517 134.76 8.98848C134.343 9.23612 134.017 9.57093 133.78 9.99304C133.544 10.4096 133.423 10.7556 133.417 11.2678V13.505C133.417 14.1466 133.535 14.7011 133.772 15.1682C134.014 15.6354 134.354 15.9955 134.793 16.2487C135.232 16.502 135.753 16.6287 136.355 16.6287C136.755 16.6287 137.121 16.5724 137.453 16.4598C137.785 16.3473 138.069 16.1785 138.305 15.9533C138.542 15.7282 138.722 15.4525 138.846 15.126L142.172 15.3455C142.003 16.1446 141.657 16.8425 141.134 17.4391C140.616 18.0301 139.946 18.4916 139.124 18.8236C138.308 19.1501 137.365 19.3134 136.296 19.3134Z'
                      fill='#0DB1AC'
                    />
                    <path
                      d='M40 30.7407V23.1044H41.6145V26.2551H44.8921V23.1044H46.5029V30.7407H44.8921V27.5862H41.6145V30.7407H40ZM47.8341 30.7407V23.1044H50.8468C51.4235 23.1044 51.9157 23.2075 52.3234 23.4138C52.7335 23.6177 53.0455 23.9073 53.2593 24.2826C53.4756 24.6555 53.5836 25.0943 53.5836 25.5989C53.5836 26.106 53.4743 26.5422 53.2555 26.9076C53.0368 27.2706 52.7198 27.549 52.3047 27.7428C51.8921 27.9368 51.3924 28.0337 50.8058 28.0337H48.7886V26.7361H50.5448C50.853 26.7361 51.1091 26.6939 51.3129 26.6094C51.5167 26.5248 51.6684 26.3981 51.7678 26.2291C51.8697 26.06 51.9206 25.8499 51.9206 25.5989C51.9206 25.3453 51.8697 25.1316 51.7678 24.9576C51.6684 24.7836 51.5155 24.6518 51.3092 24.5623C51.1053 24.4703 50.8481 24.4243 50.5374 24.4243H49.4486V30.7407H47.8341ZM51.9579 27.2656L53.8559 30.7407H52.0736L50.2167 27.2656H51.9579ZM61.2974 25.3005C61.2676 24.9998 61.1396 24.7662 60.9134 24.5996C60.6871 24.433 60.3801 24.3498 59.9924 24.3498C59.7288 24.3498 59.5064 24.387 59.3249 24.4616C59.1434 24.5337 59.0042 24.6344 58.9073 24.7636C58.8128 24.8929 58.7656 25.0395 58.7656 25.2036C58.7607 25.3404 58.7892 25.4597 58.8514 25.5616C58.916 25.6636 59.0043 25.7517 59.1161 25.8263C59.228 25.8984 59.3572 25.9618 59.5039 26.0165C59.6505 26.0687 59.8071 26.1135 59.9737 26.1508L60.6598 26.3148C60.9929 26.3894 61.2986 26.4888 61.577 26.613C61.8554 26.7374 62.0966 26.8903 62.3004 27.0718C62.5043 27.2532 62.6621 27.4669 62.774 27.7131C62.8883 27.9591 62.9467 28.2413 62.9492 28.5594C62.9467 29.0268 62.8274 29.432 62.5913 29.775C62.3576 30.1155 62.0195 30.3803 61.577 30.5692C61.137 30.7557 60.6063 30.8489 59.9849 30.8489C59.3685 30.8489 58.8314 30.7544 58.3741 30.5655C57.9192 30.3765 57.5637 30.097 57.3077 29.7265C57.0542 29.3537 56.9211 28.8925 56.9088 28.3432H58.4711C58.4885 28.5992 58.5617 28.813 58.691 28.9846C58.8227 29.1536 58.998 29.2816 59.2168 29.3686C59.4381 29.4531 59.6879 29.4954 59.9663 29.4954C60.2397 29.4954 60.4771 29.4556 60.6784 29.376C60.8823 29.2965 61.0401 29.1858 61.152 29.0442C61.2639 28.9025 61.3198 28.7397 61.3198 28.5557C61.3198 28.3843 61.2688 28.24 61.1669 28.1232C61.0674 28.0064 60.9208 27.907 60.7269 27.8249C60.5355 27.7429 60.3006 27.6683 60.0222 27.6012L59.1907 27.3924C58.5469 27.2358 58.0386 26.9909 57.6657 26.6578C57.2928 26.3247 57.1076 25.876 57.1101 25.3118C57.1076 24.8494 57.2306 24.4455 57.4792 24.0999C57.7303 23.7544 58.0745 23.4847 58.512 23.2908C58.9496 23.0969 59.4467 23 60.0035 23C60.5703 23 61.065 23.0969 61.4876 23.2908C61.9126 23.4847 62.2433 23.7544 62.4794 24.0999C62.7155 24.4455 62.8373 24.8457 62.8448 25.3005H61.2974ZM64.986 32.8885C64.7847 32.8885 64.5957 32.8723 64.4193 32.84C64.2453 32.8101 64.101 32.7717 63.9867 32.7244L64.3447 31.5387C64.5311 31.5959 64.6989 31.627 64.848 31.6319C64.9997 31.6369 65.1302 31.602 65.2395 31.5275C65.3514 31.4529 65.4422 31.3261 65.5118 31.1472L65.605 30.9048L63.5505 25.0135H65.2209L66.4067 29.2194H66.4663L67.6632 25.0135H69.3449L67.1188 31.3597C67.0119 31.668 66.8665 31.9364 66.6825 32.1651C66.5011 32.3963 66.2712 32.574 65.9928 32.6983C65.7144 32.8251 65.3787 32.8885 64.986 32.8885ZM74.923 26.6466L73.4688 26.7361C73.4439 26.6118 73.3905 26.4999 73.3085 26.4006C73.2264 26.2986 73.1183 26.2179 72.984 26.1582C72.8523 26.0961 72.6945 26.0649 72.5105 26.0649C72.2644 26.0649 72.0569 26.1171 71.8878 26.2215C71.7188 26.3235 71.6343 26.4602 71.6343 26.6317C71.6343 26.7685 71.6889 26.884 71.7984 26.9785C71.9077 27.0729 72.0954 27.1488 72.3614 27.2059L73.3979 27.4147C73.9547 27.5291 74.3699 27.7131 74.6433 27.9666C74.9168 28.2202 75.0535 28.5532 75.0535 28.9659C75.0535 29.3412 74.9429 29.6706 74.7216 29.954C74.5028 30.2373 74.2021 30.4586 73.8193 30.6177C73.439 30.7743 73.0002 30.8526 72.503 30.8526C71.7449 30.8526 71.1408 30.6948 70.6909 30.3791C70.2434 30.0609 69.9812 29.6284 69.9042 29.0815L71.4665 28.9995C71.5137 29.2306 71.628 29.4071 71.8095 29.5289C71.991 29.6482 72.2234 29.7079 72.5068 29.7079C72.7852 29.7079 73.0089 29.6544 73.178 29.5476C73.3495 29.4382 73.4365 29.2978 73.439 29.1262C73.4365 28.9821 73.3756 28.8639 73.2563 28.772C73.137 28.6776 72.953 28.6054 72.7044 28.5557L71.7125 28.3581C71.1533 28.2462 70.7369 28.0524 70.4634 27.7764C70.1925 27.5005 70.057 27.1488 70.057 26.7212C70.057 26.3533 70.1565 26.0364 70.3554 25.7704C70.5567 25.5044 70.8388 25.2994 71.2017 25.1552C71.5671 25.011 71.9947 24.9389 72.4844 24.9389C73.2078 24.9389 73.777 25.0918 74.1921 25.3975C74.6098 25.7033 74.8534 26.1196 74.923 26.6466ZM79.0998 25.0135V26.2066H75.651V25.0135H79.0998ZM76.434 23.6413H78.0221V28.9808C78.0221 29.1275 78.0446 29.2418 78.0896 29.3239C78.1346 29.4034 78.1968 29.4593 78.2763 29.4916C78.3581 29.5239 78.4526 29.5401 78.5591 29.5401C78.6341 29.5401 78.7083 29.5339 78.7833 29.5215C78.8576 29.5065 78.9146 29.4954 78.9543 29.4879L79.2041 30.6699C79.1246 30.6948 79.0128 30.7234 78.8688 30.7557C78.7248 30.7905 78.5493 30.8116 78.3431 30.819C77.9606 30.834 77.6246 30.783 77.3366 30.6662C77.0508 30.5493 76.828 30.3679 76.6689 30.1218C76.5099 29.8757 76.4316 29.565 76.434 29.1896V23.6413ZM82.6833 30.8526C82.0938 30.8526 81.5868 30.7333 81.1623 30.4947C80.7393 30.2536 80.4138 29.913 80.1851 29.473C79.9563 29.0305 79.8423 28.5072 79.8423 27.9032C79.8423 27.3141 79.9563 26.797 80.1851 26.352C80.4138 25.9071 80.7356 25.5603 81.1511 25.3118C81.5681 25.0632 82.0578 24.9389 82.6196 24.9389C82.9976 24.9389 83.3493 24.9998 83.6748 25.1216C84.0033 25.2409 84.2891 25.4211 84.5328 25.6623C84.7788 25.9034 84.9701 26.2066 85.1073 26.5721C85.2438 26.935 85.3121 27.36 85.3121 27.8472V28.2835H80.4761V27.2992H83.8166C83.8166 27.0705 83.7671 26.8679 83.6673 26.6914C83.5683 26.5149 83.4303 26.3769 83.2541 26.2775C83.0801 26.1756 82.8776 26.1246 82.6458 26.1246C82.4051 26.1246 82.1913 26.1805 82.0046 26.2924C81.8208 26.4018 81.6768 26.5497 81.5718 26.7361C81.4676 26.9201 81.4143 27.1251 81.4121 27.3513V28.2873C81.4121 28.5706 81.4638 28.8155 81.5681 29.0218C81.6753 29.2281 81.8261 29.3872 82.0196 29.4991C82.2138 29.611 82.4433 29.6669 82.7096 29.6669C82.8858 29.6669 83.0478 29.642 83.1941 29.5923C83.3411 29.5426 83.4663 29.468 83.5706 29.3686C83.6748 29.2692 83.7543 29.1474 83.8091 29.0031L85.2783 29.1001C85.2041 29.4531 85.0511 29.7613 84.8201 30.0249C84.5913 30.2859 84.2951 30.4897 83.9321 30.6364C83.5721 30.7805 83.1558 30.8526 82.6833 30.8526ZM86.3486 30.7407V25.0135H87.8628V26.0239H87.9296C88.0488 25.6884 88.2476 25.4236 88.5258 25.2297C88.8048 25.0359 89.1378 24.9389 89.5256 24.9389C89.9186 24.9389 90.2523 25.0371 90.5283 25.2335C90.8043 25.4274 90.9881 25.6908 91.0803 26.0239H91.1403C91.2566 25.6958 91.4681 25.4336 91.7741 25.2372C92.0823 25.0383 92.4461 24.9389 92.8661 24.9389C93.4008 24.9389 93.8343 25.1092 94.1673 25.4497C94.5033 25.7878 94.6713 26.2675 94.6713 26.889V30.7407H93.0866V27.2023C93.0866 26.884 93.0018 26.6454 92.8331 26.4863C92.6636 26.3272 92.4528 26.2477 92.1986 26.2477C91.9106 26.2477 91.6856 26.3397 91.5243 26.5236C91.3623 26.7051 91.2813 26.9449 91.2813 27.2432V30.7407H89.7416V27.1687C89.7416 26.8878 89.6606 26.664 89.4993 26.4975C89.3403 26.331 89.1303 26.2477 88.8693 26.2477C88.6931 26.2477 88.5333 26.2924 88.3916 26.3819C88.2528 26.4689 88.1418 26.592 88.0601 26.751C87.9783 26.9076 87.9371 27.0916 87.9371 27.3029V30.7407H86.3486Z'
                      fill='#8B8A8A'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className='px-4 py-8'>
              <div className='max-w-md mx-auto'>
                {/* Form */}
                <form>
                  {step === 0 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Cuéntanos sobre tu empresa ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
                        {/* Company Name */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Marca comercial (Nombre){' '}
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            autoComplete='off'
                            className='form-input w-full capitalize'
                            type='text'
                            {...register('commercial_brand', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value: /[a-zA-Z]/,
                                message: 'El formato no es correcto',
                              },
                            })}
                          />
                          {errors.commercial_brand && (
                            <span className='text-red-500 text-sm'>
                              {errors.commercial_brand.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Datos fiscales ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
                        {/* Company Name */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Razón social{' '}
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            autoComplete='off'
                            className='form-input w-full uppercase'
                            type='text'
                            {...register('social_reason', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value: /[a-zA-Z]/,
                                message: 'El formato no es correcto',
                              },
                            })}
                          />
                          {errors.social_reason && (
                            <span className='text-red-500 text-sm'>
                              {errors.social_reason.message}
                            </span>
                          )}
                        </div>
                        {/* INPUT RFC */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            RFC<span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='13'
                            className='uppercase form-input w-full '
                            autoComplete='off'
                            type='text'
                            {...register('rfc', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value: /[a-zA-Z0-9]/,
                                message: 'El formato no es correcto',
                              },
                              minLength: {
                                value: 13,
                                message: 'El RFC debe de tener 13 caracteres',
                              },
                            })}
                          />{' '}
                          {errors.rfc && (
                            <span className='text-red-500 text-sm'>
                              {errors.rfc.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className='max-w-md mx-auto w-full mb-12'>
                        <div className='relative'>
                          <div
                            className='absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200'
                            aria-hidden='true'></div>
                          <section className='relative flex justify-between w-full'>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                1
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white'>
                                2
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold  bg-primary text-white'>
                                3
                              </div>
                            </div>
                            <div>
                              <div className='flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500'>
                                4
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                        Datos de contacto comercial ✨
                      </h1>
                      <div className='space-y-4 mb-8'>
                        {/* INPUT PHONE */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Numero de telefono del contacto
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='10'
                            className='form-input w-full capitalize'
                            autoComplete='off'
                            type='number'
                            {...register('bussiness_phone', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value: /[0-9]/,
                                message: 'El formato no es correcto',
                              },
                              minLength: {
                                value: 10,
                                message: 'debe de tener 10 caracteres',
                              },
                              maxLength: {
                                value: 10,
                                message: 'debe de tener 10 caracteres',
                              },
                            })}
                          />{' '}
                          {errors.bussiness_phone && (
                            <span className='text-red-500 text-sm'>
                              {errors.bussiness_phone.message}
                            </span>
                          )}
                        </div>
                        {/* EMAIL */}
                        <div>
                          <label className='block text-sm font-medium mb-1'>
                            Email del contacto
                            <span className='text-rose-500'>*</span>
                          </label>
                          <input
                            maxLength='35'
                            className='form-input w-full'
                            autoComplete='off'
                            type='email'
                            {...register('bussiness_email', {
                              required: {
                                value: true,
                                message: 'El campo es requerido',
                              },
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'El formato no es correcto',
                              },
                            })}
                          />{' '}
                          {errors.bussiness_email && (
                            <span className='text-red-500 text-sm'>
                              {errors.bussiness_email.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className='flex items-center justify-between'>
                    {step > 0 && (
                      <div>
                        <button
                          type='button'
                          onClick={previousFormStep}
                          className='text-sm underline hover:no-underline  '>
                          &lt;- Regresar
                        </button>
                      </div>
                    )}
                    {renderButton()}
                  </div>
                </form>
                {errorMenssage && (
                  <div className='mt-5'>
                    <div className='bg-red-100 text-red-600 px-3 py-2 rounded'>
                      <svg
                        className='inline w-4 h-4 shrink-0 fill-current mr-2'
                        viewBox='0 0 17 17'>
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className='text-sm'>
                        Lo sentimos, al parecer tenemos problemas con nuestro
                        servidor.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'>
          <img
            className='object-cover object-center w-full h-full'
            src={Question}
            width='760'
            height='1024'
            alt='Onboarding'
          />
          <img
            className='absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block'
            src={AuthDecoration}
            width='218'
            height='224'
            alt='Authentication decoration'
          />
        </div>
      </div>
    </main>
  );
};

export default MultiStepForm;
