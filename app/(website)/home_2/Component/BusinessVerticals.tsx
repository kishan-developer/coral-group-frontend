"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2,
  Landmark,
  Factory,
  Briefcase,
  Hotel,
  Ship,
  Download,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Vertical {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  hasBrochure?: boolean;
  brochureUrl?: string;
}

const verticals: Vertical[] = [
  {
    id: "01",
    title: "Coral Greens Buildtech Pvt. Ltd.",
    description:
      "For more than 15 years, CoralGreens Buildtech Pvt. Ltd. has been a pioneering force in transforming the landscape of Varanasi through innovative and meticulously crafted real estate solutions. ",
    icon: <Building2 size={26} />,
    featured: true,
  },
  {
    id: "02",
    title: "Coral Fashion Emporio Pvt. Ltd.e",
    description:
      "CoralFashion Emporio Pvt. Ltd. carries forward a rich legacy of over 165 years in the textile industry, rooted in the timeless heritage of Varanasi. ",
    icon: <Landmark size={26} />,
  },
  {
    id: "03",
    title: "Coral Exports",
    description:
      "Coral Exports is a trusted name in the international trade of premium sarees, fabrics, home furnishings, and decor items.",
    icon: <Ship size={26} />,
  },
  {
    id: "04",
    title: "Coral Hotels and Resorts",
    description:
      "Coral Hotels and Resorts stands at the intersection of luxury and tradition, dedicated to deliver a unique blend of remarkable hospitality and authentic local experiences. ",
    icon: <Hotel size={26} />,
  },
  {
    id: "05",
    title: "Coral Interio",
    description:
      "Coral Interio is a premier name in the world of interior design and furnishing, renowned for its exquisite craftsmanship and innovative designs. ",
    icon: <Building2 size={26} />,
    hasBrochure: true,
    // brochureUrl: "CORAL_INTERIO_BROCHURE.pdf",
  },
  {
    id: "06",
    title: "Coral Foundation",
    description:
      "Coral Foundation is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, and sustainable development initiatives.",
    icon: <Building2 size={26} />,
    hasBrochure: true,
    // brochureUrl: "Coral_Foundation_Brochure.pdf",
  },

];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


export default function BusinessVerticals(){
  // Use base URL without /api/v1 for static file serving
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '') || "http://localhost:2000";

  const handleDownloadBrochure = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = `${BASE_URL}/brochure/${url}`;
    link.download = `${title.replace(/\s+/g, "_")}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-10 md:py-20 lg:py-20  w-[100%] text-white  overflow-hidden">

     


      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <motion.div variants={card} className="text-center mb-24">
          <p className="text-xs tracking-[0.35em] uppercase text-[#94cb3d] mb-4">
            Our Business Verticals
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Diversified <span className="text-[#94cb3d]">Excellence</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            A multi-faceted conglomerate with expertise across industries
          </p>

          <div className="mt-10 mx-auto w-12 h-[1px] bg-[#94cb3d]" />
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {verticals.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              whileHover={{ y: -12 }}
              className="group relative bg-[#0f0f0f] border border-white/10 p-8 transition-all duration-500 hover:border-[#94cb3d]/40"
            >
              {/* FEATURED BADGE */}
              {item.featured && (
                <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-[#94cb3d] text-black px-3 py-1">
                  Featured
                </span>
              )}

              {/* ICON */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 border border-[#94cb3d]/40 text-[#94cb3d]">
                {item.icon}
              </div>

              {/* NUMBER */}
              <span className="absolute top-6 right-6 text-6xl font-serif text-white/5">
                {item.id}
              </span>

              {/* CONTENT */}
              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 flex gap-3">
                <button className="cursor-pointer text-[#94cb3d] border-b-2 border-[#94cb3d]">
                  <Link href="/verticals">Read More</Link>
                </button>
                {item.hasBrochure && item.brochureUrl && (
                  <button
                    onClick={() => handleDownloadBrochure(item.brochureUrl!, item.title)}
                    className="cursor-pointer text-[#94cb3d] border-b-2 border-[#94cb3d] flex items-center gap-2"
                  >
                    <Download size={14} /> Brochure
                  </button>
                )}
              </div>

              {/* LINE */}
              {/* <div className="mt-8 w-10 h-[1px] bg-[#94cb3d]" /> */}

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 border border-[#94cb3d]/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
