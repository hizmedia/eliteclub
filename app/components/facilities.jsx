"use client";
import Image from "next/image";
import Carousel from "@/app/components/carousel";
import { Sparkles } from "lucide-react";
import { Link } from "react-scroll";

export default function Facilities() {
  return (
    <section className="relative flex flex-col text-[#FAEBCD] overflow-hidden px-2 max-w-7xl mx-auto">
      {/* ✨ Section Titles */}
      <div className="relative z-10 py-10 px-2 lg:px-10">
        <Sparkles className=" text-[#F7C873] w-5 h-5 md:w-6 md:h-6" />
        <h2 className="font-elmessiri text-4xl md:text-6xl mb-2 text-left font-bold px-4">
          Our <br /> Facilities
        </h2>
        <h3
          className="font-elmessiri text-4xl md:text-5xl text-[#FAEBCD] text-right font-bold px-4"
          lang="ar"
        >
          مرافق <br />
          النادي
        </h3>
        <Sparkles className=" text-[#F7C873] w-5 h-5 md:w-6 md:h-6 ml-auto" />
      </div>

      <div className="absolute inset-0 h-50 w-50 top-40 md:h-75 md:w-75 md:top-50">
        <Image
          src="https://res.cloudinary.com/dky6bti4g/image/upload/v1762001832/Final_2_Billiard_Triangle_1_ovxwa8.png"
          alt="Billiards background"
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      <div className="relative z-10 w-full h-full px-2">
        <Carousel autoplay={true} autoplayDelay={3000} pauseOnHover={true} />
      </div>
      <div className="mx-auto max-w-7xl w-full z-10 px-4 py-4">
        <Link
          to="booking"
          smooth={true}
          duration={600}
          offset={-80} // useful if navbar overlaps section
        >
          <button className=" p-2 bg-[#DC9A09] rounded-lg font-elmessiri font-bold w-full text-[#FAEBCD] text-lg md:text-2xl cursor-pointer">
            Book Now!
          </button>
        </Link>
      </div>
    </section>
  );
}
