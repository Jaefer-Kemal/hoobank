import React from 'react';
import starImage from '../assets/Star-1.png';
import authImage from '../assets/Auth-1.png';
import kiteImage from '../assets/kite-1.png';
const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-30 mt-10 sm:mt-20">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between gap-12 md:gap-24 items-center">
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col  justify-center items-center gap-3">
            <div
              className="flex flex-col justify-center lg:flex-row gap-4 rounded-3xl transition-all duration-300
  hover:bg-gradient-to-b 
  hover:from-[rgba(66,71,91,0.4)]
  hover:to-[#14101D] 
  hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.3)] p-6 "
            >
              <div className=''>
                <img
                  className="md:size-[64px] size-[32px]"
                  src={starImage}
                  alt="star Image"
                />
              </div>

              <div className="md:max-w-[400px] ">
                <h3 className="font-semibold text-white leading-[2] tracking-[0.01em]">
                  Rewards
                </h3>
                <p className="font-normal  leading-[1.4] tracking-[0.01em] md:text-[16px] text-xs text-white/70">
                  The best credit cards offer some tantalizing combinations of
                  promotions and prizes
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:flex-row gap-4 rounded-3xl transition-all duration-300
  hover:bg-gradient-to-b 
  hover:from-[rgba(66,71,91,0.4)]
  hover:to-[#14101D] 
  hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.3)] p-6">
              <div>
                <img
                  className="size-[32px] md:size-[64px]"
                  src={authImage}
                  alt="star Image"
                />
              </div>

              <div className="md:max-w-[400px] ">
                <h3 className="font-semibold text-white leading-[2] tracking-[0.01em]">
                  100% Secured
                </h3>
                <p className="font-normal  leading-[1.4] tracking-[0.01em] md:text-[16px] text-xs text-white/70">
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:flex-row gap-4 rounded-3xl transition-all duration-300
  hover:bg-gradient-to-b 
  hover:from-[rgba(66,71,91,0.4)]
  hover:to-[#14101D] 
  hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.3)] p-6">
              <div className=''>
                <img
                  className="md:size-[64px] size-[32px]"
                  src={kiteImage}
                  alt="kite Image"
                />
              </div>

              <div className="md:max-w-[400px] ">
                <h3 className="font-semibold text-white leading-[2] tracking-[0.01em]">
                  Balanced Transfer
                </h3>
                <p className="font-normal  leading-[1.4] tracking-[0.01em] md:text-[16px] text-xs text-white/70">
                  A balance transfer credit card can save you a lot of money in
                  interest charges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl leading-[1.6] tracking-[0.01em]">
            You do the business,
            <br />
            we’ll handle the money.
          </h2>
          <p className="mt-4 md:mt-10 lg:mt-8 text-white/70 font-normal text-xs md:text-[13px] lg:text-lg">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>

          <button className="transition-opacity duration-200 hover:opacity-80 cursor-pointer mt-4 md:mt-15 lg:mt-10 bg-gradient-to-br px-8 rounded-[10px] py-5 from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF]">
            <span className="font-medium text-[#00040E] hover:opacity-90 text-lg ">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
