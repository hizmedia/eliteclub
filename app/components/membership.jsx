"use client";
import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Crown,
  Award,
  Star,
  Gem,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    membershipType: "individual",
  });
  const carouselRef = useRef(null);

  const membershipTiers = [
    {
      id: "elite",
      name: "Elite Member",
      icon: Star,
      color: "from-gray-400/20 to-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-400/80",
      iconBg: "bg-gradient-to-br from-gray-400 to-gray-600",
      price: "Starter",
      features: [
        "Access to swimming facilities",
        "Basic gym equipment access",
        "Game room privileges",
        "Standard member events",
        "Monthly newsletter",
      ],
    },
    {
      id: "silver",
      name: "Silver Member",
      icon: Award,
      color: "from-slate-300/20 to-slate-500/20",
      borderColor: "border-slate-400/40",
      hoverColor: "hover:border-slate-400/80",
      iconBg: "bg-gradient-to-br from-slate-300 to-slate-500",
      price: "Popular",
      features: [
        "All Elite benefits",
        "Full fitness center access",
        "Billiards lounge access",
        "Priority event registration",
        "Guest privileges (2 per month)",
        "Discounted karate classes",
      ],
    },
    {
      id: "gold",
      name: "Gold Member",
      icon: Crown,
      color: "from-yellow-400/20 to-yellow-600/20",
      borderColor: "border-yellow-500/40",
      hoverColor: "hover:border-yellow-500/80",
      iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      price: "Premium",
      popular: true,
      features: [
        "All Silver benefits",
        "Complimentary karate classes",
        "Personal training sessions (2/month)",
        "Wedding hall consultation",
        "VIP event access",
        "Guest privileges (5 per month)",
        "Exclusive member lounge",
      ],
    },
    {
      id: "platinum",
      name: "Platinum Member",
      icon: Gem,
      color: "from-purple-400/20 to-purple-700/20",
      borderColor: "border-purple-500/40",
      hoverColor: "hover:border-purple-500/80",
      iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
      price: "Ultimate",
      features: [
        "All Gold benefits",
        "Unlimited guest privileges",
        "Private training sessions (4/month)",
        "Wedding hall discount (20%)",
        "Concierge services",
        "Priority facility booking",
        "Complimentary spa treatments",
        "Annual gala dinner invitation",
      ],
    },
  ];

  const handleTierSelect = (tierId) => {
    setSelectedTier(tierId);
    setTimeout(() => setShowForm(true), 50);
  };

  const handleBack = () => {
    setShowForm(false);
    setTimeout(() => setSelectedTier(null), 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMembershipTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      membershipType: type,
    }));
  };

  const handleSubmit = () => {
    if (!selectedTier || !formData.name || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    const tier = membershipTiers.find((t) => t.id === selectedTier);
    const message = `Hello! I'm interested in the ${tier.name} package.

Name: ${formData.name}
Phone: ${formData.phone}
Membership Type: ${
      formData.membershipType === "family" ? "Family" : "Individual"
    }

I would like to know more about this membership and how to proceed with registration.`;

    const whatsappNumber = "1234567890";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const nextSlide = () => {
    const newIndex = currentSlide === membershipTiers.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    carouselRef.current?.scrollTo({
      left: carouselRef.current.offsetWidth * newIndex,
      behavior: 'smooth'
    });
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? membershipTiers.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    carouselRef.current?.scrollTo({
      left: carouselRef.current.offsetWidth * newIndex,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMembershipCard = (tier) => {
    const Icon = tier.icon;

    return (
      <div className="relative group cursor-pointer font-poppins" onClick={() => handleTierSelect(tier.id)}>
        {tier.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-[#DC9A09] px-4 py-1 rounded-full border-2 border-[#FAEBCD]">
              <span className="text-[#FAEBCD] text-xs font-bold text-nowrap">
                MOST POPULAR
              </span>
            </div>
          </div>
        )}

        <Sparkles className="absolute -top-2 -right-2 text-[#F7C873] w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />

        <div
          className={`flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br ${tier.color} border-2 ${tier.borderColor} ${tier.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4941A]/30 h-full`}
        >
          <div
            className={`w-16 h-16 md:w-20 md:h-20 ${tier.iconBg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            <Icon
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              strokeWidth={2}
            />
          </div>

          <h3 className="text-[#F5E6D3] text-xl md:text-2xl font-bold mb-2 text-center">
            {tier.name}
          </h3>

          <div className="bg-[#D4941A]/30 px-4 py-1 rounded-full mb-6">
            <span className="text-[#F7C873] text-sm font-semibold">
              {tier.price}
            </span>
          </div>

          <div className="space-y-2.5 w-full mb-6 flex-grow">
            {tier.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check
                  className="w-4 h-4 text-[#F7C873] flex-shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <span className="text-[#F5E6D3] text-xs md:text-sm opacity-80 text-left leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full px-6 py-3 bg-[#DC9A09] rounded-lg font-bold text-base text-[#FAEBCD] hover:bg-[#F7C873] transition-all duration-300 shadow-md group-hover:shadow-lg mt-auto">
            Select Tier
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="relative flex flex-col items-center text-[#FAEBCD] overflow-hidden px-4 max-w-7xl mx-auto">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
      <div className="relative z-10 py-10 px-2 flex flex-col max-w-2xl">
        <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6 mr-auto" />
        <h2 className="text-4xl md:text-6xl mb-2 font-bold px-4 py-2 text-center font-elmessiri">
          Become a Member
        </h2>
        <Sparkles className="text-[#F7C873] w-3 h-3 md:w-6 md:h-6 ml-auto -mt-4" />
      </div>

      {/* Subtitle */}
      <div className="max-w-3xl mx-auto mb-16 text-center font-poppins">
        <p className="text-[#F5E6D3] text-xs md:text-lg lg:text-2xl leading-relaxed opacity-90 ">
          Select your path to{" "}
          <span className="text-[#F7C873] font-semibold">
            distinction and privilege
          </span>
        </p>
        <p className="text-[#F5E6D3] text-sm md:text-lg lg:text-xl leading-relaxed opacity-70 mt-4">
          Each tier is crafted to provide unparalleled experiences tailored to
          your lifestyle
        </p>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl min-h-[700px] md:min-h-screen overflow-visible">
        {/* Membership Cards */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out ${
            showForm
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {membershipTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="min-w-full snap-center p-4"
                >
                  {renderMembershipCard(tier)}
                </div>
              ))}
            </div>

            {/* Carousel Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 -bottom-8 -translate-y-1/2 z-10 bg-[#DC9A09] p-2 rounded-full shadow-lg hover:bg-[#F7C873] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#FAEBCD]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 -bottom-8 -translate-y-1/2 z-10 bg-[#DC9A09] p-2 rounded-full shadow-lg hover:bg-[#F7C873] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#FAEBCD]" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {membershipTiers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    carouselRef.current?.scrollTo({
                      left: carouselRef.current.offsetWidth * index,
                      behavior: 'smooth'
                    });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-[#DC9A09] w-8'
                      : 'bg-[#D4941A]/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {membershipTiers.map((tier) => (
              <div key={tier.id}>
                {renderMembershipCard(tier)}
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-500 ease-in-out ${
            showForm
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{ pointerEvents: showForm ? "auto" : "none" }}
        >
          {selectedTier && (
            <div className="w-full max-w-3xl mx-auto" id="registration">
              <div className="bg-gradient-to-br from-[#D4941A]/10 to-[#D4941A]/5 rounded-3xl p-8 md:p-12 border-2 border-[#D4941A]/40 shadow-2xl">
                <div className="text-center mb-8">
                  <Sparkles className="text-[#F7C873] w-6 h-6 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl md:text-5xl font-bold text-[#F5E6D3] mb-3">
                    Complete Your Registration
                  </h3>
                  <p className="text-[#F5E6D3] text-xs md:text-lg opacity-70">
                    You've selected:{" "}
                    <span className="text-[#F7C873] font-semibold text-sm md:text-lg">
                      {selectedTier &&
                        membershipTiers.find((t) => t.id === selectedTier)
                          ?.name}
                    </span>
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[#F5E6D3] text-xs md:text-lg font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-5 py-2 rounded-lg bg-[#FAEBCD]/10 border-2 border-[#D4941A]/30 text-[#F5E6D3] text-xs placeholder-[#F5E6D3]/40 focus:border-[#DC9A09] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5E6D3] text-xs md:text-lg font-semibold mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-5 py-2 rounded-lg bg-[#FAEBCD]/10 border-2 border-[#D4941A]/30 text-[#F5E6D3] text-xs placeholder-[#F5E6D3]/40 focus:border-[#DC9A09] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5E6D3] text-xs md:text-lg font-semibold mb-4">
                      Membership Type *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleMembershipTypeChange("individual")}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          formData.membershipType === "individual"
                            ? "bg-[#DC9A09] text-[#FAEBCD] shadow-lg scale-105"
                            : "bg-[#D4941A]/20 text-[#F5E6D3] hover:bg-[#D4941A]/40"
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        onClick={() => handleMembershipTypeChange("family")}
                        className={`px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          formData.membershipType === "family"
                            ? "bg-[#DC9A09] text-[#FAEBCD] shadow-lg scale-105"
                            : "bg-[#D4941A]/20 text-[#F5E6D3] hover:bg-[#D4941A]/40"
                        }`}
                      >
                        Family
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={handleBack}
                      className="flex-1 px-8 py-2 bg-transparent border-2 border-[#D4941A]/40 rounded-lg font-bold text-[#F5E6D3] text-xs md:text-lg hover:bg-[#D4941A]/20 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Tiers
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 px-8 py-4 bg-[#DC9A09] rounded-lg font-bold text-[#FAEBCD] text-xs md:text-lg hover:bg-[#F7C873] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                    >
                      Continue to WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}