import React from 'react';
import profile from '../../img/my_pic.jpg';
const About = () => {
  return (
    <div className='mx-auto w-11/12 lg:w-2/6 my-20 relative bottom-0 '>
      <div className=' shadow-lg p-10'>
        <h4 className='text-2xl font-semibold text-center mb-3'>
          About myself
        </h4>
        <img
          className='w-[130px] h-[130px] rounded-full mx-auto shadow-xl border-4 border-white'
          src={profile}
          alt=''
        />

        <div className='text-center'>
          <h4 className='mt-5 text-lg font-medium'>Iraz Ramin Bayejid </h4>
          <p className='mt-3 '>
            Myself Iraz Ramin Bayejid.I am a professional wedding photographer.
            Currently, I work as a freelance photographer.I shoot wedding
            photography in Bangladesh. I work by the hour. I have the biggest
            goal.I want to travel the world and photograph different
            countries'weddings,and learn about their cultures. In the next 5
            years I will work hard . I will try my best to achieve my goal.
            {/* studying in CSE from Primeasia University.Next 1 year i have a goal,my graduation is almost finish ,within 1 year it will be finish.Before i complete my graduation , i want to build up skill.Currently i'm learning web development.After complete   */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About