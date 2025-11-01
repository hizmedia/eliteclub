"use client";

import React, { useState, useRef } from "react";
import { CalendarCheck } from "lucide-react";

const ContactComponent = () => {
  const [selectedService, setSelectedService] = useState("Choose Activity");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const serviceRef = useRef("Choose Activity");

  const services = [
    "Wedding & party Venue",
    "Billiards Table",
    "Swimming Pool",
    "Gym & Fitness",
    "ladies Fitness Program",
    "Cafe & Restaurant",
    "Karate",
    "PS5 & Gaming Lounge",
  ];

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    serviceRef.current = service;
    setShowServiceDropdown(false);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleWhatsAppClick = () => {
    const currentService = serviceRef.current;
    const phoneNumber = "447404730923";

    let message = "Hi, I'd like to book an appointment for your Activity.";

    if (
      currentService !== "Choose Activity" ||
      customerName ||
      preferredDate ||
      preferredTime
    ) {
      message = "Hi, I'd like to book an appointment with the following details:\n\n";

      if (customerName) message += `Name: ${customerName}\n`;
      if (currentService !== "Choose Activity")
        message += `Service: ${currentService}\n`;
      if (preferredDate) message += `Preferred Date: ${formatDate(preferredDate)}\n`;
      if (preferredTime)
        message += `Preferred Time: ${preferredTime}\n`;

      message += "\nPlease confirm availability. Thank you!";
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-2 px-2 2xl:px-4 font-elmessiri z-20">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="bg-[#DC9A09] rounded-lg p-3 shadow-2xl">
          <div className="space-y-3 text-[#FAEBCD] text-sm">
            {/* Name Input */}
            <div>
              <label className="block text-[#FAEBCD] font-semibold mb-1.5 text-sm">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-sm"
              />
            </div>

            {/* Service */}
            <div className="relative">
              <label className="block text-[#FAEBCD] font-semibold mb-1.5 text-sm">
                Choose Activity
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] hover:text-[#FAEBCD] transition-colors duration-200 flex items-center justify-between text-sm"
                >
                  <span className="text-[#FAEBCD]">{selectedService}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showServiceDropdown ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showServiceDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#FAEBCD] rounded-lg shadow-lg z-[100] border max-h-48 overflow-y-auto">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectService(service)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150 text-sm"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#FAEBCD] font-semibold mb-1.5 text-sm">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-[#FAEBCD] font-semibold mb-1.5 text-sm">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#F7C873] hover:bg-[#434343] text-[#1B1B1B] font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md flex items-center justify-center text-sm"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-[#DC9A09] rounded-xl p-2 lg:p-3 xl:p-4 2xl:p-5 shadow-2xl lg:max-w-2xl">
          {/* Title */}
          <div className="text-center mb-2 lg:mb-3 xl:mb-4">
            <h2 className="text-[#FAEBCD] font-bold text-xs md:text-sm lg:text-base mb-1">
              Book Our Facility
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            {/* Left Column - Form Fields */}
            <div className="col-span-2 space-y-2 lg:space-y-3 xl:space-y-4">
              {/* First Row: Name and Service */}
              <div className="grid grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
                {/* Name Input */}
                <div>
                  <label className="block text-[#FAEBCD] font-semibold mb-1 text-xs md:text-sm lg:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-2 lg:px-2.5 py-1.5 lg:py-2 xl:py-2.5 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-xs md:text-sm lg:text-base"
                  />
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label className="block text-[#FAEBCD] font-semibold mb-1 text-xs md:text-sm lg:text-base">
                    Choose Activity
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                      className="w-full text-left px-2 lg:px-2.5 py-1.5 lg:py-2 xl:py-2.5 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] hover:text-[#FAEBCD] transition-colors duration-200 flex items-center justify-between text-xs md:text-sm lg:text-base"
                    >
                      <span className="text-[#FAEBCD]">{selectedService}</span>
                      <svg
                        className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 text-[#FAEBCD] ${
                          showServiceDropdown ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {showServiceDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#FAEBCD] rounded-lg shadow-lg z-[100] border max-h-32 lg:max-h-40 overflow-y-auto">
                        {services.map((service, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectService(service)}
                            className="w-full text-left px-2.5 lg:px-3 py-1.5 lg:py-2 text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150 text-xs md:text-sm lg:text-base"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Second Row: Date and Time */}
              <div className="grid grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
                {/* Date Input */}
                <div>
                  <label className="block text-[#FAEBCD] font-semibold mb-1 text-xs md:text-sm lg:text-base">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-2 lg:px-2.5 py-1.5 lg:py-2 xl:py-2.5 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-xs md:text-sm lg:text-base"
                  />
                </div>

                {/* Time Input */}
                <div>
                  <label className="block text-[#FAEBCD] font-semibold mb-1 text-xs md:text-sm lg:text-base">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-2 lg:px-2.5 py-1.5 lg:py-2 xl:py-2.5 rounded-lg bg-[#FAEBCD]/10 border border-[#FAEBCD]/20 text-[#FAEBCD] focus:outline-none focus:ring-2 focus:ring-[#FAEBCD]/30 focus:border-transparent text-xs md:text-sm lg:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - WhatsApp Button */}
            <div className="flex items-center justify-center">
              <div className="rounded-lg p-2 lg:p-3 xl:p-4 text-center w-full max-w-sm">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#F7C873] hover:bg-[#DC9A09]/50 cursor-pointer text-[#434343] py-2 lg:py-2.5 xl:py-3 px-2.5 lg:px-3 xl:px-4 rounded-lg transition-colors duration-200 shadow-lg flex items-center justify-center font-semibold text-xs md:text-sm lg:text-base"
                >
                  <CalendarCheck className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 mr-1.5" />
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;