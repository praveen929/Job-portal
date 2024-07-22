// import React from 'react';
// import { FaRegUserCircle } from "react-icons/fa";
// import { AiTwotoneSetting } from "react-icons/ai";
// import { CiBezier } from "react-icons/ci";

// const PostJob = () => {
//   return (
//     <div className="overflow-x-hidden z-0 relative w-full h-full bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd flex items-center justify-center ">
//       <div className="hero-container relative lg:w-[95%] w-[75%] lg:h-[75%] h-full mt-6 mb-6 gap-10 max-w-5xl mx-auto flex lg:flex-row flex-col items-center justify-center pb-2">
        
//         <div className='lg:w-1/2 w-full h-1/2 flex items-center relative justify-center mb-3 lg:mb-0'>
//           <div className='w-[90%] h-[90%] flex items-center rounded-2xl justify-center relative'>
//             <img className='w-full h-full border-black border-2 absolute left-0 top-0 rounded-xl object-cover z-10' src="https://ukreit.com.ua/wp-content/uploads/2024/03/h2n58d-1024x576.webp" alt="Job platform" />
//             <div className='w-full h-full bg-black rounded-xl absolute bottom-[-6px] right-[-6px] z-0 opacity-100 transition-opacity duration-300'></div>
//           </div>
//         </div>
        
//         <div className='lg:w-1/2 w-full h-1/2 flex flex-col lg:items-start items-center justify-center lg:justify-start px-4'>
//           <h1 className='text-4xl lg:text-6xl w-full font-semibold text-center lg:text-start mb-6'>
//             The perfect and beautiful platform for recruiters
//           </h1>

//           <h5 className='text-[#8c8d96] flex gap-3 text-center lg:text-start text-base md:text-lg lg:text-xl mb-3'>
//             <FaRegUserCircle className='mt-1 text-2xl' /> 8 million responses and startup-ready candidates
//           </h5>
          
//           <h5 className='text-[#8c8d96] flex gap-3 text-center lg:text-start text-base md:text-lg lg:text-xl mb-3'>
//             <CiBezier className='mt-1 text-2xl' /> Company branding, and HR tools for free
//           </h5>

//           <h5 className='text-[#8c8d96] flex gap-3 text-center lg:text-start text-base md:text-lg lg:text-xl lg:mb-12 mb-3'>
//             <AiTwotoneSetting className='mt-1 text-2xl' /> A free applicant tracking system, or free integration
//           </h5>
          
//           <div className='w-40 relative h-14 flex group'>
//             <button className='w-full p-2 h-full rounded-lg border-2 text-xl text-white bg-[#5d5bff] z-10 border-black'>
//               Browse All
//             </button>
//             <div className='w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default PostJob;



import React from 'react';
// import './App.css';

const RecruiterPlatform = () => {
  return (
    <div className="bg-cream w-full h-auto flex flex-col md:flex-row items-center bg-[#fff8e1] p-6 md:p-12">
      <div className='hero-container relative w-[95%]  lg:gap-20 h-full max-w-5xl mx-auto flex lg:flex-row flex-col items-center justify-center pt-8 pb-2'>
        
      <div className="flex-1 lg:w-1/2 w-full h-1/2 lg:h-full items-center justify-center  mb-6 md:mb-0 ">
        <img  
          src="https://ukreit.com.ua/wp-content/uploads/2024/03/h2n58d-1024x576.webp" // Replace with the actual image URL
          alt="Woman with laptop"
          className="rounded-lg shadow-lg h-[90%] w-full"
        />
      </div>
      <div className="flex-1 lg:w-1/2 w-full h-full text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The perfect and beautiful platform for recruiters
        </h1>
        <ul className="text-gray-600 space-y-4 mb-6">
          <li className="flex items-center w-full lg:gap-3 gap-1  justify-start text-wrap">
            <span className="icon  lg:mb-0 mb-5">🌟</span> 8 million responsive and startup-ready candidates
          </li>
          <li className="flex items-center w-full lg:gap-3 gap-1 justify-start text-wrap">
            <span className="icon  lg:mb-0 mb-5">🛠</span> Company branding, and HR tools for free
          </li>
          <li className="flex items-center w-full lg:gap-3 gap-1 justify-start text-wrap">
            <span className="icon  lg:mb-0 mb-5">🔧</span> A free applicant tracking system, or free integration
          </li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Post a Job
        </button>
        </div>
        
        </div>
    </div>
  );
};

export default RecruiterPlatform;
