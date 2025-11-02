"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#DC9A09]/30 sticky top-0 z-80 font-merriweather w-full h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="relative h-8 w-auto">
            <Image
              src="https://res.cloudinary.com/dky6bti4g/image/upload/v1761994850/ELITE_Logo_eydfxi.png"
              alt="Elite Club Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          {/* Center - Nav Links */}
          <div className="flex space-x-8">
            <Link
              to="booking"
              smooth={true}
              duration={600}
              offset={-80} // useful if navbar overlaps section
            >
              <button className="bg-[#DC9A09] hover:bg-[#F7C873] text-[#FAEBCD] px-4 py-2 rounded-lg text-base font-bold transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer font-poppins">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center h-16 md:hidden">
          {/* Left - Phone Icon */}
          <a href="tel:+9747409113">
            <button className="text-[#F8F8F8] text-center transition-colors duration-200 hover:text-[#F7C873]">
              <Phone size={20} />
            </button>
          </a>

          {/* Center - Logo */}
          <div className="relative h-7 w-7">
            <Image
              src="https://res.cloudinary.com/dky6bti4g/image/upload/v1761994850/ELITE_Logo_eydfxi.png"
              alt="Elite Club Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Right - Animated Hamburger */}
          <button
            onClick={toggleMenu}
            className="bg-transparent text-[##F8F8F8] rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg w-9 h-9 flex items-center justify-center"
          >
            <div className="w-5 h-6 relative flex flex-col justify-center">
              {/* Top line */}
              <div
                className={`w-5 h-0.5 bg-[#FAEBCD] rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              {/* Middle line */}
              <div
                className={`w-5 h-0.5 bg-[#FAEBCD] rounded-full mt-1 transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              {/* Bottom line */}
              <div
                className={`w-5 h-0.5 bg-[#FAEBCD] rounded-full mt-1 transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className=" rounded-2xl mt-2 shadow-lg">
            <Link
              to="booking"
              smooth={true}
              duration={600}
              offset={-80} // useful if navbar overlaps section
            >
              <button className="w-full bg-[#DC9A09] hover:bg-[#FAEBCD] font-poppins text-[#FAEBCD] px-3 py-2 rounded-md text-base font-bold transition-colors duration-200 shadow-md hover:shadow-lg">
                Book Now
              </button>
            </Link>
            <div className="pt-2"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
