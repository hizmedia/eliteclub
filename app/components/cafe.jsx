"use client";
import Image from "next/image";
import CafeGrid from "@/app/components/cafegrid";
import { Sparkles, Check } from "lucide-react";

export default function Cafe() {
  return (
    <section className="relative flex flex-col items-center text-[#FAEBCD] overflow-hidden px-4 max-w-7xl mx-auto">
        <div className="relative z-10 py-10 px-2 flex flex-col max-w-2xl">
            <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6  mr-auto" />
            <h2 className="font-elmessiri text-4xl md:text-6xl mb-2 font-bold px-4 py-2 text-center">
              Our Cafe
            </h2>
            <Sparkles className="text-[#F7C873] w-3 h-3 md:w-6 md:h-6 ml-auto -mt-4" />
          </div>
      <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center lg:px-4">
        {/* Title and Text Content - Shows first on mobile, right side on desktop */}
        
        <div className="z-10 md:order-2 md:pl-8 mb-8 md:mb-0">
          {/* ✨ Section Titles */}
          
          <p className="text-center md:text-left text-[#F5E6D3] text-sm lg:text-xl xl:text-2xl leading-relaxed mb-8 font-poppins">
            Indulge in hand-crafted coffees, freshly baked pastries, and a warm,
            welcoming atmosphere — the perfect spot to relax, meet friends, or
            find a moment of inspiration.
          </p>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 xl:w-10 xl:h-10  bg-[#D4941A] rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-[#FAEBCD]" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-[#F5E6D3] text-md lg:text-xl xl:text-2xl font-normal mb-1 font-poppins">
                Freshly Brewed & Locally Sourced
              </h3>
              <p className="text-[#F5E6D3] text-xs lg:text-sm xl:text-lg opacity-60 font-poppins">
                We use ethically sourced beans roasted in small batches for a
                rich, balanced cup — paired with house-baked pastries made daily.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 py-4">
            <div className="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 xl:w-10 xl:h-10  bg-[#D4941A] rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 lg:w-6 lg:h-6 xl:w-8 xl:h-8  text-[#FAEBCD]" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-[#F5E6D3] text-md lg:text-xl  xl:text-2xl  font-normal mb-1 font-poppins">
                Cozy & Elegant Ambiance
              </h3>
              <p className="text-[#F5E6D3] text-xs lg:text-sm xl:text-lg opacity-60 font-poppins">
                Experience our thoughtfully designed space with comfortable
                seating, ambient lighting, and sophisticated decor perfect for
                work or leisure.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image Grid and Button - Shows second on mobile, left side on desktop */}
        <div className="relative space-y-4 md:order-1 z-0 pt-20 md:pt-0">
            <div className="absolute inset-0 h-50 w-50 -top-10 md:-top-50 right-0 md:h-75 md:w-75 z-0">
          <Image
            src="https://res.cloudinary.com/dky6bti4g/image/upload/v1762014817/Food_Icon_Coffee_and_Croissant_kdal4h.png"
            alt="Cafe background"
            fill
            priority
            className="object-contain object-center z-0"
          />
        </div>
          <CafeGrid />
          <button className="p-2 bg-[#DC9A09] rounded-lg font-elmessiri font-bold w-full text-[#FAEBCD] text-lg md:text-2xl">
            View Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}