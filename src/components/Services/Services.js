import React from 'react';
import useFetch from '../hooks/useFetch';
import Service from './Service/Service';

const Services = () => {
  const [services,setServices] = useFetch();
 
  return (
    <div>
      <div>
        <h4 className='text-center font-medium text-xl mt-10'>
          Choose your service
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-20'>
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services