import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1238); // 768px is the 'md' breakpoint in Tailwind
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Category", "Companies", "Latest Jobs", "Upload CV", "Post a Job", "Contact"];

  return (
    
    <div className="overflow-x-hidden   relative bg-[#fef7e3] w-full">
      <div className="relative w-full sm:w-[88%] h-16 mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-[#0b0b1d] cursor-pointer">
          <a href="/">
            <span className="text-[#5d5bff]">C</span>AREE
            <span className="text-[#5d5bff]">R</span>
          </a>
        </h1>

        <ul className={`${isSmallScreen ? 'hidden' : 'flex'} gap-8 text-[17px] items-center justify-center text-[#7a7980]`}>
          {navItems.map((item) => (
            <li key={item} className="font-sans cursor-pointer hover:text-[#5d5bff] transition-colors duration-200">{item}</li>
          ))}
        </ul>

        <div className={`${isSmallScreen ? 'hidden' : 'flex'} items-center`}>
          <a className="mr-5 text-[17.5px] font-sans text-[#535256] hover:text-[#5d5bff] transition-colors duration-200" href="/">Sign In</a>

          <div className=" relative  flex group">
          <button className="px-4 py-[0.3rem] text-xl bg-white border border-black rounded-md z-10  delay-100 ">
            Sign Up
          </button>

          <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
        </div>

          {/* <button className="px-6 py-2 text-xl bg-white border border-black rounded-md hover:border-r-4 hover:border-b-4 transition-all duration-200">Sign Up</button> */}
        </div>

        {isSmallScreen && (
          <div className="flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-[#535256] hover:text-[#5d5bff] focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {isSmallScreen && (
        <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Menu</h5>
          <button 
            onClick={toggleMenu}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          
          <ul className="space-y-2 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 flex w-full   flex-col items-center justify-center ">
            <a href="/" className="block w-full text-[19px]  text-center py-2 text-[#535256] hover:text-[#5d5bff] transition-colors duration-200">Sign In</a>

            <div className="w-full relative h-14 ] flex group ]">
          <button className="w-full p-2 h-full rounded-lg border-2 text-xl text-black bg-white z-10 border-black delay-100 ">
            Sign Up
          </button>

          <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
        </div>
            {/* <button className="mt-2 w-full px-6 py-2 text-xl bg-white border border-black rounded-md hover:border-r-4 hover:border-b-4 transition-all duration-200">Sign Up</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;