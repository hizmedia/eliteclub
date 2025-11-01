import React from "react";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // TikTok icon (not available in lucide-react, so we'll create it as SVG)
  const TikTokIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: TikTokIcon,
      hoverColor: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-[#FAEBCD] text-[#1B1B1B] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#1B1B1B] transition-colors duration-300 ${social.hoverColor}`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2">
            <div>
                <Image 
                src="https://res.cloudinary.com/dky6bti4g/image/upload/v1761993982/ELITE_Logo_4_bl18a0.png"
                alt="Elite Club Logo"
                width={300}
                height={120}
                className="object-contain"
                priority
                />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md border border-[#DC9A09]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80954.56683982241!2d51.52415494506998!3d25.193303253176953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf005d51c265%3A0x3a16d7c15645126a!2sElite%20Clubhouse%20and%20Billiard!5e1!3m2!1sen!2suk!4v1762028986631!5m2!1sen!2suk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-gray-700"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-[#1B1B1B] font-poppins">
              © {currentYear} Elite Clubhouse & Billiards. All rights reserved.
              Powered by{" "}
              <a href="https://hizmedia.com" className="underline">
                HIZMEDIA
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
