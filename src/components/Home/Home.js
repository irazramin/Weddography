import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../img/banner.jpg';
import Services from '../Services/Services';
import MyWork from './MyWork/MyWork';
const Home = () => {
  const navigate = useNavigate();

  const navigateAbout = () =>{
    navigate('/about');
  }
  const workImages = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdlZGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1624067078399-be29c52a2b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    },
  ];
  return (
    <section>
      <div className='relative'>
        <img src={banner} className='object-cover h-[70vh] w-full ' alt='' />
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full'>
          <div className='absolute top-[35%] left-[15%]'>
            <h2 className=' text-white lg:text-6xl text-4xl'>
              WEDDING PHOTOGRAPHERS <br /> NEAR ME
            </h2>
            <button
              onClick={navigateAbout}
              className='bg-red-500 mt-10   px-6 py-2 rounded font-medium text-white text-base hover:bg-red-700'
            >
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

      <div className='my-36 border-dotted border-2 place-items-center w-[90%] lg:w-[60%] mx-auto p-10'>
        <h4 className='text-lg font-medium text-center mb-5'>
          My recent works
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
          {workImages.map((work) => (
            <MyWork key={work.id} work={work} />
          ))}
        </div>
        <div className='text-center'>
          <button
            className='bg-red-500 mt-10   px-6 py-2 rounded font-medium text-white text-base hover:bg-red-700'
          >
            See all works
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home