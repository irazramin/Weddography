import React from 'react'
import { useNavigate } from 'react-router-dom';
import notFound from '../../img/404_not_found.svg';
const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () =>{
    const path  = '/';
    navigate(path);
  }
  return (
    <div className='w-10/12 my-10 gap-5 mx-auto grid grid-cols-2'>
      <div>
        <h2 className='text-6xl'>
          Page <br /> Not found
        </h2>
        <p className='text-lg mt-5'>
          Sorry, the page you are looking for doesn't exist.If you think
          something is broken, find the correct route.
        </p>

        <button
          className='bg-orange-500 px-6 text-white hover:bg-orange-800 py-2 rounded-md mt-5'
          onClick={handleHomeNavigate}
        >
         Back to home
        </button>
      </div>
      <div>
        <img className='object-cover w-96' src={notFound} alt='' />
      </div>
    </div>
  )
}

export default NotFound