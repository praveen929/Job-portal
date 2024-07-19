import React from 'react'

const LatestJobs = () => {
  return (
    <div className='overflow-x-hidden z-0 relative w-full min-h-screen flex items-center justify-center mb-10'>
          <div className='hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center pt-24 pb-2'>
              
          <div className='w-full h-1/2 flex flex-col items-start pr-2 justify-start'>
          <h1 className='text-6xl font-semibold  text-center sm:text-left mb-6'>
            Browse latest jobs
                  </h1>
                  
                  <h5 className='text-[#8c8d96] text-center text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-16'>
          We ensure your next step is a step forward. That's why we built a jobs{' '}
          <br />
          marketplace that serves all kinds of professionals first.
        </h5>
              </div>
              
              <div className='w-full relative flex'>
              <div className='relative w-1/2 mb-4 sm:mb-0 sm:mr-4'>
              <div className="absolute inset-y-0   start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input className='w-full h-14 sm:text-xl text-lg outline-none rounded-lg border-2 indent-9 text-gray-500 border-black' placeholder="Job title, Salary, or Companies..." type="text" />
                  </div>
                  
                  <div className='w-1/2 flex'>
                      
                  <div className="w-1/2 relative h-14 ] flex group ]">
          <button className="w-full p-2 h-full rounded-lg border-2 text-xl text-black bg-white z-10 border-black delay-100 ">
            Sign Up
          </button>

          <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
        </div>
                      
                      <div className='w-full flex items-center justify-center relative sm:w-[35%] group'>
              <button className=' w-full  z-10 h-14 rounded-lg border-2 text-xl text-nowrap text-white bg-[#5d5bff] border-black flex items-center justify-center px-6' type="button">
              Explore Now 
              </button>

              
              <div className="sm:w-full  h-full bg-black cursor-pointer rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-0"></div>
              </div>
                  </div>

              </div>

          </div>
      </div>
  )
}

export default LatestJobs