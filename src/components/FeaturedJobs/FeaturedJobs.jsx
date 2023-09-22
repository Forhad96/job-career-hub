import axios from "axios";
import { useState, useEffect } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLength] = useState(4)

  useEffect(() => {
    axios.get("jobs.json").then((data) => setJobs(data.data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center gap-4">
        {
            jobs.slice(0,dataLength).map(job => <FeaturedJobsCard key={job.id} job={job}></FeaturedJobsCard>)
        }
      </div>
      <div className="text-center">
      <button onClick={()=>setDataLength(jobs.length)} className={`btn btn-primary self-center ${dataLength ===jobs.length && 'hidden'}`}>Show All</button>

      </div>
    </div>
  );
};

export default FeaturedJobs;
