import React from 'react';

const JobCategories = () => {
  const data = [
    { title: "Digital Marketing" },
    { title: "Content Writing" },
    { title: "HR Manager" },
    { title: "Web Development" },
    { title: "UI/UX Design" },
    { title: "Finance" },
    { title: "Sales" },
    { title: "Graphic Design" },
    { title: "Video Editing" },
    { title: "Translator" },
    { title: "Adsense" },
    { title: "Visual & Audio" },
    { title: "Health Care" },
    { title: "Fitness Training" },
    { title: "English Teacher" },
    { title: "Social Media Manager" },
  ];

  return (
    <div className="overflow-x-hidden z-0 relative w-full min-h-screen bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd flex items-center  justify-center mb-10">
      <div className="hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center my-10  pb-2">
        <div className='w-full h-1/2 flex items-start pr-2 justify-start'>
          <h1 className='text-6xl font-semibold ml-5 text-center sm:text-left mb-24'>
            Most Demands Job<br />categories
          </h1>
        </div>
        
        <div className='w-full h-full flex items-center justify-center gap-5 flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className="relative group w-auto h-14 flex items-center justify-center">
              <button className="py-2 px-5 h-full w-full font-semibold text-nowrap rounded-lg border-2 text-xl text-black bg-white group-hover:text-white border-black group-hover:bg-[#5d5bff] transition z-10 relative">
                {item.title}
              </button>
              <div className="w-full h-full bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
