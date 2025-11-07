"use client";
import Image from "next/image";
import { Sparkles, Check, Waves, Dumbbell, Trophy, Heart } from "lucide-react";

export default function AboutUs() {
  const facilities = [
    {
      icon: Waves,
      title: "Aquatic Excellence",
      description: "Pristine swimming facilities designed for both leisure and athletic pursuits"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "State-of-the-art gymnasiums with dedicated spaces for gentlemen and ladies"
    },
    {
      icon: Trophy,
      title: "Recreation & Mastery",
      description: "Refined billiards lounge, dynamic game room, and traditional karate instruction"
    },
    {
      icon: Heart,
      title: "Celebrations",
      description: "An exquisite wedding hall where your most cherished moments come to life"
    }
  ];

  return (
    <section className="relative flex flex-col items-center text-[#FAEBCD] overflow-hidden px-4 py-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="relative z-10 mb-12 flex flex-col items-center max-w-3xl">
        <h2 className="font-elmessiri text-5xl md:text-7xl mb-3 font-bold px-6 py-3 text-center">
          About Our Clubhouse
        </h2>
        <div className="mt-8 flex gap-2 items-center justify-center">
          <div className="h-px w-16 md:w-24 bg-[#D4941A]"></div>
          <Sparkles className="text-[#D4941A] w-4 h-4" />
          <div className="h-px w-16 md:w-24 bg-[#D4941A]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-center text-[#F5E6D3] text-lg md:text-2xl lg:text-3xl leading-relaxed font-poppins mb-8">
          A distinguished sanctuary where <span className="text-[#F7C873] font-semibold">excellence</span> meets hospitality
        </p>
        <p className="text-center text-[#F5E6D3] text-sm md:text-xl lg:text-2xl leading-relaxed font-poppins opacity-80">
        Our clubhouse has stood as a beacon of refined living — offering world-class amenities, enriching activities, and unforgettable celebrations. Here, every member is family, and every visit is an experience crafted with care and distinction.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mb-12">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <div 
              key={index}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#D4941A]/10 to-transparent border border-[#D4941A]/20 hover:border-[#D4941A]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4941A]/20">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D4941A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#FAEBCD]" strokeWidth={2} />
                </div>
                <h3 className="text-[#F5E6D3] text-xl md:text-2xl lg:text-3xl font-elmessiri font-bold mb-4">
                  {facility.title}
                </h3>
                <p className="text-[#F5E6D3] text-sm md:text-base lg:text-lg font-poppins opacity-70 leading-relaxed">
                  {facility.description}
                </p>
              </div>
              {/* Decorative sparkle */}
              <Sparkles className="absolute -top-3 -right-3 text-[#F7C873] w-5 h-5 opacity-50" />
            </div>
          );
        })}
      </div>

      {/* Bottom Section with Values */}
      <div className="w-full max-w-5xl mt-8">
        <div className="bg-gradient-to-r from-[#D4941A]/5 via-[#D4941A]/10 to-[#D4941A]/5 rounded-3xl p-8 md:p-12 border border-[#D4941A]/20">
          <div className="text-center mb-8">
            <Sparkles className="text-[#F7C873] w-6 h-6 mx-auto mb-4" />
            <h3 className="font-elmessiri text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-6">
              Our Commitment to Excellence
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#D4941A] rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[#FAEBCD]" strokeWidth={3} />
              </div>
              <h4 className="text-[#F5E6D3] text-lg md:text-xl font-poppins font-semibold mb-2">
                Inclusive Community
              </h4>
              <p className="text-[#F5E6D3] text-sm md:text-base font-poppins opacity-60">
                Welcoming members of all ages and backgrounds
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#D4941A] rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[#FAEBCD]" strokeWidth={3} />
              </div>
              <h4 className="text-[#F5E6D3] text-lg md:text-xl font-poppins font-semibold mb-2">
                Premium Amenities
              </h4>
              <p className="text-[#F5E6D3] text-sm md:text-base font-poppins opacity-60">
                Meticulously maintained facilities of the highest caliber
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#D4941A] rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[#FAEBCD]" strokeWidth={3} />
              </div>
              <h4 className="text-[#F5E6D3] text-lg md:text-xl font-poppins font-semibold mb-2">
                Timeless Elegance
              </h4>
              <p className="text-[#F5E6D3] text-sm md:text-base font-poppins opacity-60">
                Where tradition and modernity harmoniously converge
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <button className="px-12 py-4 bg-[#DC9A09] rounded-xl font-elmessiri font-bold text-[#FAEBCD] text-xl md:text-3xl hover:bg-[#F7C873] transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-[#DC9A09]/30">
          Begin Your Journey
        </button>
      </div>
    </section>
  );
}