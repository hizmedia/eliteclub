"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const CustomerStoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Center logo - replace this URL with your actual logo
  const centerLogo =
    "https://res.cloudinary.com/dky6bti4g/image/upload/v1761994850/ELITE_Logo_eydfxi.png"; // Replace with your logo

  const testimonials = [
    {
      id: 1,
      name: "Mohammed Abdullah",
      text: "أصبح نادي إيليت جزءًا من عطلتنا الأسبوعية. أطفالي يعشقون المسبح، وأنا أنهي اليوم دائمًا بمباراة بلياردو ممتعة مع الأصدقاء.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762021966/Arabian-Man_xxghim.png",
    },
    {
      id: 2,
      name: "Sarah Khalifa",
      text: "لم أرَ مكانًا يجمع بين الأناقة والراحة وروح المجتمع مثل نادي إيليت. أشعر أنه بيتي الثاني بالفعل.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022455/Arabian-Woman_qf8egy.png",
    },
    {
      id: 3,
      name: "Mohammad Siyam",
      text: "Ever since we joined Elite Club, our weekends have completely changed, mashallah. The atmosphere is peaceful and family-oriented — my children can swim and play safely while I unwind over a cup of coffee or a friendly billiards match. You truly feel the sense of community here, everyone greets you with warmth and respect. Inshallah, we'll continue to spend many more beautiful moments here with family and friends.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022543/CEO-male_wbub1d.png",
    },
    {
      id: 4,
      name: "Omar Hassan",
      text: "ما شاء الله، المرافق في نادي إيليت متميزة بكل المقاييس. صالة الرياضة مجهزة بالكامل، والموظفون محترفون وودودون، والمناطق الاجتماعية مثالية للتعارف. من النادر أن تجد مكانًا يهتم بالكبار والصغار بهذه الدرجة من العناية. إن شاء الله سيواصل النادي نموه ويجمع الناس معًا — فهو بالفعل يجسد روح المجتمع والرقي.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022629/Grandfather_ljmpnv.png",
    },
    {
      id: 5,
      name: "Rafi Abbad",
      text: "As someone who loves billiards, I'm thrilled with the quality of the tables and equipment here. The gaming area is well-maintained, and the overall ambiance of the clubhouse makes every visit enjoyable.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022676/Programmer-male_of2pwe.png",
    },
    {
      id: 6,
      name: "Layla Al Suwaidi",
      text: "From the first day I visited Elite Club, I felt a genuine sense of belonging, mashallah. The events, the people, and even the small details reflect a culture of care and respect. I've made so many friendships here that feel like family. Inshallah, I hope this place continues to be a space where hearts connect and memories are made for generations to come.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022767/Girl_t6qehr.png",
    },
    {
      id: 7,
      name: "Hanif Izuddin",
      text: "The community here is wonderful. I've made so many friends through the various activities. Whether it's a game of billiards, a swim, or just coffee at the café, there's always someone to connect with. It's more than a club, it's a lifestyle.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022820/College-Student-male_iyws3w.png",
    },
    {
      id: 8,
      name: "Zainab Khatib",
      text: "ما شاء الله، المرافق في نادي إيليت متميزة بكل المقاييس. صالة الرياضة مجهزة بالكامل، والموظفون محترفون وودودون، والمناطق الاجتماعية مثالية للتعارف. من النادر أن تجد مكانًا يهتم بالكبار والصغار بهذه الدرجة من العناية. إن شاء الله سيواصل النادي نموه ويجمع الناس معًا — فهو بالفعل يجسد روح المجتمع والرقي.",
      image:
        "https://res.cloudinary.com/dky6bti4g/image/upload/v1762022868/Employee-female_odwsum.png",
    },
  ];

  const currentTestimonial = testimonials[currentIndex];

  // Continuous rotation animation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 30);

    return () => clearInterval(rotationInterval);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Generate orbit positions for all testimonials
  const getOrbitPositions = () => {
    const positions = [];

    testimonials.forEach((testimonial, index) => {
      // Calculate angle for even distribution
      const angle = (360 / testimonials.length) * index;
      // Vary the orbit radius for visual interest - maximum spacing
      const orbitLevel = index % 3; // 0, 1, or 2
      const orbitRadius = orbitLevel === 0 ? 150 : orbitLevel === 1 ? 170 : 230;
      positions.push({ testimonial, angle, orbitRadius, index });
    });

    return positions;
  };

  const orbitPositions = getOrbitPositions();

  return (
    <div className="py-12 px-2 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <svg
              className="w-12 h-12 text-[#DC9A09]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583,17.321C3.553,16.227,3,15,3,13.011c0-3.5,2.457-6.637,6.03-8.188l0.893,1.378c-3.335,1.804-3.987,4.145-4.247,5.621c0.537-0.278,1.24-0.375,1.929-0.311c1.804,0.167,3.226,1.648,3.226,3.489c0,0.965-0.393,1.843-1.029,2.479c-0.636,0.636-1.514,1.029-2.479,1.029C5.822,18.508,5.117,18.049,4.583,17.321z M14.583,17.321C13.553,16.227,13,15,13,13.011c0-3.5,2.457-6.637,6.03-8.188l0.893,1.378c-3.335,1.804-3.987,4.145-4.247,5.621c0.537-0.278,1.24-0.375,1.929-0.311c1.804,0.167,3.226,1.648,3.226,3.489c0,0.965-0.393,1.843-1.029,2.479c-0.636,0.636-1.514,1.029-2.479,1.029C15.822,18.508,15.117,18.049,14.583,17.321z" />
            </svg>
          </div>

          {/* Desktop Layout - Stars */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-[#DC9A09]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="relative z-10 py-10 px-2 flex flex-col max-w-2xl mx-auto">
            <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6 mr-auto" />
            <h2 className="font-elmessiri text-4xl md:text-6xl mb-2 font-bold px-4 py-2 text-center text-[#FAEBCD]">
              Customer's Story
            </h2>
            <p className="text-[#FAEBCD] text-sm md:text-base font-poppins">
              see real results from our members
            </p>
            <Sparkles className="text-[#F7C873] w-3 h-3 md:w-6 md:h-6 ml-auto -mt-4" />
          </div>
        </div>

        {/* Main Content */}
        <div className="px-2">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Mobile Layout - Stars at top */}
            <div className="md:hidden flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#DC9A09]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Left Side - Solar System Orbit */}
            <div className="order-2 md:order-1 flex justify-center items-center">
              <div className="relative w-65 h-65 md:w-80 md:h-80">
                {/* Center Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full  overflow-hidden shadow-lg">
                    <img
                      src={centerLogo}
                      alt="Clubhouse Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Orbiting Member Images */}
                {orbitPositions.map(
                  ({ testimonial, angle, orbitRadius, index }) => {
                    const totalAngle = rotation + angle;
                    const x =
                      50 +
                      (orbitRadius / 160) *
                        50 *
                        Math.cos((totalAngle * Math.PI) / 180);
                    const y =
                      50 +
                      (orbitRadius / 160) *
                        50 *
                        Math.sin((totalAngle * Math.PI) / 180);

                    // Highlight the current testimonial with larger size and border
                    const isActive = index === currentIndex;
                    const size = isActive
                      ? "w-16 h-16 md:w-20 md:h-20"
                      : "w-12 h-12 md:w-14 md:h-14";
                    const borderColor = isActive
                      ? "border-4 border-[#DC9A09]"
                      : "border-2 border-gray-300";

                    return (
                      <div
                        key={testimonial.id}
                        className={`absolute ${size} rounded-full ${borderColor} overflow-hidden shadow-lg cursor-pointer hover:scale-110 transition-all duration-300`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  }
                )}

                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-[#DC9A09] opacity-30"></div>
                <div className="absolute inset-8 rounded-full border border-[#DC9A09] opacity-30"></div>

                {/* Name label - Desktop only */}
                <div className="hidden md:block absolute -top-12 left-1/2 transform -translate-x-1/2 text-[#F7C873] text-lg font-light font-elmessiri">
                  {currentTestimonial.name}
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="order-1 md:order-2 flex flex-col items-center md:items-start">
              <div className="w-full max-w-md">
                <div className="bg-[#434343] rounded-lg p-4 shadow-xl transition-all duration-500">
                  <p className="text-[#FAEBCD] text-xs font-poppins leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-6 px-4">
                  <button
                    onClick={handlePrev}
                    className="text-gray-400 hover:text-[#DC9A09] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-[#DC9A09] hover:text-[#DC9A09] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stars at bottom */}
            <div className="md:hidden order-3 flex justify-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#DC9A09]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#DC9A09] w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStoryCarousel;
