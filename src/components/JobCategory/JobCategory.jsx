// import AccountIcon from "../../assets/icons/accounts.png";
// import Creative from "../../assets/icons/creative.png";
// import Marketing from "../../assets/icons/marketing.png";
// import Engineering from "../../assets/icons/chip.png";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategory = () => {
  // const icons = [AccountIcon, Creative, Marketing, Engineering];
  const [JobCategories,setJobCategories] =useState([])
  useEffect(()=>{
    axios.get('categories.json').then(data =>setJobCategories(data.data))
  },[])

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
        {JobCategories.map((JobCategory) => (
          <div key={JobCategory.id} className="w-96 h-60 flex items-center border  rounded-lg bg-purple-50">
            <div className="p-10">
              <img src={JobCategory.logo} alt="" className=" bg-purple-100 p-4 rounded" />
              <p className="text-xl font-extrabold pt-7">{JobCategory.category_name}</p>
              <p>{JobCategory.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
