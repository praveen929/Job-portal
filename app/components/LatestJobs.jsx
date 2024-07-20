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
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png',
      title: 'Google',
      jobs: '168 Jobs',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png',
      title: 'Apple',
      jobs: '158 Jobs',
    },
    {
      image:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-256.png',
      title: 'Microsoft',
      jobs: '148 Jobs',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png',
      title: 'Linkedin',
      jobs: '138 Jobs',
    },
    {
      image:
        'https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Behance-64.png',
      title: 'Behance',
      jobs: '128 Jobs',
    },
    
  ]


  return (
    <div className='overflow-x-hidden z-0 relative w-full min-h-screen flex items-center justify-center mb-10'>
      <div className='hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center pt-8 pb-2'>
        
       
              
          <div className='w-full h-1/2 flex flex-col items-start pr-2 justify-start'>
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
        
        <div className='w-full flex flex-wrap lg:flex-nowrap items-center justify-between mb-16'>
          <div className='relative flex-grow sm:flex-grow-0 sm:w-[60%] mb-4 sm:mb-0 sm:mr-4'>

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 text-center dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input className='w-full h-10 justify-center sm:text-lg text-lg outline-none rounded-lg border-2 indent-9 text-gray-500 border-black' placeholder="Job title, Salary, or Companies..." type="text" />
          </div>


          <div className='w-full sm:w-[40%] flex items-center justify-between'>
            <div className="relative lg:h-10 h-8 flex items-center group">
              <button className="lg:w-32 w-20 p-2 pr-3 h-full flex items-center justify-center gap-2 rounded-lg border-2 lg:text-lg  text-nowrap text-black bg-white border-black delay-100">
                <BsFilterLeft /> All Filters
              </button>
              <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
            </div>
            <p className='text-[#8c8d96] text-center mt-2 lg:mt-0 text-base md:text-lg lg:text-base'>Sort By:</p>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="lg:w-[9rem] w-[7rem] p-2 lg:h-10 h-8 flex items-center justify-between px-3 gap-2 rounded-lg border-2 text-lg text-black bg-white border-black delay-100"
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
            <p className='text-[#8c8d96] font-semibold text-base md:text-lg lg:text-base text-center mt-2 lg:mt-0'>Reset All</p>
          </div>
        </div>

              
        {/* <div className='w-full relative flex mb-16'>
          
              <div className='relative w-[60%]  sm:mb-0 sm:mr-4'>
              <div className="absolute inset-y-0    start-0 flex items-center  ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 text-center  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input className='w-full h-10 justify-center sm:text-lg text-lg outline-none rounded-lg border-2 indent-9 text-gray-500 border-black' placeholder="Job title, Salary, or Companies..." type="text" />
          </div>
          
                  
                  <div className='w-[43%] h-10 flex  text-center justify-between  border-red-600'>
                      
                  <div className="w-[7.5rem] relative h-10  flex group ]">
              <button className="w-full p-2 text-nowrap h-full flex items-center justify-center gap-2 rounded-lg border-2 text-lg  text-black bg-white z-10 border-black delay-100 ">
                
              <BsFilterLeft />All Filters

            
          </button>

          <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
            </div>
            

            <p className='text-[#8c8d96] text-center mt-2  text-base md:text-lg lg:text-base  '>Sort By:</p>

            <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="w-[9rem]  p-2 text-nowrap h-10 flex items-center justify-between px-3 gap-2 rounded-lg border-2 text-lg  text-black bg-white z-10 border-black delay-100 "
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

                      
                     
            
            <p className='text-[#8c8d96] font-semibold text-base md:text-lg lg:text-base text-center mt-2 '>Reset All</p>


                  </div>

        </div> */}
        
{/* Companies post here */}
        <div className='w-full h-full flex flex-wrap items-center justify-center gap-5 mb-10'>
          {data.map((item, index) => (
            <div
              key={index}
              className='w-[320px] h-[330px] bg-white border group border-gray-200 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 cursor-pointer '
            >
              <div className='w-full h-full bg-white border group-hover:border-black absolute z-10 border-gray-200 rounded-lg shadow-md p-4 flex items-center  space-x-4 transition-all duration-300 transform group-hover:scale-100 cursor-pointer'>
                <img
                  src={item.image}
                  alt={`${item.title} Logo`}
                  className='h-12 w-12 rounded-lg'
                />
                <div className='flex-1'>
                  <h2 className='text-lg md:text-xl font-semibold'>
                    {item.title}
                  </h2>
                  <p className='text-sm md:text-base text-gray-500'>
                    {item.jobs}
                  </p>
                </div>
                <div className='bg-transparent group-hover:bg-[#5d5bff] border-2 text-black group-hover:text-white duration-50  rounded-full p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z'
                    />
                  </svg>
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