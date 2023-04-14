import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { MapPinIcon, BriefcaseIcon, PhoneIcon, AtSymbolIcon, CurrencyDollarIcon, CalendarDaysIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { addToDb, getAppliedList } from '../Utilities/Fakedb';
import { AppliedJobContext } from '../Layout/Main';
import toast from 'react-hot-toast';

const JobDetails = ({ applied }) => {
  const job = useLoaderData();
  const { id, logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

  const addAppliedJobs = () => {
    const appliedListsDb = getAppliedList();
    // const alreadyApplied = appliedJobs.find(aj => aj.id === job.id);
    let toastShown = false;
    for (const id in appliedListsDb) {
      if (id === job.id && (!toastShown)) {
        toast('Sorry, You have already applied to the post.');
        toastShown = true;
      }
    }
    if (!toastShown) {
      toast('Congratulations! You have successfully applied to the post.')
      toastShown = false;
    }
  }

  return (
    <div>
      <Banner>Job Details</Banner>
      <div className='details-container'>
        <div className='p-4 grid grid-cols-1 md:grid-cols-8 gap-3'>
          <div className='col-span-5 tracking-wide'>
            <p className='pb-3 text-base'><span className='font-bold '>Job Description:</span> {job_description}</p>
            <p className='pb-3'><span className='font-bold pb-2'>Job Responsibility:</span> {job_responsibility}</p>
            <p className='pb-3'><p className='font-bold pb-1'>Educational Requirements:</p>
              {educational_requirements}</p>
            <p className='pb-3'><p className='font-bold pb-1'>Experiences:</p>
              {experiences}</p>
          </div>
          <div className='col-span-3 '>
            <div className='flex flex-col bg-indigo-100 rounded-md p-4'>
              <p className='font-bold text-xl'>Job Details</p>
              <hr className='h-[2px] my-3 bg-gray-300' />
              <div className='flex items-center'>
                <CurrencyDollarIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5  text-indigo-500" />
                <p className='px-2 text-base text-gray-500'><span className='font-semibold'>Salary: </span>{salary} (Per Month)</p>
              </div>
              <div className='flex items-center mt-2'>


              <CalendarDaysIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-5 w-5 text-indigo-500'></CalendarDaysIcon>
                <p className='px-2 text-base break-normal text-gray-500'>
                  <span className='font-semibold'>Job Title: </span>{job_title}</p>

              </div>
              <p className='font-bold text-xl mt-5'>Contact Information</p>
              <hr className='h-[2px] my-3 bg-gray-300'></hr>
              <div className='flex items-center'>
                <PhoneIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-500" />
                <p className='px-2 text-base text-gray-500'>
                  <span className='font-semibold'>Phone: </span>{contact_information[0].phone}
                </p>
              </div>
              <div className='flex items-center mt-2'>
                
                <EnvelopeIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5  text-indigo-500" />
                <p className='px-2 text-base break-normal text-gray-500'>
                  <span className='font-semibold'>Email: </span>
                  {contact_information[0].email}
                </p>
              </div>
              <div className='flex items-center mt-2'>
                <MapPinIcon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-5 w-5 text-indigo-500'></MapPinIcon>
                <p className='px-2 text-base break-normal text-gray-500'>
                  <span className='font-semibold'>Address: </span>
                  {location}
                </p>
              </div>
            </div>
            <button onClick={() => {
              addAppliedJobs()
              addToDb(id)
            }} className={!applied ? 'btn job-btn w-full' : 'btn job-btn-two w-full'}>{applied ? 'Already Applied' : 'Apply Now'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;