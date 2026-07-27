"use client";

import Image from "next/image";

export default function AboutExcellenceSection() {
  return (
    <section className="relative bg-[#0b0b0b] w-[100vw] text-white overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-6 text-xs tracking-widest text-[#94cb3d]">
            ABOUT CORAL GROUP
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
            Excellence in <span className="text-[#94cb3d] italic">Every</span>
            <br /> Venture
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 text-sm leading-relaxed max-w-xl">
            <p>
              Coral Group stands as a beacon of trust and innovation in the Indian
              business landscape. With decades of experience and a commitment to
              excellence, we have built a legacy that spans multiple industries.
            </p>
            <p>
              From transforming skylines with architectural marvels to pioneering
              sustainable development, our diverse portfolio reflects our
              unwavering dedication to quality, innovation, and customer
              satisfaction.
            </p>
            <p>
              Every project we undertake is a testament to our core values:
              integrity, excellence, and creating lasting value for our
              stakeholders.
            </p>
          </div>

          {/* stats */}
          <div className="mt-14 grid grid-cols-3 gap-10 max-w-lg">
            <Stat value="35+" label="YEARS" />
            <Stat value="150+" label="PROJECTS" />
            <Stat value="50K+" label="FAMILIES" />
          </div>

          <div className="mt-10 h-px w-full max-w-lg bg-gradient-to-r from-[#94cb3d] to-transparent opacity-60" />
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* gold frames */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#94cb3d]/40" />
          <div className="absolute inset-0 -translate-x-4 -translate-y-4 border border-[#94cb3d]/40" />

          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
            <Image
              src="/property/SK1.jpg" // replace with your image
              alt="Coral Group Building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[#94cb3d] font-serif text-2xl font-semibold">
        {value}
      </div>
      <div className="mt-1 text-xs tracking-widest text-gray-400">
        {label}
      </div>
    </div>
  );
}
