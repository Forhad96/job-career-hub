import { AiOutlineDollar } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
// react tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;


  const handleApplyNow =()=>{
    saveJobApplication(idInt)
    toast.success('🦄 Applied successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 place-items-center">
        <div className="col-span-2 lg:col-span-3 space-y-4">
          <p>
            <span className="font-extrabold">Job description:</span>
            {job_description}
          </p>
          <p>
            <span className="font-extrabold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-extrabold">Educational Requirements:</span>
            <br />
            {educational_requirements}
          </p>
          <p>
            <span className="font-extrabold">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>
        <div className="lg:col-span-2 border bg-purple-50 shadow-md">
          <div className="card-body">
            <div className="card-content space-y-4">
              <h2 className="text-xl font-extrabold">Job Details</h2>
              <hr />
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <AiOutlineDollar className="text-purple-500 text-2xl"></AiOutlineDollar>
                <p>
                  <span className="text-xl font-bold">Salary: </span>
                  {salary}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <AiOutlineDollar className="text-purple-500 text-2xl"></AiOutlineDollar>
                <p>
                  <span className="text-xl font-bold">Job Title: </span>
                  {job_title}
                </p>
              </div>
              <h2 className="text-xl font-extrabold">Contact information</h2>
              <hr />
              <div className="flex items-center gap-2  text-gray-600 font-medium">
                <AiOutlineDollar className="text-purple-500 text-2xl"></AiOutlineDollar>
                <p>
                  <span className="text-xl font-bold">Phone:</span>
                  {contact_information.phone}
                </p>
              </div>
              <div className="flex items-center gap-2  text-gray-600 font-medium">
                <AiOutlineDollar className="text-purple-500 text-2xl"></AiOutlineDollar>
                <p>
                  <span className="text-xl font-bold">Email:</span>
                  {contact_information.email}
                </p>
              </div>
              <div className="flex items-center gap-2  text-gray-600 font-medium">
                <AiOutlineDollar className="text-purple-500 text-2xl"></AiOutlineDollar>
                <p>
                  <span className="text-xl font-bold">Address:</span>
                  {contact_information.address}
                </p>
              </div>
            </div>
            <button onClick={handleApplyNow} className="btn btn-primary">Apply Now</button>
            {/* <Link to={`/appliedJobs/${idInt}`}>
            </Link> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
