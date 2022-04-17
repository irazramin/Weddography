import React from 'react';
import useFetch from '../hooks/useFetch/useFetch';
import Service from '../Services/Service/Service';

const ServiceSction = () => {
  const [services, setServices] = useFetch();

  return (
    <div className='lg:w-[60%] mx-auto'>
      <h4 className='text-center font-medium text-xl mt-10'>
        Our services
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-20'>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceSction