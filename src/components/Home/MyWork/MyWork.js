import React from 'react';

const MyWork = ({ work }) => {
  const { img } = work;
  return (
    <div className='hover:scale-105 duration-500 cursor-pointer'>
      <img className='w-full lg:w-[350px] mx-auto' src={img} alt='' />
    </div>
  );
};

export default MyWork