import React from 'react'
import logoImage from "../assets/Logo.svg"
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const footerLinks = {
    'Usefull Links': [
      { name: 'Content', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Create', href: '#' },
      { name: 'Explore', href: '#' },
      { name: 'Terms & Services', href: '#' },
    ],
    Community: [
      { name: 'Help Center', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Suggestions', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Newsletters', href: '#' },
    ],
    Partner: [
      { name: 'Our Partner', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Become a Partner', href: '#' },
    ]}
  return (
    <footer className='mt-5 md:mt-10'>
        <div className='bg-[#0B0A0C99]'>
            <div className='container mx-auto px-6 sm:px-10 lg:px-30 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* left */}
                    <div className='lg:col-span-4'>
                        <div className='flex  items-center gap-2 mb-4'>
                        <img className="size-[72.14px]" src={logoImage} alt="" />
                        <h2 className='font-semibold leading-[1.3] text-[40.58px]'>Hoo<span className='text-[#5CE1E6]'>Bank</span></h2>
                        </div>
                        <div>
                        <p className='max-w-[312px] text-white/70 '>A new way to make the payments easy, reliable and secure.</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                            {Object.entries(footerLinks).map(([category, links],index)=> (
                                <div key={index} className='mb-6'>
                                    <h3 className='font-medium text-lg leading-[1.5] mb-8'>{category}</h3>
                                    <ul className='space-y-5'>
                                        {links.map((link,i)=>(
                                            <li key={i}>
                                                <a className="text-white/70 hover:text-white transition-opacity duration-100"href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            <div className='border-t border-[#3f3e45] mt-7 pt-8'>
  <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
    <p className='text-white/60 leading-[1.5] text-lg'><span className='mr-4'>Copyright ©</span>  2021 HooBank. All Rights Reserved.</p>
    <div className="flex mt-2 md:mt-0 gap-8 md:gap-4">
              <a
                href="#"
                className="size-[21px]  hover:text-[#5ce1e6] transition-all duration-200"
                aria-label="Facebook"
              >
                <PiInstagramLogo className="size-5" />
              </a>
              <a
                href="#"
                className="size-[21px]  hover:text-[#5ce1e6] transition-all duration-200"
                aria-label="Twitter"
              >
                <FaFacebook className="size-5" />
              </a>
              <a
                href="#"
                className="size-[21px]  hover:text-[#5ce1e6] transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="size-5" />
              </a>
              <a
                href="#"
                className="size-[21px]  hover:text-[#5ce1e6] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
        </div>
        </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer