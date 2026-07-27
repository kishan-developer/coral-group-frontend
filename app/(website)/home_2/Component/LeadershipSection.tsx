"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Leader {
  name: string;
  role: string;
  desc: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "Rajesh Sharma",
    role: "Chairman & Managing Director",
    desc: "Visionary leader with over 35 years of experience in real estate and infrastructure development. Pioneering sustainable growth and excellence.",
    image: "/Founders/leader-1.jpg",
  },
  {
    name: "Priya Malhotra",
    role: "Executive Director",
    desc: "Strategic expert in business development and corporate expansion. Leading Coral Group’s diversification into new markets and verticals.",
    image: "/leaders/leader-2.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Director – Operations",
    desc: "Operations excellence champion ensuring world-class execution and quality standards across all Coral Group projects and ventures.",
    image: "/leaders/leader-3.jpg",
  },
];

/* ================= ANIMATIONS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const LeadershipSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-4 py-32">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-20">
          <p className="text-sm tracking-[0.35em] uppercase text-[#94cb3d] mb-4">
            Leadership
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Board of Directors
          </h2>

          <p className="text-white/60 max-w-xl mx-auto">
            Visionary leaders driving Coral Group’s mission of excellence and innovation
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={container}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0f0f0f] border border-white/10 overflow-hidden transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-xl font-medium mb-1">
                  {leader.name}
                </h3>

                <p className="text-sm uppercase tracking-widest text-[#94cb3d] mb-6">
                  {leader.role}
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  {leader.desc}
                </p>

                <div className="mt-8 w-12 h-[1px] bg-[#94cb3d]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* QUOTE */}
        <motion.div
          variants={item}
          className="mt-24 text-center text-white/60 italic max-w-2xl mx-auto"
        >
          <div className="mx-auto mb-6 w-10 h-[1px] bg-[#94cb3d]" />
          “Our leadership team brings together decades of expertise and a shared
          vision of building a legacy that transcends generations.”
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
