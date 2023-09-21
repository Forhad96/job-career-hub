import AccountIcon from "../../assets/icons/accounts.png";
import Creative from "../../assets/icons/creative.png";
import Marketing from "../../assets/icons/marketing.png";
import Engineering from "../../assets/icons/chip.png";

const JobCategory = () => {
  const icons = [AccountIcon, Creative, Marketing, Engineering];

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 my-8">
        {icons.map((icon, idx) => (
          <div key={idx} className="w-96 h-60 flex items-center border  rounded-lg bg-purple-50">
            <div className="p-10">
              <img src={icon} alt="" className=" bg-purple-100 p-4 rounded" />
              <p className="text-xl font-extrabold pt-7">Account & Finance</p>
              <p>300 Jobs Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
