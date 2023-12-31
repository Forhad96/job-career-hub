import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const FeaturedJobsCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

//   const {address} = contact_information
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body flex-1">
         <img src={logo} className="w-28" />
          <h2 className="card-title">
            {job_title}
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>{company_name}</p>
          <div className="card-actions ">
            <div className="badge badge-outline">{remote_or_onsite}</div>
            <div className="badge badge-outline">{job_type}</div>
          </div>
          <div className="flex">
            <p>{salary}</p>
            <p>{location}</p>
          </div>
          <Link to={`/featuredJobsCard/${id}`}>
          <button className="btn btn-primary self-start">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
FeaturedJobsCard.propTypes={
    job:PropTypes.object.isRequired,
}
export default FeaturedJobsCard;
