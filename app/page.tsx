// app/page.jsx
import React from "react";
import Script from "next/script";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Facilities from "@/app/components/facilities";
import Cafe from "@/app/components/cafe";
import Testimonials from "@/app/components/testimonials";
import Booking from "@/app/components/booksection";
import Footer from "@/app/components/footer";
import Particles from "@/app/components/particles";
import AboutUs from "@/app/components/aboutus";
import Socials from "@/app/components/socials";

export const metadata = {
  title: "Elite Clubhouse & Billiards — Pool, Lounge & Events",
  description:
    "Elite Clubhouse & Billiards — premier pool hall and social lounge. Book tables, train Karate, enjoy food & drinks, and host private events.",
  metadataBase: new URL("https://eliteclub-khaki.vercel.app"), // <- REPLACE with your site (without trailing slash)
  openGraph: {
    title: "Elite Clubhouse & Billiards",
    description:
      "Premier pool hall, social lounge, and events space. Book tables, join a league, or host your next private event.",
    url: "https://eliteclub-khaki.vercel.app",
    siteName: "Elite Clubhouse & Billiards",
    images: [
      {
        url: "https://res.cloudinary.com/dky6bti4g/image/upload/v1762108951/OG_q1uz4x.jpg", // <- replace with a real OG image
        width: 1200,
        height: 630,
        alt: "Elite Clubhouse & Billiards — pool tables and lounge",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Clubhouse & Billiards",
    description:
      "Premier pool hall, social lounge, and events space. Book tables, join a league, or host your next private event.",
    images: ["https://res.cloudinary.com/dky6bti4g/image/upload/v1762108951/OG_q1uz4x.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  // JSON-LD for Local/Entertainment business. Replace placeholders with real data.
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "Elite Clubhouse & Billiards",
    "alternateName": "Elite Clubhouse",
    "url": "https://eliteclub-khaki.vercel.app",
    "logo": "https://res.cloudinary.com/dky6bti4g/image/upload/v1761993982/ELITE_Logo_4_bl18a0.png",
    "image": ["https://res.cloudinary.com/dky6bti4g/image/upload/v1762108951/OG_q1uz4x.jpg"],
    "description":
      "Elite Clubhouse & Billiards is the area's premier pool hall and social lounge offering table bookings, Karate, Sports & Fitness, food & drinks, and private events.",
    "telephone": "+9747409113",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Madinatna",
      "addressLocality": "Al Wakrah",
      "addressRegion": "Al Wukair",
      "postalCode": "00000",
      "addressCountry": "974"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "12:00",
        "closes": "01:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/p/Elite-Clubhouse-Billiard-61578842330155",
      "https://www.instagram.com/eliteclubhouseandbilliard",
      "https://www.tiktok.com/discover/elite-clubhouse-and-billiards-in-qatar"
    ]
  };

  return (
    <div className="relative flex flex-col bg-[#1B1B1B] min-h-screen">
      {/* JSON-LD rendered server-side for SEO */}
      <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(ldJson)}
      </Script>

      {/* Particles as fixed background (stable mobile sizing: using 100svh to avoid jumps) */}
      <Navbar />
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

      
      <main className="z-20 space-y-20">
        <Hero />
        <AboutUs />
        <Facilities />
        <Cafe />
        <Testimonials />
        <section id="booking">
          <Booking />
        </section>
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
