import React from 'react'
import displayImage from "../assets/part-2.png"

const AssuranceSection = () => {
  return (

        <section className="container mx-auto px-6 sm:px-10 lg:px-30 mt-15 sm:mt-20">
          <div className="flex flex-col md:flex-row-reverse justify-between gap-12 md:gap-24 items-center">
            {/* right */}
            <div className='md:w-1/2 w-full'>
            <img src={displayImage} alt="" />
            </div>
    
            {/* left */}
            <div className="md:w-1/2 w-full lg:w-lg">
              <h2 className="font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl leading-[1.6] tracking-[0.01em]">
                Easily control your billing & invoicing.
              </h2>
              <p className="mt-4 md:mt-10 lg:mt-8 text-white/70 font-normal text-xs md:text-[13px] lg:text-lg">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
              </p>
    
              <button className="transition-all hover:opacity-80 cursor-pointer mt-4 md:mt-15 lg:mt-10 bg-gradient-to-br px-8 rounded-[10px] py-5 from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF]">
            <span className="font-medium text-[#00040E] hover:opacity-90 text-lg ">
              Get Started
            </span>
          </button>
            </div>
    
        </div>    
        </section>  )
}

export default AssuranceSection