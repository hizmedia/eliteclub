"use client";
import { Sparkles, Facebook, Instagram, Video } from "lucide-react";

export default function SocialMedia() {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@eliteclubhousebilliard",
      description:
        "Join our community and stay connected with exclusive updates, event announcements, and member highlights",
      color: "",
      hoverColor: "hover:border-blue-500/60",
      iconBg: "bg-blue-600",
      href: "https://www.facebook.com/p/Elite-Clubhouse-Billiard-61578842330155",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@eliteclubhouseandbilliard",
      description:
        "Explore our visual journey through stunning facility showcases, member achievements, and behind-the-scenes moments",
      color: "",
      hoverColor: "hover:border-pink-500/60",
      iconBg: "bg-gradient-to-br from-pink-600 to-purple-600",
      href: "https://www.instagram.com/eliteclubhouseandbilliard",
    },
    {
      name: "TikTok",
      icon: Video,
      handle: "@elite.clubhouse.bi",
      description:
        "Experience the vibrant energy of our clubhouse through engaging videos, fitness tips, and trending moments",
      color: "",
      hoverColor: "hover:border-cyan-400/60",
      iconBg: "bg-gradient-to-br from-cyan-500 to-pink-500",
      href: "https://www.tiktok.com/discover/elite-clubhouse-and-billiards-in-qatar",
    },
  ];

  return (
    <section className="relative flex flex-col items-center text-[#FAEBCD] overflow-hidden px-4 py-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="relative z-10 py-10 px-2 flex flex-col max-w-2xl">
        <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6  mr-auto" />
        <h2 className="font-elmessiri text-4xl md:text-6xl mb-2 font-bold px-4 py-2 text-center">
          Connect with us
        </h2>
        <Sparkles className="text-[#F7C873] w-3 h-3 md:w-6 md:h-6 ml-auto -mt-4" />
      </div>

      {/* Subtitle */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-[#F5E6D3] text-base md:text-xl lg:text-2xl leading-relaxed font-poppins opacity-90">
          Follow our journey and become part of our{" "}
          <span className="text-[#F7C873] font-semibold">
            thriving community
          </span>
        </p>
        <p className="text-[#F5E6D3] text-sm md:text-lg lg:text-xl leading-relaxed font-poppins opacity-70 mt-4">
          Share in our celebrations, discover inspiration, and stay updated with
          the latest happenings
        </p>
      </div>

      {/* Social Media Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        {socialPlatforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <div key={index} className="relative group cursor-pointer">
              {/* Decorative sparkles */}
              <Sparkles className="absolute -top-2 -right-2 text-[#F7C873] w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div
                className={`flex flex-col items-center text-center p-8 md:p-10 rounded-2xl bg-gradient-to-br ${platform.color} border border-[#D4941A]/30 ${platform.hoverColor} transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4941A]/30 hover:scale-105 h-full`}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 ${platform.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-[#F5E6D3] text-2xl md:text-3xl font-elmessiri font-bold mb-2">
                  {platform.name}
                </h3>

                {/* Handle */}
                <p className="text-[#F7C873] text-base md:text-lg font-poppins font-semibold mb-4">
                  {platform.handle}
                </p>

                {/* Description */}
                <p className="text-[#F5E6D3] text-sm md:text-base font-poppins opacity-70 leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* Follow Button */}
                <button className="mt-auto px-8 py-3 bg-[#DC9A09] rounded-lg font-elmessiri font-bold text-[#FAEBCD] text-base md:text-lg hover:bg-[#F7C873] transition-colors duration-300 shadow-md group-hover:shadow-lg w-full curesor-pointer">
                  <a href={platform.href}>Follow Us</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Engagement Section */}
      <div className="w-full max-w-5xl mt-8">
        <div className="bg-gradient-to-r from-[#D4941A]/5 via-[#D4941A]/10 to-[#D4941A]/5 rounded-3xl p-8 md:p-12 border border-[#D4941A]/20 text-center">
          <Sparkles className="text-[#F7C873] w-6 h-6 mx-auto mb-6 animate-pulse" />

          <h3 className="font-elmessiri text-2xl md:text-4xl font-bold text-[#F5E6D3] mb-4">
            Share Your Experience
          </h3>

          <p className="text-[#F5E6D3] text-sm md:text-lg lg:text-xl font-poppins opacity-80 leading-relaxed mb-6 max-w-3xl mx-auto">
            Tag us in your posts and use our official hashtag to be featured on
            our social channels. We love celebrating our members' milestones and
            memorable moments!
          </p>

          <div className="inline-flex items-center gap-3 bg-[#D4941A]/20 px-6 py-3 rounded-full border border-[#D4941A]/40">
            <span className="text-[#F7C873] text-xl md:text-2xl font-elmessiri font-bold">
              #
            </span>
            <span className="text-[#F5E6D3] text-lg md:text-2xl font-elmessiri font-bold">
              YourClubhouseLife
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="text-[#F7C873] w-8 h-8 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sparkles className="text-[#D4941A] w-6 h-6 animate-pulse" />
      </div>
    </section>
  );
}
