import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-30 py-16">
      <div
        className="rounded-[20px]  bg-gradient-to-b 
from-[rgba(66,71,91,0.4)]
  to-[#14101D] 
  shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] "
      >
        <div className="md:px-16 py-16 md:py-24">
          <div className="relative flex flex-col lg:flex-row items-center justify-around gap-15 lg:gap-30">
            <div className="text-white max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl leading-[1.4] sm:text-3xl lg:text-5xl font-semibold mb-4">
                Let's try our service now!
              </h2>
              <p className="px-3 md:px-0 lg:max-w-[400px] leading-[1.6] text-white/70 text-sm sm:text-base">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <button className="transition-opacity duration-200  hover:opacity-80 cursor-pointer bg-gradient-to-br px-8 rounded-[10px] py-5 from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF]">
              <span className="font-medium text-[#00040E] hover:opacity-90 text-lg ">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
