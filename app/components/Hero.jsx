import React, { useState, useEffect } from 'react';

function Hero() {
  const [jobs, setJobs] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [positions, setPositions] = useState(0);

  useEffect(() => {
    let jobCounter = 0;
    let companyCounter = 0;
    let positionCounter = 0;

    const interval = setInterval(() => {
      if (jobCounter < 273) {
        jobCounter += 15;
        setJobs(jobCounter);
      }
      if (companyCounter < 23) {
        companyCounter += 1;
        setCompanies(companyCounter);
      }
      if (positionCounter < 322) {
        positionCounter += 20;
        setPositions(positionCounter);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-x-hidden z-0 flex items-center justify-center relative bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd w-full py-12 px-4 sm:px-6 lg:px-8'>
      <div className="hero-container relative sm:w-[88%] lg:mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0 animate-fadeInLeft">
          <h1 className='text-[5rem] sm:text-5xl lg:text-[7rem] leading-tight font-sans font-semibold mb-5 text-center lg:text-left'>Find your<br />dream job<br />here.</h1>
          <p className='text-lg sm:text-xl text-[#7c7d86] font-sans mb-5 text-center lg:text-left'>The best place to discover & apply to the coolest start up jobs, without the black box.</p>
          <div className='w-full mb-5  flex flex-col sm:flex-row items-center justify-center'>
            <div className='relative w-full mb-4 sm:mb-0 sm:mr-4'>
              <div className="absolute inset-y-0   start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input className='w-full h-14 sm:text-xl text-lg outline-none rounded-lg border-2 indent-9 text-gray-500 border-black' placeholder="Job title, Salary, or Companies..." type="text" />
            </div>

            <div className='w-full flex items-center justify-center relative sm:w-[35%] group'>
              <button className=' w-full  z-10 h-14 rounded-lg border-2 text-xl text-nowrap text-white bg-[#5d5bff] border-black flex items-center justify-center px-6' type="button">
              Explore Now 
              </button>

              
              <div className="sm:w-full  h-full bg-black cursor-pointer rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-0"></div>
              </div>

            
          </div>

          <div className='flex flex-wrap items-center gap-4 w-full justify-center lg:justify-start'>
            <p className='text-[1rem] font-[490] text-[#7c7d86]'>Popular Categories:</p>
            <span className='text-[1rem] font-semibold underline underline-offset-8 cursor-pointer'>UX Designer</span>
            <span className='text-[1rem] font-semibold underline underline-offset-8 cursor-pointer'>Front-end Dev</span>
            <span className='text-[1rem] font-semibold underline underline-offset-8 cursor-pointer'>Back-end Dev</span>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex flex-col  items-center lg:items-end justify-center animate-fadeInRight">
          <div className="relative w-full max-w-[500px] h-[310px]  rounded-lg mb-8">
            <img
              className="absolute rounded-lg border sm:right-9 border-black border-r-8 border-b-8 sm:w-full w-[95%] sm:h-full h-[90%] object-cover"
              src="https://images.pexels.com/photos/3760099/pexels-photo-3760099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Job search"
            />
            <div className="absolute w-[230px] h-[155px] bottom-8 right-5 sm:right-9 transform translate-x-8 translate-y-8 bg-blue-300 rounded-lg overflow-hidden shadow-lg">
              <img
                className="absolute w-full h-full object-cover border border-black border-r-8 border-b-8"
                src="https://images.pexels.com/photos/21378289/pexels-photo-21378289/free-photo-of-a-man-with-headphones-sitting-behind-a-laptop-and-cheering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Happy employee"
              />
            </div>
          </div>

          <div className='w-full flex  flex-col items-center pl-[1rem] lg:pl-[9rem] pr-[1rem]  relative justify-center'>
            <div className='w-full flex flex-col justify-center items-start'>
              <p className='text-1xl text-[#7c7d86] mt-8'>Jobs</p>
              <h4 className='text-4xl font-bold mb-5'>+{jobs.toLocaleString()}k</h4>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <p className='text-1xl mr-5 text-[#7c7d86]'>Startups</p>
              <h4 className='text-4xl font-bold mb-5'>+{companies.toLocaleString()}k</h4>
            </div>
            <div className='w-full flex flex-col justify-center items-end'>
              <p className='text-1xl mr-12 text-[#7c7d86]'>Talents</p>
              <h4 className='text-4xl font-bold mb-5'>+{positions.toLocaleString()}k</h4>
            </div>
          </div>

          {/* <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex flex-col justify-center items-start mb-4 sm:mb-0'>
              <p className='text-lg text-[#7c7d86]'>Jobs</p>
              <h4 className='text-3xl sm:text-4xl font-bold'>+{jobs.toLocaleString()}k</h4>
            </div>
            <div className='flex flex-col justify-center items-center mb-4 sm:mb-0'>
              <p className='text-lg text-[#7c7d86]'>Startups</p>
              <h4 className='text-3xl sm:text-4xl font-bold'>+{companies.toLocaleString()}k</h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-lg text-[#7c7d86]'>Talents</p>
              <h4 className='text-3xl sm:text-4xl font-bold'>+{positions.toLocaleString()}k</h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;