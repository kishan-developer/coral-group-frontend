"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Professional, responsive, and thoughtful. From our first conversation to the final visit, they were attentive to every detail.",
    name: "Nina Scholz",
    role: "Property Management",
  },
  {
    text: "Their attention to quality and detail is unmatched. The entire experience felt seamless and premium.",
    name: "Daniel Foster",
    role: "Real Estate Consultant",
  },
  {
    text: "A team that truly understands luxury and precision. Every step was handled with care and clarity.",
    name: "Sophia Müller",
    role: "Interior Advisor",
  },
  {
    text: "Communication was flawless, execution was perfect. We felt supported throughout the journey.",
    name: "James Carter",
    role: "Investment Partner",
  },
  {
    text: "They transformed our vision into reality with elegance and professionalism.",
    name: "Olivia Bennett",
    role: "Property Owner",
  },
];

export default function Testimonial_slider_black_bg() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col w-[100%] h-full">
      
      {/* CARD */}
      <div className="rounded-2xl border border-white/15 p-10 w-full flex flex-col h-full justify-between bg-[#0E0E0E] transition-all duration-500">
        
        <p className="text-white/90 text-lg leading-relaxed min-h-[140px]">
          {reviews[active].text}
        </p>

        <div className="mt-10">
          <h4 className="text-white font-medium text-lg">
            {reviews[active].name}
          </h4>
          <p className="text-white/50 text-sm mb-3">
            {reviews[active].role}
          </p>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-white text-white" />
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              active === index
                ? "w-6 bg-white"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
