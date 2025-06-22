import React from 'react';
import airbnb from '../assets/airbnb.png';
import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import dropbox from '../assets/dropbox.png';

const CompanyLogos = () => {
  const logos = [airbnb, binance, coinbase, dropbox];
  return (
    <div className="overflow-hidden w-full container mx-auto py-20 flex sm:items-center items-start px-6 sm:px-10 lg:px-50">
      <div className="overflow-hidden flex items-center flex-col sm:flex-row sm:gap-0 gap-8">
        <div className="flex animate-marque whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="w-60 mx-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
