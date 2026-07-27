"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/data/projects";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function OurProjects() {
  return (
    <section className="bg-[#1e1e1e] relative w-[100%] text-white py-20 md:py-32">

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
        className="max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <motion.div variants={card} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5 md:mb-20">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#94cb3d] mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium">
              Visionary Urban  <span className="text-[#94cb3d]">Projects</span>
            </h2>
          </div>


        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[380px] md:h-[360px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-4 mb-3">
                  <span className="border border-[#94cb3d]/50 text-xs px-3 py-1 text-[#94cb3d] capitalize">
                    {project.category}
                  </span>

                </div>

                <h3 className="text-xl font-medium mb-2">
                  {project.title}
                </h3>
                <h2 className="text-xs text-white/60 mb-2">
                  {project.type}
                </h2>

                {/* <p className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={14} className="text-[#94cb3d]" />
                  {project.location}
                </p> */}

                <Link href={`/company/projects/${project.slug}`}>
                  <button className="mt-4 px-6 py-2 border border-[#94cb3d] text-[#94cb3d] font-semibold  hover:bg-[#94cb3d] hover:text-black transition-colors">
                    View Details
                  </button>
                </Link>
              </div>

              {/* NUMBER */}
              <span className="absolute top-6 right-6 text-6xl font-serif text-white/5">
                {project.id}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
