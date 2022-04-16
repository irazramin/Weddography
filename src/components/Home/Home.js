import React from 'react';
import banner from '../../img/banner.jpg';
import Services from '../Services/Services';
const Home = () => {
  return (
    <section>
      <div className='relative'>
        <img src={banner} className='object-cover h-[70vh] w-full ' alt='' />
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full'>
          <h2 className='absolute top-[35%] left-[15%] text-white lg:text-6xl text-4xl'>
            WEDDING PHOTOGRAPHERS <br /> NEAR ME
          </h2>
          <button className='bg-orange-500 absolute top-[55%]  md:top-[60%] left-[15%]  px-6 py-2 rounded font-medium text-white text-base hover:bg-orange-600'>
            About me
          </button>
        </div>
      </div>

      <div className='mt-10 w-11/12 mx-auto'>
          <h4 className='text-center text-slate-900 text-2xl  font-medium' >Services</h4>
          <Services />
      </div>
    </section>
  );
}

export default Home