import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

const CheckoutDetails = () => {
  const [services, setServices] = useFetch();
  const { checkId } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleCheckoutSubmit = (e) =>{

  }

    const handleEmailInput = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordInput = (e) => {
      setPassword(e.target.value);
    };
  return (
    <div className='grid grid-cols-2 w-3/6 mx-auto mt-20 gap-10'>
      <div className='border-2'>sadas</div>
      <div className=''>
        <div className='  shadow-md p-5'>
          <h4 className='text-2xl font-medium text-slate-900'>Please login</h4>
          <form onSubmit={handleCheckoutSubmit} className='mt-5'>
            <div>
              <input
                onBlur={handleEmailInput}
                className='border-2 border-slate-300 w-full px-5 py-2 rounded m-auto'
                type='email'
                placeholder='your email'
              />
            </div>
            <div>
              <input
                onBlur={handlePasswordInput}
                className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
                type='password'
                placeholder='your password'
              />
       
            </div>
            <div className='mt-5 text-right'>
              <button
                type='button'
                className='text-red-600 font-medium'
              >
                reset password?
              </button>
            </div>
            <button className='w-full bg-red-500 text-white py-2 mt-5 rounded'>
              Login
            </button>
            <p className='text-center mt-5 w-full'>
              New user?
              <button
                className='text-red-600 font-semibold ml-2'
              >
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
