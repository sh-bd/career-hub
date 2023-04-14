import React, { useContext, useState } from 'react';
import { AvailableJobContext } from '../Layout/Main';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
  const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
  const [showMore, setShowMore] = useState(false);

  const showedJobs = showMore ? availableJobs.slice() : availableJobs.slice(0, 4);


  return (
    <div>
      <div className='category-container '>
        <div className='text-center'>
          <p className='section-header md:pt-14 pb-2'>Featured Jobs</p>
          <p className='sec-p  zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='flex grid pb-4 lg:grid-cols-2 grid-cols-1 text-left gap-6'>
          {
            showedJobs.map((showedJob) => <FeaturedJob
              key={showedJob.id}
              showedJob={showedJob}
            ></FeaturedJob>)
          }
        </div>
        <div className='flex justify-center  mb-5'>
          {
            showMore ? (<button className='btn  job-btn' onClick={() => setShowMore(!showMore)}>See Less Jobs</button>) : (<button className='btn  job-btn' onClick={() => setShowMore(!showMore)}>See All Jobs</button>)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;