"use client";

import { motion, Variants } from "framer-motion";
import { Ship, Building2, Plane, Truck, LucideIcon } from "lucide-react";

/* ================= TYPES ================= */
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/* ================= DATA ================= */
const services: ServiceItem[] = [
  {
    icon: Ship,
    title: "Maritime Transportation Services",
    desc: "As a result of the quality of our service, we have earned the trust of numerous clients.",
  },
  {
    icon: Building2,
    title: "Logistics Services",
    desc: "Due to the excellence of our service, we've gained the trust of many clients.",
  },
  {
    icon: Plane,
    title: "Air Cargo Services",
    desc: "Thanks to the caliber of our service, we've garnered the trust of a multitude of clients.",
  },
  {
    icon: Truck,
    title: "Domestic Freight Services",
    desc: "Thanks to our exceptional service, we've earned the confidence of numerous clients.",
  },
];

/* ================= ANIMATIONS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */
const WhatWeDoSection: React.FC = () => {
  return (
    <section className="w-full relative bg-[#1e1e1e] text-white px-4 py-24">

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
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#1e1e1e]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* LEFT CONTENT */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-[#94cb3d]" />
            <span className="text-sm uppercase tracking-widest text-[#94cb3d]">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Secure and <br />
            Dependable <br />
            Freight Solutions
          </h2>
        </motion.div>

        {/* RIGHT SERVICES GRID */}
        <motion.div
          className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-10 pr-20 border-l border-[#94cb3d]/50"
            >
              <service.icon
                size={28}
                className="absolute left-2 top-0 text-[#94cb3d]"
              />

              <h3 className="text-lg font-medium mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDoSection;
