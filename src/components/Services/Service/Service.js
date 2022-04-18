import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { id,img, price, description, name } = service;
   const navigate = useNavigate();
   const handleCheckout = (id) => {
     navigate(`/checkout/${id}`);
   };
  return (
    <div className='border-[1px]  w-full relative hover:scale-105 duration-500 cursor-pointer'>
      <div>
        <img
          className='w-full h-[200px] object-cover mx-auto'
          src={img}
          alt=''
        />
      </div>
      <div className='m-3 text-center '>
        <h4 className='mt-5  text-lg font-semibold text-black'>{name}</h4>
        <p className='mt-2 text-base text-center  mb-16'>{description}</p>
        <div className='flex  items-center justify-between  mt-5'>
          <div className='bg-red-500 py-[1px] px-1  absolute top-[200px] right-0 shadow-md'>
            <p className='text-white'>${price}</p>
          </div>
          <div>
            <div className='text-center flex items-end justify-end h-full w-full'>
              <button
                onClick={() => handleCheckout(id)}
                className='bg-red-500  h-[40px] hover:bg-red-700 px-4 py-1 text-white font-normal rounded absolute  left-[15px] bottom-[15px]'
              >
                Checkout service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service