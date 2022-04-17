import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../img/banner.jpg';
import Services from '../Services/Services';
const Home = () => {
  const navigate = useNavigate();

  const navigateAbout = () =>{
    navigate('/about');
  }
  return (
    <section>
      <div className='relative'>
        <img src={banner} className='object-cover h-[70vh] w-full ' alt='' />
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full'>
          <div className='absolute top-[35%] left-[15%]'>
            <h2 className=' text-white lg:text-6xl text-4xl'>
              WEDDING PHOTOGRAPHERS <br /> NEAR ME
            </h2>
            <button onClick={navigateAbout} className='bg-red-500 mt-10   px-6 py-2 rounded font-medium text-white text-base hover:bg-red-700'>
              know about me
            </button>
          </div>
        </div>
      </div>

      <div id='services' className='mt-10 w-11/12 lg:w-3/5 mx-auto'>
        <h4 className='text-center text-slate-900 text-2xl  font-medium'>
          Services
        </h4>
        <Services />
      </div>
    </section>
  );
}

export default Home