import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Facilities from "@/app/components/facilities";
import Cafe from "@/app/components/cafe";
import Testimonials from "@/app/components/testimonials";
import Booking from "@/app/components/booksection";
import Footer from "@/app/components/footer";
import Particles from "@/app/components/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-[#1B1B1B]">
      {/* Particles as fixed background */}
      <div className="fixed inset-0 w-full h-[100svh] z-10 opacity-50">
        <Particles 
          className="w-full h-full"
          particleColors={["#FAEBCD", "#F7C873"]} 
          particleCount={300} 
          particleSpread={10} 
          speed={0.1} 
          particleBaseSize={100} 
          moveParticlesOnHover={true} 
          alphaParticles={false} 
          disableRotation={false}
        />
      </div>
      
      <Navbar />
      <div className="space-y-20 z-20">
        <Hero />
        <Facilities />
        <Cafe />
        <Testimonials />
        <Booking />
      </div>
      <Footer />
    </div>
  );
}