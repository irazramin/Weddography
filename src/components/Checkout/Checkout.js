import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Checkout = () => {
  const navigate = useNavigate()
  const [services,setServices] = useFetch()
  const navigateService = () =>{
    navigate('/');
  }
  return (
    <div className='flex items-center h-screen justify-center mt-[-100px]'>
      <button
        type='button'
        onClick={navigateService}
        className='bg-red-600 px-3 py-2 font-medium text-white'
      >
        Add something
      </button>
    </div>
  );
}

export default Checkout