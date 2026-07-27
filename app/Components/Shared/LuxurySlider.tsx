"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    "https://mered.ae/assets/images/v2/experience/welcome.webp",
    "./property/SK3.jpg",
    "./property/SK4.jpg",
    "./property/SK2.jpg",
];

export default function LuxurySlider() {
    const [current, setCurrent] = useState(0);

    // Auto slide (optional)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[100vh]  overflow-hidden bg-[#f7f2e9]">
            {/* IMAGES */}
            <div className="w-full h-full relative">
                {/* {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            className={`absolute inset-0 w-full h-[80%] object-cover transition-opacity duration-[1200ms] ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))} */}

                {/* Zoom in Effect  */}
                {slides.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="slide"
                        className={`
                absolute inset-0 w-full h-[80%] object-cover
                transition-opacity duration-[1200ms]
                ${index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"}
                transition-transform duration-[5000ms] ease-out
              `}
                    />
                ))}
            </div>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[70%]">
                {/* Background Line */}
                <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>

                {/* Progress Line */}
                <div
                    className="h-[2px] bg-[#414f22] rounded-full transition-all duration-[1200ms] ease-out"
                    style={{
                        width: `${((current + 1) / slides.length) * 100}%`,
                        marginTop: "-2px",
                    }}
                ></div>
            </div>


            {/* ARROWS */}
            <div className="absolute bottom-20 right-20 flex items-center gap-10">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full text-[#414f22] border border-[#414f22] hover:border-black transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full text-[#414f22] border border-[#414f22] hover:border-black transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
