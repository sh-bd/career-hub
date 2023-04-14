import React from 'react';

const JobCategory = ({ category }) => {
  const { logo, name, jobs_available } = category;
  return (
    <div className='bg-indigo-50 rounded-md p-2  py-4 md:p-5'>
      <div className='mb-8'>
        <img className='h-16 w-16 m-5 rounded-md' src={logo} alt="" />
      </div>
      <div>
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-neutral-500 font-semibold text-lg '>{jobs_available} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;