import React from 'react';
import testimonialLines from '../assets/testimonials_line.svg';
import womenImage from '../assets/women.png';
import men1Image from '../assets/men-1.png';
import men2Image from '../assets/men-2.png';
const Testimonial = () => {
  const testimonials = [
    {
      name: 'Herman Jensen',
      image: womenImage,
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    },
    {
      name: 'Steve Mark',
      image: men1Image,
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    },
    {
      name: 'Kenn Gallagher',
      image: men2Image,
      text: 'It is usually people in the money business, finance, and international trade that are really rich.',
    },
  ];

  return (
    <section
      id="testimonials"
      className=" py-16 px-6 sm:px-10 lg:px-30 container mx-auto mt-10"
    >
      {/* Heading */}
      <div className="max-w-5xl mb-10 gap-4 flex flex-col md:flex-row justify items-center">
        <h2 className="font-semibold text-3xl mb-6 md:mb-0 md:text-4xl lg:text-5xl leading-[1.7]">
          What people are saying about us
        </h2>
        <p className="lg:ml-50 leading-[1.8] font-normal text-white/70">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Testimonial card */}
      <div className="relative md:mt-19 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="
  absolute 
  w-[436.52px] 
  h-[544.07px] 
left-50 sm:left-150 md:left-200 ;g:left-300
  rounded-[200px] 
  rotate-[-47.46deg] 
  blur-[300px]
  bg-[#26D0CE]/20
  z-[-1]
">
</div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group w-[350px] md:w-[370px] flex flex-col justify-between h-full rounded-3xl transition-all duration-300
  hover:bg-gradient-to-b 
  hover:from-[rgba(66,71,91,0.4)]
  hover:to-[#14101D] 
  hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.3)] mx-auto px-5 py-9 sm:px-11 sm:py-12"
          >
            <img className="w-[42.6px] mb-10 opacity-60 group-hover:opacity-100 duration-200 transition-opacity" src={testimonialLines} alt="lines" />
            <p className="w-[290px] font-normal text-lg leading-[1.8] mb-5">
              {testimonial.text}
            </p>
            <div className="flex gap-4 mt-2">
              <div className="w-[48px] h-[48px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={testimonial.image}
                  alt="founders image"
                />
              </div>
              <div className="">
                <h5 className="font-normal text-xl">{testimonial.name}</h5>
                <p className="text-white/50">Founder & Leader</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
