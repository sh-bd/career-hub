import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ shownJob }) => {
  const { logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, id, location, salary } = shownJob
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-y-0 md:gap-4 border rounded-md drop-shadow-sm p-3 md:p-5'>
      <div className='col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 '>
        <img className='w-1/2' src={logo} alt="" />
      </div>
      <div className='col-span-3 flex flex-col'>
        <p className='font-semibold text-2xl'>{job_title}</p>
        <p className='text-gray-500 font-semibold text-2xl my-1'>{company_name}</p>
        <div className='flex mr-3  py-2 '>
          <button className='job-type-btn'>{remote_or_onsite}</button>
          <button className='job-type-btn'>{fulltime_or_parttime}</button>
        </div>
        <div className='flex gap-3 mt-1'>
          <div className='flex items-center'>
            <MapPinIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500 mr-1" />
            <p className='text-lg text-gray-500 '> {location}</p>
          </div>
          <div className='flex items-center'>
            <CurrencyDollarIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500 mr-1" />
            <p className='text-lg text-gray-500'>Salary: {salary}</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        <div>
          <Link to={`details/${id}`}>
            <button className='job-details-btn-applied-jobs'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;