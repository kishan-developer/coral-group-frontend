"use client";

import React from "react";

const logos = [
  "./brands_logo/CORALGREEN.JPG",
  "./brands_logo/CORALSKYLINE_N1.png",
  "./brands_logo/sandofkashi.png",
  "./brands_logo/client1.png",
  "./brands_logo/client2.png",
  "./brands_logo/client3.png",
  "./brands_logo/client4.png",
  "./brands_logo/client5.png",
  "./brands_logo/client6.png",
  "./brands_logo/client7.png",
  "./brands_logo/client8.png",
  "./brands_logo/client9.png",
  "./brands_logo/client10.png",
  "./brands_logo/client11.png",
  "./brands_logo/client12.png",
];

export default function LogoSlider() {
  return (
    <section className="w-full bg-[#1e1e1e] relative py-8 md:py-12 lg:py-16 flex flex-col items-center overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Horizontal Infinite Slider */}
      <div className="overflow-hidden w-full mt-8 md:mt-12 lg:mt-14 bg-[#1e1e1e]">
        <div className="flex gap-6 md:gap-10 lg:gap-14 animate-slide">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 bg-white rounded-lg px-4 md:px-6 lg:px-8 transition-all duration-300 hover:scale-110"
              alt={`Client logo ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animation for Infinite Slide */}
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-slide {
            animation: slide 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
