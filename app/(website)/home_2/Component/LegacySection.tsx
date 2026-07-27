"use client";

import React from "react";

const stats = [
  { value: "165+", label: "Years of Excellence" },
  { value: "17+", label: "Projects Completed" },
  { value: "3", label: "Cities Served" },
  { value: "10K+", label: "Happy Families" },
];

const LegacySection = () => {
  return (
    <section className="relative w-full bg-[#1e1e1e] text-white py-54 overflow-hidden">

       {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />


      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#94cb3d20,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 animate-fadeUp">
          <p className="text-xs tracking-[0.3em] text-[#94cb3d] uppercase mb-4">
            Our Legacy in Numbers
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-light">
            A Legacy of{" "}
            <span className="text-[#94cb3d] italic">Achievement</span>
          </h2>

          <p className="mt-6 text-sm text-gray-400 max-w-xl mx-auto">
            Milestones that define our journey of excellence and trust
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center 
              h-52 w-52 mx-auto rounded-full border border-dashed border-[#94cb3d40]
              transition-all duration-500 hover:scale-105 hover:border-[#94cb3d]"
            >
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full 
                group-hover:shadow-[0_0_40px_#94cb3d30] transition-all duration-500" />

              <h3 className="text-4xl font-serif text-[#94cb3d] mb-2">
                {item.value}
              </h3>
              <p className="text-xs tracking-widest text-gray-400 uppercase text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUp delay-200">
          <p className="text-xl md:text-2xl font-serif italic text-gray-200 leading-relaxed">
            “Building not just structures, but communities. <br />
            Creating not just properties, but homes where memories are made.”
          </p>

          <div className="w-16 h-px bg-[#94cb3d] mx-auto mt-10" />
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
