import PropTypes from 'prop-types'
const AppliedJobsCard = ({ appliedJob }) => {
  const { logo,job_title, company_name,remote_or_onsite,location,job_type,salary} = appliedJob;
  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 ">
          <div className="bg-gray-100 flex justify-center items-center px-5 rounded">
            <img className="w-36 h-12" src={logo} alt="" />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-extrabold text-[#474747]">
              {job_title}
            </h4>
            <h5 className="text-2xl font-semibold text-[#757575]">
              {company_name}
            </h5>
            <p>
              <span className="font-extrabold text-purple-500 border border-purple-600 px-5 py-2 mr-4 rounded">
                {remote_or_onsite}
              </span>
              <span className="font-extrabold text-purple-500 border border-purple-600 px-5 py-2 mr-4 rounded">
                {job_type}
              </span>
            </p>
            <div className="flex gap-10">
              <p className="text-xl font-semibold text-[#757575]">
                {location}
              </p>
              <p className="text-xl font-semibold text-[#757575]">
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary font-semibold text-xl
            px-4">
          View Details
        </button>
      </div>
    </div>
  );
};

AppliedJobsCard.propTypes={
    appliedJob:PropTypes.object.isRequired,
}

export default AppliedJobsCard;
