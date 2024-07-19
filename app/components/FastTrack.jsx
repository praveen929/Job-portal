import React from "react";

const FastTrack = () => {
  return (
    <div className="overflow-x-hidden z-0 relative w-full min-h-screen flex items-center justify-center mb-10">
      <div className="hero-container relative w-[95%] max-w-5xl mx-auto flex flex-col items-center justify-center pt-24 pb-2">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-center mb-6 md:mb-8 lg:mb-10">
          The Fast Track to your <br /> next job
        </h1>

        <h5 className="text-[#8c8d96] text-center text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-16">
          We ensure your next step is a step forward. That's why we built a jobs{" "}
          <br />
          marketplace that serves all kinds of professionals first.
        </h5>

        {/* This is a fast track option section */}

        <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between">
          <div className="flex-1 h-auto w-full lg:w-auto flex flex-col items-center pt-6">
            <img
              className="w-[80%] md:w-[70%] lg:w-[60%] h-40 md:h-52 lg:h-60 object-contain mb-3"
              src="./public/image/Screenshot 2024-07-16 232953.png"
              alt="Create one profile"
            />

            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-3 md:mb-4 lg:mb-5">
              Create one profile
            </h1>

            <h5 className="text-[#8c8d96] text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10">
              Build your reputation with a universal profile that works across
              hundreds of different kinds of employers.
            </h5>
          </div>

          <div className="flex-1 h-auto w-full lg:w-auto flex flex-col items-center ">
            <img
              className="w-[80%] md:w-[70%] lg:w-[60%] h-40 md:h-52 lg:h-64 object-contain mb-3 md:mb-4 lg:mb-5"
              src="./public/image/Screenshot 2024-07-16 233006.png"
              alt="Explore your option"
            />

            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-3 md:mb-4 lg:mb-5">
              Explore your option
            </h1>

            <h5 className="text-[#8c8d96] text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10">
              Build your reputation with a universal profile that works across
              hundreds of different kinds of employers.
            </h5>
          </div>

          <div className="flex-1 h-auto w-full lg:w-auto flex flex-col items-center ">
            <img
              className="w-[80%] md:w-[70%] lg:w-[60%] h-40 md:h-52 lg:h-64 object-contain mb-3 md:mb-4 lg:mb-5"
              src="./public/image/Screenshot 2024-07-16 233017.png"
              alt="Talk on your terms"
            />

            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-3 md:mb-4 lg:mb-5">
              Talk on your terms
            </h1>

            <h5 className="text-[#8c8d96] text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10">
              Build your reputation with a universal profile that works across
              hundreds of different kinds of employers.
            </h5>
          </div>
        </div>

        <div className="w-40 relative h-14 flex group mt-8 md:mt-10 lg:mt-12">
          <button className="w-full p-2 h-full rounded-lg border-2 text-xl text-white bg-[#5d5bff] z-10 border-black delay-100">
            Get Started
          </button>

          <div className="w-full h-full z-0 bg-black rounded-md absolute bottom-[-4px] right-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
        </div>
      </div>
    </div>
  );
};

export default FastTrack;
