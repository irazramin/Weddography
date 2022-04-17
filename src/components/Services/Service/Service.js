import React from 'react';

const Service = ({service}) => {
    const { img, price, description, name } = service;
  return (
    <div className='border-[1px] relative w-full'>
      <div>
        <img
          className='w-full h-[200px] object-cover mx-auto'
          src={img}
          alt=''
        />
      </div>
      <div className='m-3 text-center'>
        <h4 className='mt-2  text-lg font-semibold text-black'>{name}</h4>
        <p className='mt-2 text-base text-left'>{description}</p>
        <div className='flex  items-center justify-between  mt-5'>
          <div className='bg-sky-800 py-[1px] px-1  absolute top-[200px] right-0 shadow-md'>
            <p className='text-white'>${price}</p>
          </div>
          <div>
            <button className='bg-red-500 hover:bg-red-700 px-4 py-1 text-white font-normal rounded'>Checkout service</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service