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
              src="data:image/jpeg;base64,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"
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
