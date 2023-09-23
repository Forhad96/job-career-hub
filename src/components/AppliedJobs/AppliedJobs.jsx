import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredJobApplications } from '../utility/localStorage';
import AppliedJobsCard from './AppliedJobsCard';
const AppliedJobs = () => {
    const [appliedFilteredJobs,setAppliedFilteredJobs] = useState([])
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedAppliedJobId = getStoredJobApplications();
        if(jobs.length){
            const filteredJobs = jobs.filter(job => storedAppliedJobId.includes(job.id))
            // console.log(filteredJobs);
            setAppliedFilteredJobs(filteredJobs)
        }
    },[jobs])

  return (
    <div className='py-10'>
    {
        appliedFilteredJobs.map(appliedJob => <AppliedJobsCard key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsCard>)
    }
    </div>
  );
};

export default AppliedJobs;
