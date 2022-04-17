import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch/useFetch';

const Checkout = () => {
    const { checkId } = useParams();
  console.log(checkId)
  const navigate = useNavigate()
   const [services, setServices] = useFetch();
  const navigateService = () =>{
    navigate('/');
  }
  console.log(services,checkId)
  return (
    <div className='flex items-center h-screen justify-center mt-[-100px]'>
     {
       checkId ? 
       ''
       :
        <button
        type='button'
        onClick={navigateService}
        className='bg-red-600 px-3 py-2 font-medium text-white'
      >
        Add something
      </button>
     }
    </div>
  );
}

export default Checkout