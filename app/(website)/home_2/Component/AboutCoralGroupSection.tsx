"use client";

import Image from "next/image";
import Link from "next/link";

const AboutCoralGroupSection = () => {
  return (
    <section className="w-full relative bg-[#1e1e1e] text-white px-4 py-10 md:py-40">


      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm tracking-[0.25em] uppercase text-[#94cb3d]">
            About Coral Group
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-serif font-medium leading-tight">
            Excellence in <br /> Every Venture
          </h2>

          <div className="mt-10 space-y-6 text-white/70 text-base leading-relaxed max-w-xl">
            <p>
              <b>Established in 1860, Coral Group</b> carries a legacy of <b>165 years</b> defined by resilience, innovation, and integrity. From humble beginnings, the group has grown into a diversified conglomerate committed to quality, ethical practices, and sustainable progress.
            </p>

            <ul>
              {/* <li>Founded in 1860 with a strong vision and enduring values</li> */}
              <li>Diversified industrial presence</li>
              <li>Innovation and quality driven</li>
              {/* <li>Committed to sustainability and community development</li> */}
              <li>Focused on long-term growth and societal impact</li>
            </ul>
          </div>


          {/* stats */}
          <div className="mt-14 grid grid-cols-3 gap-10 max-w-lg">
            <Stat value="165+" label="YEARS" />
            <Stat value="150+" label="PROJECTS" />
            <Stat value="50K+" label="FAMILIES" />
          </div>



          {/* Decorative Line */}
          {/* <div className="mt-12 w-20 h-[1px] bg-[#94cb3d]" /> */}
          <button className="mt-5 cursor-pointer text-[#94cb3d] border-b-2 border-[#94cb3d] "><Link href="about">Read More</Link></button>
          {/* <div className="mt-12 w-20 h-[1px] bg-[#94cb3d]" /> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* Gold Frame */}
          {/* <div className="absolute inset-0 border border-[#94cb3d]/60 translate-x-4 translate-y-4 z-0" /> */}

          {/* <div className="relative z-10 overflow-hidden">
            <Image
              src="/property/SK3.jpg" // replace with your image
              alt="Coral Group Building"
              width={600}
              height={800}
              className="object-cover "
              priority
            />
          </div> */}

          <iframe className=" z-20 w-full h-96" src="https://www.youtube.com/embed/gVp5j4uRfMc?si=_01YlM2l6qieqKUJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </div>

      </div>
    </section>
  );
};

export default AboutCoralGroupSection;



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
