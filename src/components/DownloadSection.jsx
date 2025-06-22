import React from 'react'
import displayImage from "../assets/part-1.png"
import appleImage from "../assets/apple.png"
import playStoreImage from "../assets/playstore.png"

const DownloadSection = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-30 mt-15 sm:mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 items-center">
        {/* left */}
        <div className='md:w-1/2 w-full'>
        <img src={displayImage} alt="" />
        </div>

        {/* right */}
        <div className="md:w-1/2 w-full lg:px-15">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl leading-[1.6] tracking-[0.01em]">
            Easily control your billing & invoicing.
          </h2>
          <p className="mt-4 md:mt-10 lg:mt-8 text-white/70 font-normal text-xs md:text-[13px] lg:text-lg">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>

          <button className="duration-200 transition-opacity hover:opacity-80 cursor-pointer mt-4 md:mt-15 lg:mt-10">
            <img src={appleImage} alt="apple" />
          </button>
          <button className="ml-5 duration-200 transition-opacity hover:opacity-80 cursor-pointer mt-4 md:mt-15 lg:mt-10">
            <img src={playStoreImage} alt="apple" />
          </button>
        </div>

    </div>    
    </section>  

)
}

export default DownloadSection