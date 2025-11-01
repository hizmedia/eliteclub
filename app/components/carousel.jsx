import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { RiBilliardsLine } from "react-icons/ri";
import { LuPartyPopper } from "react-icons/lu";
import { GiGamepad } from "react-icons/gi";
import { TbKarate } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { FaSwimmer } from "react-icons/fa";
import { IoIosCafe } from "react-icons/io";

const DEFAULT_ITEMS = [
  {
    title: "Billiards",
    description:
      "Unwind with a game of billiards in our stylish lounge — the perfect place to relax, socialize, and enjoy a friendly match with family or friends.",
    id: 1,
    icon: (
      <RiBilliardsLine className="h-8 w-8 md:h-20 md:h-20 text-[#DC9A09]" />
    ),
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762005596/billiard-table-with-green-surface-and-balls-in-the-2025-03-25-04-26-02-utc_m2bbnv.jpg",
  },
  {
    title: "Wedding & Party Venue",
    description:
      "Celebrate your special moments in style at our elegant wedding and party venue, where unforgettable memories are made.",
    id: 2,
    icon: <LuPartyPopper className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762006467/luxurious-room-of-the-restaurant-to-celebrate-a-we-2025-03-18-21-34-34-utc_l9nynx.jpg",
  },
  {
    title: "PS5 Gaming Lounge",
    description:
      "Experience next-level gaming in our PS5 lounge, where cutting-edge technology meets ultimate comfort for an immersive playtime.",
    id: 3,
    icon: <GiGamepad className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762006682/modern-gamepad-lies-with-pc-keyboard-on-table-in-d-2025-03-15-07-52-27-utc_vbaxff.jpg",
  },
  {
    title: "Karate Classes",
    description:
      "Empower yourself with our expert-led karate classes, designed to build confidence, discipline, and physical fitness for all ages and skill levels.",
    id: 4,
    icon: <TbKarate className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762006862/karate-fighters-in-kimono-poses-in-combat-stances-2024-12-04-13-56-34-utc_f3kgkh.jpg",
  },
  {
    title: "GYM & Fitness",
    description:
      "Achieve your fitness goals in our state-of-the-art gym, equipped with modern facilities and expert trainers to support your health and wellness journey.",
    id: 5,
    icon: <CgGym className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762007189/weight-lifter-on-exercise-machine-with-barbell-2024-11-29-21-26-46-utc_vbqsly.jpg",
  },
  {
    title: "Ladies Training Program",
    description:
      "Empower yourself with our ladies training program, designed to enhance strength, confidence, and overall wellness in a supportive environment.",
    id: 6,
    icon: <GrYoga className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762007429/fitness-sport-training-and-lifestyle-concept-g-2025-10-03-07-38-54-utc_jhhuwm.jpg",
  },
  {
    title: "Swimming Pool",
    description:
      "Dive into relaxation and fitness in our pristine swimming pool, perfect for leisurely swims, aquatic workouts, and family fun.",
    id: 7,
    icon: <FaSwimmer className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762007646/senior-man-swimming-in-an-indoor-swimming-pool-2025-10-01-23-33-59-utc_jozggl.jpg",
  },
  {
    title: "Café & Restaurant",
    description:
      "Savor delicious meals and refreshing beverages at our café and restaurant, where quality ingredients meet exceptional service in a cozy atmosphere.",
    id: 8,
    icon: <IoIosCafe className="h-8 w-8 md:h-18 md:h-18 text-[#DC9A09]" />,
    image:
      "https://res.cloudinary.com/dky6bti4g/image/upload/v1762007776/breakfast-or-brunch-with-a-cup-of-coffee-and-crois-2025-01-08-17-24-46-utc_m1o5f4.jpg",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const [dimensions, setDimensions] = useState({
    width: baseWidth,
    height: baseWidth,
  });
  const itemWidth = dimensions.width - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-[#FAEBCD]"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width:
            carouselItems.length * itemWidth + (carouselItems.length - 1) * GAP,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round
                  ? dimensions.width - containerPadding * 2
                  : dimensions.height - containerPadding * 2 - 40,
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              {/* Background Image */}
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              )}

              {/* Content */}
              <div
                className={`relative z-10 ${round ? "p-0 m-0" : "mb-4 p-5"}`}
              >
                <span className="flex h-12 w-12 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#060010]">
                  {item.icon}
                </span>
              </div>
              <div className="relative z-10 p-5">
                <div className="mb-1 font-elmessiri text-lg md:text-4xl text-[#F7C873]">
                  {item.title}
                </div>
                <p className="text-xs md:text-lg text-[#FAEBCD] font-poppins">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full justify-center items-center ${
          round ? "absolute z-20  left-1/2  -translate-x-1/2" : ""
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={() => {
            if (loop && currentIndex === 0) {
              setCurrentIndex(items.length - 1);
            } else {
              setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
          }}
          disabled={!loop && currentIndex === 0}
          className={`mr-4 h-8 w-8 flex items-center justify-center rounded-full transition-all translate-y-3 ${
            round
              ? "bg-[#F7C873] text-[#060010] hover:bg-[#DC9A09] disabled:bg-[#555] disabled:text-[#333]"
              : "bg-[#DC9A09] text-[#F8F8F8] hover:bg-[#F7C873] disabled:bg-[rgba(51,51,51,0.4)] disabled:text-[#555]"
          } disabled:cursor-not-allowed`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-[#FAEBCD]"
                    : "bg-[#333333]"
                  : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            if (loop && currentIndex === items.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setCurrentIndex((prev) =>
                Math.min(prev + 1, carouselItems.length - 1)
              );
            }
          }}
          disabled={!loop && currentIndex === items.length - 1}
          className={`ml-4 h-8 w-8 flex items-center justify-center rounded-full transition-all translate-y-3 ${
            round
              ? "bg-[#F7C873] text-[#060010] hover:bg-[#DC9A09] disabled:bg-[#555] disabled:text-[#333]"
              : "bg-[#DC9A09] text-[#F8F8F8] hover:bg-[#F7C873] disabled:bg-[rgba(51,51,51,0.4)] disabled:text-[#555]"
          } disabled:cursor-not-allowed`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className=" p-2">
      <div className="max-w-7xl mx-auto aspect-[2/3] md:aspect-[16/9]">
        <Carousel autoplay={true} autoplayDelay={3000} pauseOnHover={true} />
      </div>
    </div>
  );
}

export default App;
