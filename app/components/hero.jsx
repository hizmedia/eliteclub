"use client";
import Booking from "@/app/components/booking";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:items-end justify-center text-[#FAEBCD] z-20">
      {/* 🎥 Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dky6bti4g/video/upload/v1761997327/beginner-player-hitting-a-billiard-ball-and-laughi-2025-08-28-22-14-03-utc_l4wfvg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay - fades video to transparent at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/50 to-[#1B1B1B] z-0 bottom-0"></div>

      {/* 📜 Content */}
      <div className="relative z-10 px-2 py-10 lg:px-10">
        <div className="flex flex-col">
          <Sparkles className=" text-[#F7C873] w-5 h-5 md:w-6 md:h-6" />
          <h1 className="font-elmessiri text-3xl md:text-4xl lg:text-5xl font-bold text-left text-[#FAEBCD] px-4">
            Where Families <br /> Gather and <br /> Friendships Grow
          </h1>
          <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6 flex ml-auto mr-[10%] md:mr-auto md:ml-[40%] lg:mr-0 lg:ml-auto -mt-4" />
          <p className="font-poppins text-xs md:text-lg mb-8 text-[#FAEBCD] py-2 px-4">
            A community built around joy, wellness, <br />
            and togetherness.
          </p>
        </div>
        <div className="flex flex-col">
          <Sparkles className=" text-[#F7C873] w-5 h-5 md:w-6 md:h-6 ml-auto" />
          <h1 className="font-elmessiri text-3xl md:text-4xl lg:text-5xl  font-bold text-right text-[#FAEBCD] px-4">
            حيث تجتمع <br /> العائلات وتنمو <br /> الصداقات
          </h1>
          <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6 flex mr-auto ml-[40%] md:ml-auto md:mr-[25%] -mt-4 lg:mr-[50%] lg:ml-auto" />
          <p className="font-poppins text-xs md:text-lg mb-8 text-[#FAEBCD] py-2 px-4 text-right">
            مجتمع يجمع بين السعادة والصحة والترابط
          </p>
        </div>
      </div>
      <div className="z-50 lg:absolute left-0 bottom-0 lg:maxw-w-1/3 lg:px-6">
        <Booking />
      </div>
    </section>
  );
}
