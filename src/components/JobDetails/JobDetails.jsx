import {AiOutlineDollar} from 'react-icons/ai'
const JobDetails = () => {
    return (
        <div className="grid grid-cols-5 place-items-center">
            <div className="col-span-3">
                <p><span className="font-extrabold">Job description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque, id nulla quae sit perspiciatis in obcaecati deserunt cumque facere itaque sapiente rerum voluptatibus voluptatem repellendus at harum provident quasi?</p>
                <p><span className="font-extrabold">Job Responsibility</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque, id nulla quae sit perspiciatis in obcaecati deserunt cumque facere itaque sapiente rerum voluptatibus voluptatem repellendus at harum provident quasi?</p>
                <p>
                    <span className="font-extrabold">Educational Requirements:</span> 
                    <br />
                    Bachelor degree to complete any reputational university.
                </p>
                <p>
                    <span className="font-extrabold">Experiences:</span> 
                    <br />
                    2-3 Years in this field.
                </p>
            </div>
            <div className="col-span-2 border bg-purple-100">
                <div className="card-body">
                    <div className="card-content"> 
                    <h2 className="text-xl font-extrabold">Job Details</h2>
                    <hr />
                    <div className='flex items-center gap-2'>
                        <AiOutlineDollar className='text-purple-500 text-2xl'></AiOutlineDollar>
                    <p><span className="text-xl font-bold">Salary:</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineDollar className='text-purple-500 text-2xl'></AiOutlineDollar>
                    <p><span className="text-xl font-bold">Job Title:</span></p>
                    </div>
                    <h2 className="text-xl font-extrabold">Contact information</h2>
                    <hr />
                    <div className='flex items-center gap-2'>
                        <AiOutlineDollar className='text-purple-500 text-2xl'></AiOutlineDollar>
                    <p><span className="text-xl font-bold">Phone:</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineDollar className='text-purple-500 text-2xl'></AiOutlineDollar>
                    <p><span className="text-xl font-bold">Email:</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineDollar className='text-purple-500 text-2xl'></AiOutlineDollar>
                    <p><span className="text-xl font-bold">Address:</span></p>
                    </div>
                    </div>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;