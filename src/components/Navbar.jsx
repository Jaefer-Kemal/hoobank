import React, { useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
import LogoImage from '../assets/Logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#features', label: 'Features' },
    { href: '#solution', label: 'Solution' },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm ">
      {/* container */}
      <div className="w-full container mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-30 md:h-23 h-18">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div>
            <img className="size-[32px]" src={LogoImage} alt="logo" />
          </div>

          <div>
            <h3 className="md:text-[18px]">
              Hoo<span className="text-[#5CE1E6]">Bank</span>
            </h3>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Desktop Navlink */}
        <div className="hidden  md:flex items-center md:gap-12 lg:gap-20 ">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className={` hover:text-white font-normal  text-base transition-colors ${
                activeLink === link.href ? 'text-white ' : ' text-white/70'
              }`}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="transition-all md:hidden text-center border-b py-12 shadow-black shadow-4xl border-t border-white/30  bg-[#00040fb2]">
            <div className="container mx-auto px-4 space-y-4">
              {navLinks.map((link, index) => (
                <a key={index}
                className={` block py-2 hover:text-white font-normal cursor-pointer text-base transition-colors ${activeLink === link.href ? 'text-white ':' text-white/70'}`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen((prev) => !prev);
                  }}
                >{link.label}</a>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default Navbar;
