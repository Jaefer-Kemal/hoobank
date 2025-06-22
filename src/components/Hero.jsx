import React from 'react';
import badgeImage from '../assets/Discount.svg';
import heroImage from '../assets/hero.png';
import { FiArrowUpRight } from 'react-icons/fi';
import getStartedImage from '../assets/get_started_hero.png';
const Hero = () => {
  return (
    <section
      id="home"
      className="flex justify-between items-center flex-col md:flex-row container mx-auto pt-35 md:pt-35 pb-6 pl-6 sm:pl-10 lg:pl-30 mb-3"
    >
      <div className="absolute hidden lg:block  left-1/2 sm:-translate-x-1/2  lg:-translate-x-1/2 -translate-y-1/2">
        <div className="group border-[#d0e0e0] hover:opacity-70 transition-all cursor-pointer border-2 shadow-sm shadow-[#7DE7EB] flex justify-center items-center w-[140px] h-[140px] rounded-full outline-none ">
          <h1
            style={{
              background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className="font-medium text-lg"
          >
            Get{' '}
            <FiArrowUpRight className="group-hover:scale-[1.3] font-bold text-xl text-white inline" />
            <br /> Started
          </h1>
        </div>
      </div>
      {/* Left */}
      <div className="w-full md:w-1/2 space-y-8 pr-4">
        {/* Badge */}
        <div
          style={{
            background: 'linear-gradient(125.17deg, #272727 0%, #11101D 100%)',
          }}
          className="group flex items-center gap-2 w-fit px-4 py-2 rounded-2xl z-10 hover:opacity-80 transition-colors cursor-pointer"
        >
          <span className="group-hover:scale-130 transition-all">
            <img className="size-[32px]" src={badgeImage} alt="badge" />
          </span>
          <span className="text-base text-white/70">
            <span className="text-white/90">20%</span> DISCOUNT FOR{' '}
            <span className="text-white/90">1 MONTH</span> ACCOUNT
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-7xl font-semibold">
          The Next
          <span
            style={{
              background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className=""
          >
            {' '}
            Generation{' '}
          </span>
          Payment Method.
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-lg">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.
          <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2  -mt-10 md:mt-10 pl-0 md:pl-0 md:relative">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="md:left-12 w-[669px] h-[674px] object-contain rounded-lg relative z-10 hover:scale-[1.09] transition-transform duration-300 "
          />
          <div
            style={{
              background:
                'linear-gradient(180deg, rgb(188, 165, 255) 0%, #214D76 100%)',
            }}
                 className=' -z-10 absolute lg:left-45 lg:top-22 lg:w-[18.75rem] lg:h-[31.25rem]  rounded-full blur-[100px]'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
