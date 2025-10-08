import React from 'react';
import hero from "../assets/hero.png";


const HeroSection = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center mt-10 px-5">
          <img src={hero} alt="" />
        </div>
        <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] flex flex-col justify-center items-center md:gap-10 gap-6 md:py-20 py-10 px-5">
          <h1 className="md:text-5xl text-4xl font-bold text-white">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-center items-center md:gap-[176px] gap-7">
            <div className="text-center">
              <p className="text-xs text-white">Total Downloads</p>
              <h1 className="md:text-[64px] text-2xl font-bold text-white">
                29.6M
              </h1>
              <p className="text-xs text-white"> 21% more than last month</p>
            </div>

            <div className="text-center">
              <p className="text-xs text-white">Total Reviews</p>
              <h1 className="md:text-[64px] text-2xl font-bold text-white">
                906K
              </h1>
              <p className="text-xs text-white"> 46% more than last month</p>
            </div>

            <div className="text-center">
              <p className="text-xs text-white">Active Apps</p>
              <h1 className="md:text-[64px] text-2xl font-bold text-white">
                132+
              </h1>
              <p className="text-xs text-white"> 31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;