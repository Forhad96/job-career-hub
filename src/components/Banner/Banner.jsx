import BannerImg from '../../assets/images/user.png'
const Banner = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            className="max-w-lg"
          />
          <div>
            <h1 className="text-7xl font-bold">One Step  <br /> Closer To Your <br /> Dream Job</h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
