import React, { useEffect, useState } from 'react'
import { BsFilterLeft } from "react-icons/bs";

const LatestJobs = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('#menu-button') && !event.target.closest('#menu-options')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const data = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0ve7GXj96ZxGaBMuZsfOvVi3IxnGDxUPW4HR8JDzN2qGciUE',
      title: 'Stack',
      jobs: '172 Jobs',
      post: 'Lead Product Design',
      jobType1: 'Full Time',
      jobType2: 'Remote',
    },
    
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png',
      title: 'Google',
      jobs: '168 Jobs',
      post: 'Web Developer',
      jobType1: 'Full Time',
      jobType2: 'Remote',

    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png',
      title: 'Apple',
      jobs: '158 Jobs',
      post: 'Mobile App Designer',
      jobType1: 'Full Time',
      jobType2: 'Remote',
    },
    {
      image:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-256.png',
      title: 'Microsoft',
      jobs: '148 Jobs',
      post: 'Senior Product Desgin',
      jobType1: 'Full Time',
      jobType2: 'Remote',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png',
      title: 'Linkedin',
      jobs: '138 Jobs',
      post: 'Sernior Web Developer',
      jobType1: 'Full Time',
      jobType2: 'Remote',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Behance-64.png',
      title: 'Behance',
      jobs: '128 Jobs',
      post: 'Behance Developer',
      jobType1: 'Full Time',
      jobType2: 'Remote',
    },
    
  ]


  return (
    <div className='overflow-x-hidden z-0 relative w-full min-h-screen flex items-center justify-center mb-10'>
      <div className='hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center pt-8 pb-2'>
        
       
              
          <div className='w-full h-1/2 flex flex-col lg:items-start items-center pr-2 justify-center lg:justify-start'>
          <h1 className='text-6xl font-semibold text-center lg:text-start  sm:text-left mb-6'>
            Browse latest jobs
                  </h1>
                  
                  <h5 className='text-[#8c8d96] text-center lg:text-start text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-16'>
          We ensure your next step is a step forward. That's why we built a jobs{' '}
          <br />
          marketplace that serves all kinds of professionals first.
        </h5>
        </div>

        {/* filter here */}
        
        <div className='w-full flex flex-wrap lg:flex-nowrap lg:justify-center items-center justify-center  mb-16'>
          <div className='relative flex-grow sm:flex-grow-0 w-full lg:w-[60%] mb-4 sm:mb-2 sm:mr-4'>

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 text-center dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input className='w-full h-10 justify-center sm:text-lg text-lg outline-none rounded-lg border-2 indent-9 text-gray-500 border-black' placeholder="Job title, Salary, or Companies..." type="text" />
          </div>


          <div className='w-full sm:w-[40%] mb-2 flex items-center justify-between'>
            <div className="relative lg:h-10 h-8 flex items-center group">
              
              <button className="lg:w-32 z-10  w-16 p-2 pr-3 h-full flex items-center justify-center gap-2 rounded-lg border-2 lg:text-lg text-xs text-nowrap text-black bg-white border-black delay-100">
                <BsFilterLeft /> All Filters
              </button>
              <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-3px] right-[-3px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
            </div>
            <p className='text-[#8c8d96] text-center mt-0 lg:mt-0 text-base md:text-lg lg:text-base'>Sort By:</p>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="lg:w-[9rem] w-[5rem] p-2 lg:h-10 h-8 flex items-center justify-between px-3 gap-2 rounded-lg border-2 text-xs  text-black bg-white border-black delay-100"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  Popular
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu-options"
                className={`${isOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <button className='text-[#8c8d96] hover:text-[#5d5bff] font-semibold text-base md:text-lg lg:text-base text-center mt-0 lg:mt-0'>Reset All</button>
          </div>
        </div>

              
        
        
{/* Companies post here */}
        <div className='w-full h-full flex flex-wrap items-center justify-center gap-5 mb-10'>
          {data.map((item, index) => (
            <div
              key={index}
              className='w-[320px] h-[330px] bg-white border group border-gray-200 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 cursor-pointer '
            >
              <div className='w-full h-full bg-white border group-hover:border-black absolute z-10 border-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center flex-col  transition-all duration-300 transform group-hover:scale-100 cursor-pointer'>

                
               
                <div className='w-full h-[20%] mb-2 flex items-center justify-start  space-x-4'>
                  <img
                  src={item.image}
                  alt={`${item.title} Logo`}
                  className='h-12 w-12 rounded-lg'
                />
                <div className='flex-1'>
                  <h2 className='text-lg md:text-xl  font-semibold'>
                    {item.post}
                  </h2>
                  <p className='text-sm font-semibold md:text-base mt-[-2px] text-black'>
                    {item.title}
                  </p>
                  </div>
                </div>
                
                

               
                <hr className='  w-full mb-5  text-black' />

                <h5 className="text-[#8c8d96] text-start text-sm md:text-base lg:text-base mb-3 ">
              Build your reputation with a universal profile that works across
              hundreds of different kinds of employers...
                </h5>
                
                <div className="text-[#8c8d96] flex items-start w-full gap-2  text-start text-sm md:text-base lg:text-base mb-7 ">

                  <p className='px-[0.3rem] py-[0.1rem] rounded bg-[#fef7e3] text-black font-semibold'>{item.jobType1}</p>

                  <p className='px-[0.3rem] py-[0.1rem] rounded bg-[#fef7e3] text-black font-semibold'>{item.jobType2}</p>
                 
                  
             
                </div>

                <hr className='  w-full mb-5  text-black' />

                <div className='w-full flex mb-8 relative'>

                <div className='w-1/2 flex absolute items-start'>
                  <img className='w-7 h-7 absolute left-3 border overflow-hidden rounded-full object-cover' src="https://img.freepik.com/free-photo/portrait-hapy-young-smart-man-glasses-white-wall_231208-12206.jpg?w=360&t=st=1721474016~exp=1721474616~hmac=b0545c85260de87acbb47247ce7be761510fdfd1d5869cbae48bc3499290998f" alt="" />

                  <img className='w-7 h-7 absolute left-7 border overflow-hidden rounded-full object-cover' src="https://img.freepik.com/free-photo/riding-public-transport-way-work-shot-positive-friendly-handsome-male-with-moustache-beard-glasses-wearing-earphones-listening-music-getting-satisfaction-from-great-bids_176420-22419.jpg?w=996&t=st=1721474059~exp=1721474659~hmac=4ffee62ec7671c6815bbb7599e00d63e624302a9775a87ee36864573bd3942f6" alt="" />

                  <img className='w-7 h-7 absolute border left-11 overflow-hidden rounded-full object-cover' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=996&t=st=1721474084~exp=1721474684~hmac=b25e20ab2a3feec34cb2dd02f36ff3d2b66f98839a9a946d805bf88d91e32029" alt="" />

                  <p className='w-7 h-7 absolute border left-16 text-xs text-center flex  justify-center font-semibold items-center overflow-hidden rounded-full bg-[#ffb627]'>+32</p>

                  </div>
                  
                  <h5 className="text-[#8c8d96] absolute left-24 mt-1 flex items-center justify-center w-1/2   text-sm  mb-3 ">
              Totla CanidiDates 
                </h5>

                </div>
                
                
                

              </div>

              <div className='w-full h-full  bg-black rounded-md absolute bottom-[-6px] right-[-6px] opacity-0 z-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-50'></div>
            </div>
          ))}
        </div>

        <div className='w-40 relative h-14 flex group'>
          <button className='w-full p-2 h-full rounded-lg border-2 text-xl text-white bg-[#5d5bff] z-10 border-black delay-100'>
            Browse All
          </button>
          <div className='w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50'></div>
        </div>

          </div>
      </div>
  )
}

export default LatestJobs