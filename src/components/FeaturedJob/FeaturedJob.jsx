import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ showedJob }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = showedJob;
  return (
    <div className='border rounded-md p-5 drop-shadow-sm	flex flex-col'>
      <div className=''>
        <img className='m-3 h-9' src={logo} alt="" />
      </div>
      <p className='ms-3 font-bold text-2xl'>{job_title}</p>
      <p className='ms-3 text-xl text-neutral-500 py-2'>{company_name}</p>
      <div className='flex ms-3 mt-2'>
        <button disabled className='job-type-btn'>{remote_or_onsite}</button>
        <button disabled className='job-type-btn'>{fulltime_or_parttime}</button>
      </div>

      <div className='flex ms-3 pt-4 mb-1'>
        <div className='flex items-center'>
          <MapPinIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500" />
          <p className='text-lg ml-1 mr-8'> {location}</p>
        </div>
        <div className='flex items-center'>
          <CurrencyDollarIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500" />
          <p className='text-lg ml-1'> {salary}</p>
        </div>
      </div>
      <Link to={`details/${id}`}>
        <button className='btn normal-case ms-3 mb-2 mt-4'>View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedJob;