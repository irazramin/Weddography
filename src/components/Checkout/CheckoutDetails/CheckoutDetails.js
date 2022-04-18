import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

const CheckoutDetails = () => {
  const { checkId } = useParams();
  const [services, setServices] = useFetch();
  const singleService = services.filter(service => service.id === parseInt(checkId))

  console.log(singleService)

  const handleCheckoutSubmit = (e) =>{
      e.preventDefault();
  }


  return (
    <div>
      <h4 className='my-10 text-center text-lg font-medium'>
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
    </div>
  );
};

export default CheckoutDetails;
