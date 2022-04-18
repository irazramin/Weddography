import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

const CheckoutDetails = () => {
  const { checkId } = useParams();
  const [services, setServices] = useFetch();
  const [showToast, setShowToast] = useState(false);

  const singleService = services.filter(service => service.id === parseInt(checkId))

  console.log(singleService)

  const handleCheckoutSubmit = (e) =>{
      e.preventDefault();
      setShowToast(true)
  }

    setTimeout(() => {
      setShowToast(false);
    }, 5000);

 const closeToast = () => {
   setShowToast(false);
 };
  return (
    <div>
      <h4 className='mb-20 text-center text-lg font-medium'>
        Congratulations! You choose{' '}
        <span className='text-red-500'>{singleService[0]?.name}</span>
      </h4>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-20 gap-10'>
        <div className=' relative'>
          <div className='border-2'>
            <div>
              <img
                className='w-full h-[200px] object-cover mx-auto'
                src={singleService[0]?.img}
                alt=''
              />
            </div>
            <div className='m-3 text-center'>
              <h4 className='mt-5  text-lg font-semibold text-black'>
                {singleService[0]?.name}
              </h4>
              <p className='mt-2 text-base text-left'>
                {singleService[0]?.description}
              </p>
              <div className='flex  items-center justify-between  mt-5'>
                <div className='bg-sky-800 py-[1px] px-1  absolute top-[200px] right-0 shadow-md'>
                  <p className='text-white'>${singleService[0]?.price}</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='  shadow-md p-5'>
            <h4 className='text-2xl font-medium text-slate-900'>
              Please put your information
            </h4>
            <form onSubmit={handleCheckoutSubmit} className='mt-5'>
              <div>
                <input
                  className='border-2 border-slate-300 w-full px-5 py-2 rounded m-auto'
                  type='text'
                  placeholder='First Name'
                />
              </div>
              <div>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='text'
                  placeholder='Last Name'
                />
              </div>
              <div>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='number'
                  placeholder='Phone'
                />
              </div>
              <div>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='text'
                  placeholder='country'
                />
              </div>
              <div>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='number'
                  placeholder='zip code'
                />
              </div>
              <div className='flex gap-5'>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='text'
                  placeholder='city'
                />
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='text'
                  placeholder='state'
                />
              </div>
              <div>
                <input
                  className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                  type='text'
                  placeholder='address'
                />
              </div>

              <button className='w-full bg-red-500 text-white py-2 mt-5 rounded'>
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      {showToast ? (
        <div
          id='toast-success'
          className='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-red-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-[70px] right-5'
          role='alert'
        >
          <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <div className='ml-3 text-sm font-normal text-white'>
            Thank you for the booking
          </div>
          <button
            onClick={closeToast}
            type='button'
            className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
            data-dismiss-target='#toast-success'
            aria-label='Close'
          >
            <span className='sr-only'>Close</span>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CheckoutDetails;
